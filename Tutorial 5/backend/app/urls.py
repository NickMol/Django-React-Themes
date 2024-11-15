from django.contrib import admin
from django.urls import path
from .views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('themes', ThemesViewset, basename='themes')
router.register('activetheme', ActiveThemeViewset, basename='activetheme')
urlpatterns = router.urls