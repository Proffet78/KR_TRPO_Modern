from django.db import models


class UserOne (models.Model):
  email = models.CharField(max_length=30)
  password = models.CharField(max_length=20)
