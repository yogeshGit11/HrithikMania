from .serializers import MovieSerializer
from movies.models import Movie
from rest_framework import viewsets
from rest_framework import filters


class MovieViewSet(viewsets.ReadOnlyModelViewSet):
    queryset=Movie.objects.all()
    serializer_class=MovieSerializer

    filter_backends = [filters.SearchFilter]
    search_fields = ['name']
