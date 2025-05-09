from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import status
from .models import GeneratedImage
from .serializers import GeneratedImageSerializer, UserSerializer, CustomTokenObtainPairSerializer
from django.contrib.auth.models import User
from rest_framework_simplejwt.views import TokenObtainPairView

import requests
import base64
from io import BytesIO
from django.core.files.base import ContentFile
import uuid
import os

# Ensure you have your xAI API key set in your environment variables
XAI_API_KEY = os.getenv("XAI_API_KEY")
XAI_API_URL = "https://api.x.ai/v1/image/generate"  # Replace with the actual endpoint

class GenerateImageAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        prompt = request.data.get("prompt")
        if not prompt:
            return Response({"error": "Prompt is required."}, status=status.HTTP_400_BAD_REQUEST)

        headers = {
            "Authorization": f"Bearer {XAI_API_KEY}",
            "Content-Type": "application/json"
        }
        payload = {
            "prompt": prompt
        }

        try:
            response = requests.post(XAI_API_URL, headers=headers, json=payload)
            if response.status_code != 200:
                return Response({"error": f"xAI API error: {response.text}"}, status=response.status_code)

            result = response.json()
            image_data = result.get("image_base64")  # Assuming the API returns base64-encoded image

            if not image_data:
                return Response({"error": "No image data received from xAI."}, status=500)

            # Decode the base64 image
            image_bytes = base64.b64decode(image_data)
            img_content = ContentFile(image_bytes, f"{uuid.uuid4()}.png")

            generated = GeneratedImage.objects.create(
                user=request.user,
                prompt=prompt,
                image_file=img_content
            )

            image_url = generated.image_file.url  # Ensure MEDIA_URL is properly configured

            return Response({"image_url": image_url})

        except Exception as e:
            return Response({"error": str(e)}, status=500)

class HistoryAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        history = GeneratedImage.objects.filter(user=request.user).order_by('-created_at')
        serializer = GeneratedImageSerializer(history, many=True)
        return Response(serializer.data)

class RegisterAPIView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        email = request.data.get('email')

        if not username or not password:
            return Response({'error': 'Username and password required'}, status=400)

        if User.objects.filter(username=username).exists():
            return Response({'error': 'Username already exists'}, status=400)

        user = User.objects.create_user(username=username, password=password, email=email)
        return Response({'message': 'User created successfully'})

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer
