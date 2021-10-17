from django.shortcuts import render, redirect, get_object_or_404
from .forms import CreateUserForm, LeadForm, ProductForm, ContactForm, TaskForm, ContractForm, SalesForm, DeliveryboyForm, LogsForm, ProfileForm, DocumentsForm
from .models import Lead, Product, Contact, Task, Contract, Sales, Deliveryboy, Logs, Profile, Documents
from django.contrib import messages
from django.contrib.auth import authenticate, logout, login

from django.contrib.auth.decorators import login_required

import datetime
import time

date = datetime.date.today()

from django.contrib.auth.models import User




# Create your views here.


def dashboard(request):
    return render(request, "dashboard.html", {})
    
def register(request):
    if request.user.is_authenticated:
        return redirect('home')
    else:
        form = CreateUserForm()
        if request.method == 'POST':
            form = CreateUserForm(request.POST)
            if form.is_valid():
                form.save()
                messages.success(request, 'Account created for'+form.cleaned_data.get('username'))
                return redirect('login')

        return render(request, "register.html", {'form' : form})

def loginuser(request):
    if request.user.is_authenticated:
        return redirect('home')
    else:
        if request.method == 'POST':
            username = request.POST.get('username')
            password = request.POST.get('password')
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)

                user = User.objects.get(id=request.user.id)
                profile = Profile.objects.get(userid=request.user.id)
                obj2 = Logs(userid=user, description="Login at  "+str(time.ctime()), profile_id=profile)
                obj2.save()
                
                return redirect('home')
            else:
                messages.info(request, 'Username or password is incorrect')
        return render(request, "login.html", {})

def logoutuser(request):
    user = User.objects.get(id=request.user.id)
    profile = Profile.objects.get(userid=request.user.id)
    obj2 = Logs(userid=user, description="Logout at  "+str(time.ctime()), profile_id=profile)
    obj2.save()
    logout(request)
    
    return redirect('login')

@login_required(login_url='login')
def home(request):
    context = {}
    context["countlead"] = Lead.objects.count()
    context["countcontact"] = Contact.objects.count()
    context["countproducts"] = Product.objects.count()
    context["countcontracts"] = Contract.objects.count()
    context["countsales"] = Sales.objects.count()
    context["countdeliveryboy"] = Deliveryboy.objects.count()

    context["contractdata"] = Contract.objects.all().order_by('-id')[:6]
    ttl = Task.objects.filter(addedby=request.user.id).count()
    context["totaltask"] = ttl
    context["activecount"] = int(Task.objects.filter(status="Active", addedby=request.user.id).count()/ttl*100)
    context["pendingcount"] = int(Task.objects.filter(status="Pending", addedby=request.user.id).count()/ttl*100)
    context["completecount"] = int(Task.objects.filter(status="Completed", addedby=request.user.id).count()/ttl*100)
    context["inactivecount"] = int(Task.objects.filter(status="Inactive", addedby=request.user.id).count()/ttl*100)


    context["logsdata"] = Logs.objects.all().order_by('-id')[:10]

    return render(request, "User/index.html", context)


@login_required(login_url='login')
def logs(request):
    context = {}
    context["logsdata"] = Logs.objects.all().order_by('-id')
    
    return render(request, "User/logs/logs.html", context)


@login_required(login_url='login')
def documents(request):
    context = {}
    context["data"] = Documents.objects.all()
    if request.method == 'POST':
        form = DocumentsForm(request.POST, request.FILES)
        files = request.FILES.getlist('files')
        if form.is_valid():
            form.save()
            print(form)
            profileid = Profile.objects.get(userid_id=request.user.id)
            user = User.objects.get(id=request.user.id)
            obj2 = Logs(userid=user, description="Added a new Document with id "+str(Documents.objects.latest('id').id), profile_id_id=profileid.id)
            obj2.save()
            return redirect('documents')
        else:
            print(form.errors)
    
    return render(request, "User/documents/document.html", context)

@login_required(login_url='login')
def knowledge(request):
    context = {}

    
    return render(request, "User/documents/knowledge.html", context)


@login_required(login_url='login')
def userprofiles(request):
    context = {}
    context["data"] = Profile.objects.all()
    
    return render(request, "User/settings/userprofiles.html", context)

