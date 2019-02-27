from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def parkSpotIndex(req):
    return HttpResponse("new park spot app!")

def user(request):
    return render(request, 'parkSpotList.html')