import Joi from 'joi';

export const personalInfoSchema = Joi.object({
  full_name: Joi.string().min(2).required().label('Full Name'),
  gender: Joi.string().valid('male', 'female', 'other').required(),
  emergency_name_1: Joi.string()
    .min(2)
    .required()
    .label('Emergency Contact Name'),
  emergency_contact_1: Joi.string()
    .length(10)
    .pattern(/^\d+$/)
    .required()
    .label('Emergency Contact Number'),
  emergency_name_2: Joi.string()
    .allow('')
    .optional()
    .label('Secondary Emergency Contact Name'),
  emergency_contact_2: Joi.string()
    .length(10)
    .pattern(/^\d+$/)
    .allow('')
    .optional()
    .label('Secondary Emergency Contact Number'),
  blood_group: Joi.string().required().label('Blood Group'),
}).unknown(true);