@login_required(login_url='login')
def edituserprofile(request, id):
    context ={}

    obj = get_object_or_404(Profile, id = id)
    form = ProfileForm(request.POST or None, request.FILES or None, instance = obj)
    if form.is_valid():
        form.save()
        profileid = Profile.objects.get(userid_id=request.user.id)
        user = User.objects.get(id=request.user.id)
        obj2 = Logs(userid=user, description="Updated a Profile", profile_id_id=profileid.id)
        obj2.save()
        return redirect('userprofiles')
    else:
        print(form.errors)

    context["data"] = form


    return render(request, "User/settings/edituserprofile.html", context)





@login_required(login_url='login')
def profile(request):
    context = {}
 
    dataqr = get_object_or_404(Profile, userid = request.user.id)
    context["data"] = dataqr
        
    context["profileqr"] = "\nFull Name : "+str(dataqr.first_name )+str(dataqr.last_name)+"\nEmail : "+str(dataqr.user_email)+"\nPhone : "+str(dataqr.user_phone)+"\nGender : "+str(dataqr.gender)+"\nDOB : "+str(dataqr.dob)+"\nAbout : "+str(dataqr.about)+"\nDesignation : "+str(dataqr.designation)+"\nWorking Hours : "+str(dataqr.working_from)+"-"+str(dataqr.working_to)+"\nAddress : "+str(dataqr.address)+"\nFacebook : "+str(dataqr.facebook)+"\nInstagram : "+str(dataqr.instagram)+"\nLinked In : "+str(dataqr.linkedin)+"\nGithub : "+str(dataqr.github)
    return render(request, "User/profile/profile.html", context)

@login_required(login_url='login')
def editprofile(request):
    context ={}

    obj = get_object_or_404(Profile, userid = request.user.id)
    form = ProfileForm(request.POST or None, request.FILES or None, instance = obj)
    if form.is_valid():
        form.save()
        profileid = Profile.objects.get(userid_id=request.user.id)
        user = User.objects.get(id=request.user.id)
        obj2 = Logs(userid=user, description="Updated their Profile", profile_id_id=profileid.id)
        obj2.save()
        return redirect('profile')
    else:
        print(form.errors)

    context["data"] = form

    return render(request, "User/profile/editprofile.html", context)


@login_required(login_url='login')
def deleteuser(request, id):
    obj = get_object_or_404(User, id = id)
    if request.method =="GET":
        obj.delete()
        profileid = Profile.objects.get(userid_id=request.user.id)
        user = User.objects.get(id=request.user.id)
        obj2 = Logs(userid=user, description="Deleted a User with id "+str(id), profile_id_id=profileid.id)
        obj2.save()
    return redirect('userprofiles')





#-------------------------------------------------  over -----------------------------------
                            ############## sales #######
                            ############## sales #######
                            ############## sales #######        
                            ############## sales #######
                            ############## sales #######
# --------------------------       Lead operations view, add, delete , edit  ----------------------------




@login_required(login_url='login')
def sales(request):
    context = {}
    context["data"] = Sales.objects.all()
    return render(request, "User/sales/sales.html", context)



@login_required(login_url='login')
def editsale(request, id):
    context ={}
    context["customersdata"] = Contact.objects.all()
    context["productdata"] = Product.objects.all()
    context["deliveryboydata"] = Deliveryboy.objects.all()
  
    obj = get_object_or_404(Sales, id = id)
    form = SalesForm(request.POST or None, instance = obj)
    if form.is_valid():
        form.save()
        profileid = Profile.objects.get(userid_id=request.user.id)
        user = User.objects.get(id=request.user.id)
        obj2 = Logs(userid=user, description="Updated a Sale with id "+str(id), profile_id_id=profileid.id)
        obj2.save()
        return redirect('sales')

    context["data"] = form
    return render(request, "User/sales/editsale.html", context)


@login_required(login_url='login')
def addsale(request):
    context = {}
    context["customersdata"] = Contact.objects.all()
    context["productdata"] = Product.objects.all()
    context["deliveryboydata"] = Deliveryboy.objects.all()

    form = SalesForm(request.POST or None)
    if form.is_valid():
        form.save()
        profileid = Profile.objects.get(userid_id=request.user.id)
        user = User.objects.get(id=request.user.id)
        obj2 = Logs(userid=user, description="Added a Sale with id "+str(Sales.objects.latest('id').id), profile_id_id=profileid.id)
        obj2.save()
        return redirect("sales")
    else:
        print(form.errors)

    return render(request, "User/sales/addsale.html", context)

