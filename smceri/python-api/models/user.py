from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship
from app import db

class User(db.Model):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    username = Column(String(80), unique=True, nullable=False)
    email = Column(String(120), unique=True, nullable=False)
    password = Column(String(128), nullable=False)

    devices = relationship('Device', backref='owner', lazy=True)
