from django.urls import path, include
from . import views
from rest_framework import routers

urlpatterns = [
    path('', views.UserView, name='user_index'),
]