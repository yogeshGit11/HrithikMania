import csv
import os
from django.core.management.base import BaseCommand
from movies.models import Movie
from django.conf import settings

class Command(BaseCommand):
    help = 'Import movies from a CSV file (with legacy headers) into the Movie model'

    def handle(self, *args, **kwargs):
        file_path = os.path.join(settings.BASE_DIR, 'movies', 'movie_data.csv')

        with open(file_path, newline='', encoding='utf-8') as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                Movie.objects.create(
                    name=row['movie_name'],
                    poster=row['movie_poster'],
                    director=row['movie_director'],
                    story=row['movie_story'],
                    starring=row['movie_starring'],
                    release_date=row['movie_date'],
                    box_office_collection=row['movie_collection'],
                    source_file=row['movie_source']
                )
        self.stdout.write(self.style.SUCCESS('Movies imported successfully!'))