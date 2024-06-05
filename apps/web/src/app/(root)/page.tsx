import { Input } from '@/components/ui/input';
import SideBar from './components/SideBar';
import { Checkbox } from '@/components/ui/checkbox';

export default function Home() {
  return (
    <main className="bg-slate-400 h-screen">
      <section className="grid grid-cols-4 ">
        <div>
          <SideBar />
        </div>
        <div className="col-span-3 px-20 m-10">
          <div className="gap-5">
            <h2>Today main Focus</h2>
            <h1>Design Team Meeting</h1>
            <Input
              type="text"
              placeholder=" what is your task"
              className="rounded-md "
            />
          </div>
          <div className="py-10">
            <div className="flex items-center space-x-2 ">
              <label
                htmlFor="todos"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                todo list
              </label>
              <Checkbox id="todos" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
