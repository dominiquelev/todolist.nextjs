import * as Yup from 'yup';

export const validationSchemaTodo = Yup.object().shape({
  title: Yup.string().required('task is required'),
  category: Yup.string().required('category is required'),
  time: Yup.string().required('time is required'),

  start_date: Yup.date().required('Start date is required'),
});
