# Generated by Django 3.1.5 on 2021-07-19 03:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shopping', '0026_documents'),
    ]

    operations = [
        migrations.AddField(
            model_name='documents',
            name='title',
            field=models.CharField(default=1, max_length=200),
            preserve_default=False,
        ),
    ]