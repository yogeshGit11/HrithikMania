from movies.models import Movie
from rest_framework import serializers

class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = [
            'id',
            'name',
            'poster',
            'director',
            'story',
            'starring',
            'release_date',
            'box_office_collection',
            'source_file'
        ]
