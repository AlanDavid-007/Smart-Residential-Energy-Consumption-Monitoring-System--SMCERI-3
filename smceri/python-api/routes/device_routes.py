from flask import Blueprint, jsonify, request
from models.device import Device
from app import db

device_routes = Blueprint('device_routes', __name__)

@device_routes.route('/', methods=['GET'])
def get_devices():
    devices = Device.query.all()
    return jsonify([{'id': d.id, 'name': d.name, 'user_id': d.user_id} for d in devices])

@device_routes.route('/', methods=['POST'])
def create_device():
    data = request.json
    new_device = Device(name=data['name'], user_id=data['user_id'])
    db.session.add(new_device)
    db.session.commit()
    return jsonify({'message': 'Device created successfully'})
