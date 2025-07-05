import Joi from 'joi';

export const bankAccountSchema = Joi.object({
  bank_name: Joi.string().required().label('Bank Name'),
  account_number: Joi.string()
    .pattern(/^\d+$/)
    .min(9)
    .max(18)
    .required()
    .label('Account Number'),
  ifsc_code: Joi.string()
    // .pattern(/^[A-Z]{4}0[A-Z0-9]{6}$/)
    .required()
    .label('IFSC Code'),
  account_holder_name: Joi.string()
    // .pattern(/^[A-Z]{4}0[A-Z0-9]{6}$/)
    .required()
    .label('Account Holder Name'),
}).unknown(true);