@login_required(login_url='login')
def deletesale(request, id):
    obj = get_object_or_404(Sales, id = id)
    if request.method =="GET":
        obj.delete()
        profileid = Profile.objects.get(userid_id=request.user.id)
        user = User.objects.get(id=request.user.id)
        obj2 = Logs(userid=user, description="Deleted a Sale with id "+str(id), profile_id_id=profileid.id)
        obj2.save()
    return redirect('sales')



#-------------------------------------------------  over -----------------------------------
                            #         ######       #        ###### #
                            #         #           # #       #       #
                            #         ######     #   #      #        #
                            #         #         #######     #       #
                            #######   ######   #       #    #######
# --------------------------       Lead operations view, add, delete , edit  ----------------------------


@login_required(login_url='login')
def lead(request):
    context = {}
    context["data"] = Lead.objects.all()

    return render(request, "User/lead/lead.html", context)

@login_required(login_url='login')
def editlead(request, id):
    context ={}
  
    obj = get_object_or_404(Lead, id = id)
    form = LeadForm(request.POST or None, instance = obj)
    if form.is_valid():
        form.save()
        profileid = Profile.objects.get(userid_id=request.user.id)
        user = User.objects.get(id=request.user.id)
        obj2 = Logs(userid=user, description="Updated a Lead with id "+str(Lead.objects.latest('id').id), profile_id_id=profileid.id)
        obj2.save()
        return redirect('lead')

    context["data"] = form
    arr = ["Open", "Contacted", "Qualified", "Unqualified"]
    context["opt"] = arr
    return render(request, "User/lead/editlead.html", context)


@login_required(login_url='login')
def addlead(request):
    context = {}
    form = LeadForm(request.POST or None)
    if form.is_valid():
        form.save()
        profileid = Profile.objects.get(userid_id=request.user.id)
        user = User.objects.get(id=request.user.id)
        obj2 = Logs(userid=user, description="Added a Lead with id"+str(Lead.objects.latest('id').id), profile_id_id=profileid.id)
        obj2.save()
        return redirect("lead")

    return render(request, "User/lead/addlead.html", context)

@login_required(login_url='login')
def deletelead(request, id):
    obj = get_object_or_404(Lead, id = id)
    if request.method =="GET":
        obj.delete()
        profileid = Profile.objects.get(userid_id=request.user.id)
        user = User.objects.get(id=request.user.id)
        obj2 = Logs(userid=user, description="Deleted a Lead with id "+str(id), profile_id_id=profileid.id)
        obj2.save()
    return redirect('lead')

    
#------------------------------------------------- Lead over -----------------------------------


                                                ####
                                                ####
                                                ####

# --------------------------       products operations view, add, delete , edit  ----------------------------


@login_required(login_url='login')
def products(request):
    context = {}
    context["data"] = Product.objects.all()
    return render(request, "User/product/products.html", context)


@login_required(login_url='login')
def addproduct(request):
    context = {}
    if request.method == 'POST':
        form = ProductForm(request.POST, request.FILES)
  
        if form.is_valid():
            form.save()
            profileid = Profile.objects.get(userid_id=request.user.id)
            user = User.objects.get(id=request.user.id)
            obj2 = Logs(userid=user, description="Added a Product with id "+str(Product.objects.latest('id').id), profile_id_id=profileid.id)
            obj2.save()
            return redirect('products')
        else:
            print(form.errors)


    return render(request, "User/product/addproduct.html", {})

@login_required(login_url='login')
def deleteproduct(request, id):
    obj = get_object_or_404(Product, id = id)
    profileid = Profile.objects.get(userid_id=request.user.id)

    if request.method =="GET":

        obj.delete()
      
        user = User.objects.get(id=request.user.id)
        obj2 = Logs(userid=user, description="Deleted a Product with id "+str(id), profile_id_id=profileid.id)
        obj2.save()
        
    return redirect('products')


