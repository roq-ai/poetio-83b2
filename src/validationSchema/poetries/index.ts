import * as yup from 'yup';

export const poetryValidationSchema = yup.object().shape({
  title: yup.string().required(),
  content: yup.string().required(),
  creation_date: yup.date().required(),
  last_update_date: yup.date().nullable(),
  user_id: yup.string().nullable().required(),
});
