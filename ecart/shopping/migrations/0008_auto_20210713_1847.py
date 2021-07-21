# Generated by Django 3.1.5 on 2021-07-13 13:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shopping', '0007_profile_gender'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='about',
            field=models.TextField(blank=True, max_length=1000, null=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='address',
            field=models.TextField(blank=True, max_length=500, null=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='award1',
            field=models.BooleanField(blank=True, default=False),
        ),
        migrations.AlterField(
            model_name='profile',
            name='award2',
            field=models.BooleanField(blank=True, default=False),
        ),
        migrations.AlterField(
            model_name='profile',
            name='award3',
            field=models.BooleanField(blank=True, default=False),
        ),
        migrations.AlterField(
            model_name='profile',
            name='award4',
            field=models.BooleanField(blank=True, default=False),
        ),
        migrations.AlterField(
            model_name='profile',
            name='designation',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='dob',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='facebook',
            field=models.TextField(blank=True, max_length=500, null=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='first_name',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='gender',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='github',
            field=models.TextField(blank=True, max_length=500, null=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='instagram',
            field=models.TextField(blank=True, max_length=500, null=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='last_name',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='linkedin',
            field=models.TextField(blank=True, max_length=500, null=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='points',
            field=models.BigIntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='project_id',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='user_email',
            field=models.EmailField(blank=True, max_length=254, null=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='user_phone',
            field=models.BigIntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='working_from',
            field=models.TimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='working_to',
            field=models.TimeField(blank=True, null=True),
        ),
    ]