@login_required(login_url='login')
def editproduct(request, id):
    context ={}
    obj = get_object_or_404(Product, id = id)
    form = ProductForm(request.POST or None , request.FILES or None, instance=obj)
    if form.is_valid():
        form.save()
        profileid = Profile.objects.get(userid_id=request.user.id)
        user = User.objects.get(id=request.user.id)
        obj2 = Logs(userid=user, description="Updated a Product with id "+str(id), profile_id_id=profileid.id)
        obj2.save()
        return redirect('products')


    context["data"] = form
    arr = ["Food", "Software", "Hardware", "Transport", "Clothes", "Others"]
    context["opt"] = arr
    return render(request, "User/product/editproduct.html", context)


#------------------------------------------------- product over ---------------------------------------------------------------------

                                 #######       # #        #         #    #########        #         #######   #########  
                                #            #     #      #  #      #        #           # #       #              #      
                               #            #       #     #    #    #        #          #   #     #               #      
                                #            #     #      #      #  #        #         #######     #              #      
                                 #######       # #        #         #        #        #       #     #######       #      

# --------------------------       Contact operations view, add, delete , edit  ----------------------------------------------

@login_required(login_url='login')
def contact(request):
    context = {}
    context["data"] = Contact.objects.all()
    return render(request, "User/contact/contact.html", context)


@login_required(login_url='login')
def addcontact(request):
    context = {}
    
    if request.method == 'POST':
        form = ContactForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            profileid = Profile.objects.get(userid_id=request.user.id)
            user = User.objects.get(id=request.user.id)
            obj2 = Logs(userid=user, description="Added a Contact with contact id "+str(Contact.objects.latest('id').id), profile_id_id=profileid.id)
            obj2.save()

            return redirect('contact')
    return render(request, "User/contact/addcontact.html",context)

@login_required(login_url='login')
def deletecontact(request, id):
    obj = get_object_or_404(Contact, id = id)
    if request.method =="GET":
        obj.delete()

        profileid = Profile.objects.get(userid_id=request.user.id)
        user = User.objects.get(id=request.user.id)
        obj2 = Logs(userid=user, description="Deleted a Contact with contact id "+str(id), profile_id_id=profileid.id)
        obj2.save()
        
    return redirect('contact')


@login_required(login_url='login')
def editcontact(request, id):
    context ={}
    obj = get_object_or_404(Contact, id = id)
    form = ContactForm(request.POST or None , request.FILES or None, instance=obj)
    if form.is_valid():
        form.save()
        profileid = Profile.objects.get(userid_id=request.user.id)
        user = User.objects.get(id=request.user.id)
        obj2 = Logs(userid=user, description="Updated a Contact with contact id "+str(id), profile_id_id=profileid.id)
        obj2.save()
        return redirect('contact')

    context["data"] = form
    return render(request, "User/contact/editcontact.html", context)



@login_required(login_url='login')
def contactqrcode(request, id):
    context = {}
    dataqr = get_object_or_404(Contact, id = id)

    context["data"] = "Person Name : "+str(dataqr.full_name)+"\nPerson Email : "+str(dataqr.user_email)+"\nPerson Phone : "+str(dataqr.user_phone)+"\nCompany Name : "+str(dataqr.company_name)+"\nCompany Location : "+str(dataqr.company_location)
    
    return render(request, "User/contact/contactqrcode.html", context)


#-------------------------------------------------  over -----------------------------------
                       ###########       #        #######   #  #
                            #           # #      #          # #
                            #          #   #      ######    ##
                            #         #######           #   # #
                            #        #       #   #######    #   #
# --------------------------       Lead operations view, add, delete , edit  ----------------------------




