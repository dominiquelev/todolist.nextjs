import {
  CalendarClock,
  CircleUserRound,
  ClipboardList,
  Settings,
} from 'lucide-react';
import React from 'react';

const SideBar = () => {
  return (
    <section className=" fixed  w-64 h-screen top-1 left-1 bottom-1 text-white ">
      <div className="  flex flex-col w-full bg-slate-300  rounded-l-md overflow-hidden">
        <div className="flex ">
          <div>
            <CircleUserRound />
          </div>
          <div>name</div>
        </div>
        <div>
          <div className="flex gap-2">
            <ClipboardList />
            Today Tasks
          </div>
          <div className="">
            <p>personal</p>
            <p>freelance</p>
            <p>work</p>
          </div>
        </div>
        <div className="flex gap-2">
          <CalendarClock />
          Schedule tasks
        </div>
        <div className="flex gap-2">
          <Settings />
          Settings
        </div>
      </div>
    </section>
  );
};

export default SideBar;