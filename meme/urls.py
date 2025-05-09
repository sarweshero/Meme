from django.urls import path
from .views import GenerateImageAPIView, HistoryAPIView, RegisterAPIView, CustomTokenObtainPairView
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('generate-image/', GenerateImageAPIView.as_view()),
    path('history/', HistoryAPIView.as_view()),
    path('register/', RegisterAPIView.as_view()),
    path('token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]