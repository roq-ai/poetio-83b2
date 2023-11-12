import * as yup from 'yup';

export const showValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().nullable(),
  date: yup.date().required(),
  location: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
