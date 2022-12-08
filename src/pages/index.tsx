import React from 'react';

import { NextPage } from 'next';

import MainItemList from '@components/itemlist/MainItemList';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden    transition-all duration-300 dark:bg-gray-900">
      <MainItemList />
    </div>
  );
};

export default Home;
