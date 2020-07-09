from django.urls import path

from siteDJ import views

urlpatterns = [
   path('', views.index, name = 'index'),
   path('yourCab/', views.index2, name = 'index2'),
   path('registration/', views.registr, name = 'registr')
]