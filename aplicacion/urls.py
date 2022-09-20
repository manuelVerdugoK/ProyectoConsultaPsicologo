from urllib.parse import urlparse
from django.urls import path
from . import views

urlpatterns = [
    path('',views.index,name='index'),
    path('nosotros',views.nosotros,name='nosotros'),
    path('articulos',views.articulos,name='articulos'),
    path('agendar',views.agendar,name='agendar')
]