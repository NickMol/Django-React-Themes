from rest_framework import serializers
from .models import * 

class ThemesSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Themes
        fields = ('id','name','mode','primary_color','secondary_color')

class ActiveThemeSerializer(serializers.ModelSerializer):
    themedetails = ThemesSerializer(source='theme',read_only=True)

    class Meta: 
        model=ActiveTheme
        fields = ('id','theme','themedetails')