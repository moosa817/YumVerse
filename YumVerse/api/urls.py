from django.urls import path, include
from .views import register_login, home
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


urlpatterns = [
    # login views
    path("register/", register_login.Register.as_view()),
    path(
        "token/",
        register_login.CustomTokenObtainPairView.as_view(),
        name="token_obtain_pair",
    ),
    path("refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("google_login/", register_login.GoogleUser.as_view()),
    path("update_user/", register_login.UpdateUser.as_view()),
    path("password_change/", register_login.PasswordChange.as_view()),
    # other views
    path("verify-token/", home.VerifyToken.as_view()),
    path("upload_pfp/", home.Pfp.as_view()),
    path("get_profile/<str:username>", home.GetProfile.as_view()),
    path("reset-password/", register_login.ResetForm.as_view()),
    ## app viewss
    path("recipes/", home.RecipeListCreateView.as_view(), name="recipe-list-create"),
    path("recipes/<int:pk>/", home.RecipeDetailView.as_view(), name="recipe-detail"),
]
