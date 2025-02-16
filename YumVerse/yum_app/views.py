from django.shortcuts import render, HttpResponse

# Create your views here.


def home(request):
    return render(request, "index.html")  # home reactapp
    # return render(request,'index.html') #home reactapp
