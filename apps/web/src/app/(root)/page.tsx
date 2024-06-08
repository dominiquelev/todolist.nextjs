'use client';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import SideBar from './components/SideBar';
import { CalendarClock, CalendarRange, Clock } from 'lucide-react';
import useCreateTodo from '@/hooks/api/todo/useCreateTodo';
import TodoInputForm from './components/TodoInputForm';

const DashboardTodoUser = () => {
  return (
    <main className="h-screen bg-[#f3f2f8]">
      <section className="grid grid-cols-4 ">
        <div>
          <SideBar />
        </div>
        <div className="col-span-3 md:px-20 md:m-10">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl ">Today main Focus</h2>
              <h1 className="text-4xl font-bold">Design Team Meeting</h1>
            </div>
            {/* createInputTodo */}
            <div className="mb-5 relative flex justify-between ">
              <TodoInputForm />
              {/* <Input
                type="text"
                placeholder=" what is your task"
                className="rounded-md pr-12 "
              />

              <span className=" top-1/2 -translate-y-1/2 w-full absolute flex justify-end gap-4 px-2">
                <CalendarClock size={25} />
                <Clock size={25} />
              </span> */}
            </div>
          </div>
          <div className="flex flex-col gap-5 mx-auto">
            <div className="flex items-center justify-between border-1 border-black p-3 rounded-md  ">
              <p className="text-sm font-medium flex items-center">
                <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>{' '}
                Todo list
              </p>
              <div className="flex gap-4 items-center">
                <p>time</p>
                <Checkbox id="todos" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default DashboardTodoUser;
