from django.http import HttpResponse
from rest_framework_simplejwt.tokens import AccessToken, RefreshToken
from yum_app.models import User, Recipe, UserHealthProfile
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.db.models import Q, Sum  # Import Q object
from django.conf import settings
from api.serializers import (
    PfpSerializer,
    RecipeSerializer,
    UserHealthProfileSerializer,
    UserHealthProfileCreateSerializer,
)
from rest_framework.parsers import MultiPartParser, JSONParser
from rest_framework import generics
from decimal import Decimal
from django.db.models import Count
from rest_framework.pagination import PageNumberPagination
import time
from rest_framework.generics import (
    RetrieveUpdateDestroyAPIView,
    ListCreateAPIView,
)


class VerifyToken(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        if request.user.pfp:
            pfp = request.user.pfp.url
        else:
            pfp = None
        # will use https://api.dicebear.com/9.x/pixel-art/svg?seed=NAME&hair=short01&size=300&width=100&height=100

        return Response(
            {
                "valid": True,
                "id": request.user.id,
                "username": request.user.username,
                "name": request.user.name,
                "email": request.user.email,
                "pfp": pfp,
                "isGoogle": request.user.google,
            }
        )


class Pfp(generics.UpdateAPIView):
    queryset = User.objects.all()
    serializer_class = PfpSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user


class GetProfile(APIView):
    def get(self, request, username):
        user = User.objects.filter(username=username)
        if not user.exists():
            return Response({"error": "User not found."}, status=404)
        user = user.first()
        if user.pfp:
            pfp = user.pfp.url
        else:
            pfp = None
        return Response(
            {
                "username": user.username,
                "name": user.name,
                "email": user.email,
                "pfp": pfp,
                "isGoogle": user.google,
            }
        )


class RecipeListCreateView(ListCreateAPIView):
    serializer_class = RecipeSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Recipe.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class RecipeDetailView(RetrieveUpdateDestroyAPIView):
    serializer_class = RecipeSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Recipe.objects.filter(user=self.request.user)


# List and Create API
class UserHealthProfileListCreateView(generics.ListCreateAPIView):

    def get_queryset(self):
        """Return all user health profile fields for GET requests."""
        return UserHealthProfile.objects.filter(user=self.request.user)

    def get_serializer_class(self):
        """Use a restricted serializer for POST, full serializer for GET."""
        if self.request.method == "POST":
            return UserHealthProfileCreateSerializer
        return UserHealthProfileSerializer

    def perform_create(self, serializer):
        """Auto-link the user and let the model compute extra fields."""
        serializer.save(user=self.request.user)
