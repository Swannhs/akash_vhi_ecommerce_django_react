from django.db import models


# Create your models here.
class Product(models.Model):
    id = models.AutoField(primary_key=True, editable=False)
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=9, decimal_places=2)
    createdAt = models.DateField(auto_now_add=True)

    def __str__(self):
        return str(self.name)
