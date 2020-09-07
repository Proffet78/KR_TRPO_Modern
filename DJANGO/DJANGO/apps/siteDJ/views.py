from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.views.decorators.csrf import csrf_exempt
from .models import UserOne
from django.contrib.auth.forms import UserCreationForm
from django.urls import reverse_lazy
from django.views import generic

def index(request):
   return render(request, 'siteDJ/main.html')

def index2(request):
   return render(request, 'siteDJ/lk.html')

def registr(request):
   return render(request, 'siteDJ/registration.html')

def index3(request):
   return render(request, 'siteDJ/EvenReg.html')

@csrf_exempt
def create(request):
    if request.method == "POST":
        tom = UserOne()
        tom.email = request.POST.get("email")
        tom.password = request.POST.get("password-input")
        tom.save()
    return HttpResponse("ok")

def index4(request):
    people = UserOne.objects.all()
    return render(request, "siteDJ/users.html", {"people": people})

class SignUpView(generic.CreateView):
    form_class = UserCreationForm
    success_url = reverse_lazy('login')
    template_name = 'siteDJ/signup.html'
