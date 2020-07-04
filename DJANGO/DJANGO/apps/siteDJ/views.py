from django.shortcuts import render

def index(request):
   return render(request, 'siteDJ/main.html')