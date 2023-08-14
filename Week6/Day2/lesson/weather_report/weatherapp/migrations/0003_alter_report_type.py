# Generated by Django 4.2.4 on 2023-08-14 07:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('weatherapp', '0002_report_type_alter_report_location'),
    ]

    operations = [
        migrations.AlterField(
            model_name='report',
            name='type',
            field=models.CharField(choices=[('su', 'sunny'), ('clo', 'cloudly'), ('wi', 'windy'), ('ra', 'rainy'), ('str', 'stormy')], max_length=3),
        ),
    ]
