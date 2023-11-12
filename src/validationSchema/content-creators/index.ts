import * as yup from 'yup';

export const contentCreatorValidationSchema = yup.object().shape({
  bio: yup.string().nullable(),
  website: yup.string().nullable(),
  social_media_handle: yup.string().nullable(),
  specialty: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
});
