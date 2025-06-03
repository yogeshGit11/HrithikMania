from django.contrib import admin
from .models import Movie

@admin.register(Movie)
class MovieAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'director', 'release_date', 'box_office_collection']
    search_fields = ['name', 'director', 'starring']
    list_filter = ['release_date']
