from django.urls import path

from siteDJ import views

urlpatterns = [
   path('', views.index, name = 'index')
]