'use client';
import { validationSchemaTodo } from '@/app/(root)/validationSchema';
import FormInputTodo from '@/components/FormInputTodo';
import useCreateTodo from '@/hooks/api/todo/useCreateTodo';
import { useAppSelector } from '@/redux/hooks';
import { IFormCreateTodo } from '@/types/todo.type';
import { useFormik } from 'formik';
import { CalendarClock, Clock } from 'lucide-react';
import { useState } from 'react';
const TodoInputForm = () => {
  const { createTodo } = useCreateTodo();
  const { id } = useAppSelector((state) => state.user);
  const [SelectedDate, setSelectedDate] = useState(new Date());
  const [SelectedTime, setSelectedTime] = useState('');

  const {
    handleSubmit,
    handleBlur,
    handleChange,
    setFieldValue,
    values,
    errors,
    touched,
  } = useFormik<IFormCreateTodo>({
    initialValues: {
      title: '',
      category: '',
      time: '',
      start_date: new Date(),
      //   isCompleted: 'false' ,
    },
    validationSchema: validationSchemaTodo,
    onSubmit: (values) => {
      createTodo({ ...values, userId: id });
    },
  });

  const handleClockClick = () => {
    const currentTime = new Date().toLocaleTimeString();
    setSelectedTime(currentTime), setFieldValue('time', currentTime);
  };
  const handleCalenderClockClick = () => {
    const currentDate = new Date();
    setSelectedDate(currentDate), setFieldValue('start_date', currentDate);
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full">
      {/* <Input
          type="text"
          placeholder=" what is your task"
          className="rounded-md pr-12 "
        /> */}

      <FormInputTodo
        name="title"
        type="text"
        placeholder="what is your task"
        value={values.title}
        error={errors.title}
        isError={!!touched.title && !!errors.title}
        onBlur={handleBlur}
        onChange={handleChange}
      />

      <div className="absolute inset-y-0 right-0 flex items-center space-x-4 pr-4">
        <div className="flex items-center justify-end gap-4 ">
          <CalendarClock
            size={25}
            onClick={handleCalenderClockClick}
            className="cursor-pointer"
          />
          <Clock
            size={25}
            onClick={handleClockClick}
            className="cursor-pointer"
          />
        </div>
      </div>
      {/* <p>Selected Date: {SelectedDate.toLocaleDateString()}</p>
      <p>Selected Time: {SelectedTime}</p> */}
    </form>
  );
};

export default TodoInputForm;
