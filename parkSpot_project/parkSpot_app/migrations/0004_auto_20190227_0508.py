# Generated by Django 2.1.5 on 2019-02-27 05:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('parkSpot_app', '0003_spots'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='spot',
            new_name='spots',
        ),
        migrations.AddField(
            model_name='user',
            name='address',
            field=models.CharField(default='11747 Upton', max_length=100),
        ),
        migrations.AddField(
            model_name='user',
            name='zip',
            field=models.CharField(default=48808, max_length=100),
        ),
        migrations.AlterField(
            model_name='spots',
            name='spot',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='spot', to='parkSpot_app.User'),
        ),
        migrations.AlterField(
            model_name='user',
            name='city',
            field=models.CharField(default='Bath', max_length=100),
        ),
        migrations.AlterField(
            model_name='user',
            name='firstName',
            field=models.CharField(default='Shomari', max_length=100),
        ),
        migrations.AlterField(
            model_name='user',
            name='lastName',
            field=models.CharField(default='Pope', max_length=100),
        ),
        migrations.AlterField(
            model_name='user',
            name='photo_url',
            field=models.TextField(default='SOME STRING', max_length=100),
        ),
        migrations.AlterField(
            model_name='user',
            name='state',
            field=models.CharField(default='MI', max_length=100),
        ),
    ]
