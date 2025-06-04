from django.db import models

class Movie(models.Model):
    name = models.CharField(max_length=200)
    poster = models.ImageField(upload_to='movie_posters/')
    director = models.CharField(max_length=100)
    story = models.TextField()
    starring = models.TextField()
    release_date = models.DateField()
    box_office_collection = models.CharField(max_length=50)
    source_file = models.FileField(upload_to='movie_sources/', null=True, blank=True)

    def __str__(self):
        return self.name
