import React from 'react';

import dynamic from 'next/dynamic';

import { SideBar } from './Navbar/DasktopNavbar/SideBar';
import { TopNavbar } from './Navbar/DasktopNavbar/TopNavbar';
import MobileNavbar from './Navbar/MobileNavbar/MobileNavbar';

const ToggleButton = dynamic(
  () => import('@components/shared/buttons/ToggleButton/ToggleButton'),
  {
    ssr: false,
  }
);

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative ">
      {/*
          The following props can be passed: light, dark, size, tooltip, darkIcon & lightIcon 
          Note: For customizing darkIcons and lightIcons, you should use react-icons
          */}
      {/* <ToggleButton tooltip /> */}
      <MobileNavbar />
      {children}
    </div>
  );
};

export default Layout;
