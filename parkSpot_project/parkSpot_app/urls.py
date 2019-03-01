from django.urls import path, include
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register('users', views.UserView)
router.register('spots', views.SpotView)

urlpatterns = [
    path('', include(router.urls))
]