import * as yup from 'yup';

export const videoValidationSchema = yup.object().shape({
  title: yup.string().required(),
  url: yup.string().required(),
  creation_date: yup.date().required(),
  last_update_date: yup.date().nullable(),
  user_id: yup.string().nullable().required(),
});
