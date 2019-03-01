from django.db import models

# Create your models here.
class User(models.Model):
    firstName = models.CharField(max_length=100, default='')
    lastName = models.CharField(max_length=100, default='')
    address = models.CharField(max_length=100, default='')
    city = models.CharField(max_length=100, default='')
    state = models.CharField(max_length=100, default='')
    zip = models.CharField(max_length=100, default=48808)
    photo_url = models.TextField(max_length=100, default='')
    spots = models.CharField(max_length=100)

    def _str_(self):
        return self.firstName

class SpotList(models.Model):
    spots = models.ForeignKey(User, on_delete=models.CASCADE, related_name='spot')
    available = models.BooleanField(default=False)
    number_of_spots = models.CharField(max_length=100, default='')

    def _str_(self):
        return self.spots