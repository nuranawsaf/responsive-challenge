import React from 'react';

import { SideBar } from '@components/layout/Navbar/DasktopNavbar/SideBar';
import { TopNavbar } from '@components/layout/Navbar/DasktopNavbar/TopNavbar';

import Empty from './Empty';

export const MainEmpty = () => {
  return (
    <div className="  flex  lg:mx-14 lg:mt-8">
      <aside className="md:w-[6rem]  xl:w-[20rem]      hidden md:block mr-7">
        <SideBar />
      </aside>
      <main className="flex-1 lg:h-full md:flex flex-col ">
        <div className="">
          <TopNavbar />
          <Empty />
        </div>
      </main>
    </div>
  );
};
