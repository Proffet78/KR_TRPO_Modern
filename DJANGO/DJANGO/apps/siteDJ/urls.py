from django.urls import path

from siteDJ import views

urlpatterns = [
   path('', views.index, name = 'index'),
   path('yourCab/', views.index2, name = 'index2'),
   path('registration/', views.registr, name = 'registr'),
   path('EvenReg/', views.index3, name= 'index3'),
   path('people/', views.index4, name= 'index4')
   
]