@login_required(login_url='login')
def tasks(request):
    context = {}
    context["data"] = Task.objects.filter(addedby=request.user.id).all()
    ttl = Task.objects.filter(addedby=request.user.id).count()
    context["totaltask"] = ttl
    context["activecount"] = int(Task.objects.filter(status="Active", addedby=request.user.id).count()/ttl*100)
    context["pendingcount"] = int(Task.objects.filter(status="Pending", addedby=request.user.id).count()/ttl*100)
    context["completecount"] = int(Task.objects.filter(status="Completed", addedby=request.user.id).count()/ttl*100)
    context["inactivecount"] = int(Task.objects.filter(status="Inactive", addedby=request.user.id).count()/ttl*100)

    
    current_week = date.today().isocalendar()[1]
    today = datetime.date.today()

    context["curretweek"] = Task.objects.filter(created_at__week=current_week, status="Completed", addedby=request.user.id).count()
    context["curretweektotal"] = Task.objects.filter(created_at__week=current_week, addedby=request.user.id).count()
    context["currentweekpercentage"] = int(context["curretweek"] / context["curretweektotal"]*100) if context["curretweektotal"] != 0 else 0

    context["pastweek"] = Task.objects.filter(created_at__week=current_week-1, status="Completed", addedby=request.user.id).count()
    context["pastweektotal"] = Task.objects.filter(created_at__week=current_week-1, addedby=request.user.id).count()
    context["pastweekpercentage"] = int(context["pastweek"] / context["pastweektotal"]*100) if context["pastweektotal"] != 0 else 0

    context["currentmonth"] = Task.objects.filter(created_at__year=today.year, created_at__month=today.month, status="Completed", addedby=request.user.id).count()
    context["currentmonthtotal"] = Task.objects.filter(created_at__year=today.year, created_at__month=today.month, addedby=request.user.id).count()
    context["currentmonthpercentage"] = int(context["currentmonth"] / context["currentmonthtotal"]*100) if context["currentmonthtotal"] != 0 else 0

    context["pastmonth"] = Task.objects.filter(created_at__year=today.year, created_at__month=today.month-1, status="Completed", addedby=request.user.id).count()
    context["pastmonthtotal"] = Task.objects.filter(created_at__year=today.year, created_at__month=today.month-1, addedby=request.user.id).count()
    context["pastmonthpercentage"] = int(context["pastmonth"] / context["pastmonthtotal"]*100) if context["pastmonthtotal"] != 0 else 0

    context["currentyear"] = Task.objects.filter(created_at__year=today.year, status="Completed", addedby=request.user.id).count()
    context["currentyeartotal"] = Task.objects.filter(created_at__year=today.year, addedby=request.user.id).count()
    context["currentyearpercentage"] = int(context["currentyear"] / context["currentyeartotal"]*100) if context["currentyeartotal"] != 0 else 0
   


    return render(request, "User/tasks/tasks.html", context)


    
@login_required(login_url='login')
def addtask(request):
    context = {}
    arr = ["Active", "Completed", "Pending", "Inactive"]
    context["opt"] = arr
    if request.method == 'POST':
        # request.addedby = request.user.id
        form = TaskForm(request.POST, request.FILES)
        
  
        if form.is_valid():
            form.save()
            profileid = Profile.objects.get(userid_id=request.user.id)
            user = User.objects.get(id=request.user.id)
            obj2 = Logs(userid=user, description="Added a Task with id "+str(Task.objects.latest('id').id), profile_id_id=profileid.id)
            obj2.save()
            return redirect('tasks')
        else:
            print(form.errors)

    return render(request, "User/tasks/addtask.html", context)

@login_required(login_url='login')
def deletetask(request, id):
    obj = get_object_or_404(Task, id = id)
    if request.method =="GET":
        obj.delete()
        profileid = Profile.objects.get(userid_id=request.user.id)
        user = User.objects.get(id=request.user.id)
        obj2 = Logs(userid=user, description="Deleted a Task with id "+str(id), profile_id_id=profileid.id)
        obj2.save()
    return redirect('tasks')

@login_required(login_url='login')
def edittask(request, id):
    context ={}
    arr = ["Active", "Completed", "Pending", "Inactive"]
    context["opt"] = arr
    obj = get_object_or_404(Task, id = id)
    form = TaskForm(request.POST or None , request.FILES or None, instance=obj)
    if form.is_valid():
        form.save()
        profileid = Profile.objects.get(userid_id=request.user.id)
        user = User.objects.get(id=request.user.id)
        obj2 = Logs(userid=user, description="Update a Task with id "+str(id), profile_id_id=profileid.id)
        obj2.save()
        return redirect('tasks')
    else:
        print(form.errors)

    context["data"] = form
    # context["dd"] = datetime.strptime(form.cleaned_data["deadline"], "%d-%b-%Y-%H:%M:%S")
    # print(dd)
    return render(request, "User/tasks/edittask.html", context)






#-------------------------------------------------  over -----------------------------------
                      #contract
                      #contract
                      #contract
                      #contract
# --------------------------       Lead operations view, add, delete , edit  ----------------------------









