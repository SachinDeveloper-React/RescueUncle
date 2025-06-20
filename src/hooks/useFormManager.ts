import {useRef, useState, useCallback} from 'react';
import Joi from 'joi';
import {TextInput} from 'react-native';
import React from 'react';

type FormManagerProps<T extends Record<string, any>> = {
  initialForm: T;
  schema: Joi.ObjectSchema<T>;
  onSubmit: (data: T) => Promise<void>;
};

export default function useFormManager<T extends Record<string, any>>({
  initialForm,
  schema,
  onSubmit,
}: FormManagerProps<T>) {
  const [form, setForm] = useState<T>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [serverError, setServerError] = useState<string | null>(null);

  const fieldKeys = Object.keys(initialForm) as Array<keyof T>;

  const inputRefs = useRef(
    fieldKeys.reduce((acc, key) => {
      acc[key] = React.createRef<TextInput>() as any;
      return acc;
    }, {} as Record<keyof T, React.RefObject<TextInput>>),
  ).current;

  const handleChange = useCallback((key: keyof T, value: string) => {
    setForm(prev => ({...prev, [key]: value}));
    setErrors(prev => ({...prev, [key]: ''}));
    setServerError(null);
  }, []);

  const focusNext = useCallback(
    (currentKey: keyof T) => {
      const currentIndex = fieldKeys.indexOf(currentKey);
      const nextKey = fieldKeys[currentIndex + 1];
      if (nextKey && inputRefs[nextKey]?.current) {
        inputRefs[nextKey].current?.focus();
      }
    },
    [fieldKeys, inputRefs],
  );

  const handleSubmit = useCallback(async () => {
    const {error} = schema.validate(form, {abortEarly: false});
    if (error) {
      const newErrors: Partial<Record<keyof T, string>> = {};
      error.details.forEach(detail => {
        const key = detail.path[0] as keyof T;
        newErrors[key] = detail.message;
      });
      setErrors(newErrors);
      setServerError(null);
      return;
    }

    setErrors({});
    setServerError(null);
    try {
      await onSubmit(form);
    } catch (err: any) {
      console.error('Submission error:', err);
      const message =
        err?.response?.data?.message ||
        err?.message ||
        'Something went wrong during submission.';
      setServerError(message);
    }
  }, [form, schema, onSubmit]);

  return {
    form,
    errors,
    serverError,
    inputRefs,
    handleChange,
    handleSubmit,
    focusNext,
  };
}
