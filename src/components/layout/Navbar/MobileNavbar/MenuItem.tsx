import * as React from 'react';

import Link from 'next/link';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons/lib';

import { FeatureDataProps } from '../DasktopNavbar/sidebar-data';
import { NavdataProps } from '../navdata';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

interface MenuItemProps {
  nav: {
    title: string;
  };
}

const MenuItem: React.FC<MenuItemProps> = ({
  nav,
}: {
  nav: FeatureDataProps;
}) => {
  return (
    <motion.li
      className="text-theme-gray-4 "
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="w-max">
        <button
          className={clsx(
            'px-2 py-1 font-semibold rounded-lg  mb-4 bg-gray-100 text-sm',
            nav.title == 'All' && 'bg-tertiary text-white',
            nav.title == 'UI' && 'mx-4',
            nav.title == 'Bug' && 'ml-2'
          )}
        >
          {nav.title}
        </button>
      </div>
    </motion.li>
  );
};

export default MenuItem;