@login_required(login_url='login')
def contracts(request):
    context = {}
    context["data"] = Contract.objects.all()
    return render(request, "User/contract/contracts.html", context)


@login_required(login_url='login')
def addcontract(request):
    context = {}
    context["customersdata"] = Contact.objects.all()
    if request.method == 'POST':
        form = ContractForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            profileid = Profile.objects.get(userid_id=request.user.id)
            user = User.objects.get(id=request.user.id)
            obj2 = Logs(userid=user, description="Added a Contract with id "+str(Contract.objects.latest('id').id), profile_id_id=profileid.id)
            obj2.save()
            return redirect('contracts')
        else:
            print(form.errors)

    return render(request, "User/contract/addcontract.html", context)

@login_required(login_url='login')
def deletecontract(request, id):
    obj = get_object_or_404(Contract, id = id)
    if request.method =="GET":
        obj.delete()
        profileid = Profile.objects.get(userid_id=request.user.id)
        user = User.objects.get(id=request.user.id)
        obj2 = Logs(userid=user, description="Deleted a Contract with contract id "+str(id), profile_id_id=profileid.id)
        obj2.save()
    return redirect('contracts')

@login_required(login_url='login')
def editcontract(request, id):
    context = {}
    context["customersdata"] = Contact.objects.all()
    obj = get_object_or_404(Contract, id = id)
    form = ContractForm(request.POST or None , request.FILES or None, instance=obj)
    if form.is_valid():
        form.save()
        profileid = Profile.objects.get(userid_id=request.user.id)
        user = User.objects.get(id=request.user.id)
        obj2 = Logs(userid=user, description="Updated a Contract with contract id "+str(id), profile_id_id=profileid.id)
        obj2.save()
        return redirect('contracts')
    else:
        print(form.errors)

    context["data"] = form
    return render(request, "User/contract/editcontract.html", context)





#------------------------------------------------- Lead over -----------------------------------


                                                #salesperson

# --------------------------       products operations view, add, delete , edit  ----------------------------


@login_required(login_url='login')
def deliveryboy(request):
    context = {}
    context["data"] = Deliveryboy.objects.all()
    return render(request, "User/deliveryboy/deliveryboy.html", context)


@login_required(login_url='login')
def adddeliveryboy(request):
    context = {}
    # context["customersdata"] = Contact.objects.all()
    if request.method == 'POST':
        form = DeliveryboyForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            profileid = Profile.objects.get(userid_id=request.user.id)
            user = User.objects.get(id=request.user.id)
            obj2 = Logs(userid=user, description="Added a DeliveryBoy with id "+str(Deliveryboy.objects.latest('id').id), profile_id_id=profileid.id)
            obj2.save()
            return redirect('deliveryboy')
        else:
            print(form.errors)

    return render(request, "User/deliveryboy/adddeliveryboy.html", context)

    



@login_required(login_url='login')
def deletedeliveryboy(request, id):
    obj = get_object_or_404(Deliveryboy, id = id)
    if request.method =="GET":
        obj.delete()
        profileid = Profile.objects.get(userid_id=request.user.id)
        user = User.objects.get(id=request.user.id)
        obj2 = Logs(userid=user, description="Deleted a Deliveryboy with id "+str(id), profile_id_id=profileid.id)
        obj2.save()
    return redirect('deliveryboy')



@login_required(login_url='login')
def editdeliveryboy(request, id):
    context = {}
    context["deliveryboydata"] = Deliveryboy.objects.all()
    obj = get_object_or_404(Deliveryboy, id = id)
    form = DeliveryboyForm(request.POST or None , request.FILES or None, instance=obj)
    if form.is_valid():
        form.save()
        profileid = Profile.objects.get(userid_id=request.user.id)
        user = User.objects.get(id=request.user.id)
        obj2 = Logs(userid=user, description="Updated a DeliveryBoy with id "+str(id), profile_id_id=profileid.id)
        obj2.save()
        return redirect('deliveryboy')
    else:
        print(form.errors)

    context["data"] = form
    return render(request, "User/deliveryboy/editdeliveryboy.html", context)



#--------------------------------------------------------------------------

                                #calander


#--------------------------------------------------------------------------


@login_required(login_url='login')
def calander(request):
    context = {}
    # context["data"] = Product.objects.all()
    return render(request, "User/calander/calander.html", context)