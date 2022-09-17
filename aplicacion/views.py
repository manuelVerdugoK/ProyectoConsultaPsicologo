from django.shortcuts import render
# Create your views here.
def index(request):
    return render(request,'paginas/index.html')
def nosotros(request):
    return render(request,'paginas/nosotros.html')
def articulos(request):
    return render(request,'paginas/articulos.html')
