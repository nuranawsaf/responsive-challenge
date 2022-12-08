import React from 'react';

import MobileRoadMap from '@components/Roadmap/MobileRoadMap';
import RoadMap from '@components/Roadmap/RoadMap';
import MobileNavbar from '@components/layout/Navbar/MobileNavbar/MobileNavbar';

const roadmap = () => {
  return (
    <div>
      <RoadMap />
      <MobileRoadMap />
    </div>
  );
};

export default roadmap;
