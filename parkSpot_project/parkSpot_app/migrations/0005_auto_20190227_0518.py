# Generated by Django 2.1.5 on 2019-02-27 05:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('parkSpot_app', '0004_auto_20190227_0508'),
    ]

    operations = [
        migrations.AddField(
            model_name='spots',
            name='number_of_spots',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AlterField(
            model_name='user',
            name='address',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AlterField(
            model_name='user',
            name='city',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AlterField(
            model_name='user',
            name='firstName',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AlterField(
            model_name='user',
            name='lastName',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AlterField(
            model_name='user',
            name='photo_url',
            field=models.TextField(default='', max_length=100),
        ),
        migrations.AlterField(
            model_name='user',
            name='state',
            field=models.CharField(default='', max_length=100),
        ),
    ]