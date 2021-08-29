from django.contrib import admin
from django.urls import path

from product import views

urlpatterns = [
    path('products/', views.get_products, name='Products')
]
