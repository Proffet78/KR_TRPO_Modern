from django.shortcuts import render

def index(request):
   return render(request, 'siteDJ/main.html')

def index2(request):
   return render(request, 'siteDJ/lk.html')

def registr(request):
   return render(request, 'siteDJ/registration.html')