from django.urls import path
from . import views


urlpatterns = [
    path('', views.parkSpotIndex, name='parkSpot_app_index'),
     path('/users', views.user, name='user_list'),
]