# Generated by Django 3.1.5 on 2021-08-12 10:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shopping', '0037_claim'),
    ]

    operations = [
        migrations.AddField(
            model_name='social',
            name='twitter',
            field=models.TextField(blank=True, max_length=500, null=True),
        ),
        migrations.AddField(
            model_name='social',
            name='website',
            field=models.TextField(blank=True, max_length=500, null=True),
        ),
    ]