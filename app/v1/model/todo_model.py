from datatime import datatime

import peewee

from app.v1.utils.db import db
from .user_model import User


class Todo(peewee.Model):
    title = peewee.Charfield()
    create_at = peewee.DateTimeField(default=datatime.now)
    is_done = peewee.BooleanField(default=False)
    user = peewee.ForeignKeyField(User, backref="todos")

    class Meta:
        database = db
