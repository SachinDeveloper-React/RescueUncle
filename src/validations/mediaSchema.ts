import Joi from 'joi';

export const deviceExteriorSchema = Joi.object({
  front: Joi.object().required(),
  back: Joi.object().required(),
});
export const deviceSideSchema = Joi.object({
  left: Joi.object().required(),
  right: Joi.object().required(),
});
export const deviceVideoSchema = Joi.object({
  before: Joi.object().required(),
  after: Joi.object().required(),
});
