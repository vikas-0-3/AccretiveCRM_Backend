# Generated by Django 3.1.5 on 2021-07-26 10:19

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('shopping', '0030_quotations_quoteitem'),
    ]

    operations = [
        migrations.AddField(
            model_name='quotations',
            name='addedby',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.DO_NOTHING, to='auth.user'),
            preserve_default=False,
        ),
    ]
