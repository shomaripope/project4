from django.db import models

# Create your models here.
class User(models.Model):
    firstName = models.CharField(max_length=100)
    lastName = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    zip = models.CharField(max_length=100)
    photo_url = models.TextField(max_length=100)
    spot = models.CharField(max_length=100)

    def _str_(self):
        return self.firstName

class Spots(models.Model):
    spot = models.ForeignKey(User, on_delete=models.CASCADE, related_name='spots')
    available = models.BooleanField(default=False)

    def _str_(self):
        return self.spot