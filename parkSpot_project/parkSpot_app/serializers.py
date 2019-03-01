from rest_framework import serializers 
from .models import User
from .models import SpotList 

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class SpotListSerializer(serializers.ModelSerializer):
    spot = UserSerializer(many=True, read_only=True)
    class Meta:
        model = SpotList
        fields = '__all__'