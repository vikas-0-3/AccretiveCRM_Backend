from typing import ValuesView
from django.urls import path, include
from shopping import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.dashboard, name="dashboard"),
    path('login', views.loginuser, name="login"),
    path('logout', views.logoutuser, name="logout"),
    path('register', views.register, name="register"),
    path('home', views.home, name="home"),

    
    path('profile', views.profile, name="profile"),
    path('editprofile', views.editprofile, name="editprofile"),


    path('userprofiles', views.userprofiles, name="userprofiles"),
    path('deleteuser/<id>', views.deleteuser, name="deleteuser"),
    path('edituserprofile/<id>', views.edituserprofile, name="edituserprofile"),

    

    path('calander', views.calander, name="calander"),

    path('documents', views.documents, name="documents"),
    path('knowledge', views.knowledge, name="knowledge"),

    path('logs', views.logs, name="logs"),


    path('contracts', views.contracts, name="contracts"),
    path('addcontract', views.addcontract, name="addcontract"),
    path('editcontract/<id>', views.editcontract, name="editcontract"),
    path('deletecontract/<id>', views.deletecontract, name="deletecontract"),

    path('sales', views.sales, name="sales"),
    path('addsale', views.addsale, name="addsale"),
    path('editsale/<id>', views.editsale, name="editsale"),
    path('deletesale/<id>', views.deletesale, name="deletesale"),

    path('contact', views.contact, name="contact"),
    path('addcontact', views.addcontact, name="addcontact"),
    path('editcontact/<id>', views.editcontact, name="editcontact"),
    path('deletecontact/<id>', views.deletecontact, name="deletecontact"),

    path('contactqrcode/<id>', views.contactqrcode, name="contactqrcode"),

    path('products', views.products, name="products"),
    path('addproduct', views.addproduct, name="addproduct"),
    path('editproduct/<id>', views.editproduct, name="editproduct"),
    path('deleteproduct/<id>', views.deleteproduct, name="deleteproduct"),

    path('lead', views.lead, name="lead"),
    path('addlead', views.addlead, name="addlead"),
    path('editlead/<id>', views.editlead, name="editlead"),
    path('deletelead/<id>', views.deletelead, name="deletelead"),

    path('tasks', views.tasks, name="tasks"),
    path('addtask', views.addtask, name="addtask"),
    path('edittask/<id>', views.edittask, name="edittask"),
    path('deletetask/<id>', views.deletetask, name="deletetask"),

    path('deliveryboy', views.deliveryboy, name="deliveryboy"),
    path('adddeliveryboy', views.adddeliveryboy, name="adddeliveryboy"),
    path('editdeliveryboy/<id>', views.editdeliveryboy, name="editdeliveryboy"),
    path('deletedeliveryboy/<id>', views.deletedeliveryboy, name="deletedeliveryboy"),
    
]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
    document_root=settings.MEDIA_ROOT)


    