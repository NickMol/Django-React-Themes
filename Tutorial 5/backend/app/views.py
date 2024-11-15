from django.shortcuts import render
from rest_framework import viewsets, permissions
from .serializers import * 
from rest_framework.response import Response
from .models import * 

class ThemesViewset(viewsets.ViewSet): 
    permission_classes = [permissions.AllowAny]
    queryset = Themes.objects.all()
    serializer_class = ThemesSerializer

    def list(self,request): 
        queryset = Themes.objects.all()
        serializer = self.serializer_class(queryset,many=True)
        return Response(serializer.data)
    
    def retrieve(self, request, pk):
        theme= Themes.objects.get(pk=pk)
        serializer = self.serializer_class(theme)
        return Response(serializer.data)
    
    def create(self,request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)
    
    def update(self,request,pk=None):
        theme = Themes.objects.get(pk=pk)
        serializer = self.serializer_class(theme, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)


class ActiveThemeViewset(viewsets.ViewSet): 
    permission_classes = [permissions.AllowAny]
    queryset = ActiveTheme.objects.all()
    serializer_class = ActiveThemeSerializer

    def list(self,request): 
        queryset = ActiveTheme.objects.all()
        serializer = self.serializer_class(queryset,many=True)
        return Response(serializer.data)
    
    def create(self,request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)
        
    def update(self,request,pk=None):
        activetheme = ActiveTheme.objects.get(pk=pk)
        serializer = self.serializer_class(activetheme, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)