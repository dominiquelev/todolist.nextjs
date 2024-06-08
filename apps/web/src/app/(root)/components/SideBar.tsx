' use client';
import { Button } from '@/components/ui/button';
import {
  CalendarClock,
  CircleUserRound,
  ClipboardList,
  Settings,
} from 'lucide-react';
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"

import React from 'react';

const SideBar = () => {
  return (
    <section className="fixed w-1/4 h-screen text-white m-auto p-4">
      <div className="flex flex-col h-full bg-slate-300 rounded-l-md ">
        {/* user */}
        <div className="flex items-center gap-4 p-2 mx-4 mt-4">
          <img
            src="/assets/images/bg.login.jpg"
            alt="Profile"
            className="w-14 h-14 rounded-full mr-3"
          />
          <span className="font-bold text-lg">Name</span>
        </div>
        <hr className="my-5 border-2 mx-8" />
        {/* list SideBar */}
        <div>
          {/* today task */}
          <div className=" ">
            <Button className="flex gap-2 mx-2">
              <ClipboardList />
              Today Tasks
            </Button>
            <div className="flex flex-col mx-4">
              <Button className="gap-2  text-left justify-start">
                <span className="w-2 h-2 bg-pink-500 rounded-full " />
                Personal
              </Button>
              <Button className=' gap-2  text-left justify-start'>
                <span className="w-2 h-2 bg-blue-500 rounded-full" />
                freelance
              </Button>
              <Button className=' gap-2 text-left justify-start'>
                <span className="w-2 h-2 bg-yellow-500 rounded-full " />
                work
              </Button>
            </div>
          </div>
          <Button className="flex gap-4 mx-2">
            <CalendarClock />
            Schedule tasks
          </Button>
          <Button className="flex gap-4 mx-2">
            <Settings />
            Settings
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SideBar;
