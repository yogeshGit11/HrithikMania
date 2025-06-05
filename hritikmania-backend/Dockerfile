FROM python:3.10-slim

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /app

COPY requirements.txt /app/
RUN pip install --upgrade pip && pip install -r requirements.txt

COPY . /app/

# RUN python manage.py collectstatic --noinput

#for local test
#CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"] 

CMD ["gunicorn", "hritikmania-backend.wsgi:application", "--bind", "0.0.0.0:8000"]
