from django.contrib import admin
from .models import Competition, Entry, Winner, BasketItem, MpesaTransaction

admin.site.register(Competition)
admin.site.register(Entry)
admin.site.register(Winner)
admin.site.register(BasketItem)
admin.site.register(MpesaTransaction)
