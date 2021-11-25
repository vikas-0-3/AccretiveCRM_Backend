# Generated by Django 3.1.5 on 2021-07-26 10:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('shopping', '0029_social'),
    ]

    operations = [
        migrations.CreateModel(
            name='Quotations',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('customer_name', models.CharField(max_length=200)),
                ('title', models.CharField(max_length=200)),
                ('note', models.CharField(max_length=200)),
                ('status', models.CharField(max_length=200)),
                ('discount', models.IntegerField()),
                ('shipping', models.IntegerField()),
                ('tax', models.IntegerField()),
                ('grand_total', models.BigIntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Quoteitem',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('product_code', models.CharField(max_length=200)),
                ('product_name', models.CharField(max_length=250)),
                ('product_price', models.BigIntegerField()),
                ('product_quantity', models.IntegerField()),
                ('product_total', models.BigIntegerField()),
                ('quotation_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='shopping.quotations')),
            ],
        ),
    ]
