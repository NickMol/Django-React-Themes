from django.db import models

# Create your models here.

class Themes(models.Model): 
    name = models.CharField(max_length=200)
    mode = models.CharField(max_length=200)
    primary_color = models.CharField(max_length=200)
    secondary_color = models.CharField(max_length=200)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
    
class ActiveTheme(models.Model):
    theme = models.ForeignKey(Themes, on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
