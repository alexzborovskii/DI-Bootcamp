# Generated by Django 4.2.4 on 2023-08-13 13:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('info', '0003_alter_bookreview_review_text'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='published_date',
            field=models.DateField(null=True),
        ),
    ]
