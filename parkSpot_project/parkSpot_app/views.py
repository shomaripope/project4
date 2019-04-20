from django.shortcuts import render
from django.http import HttpResponse
from .models import User, SpotList
from rest_framework import viewsets
from .serializers import UserSerializer, SpotListSerializer

# Create your views here.
# def UserView(request):
#    return render(request, 'parkSpot_app/parkSpot_app.html')

class UserView(viewsets.ModelViewSet):
   queryset = User.objects.all()
   serializer_class = UserSerializer