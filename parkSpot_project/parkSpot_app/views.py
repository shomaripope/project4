from django.shortcuts import render
from django.http import HttpResponse
from .models import User, SpotList
from rest_framework import viewsets
from .serializers import UserSerializer, SpotListSerializer

# Create your views here.
class UserView(viewsets.ModelViewSet):
   queryset = User.objects.all()
   serializer_class = UserSerializer


class SpotView(viewsets.ModelViewSet):
   queryset = SpotList.objects.all()
   serializer_class = SpotListSerializer