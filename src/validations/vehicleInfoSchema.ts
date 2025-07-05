import Joi from 'joi';

export const vehicleInfoSchema = Joi.object({
  vehicle_registration_number: Joi.string()
    .required()
    .label('Registration Number'),
  Chassis_number: Joi.string().required().label('Chassis Number'),
  engine_number: Joi.string().required().label('Engine Number'),
  owner_name: Joi.string().required().label('Owner Name'),
  vehicle_name: Joi.string().required().label('Vehicle Name'),
}).unknown(true);
