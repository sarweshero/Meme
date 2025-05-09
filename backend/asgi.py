"""
ASGI config for backend project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.2/howto/deployment/asgi/
"""

import os

from asgiref.wsgi import WsgiToAsgi
from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')

# Wrap the WSGI application for ASGI compatibility
wsgi_application = get_wsgi_application()
application = WsgiToAsgi(wsgi_application)
