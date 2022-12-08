import React from 'react';

import { SideBar } from '@components/layout/Navbar/DasktopNavbar/SideBar';
import { TopNavbar } from '@components/layout/Navbar/DasktopNavbar/TopNavbar';

import ItemList from './ItemList';

const MainItemList = () => {
  return (
    <div>
      <div className="  lg:flex  lg:mx-40 lg:my-20 ">
        <aside className="  xl:w-[20rem] hidden md:block mr-7">
          <SideBar />
        </aside>
        <main className=" flex-1 h-full md:flex flex-col ">
          <div className="">
            <TopNavbar />
            <ItemList />
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainItemList;
