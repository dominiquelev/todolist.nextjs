'use client';

import { axiosInstance } from '@/lib/axios';
import { IFormCreateTodo, Todo } from '@/types/todo.type';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

const useCreateTodo = () => {
  const router = useRouter();
  const createTodo = async (payload: IFormCreateTodo) => {
    try {
      const { title, category, time, start_date, userId } = payload;

      const createTodoForm = new FormData();
      // for (const [key, value] of Object.entries(payload)) {
      //   console.log(key, value);
      // }

      const timeToString = String(time);

      createTodoForm.append('title', title);

      createTodoForm.append('category', category);
      createTodoForm.append('time', timeToString);
      createTodoForm.append('start_date', new Date(start_date).toISOString());

      await axiosInstance.post<Todo>('/', createTodoForm);
      router.push('/');
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log('Axios error', error);
      }
    }
  };
  return { createTodo };
};

export default useCreateTodo;
