import peewee

from app.v1.utils.db import db


class User(peewee.Model):
    email = peewee.CharField(unique=true, index=true)
    username = peewee.CharField(unique=true, index=true)
    password = peewee.CharField()

    class Meta:
        database = db
