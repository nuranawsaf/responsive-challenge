import * as React from 'react';
import { useRef } from 'react';

import Link from 'next/link';

import { motion, useCycle } from 'framer-motion';

import { useDimensions } from '../../../../utils/useDimensions';
import MenuToggle from './MenuToggle';
import Navigation from './Navigation';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(25px at 750px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 500,
      damping: 50,
    },
  },
};

const MobileNavbar: React.FC = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <nav className=" block md:hidden  bg-gradient-radial">
      <div className="">
        {/* LOGO */}
        <Link href="/">
          <div className="cursor-pointer flex items-center gap-x-2 py-4 px-6   w-max">
            <div>
              <h3 className="text-white font-bold text-[15px]">
                Frontend Mentor
              </h3>
              <h4 className="font-medium text-white ">Feedback Board</h4>
            </div>
          </div>
        </Link>

        <motion.div
          className="absolute top-0 right-0 bottom-0  sb"
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          custom={height}
          ref={containerRef}
        >
          <motion.div className="background" variants={sidebar}>
            <Navigation />
          </motion.div>
          <MenuToggle toggle={() => toggleOpen()} />
        </motion.div>
      </div>
    </nav>
  );
};

export default MobileNavbar;
