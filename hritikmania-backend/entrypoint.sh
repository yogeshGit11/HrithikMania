#!/bin/bash
set -e

python manage.py migrate
python manage.py import_movies
exec gunicorn hritikmania-backend.wsgi:application --bind 0.0.0.0:8000
