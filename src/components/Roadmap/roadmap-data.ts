import { IconType } from 'react-icons';
import { HiOutlineChevronUp } from 'react-icons/hi';

export interface InprogressData {
  numberIcon: IconType;
  number: number;
  titile: string;
  info: string;
  btn: string;
  count: number;
}

export const inprogressdata: Array<InprogressData> = [
  {
    numberIcon: HiOutlineChevronUp,
    number: 62,
    titile: 'One-click portfolio generation',
    info: 'Add ability to create professional looking portfolio from profile.',
    btn: 'Feature',
    count: 1,
  },
  {
    numberIcon: HiOutlineChevronUp,
    number: 31,
    titile: 'Bookmark challenges',
    info: 'Be able to bookmark challenges to take later on.',
    btn: 'Feature',
    count: 1,
  },
  {
    numberIcon: HiOutlineChevronUp,
    number: 9,
    titile: 'Animated solution screenshots',
    info: 'Screenshots of solutions with animations don’t display correctly.',
    btn: 'bug',
    count: 0,
  },
];

export interface PlannedData {
  numberIcon: IconType;
  number: number;
  titile: string;
  info: string;
  btn: string;
  count: number;
}

export const plandata: Array<PlannedData> = [
  {
    numberIcon: HiOutlineChevronUp,
    number: 123,
    titile: 'More comprehensive reports',
    info: 'It would be great to see a more detailed breakdown of solutions.',
    btn: 'Feature',
    count: 2,
  },
  {
    numberIcon: HiOutlineChevronUp,
    number: 28,
    titile: 'Learning paths',
    info: 'Sequenced projects for different goals to help people improve.',
    btn: 'Feature',
    count: 1,
  },
];

export interface LiveData {
  numberIcon: IconType;
  number: number;
  titile: string;
  info: string;
  btn: string;
  count: number;
}

export const livedata: Array<LiveData> = [
  {
    numberIcon: HiOutlineChevronUp,
    number: 71,
    titile: 'Add micro-interactions',
    info: 'Small animations at specific points can add delight.',
    btn: 'Enhancement',
    count: 2,
  },
];

//////////////////////////////////////////////////////

export const mobileRoadMapData = [
  {
    category: 'Planned (2)',
    head: 'Planned',
    numberIcon: HiOutlineChevronUp,
    number: 123,
    titile: 'More comprehensive reports',
    info: 'It would be great to see a more detailed breakdown of solutions.',
    btn: 'Feature',
    count: 2,
  },
  {
    category: 'Planned (2)',
    head: 'Planned',
    numberIcon: HiOutlineChevronUp,
    number: 28,
    titile: 'Learning paths',
    info: 'Sequenced projects for different goals to help people improve.',
    btn: 'Feature',
    count: 1,
  },
  {
    category: 'In-Progress (3)',
    numberIcon: HiOutlineChevronUp,
    head: 'In Progress',
    number: 62,
    titile: 'One-click portfolio generation',
    info: 'Add ability to create professional looking portfolio from profile.',
    btn: 'Feature',
    count: 1,
  },
  {
    category: 'In-Progress (3)',
    numberIcon: HiOutlineChevronUp,
    head: 'In Progress',
    number: 31,
    titile: 'Bookmark challenges',
    info: 'Be able to bookmark challenges to take later on.',
    btn: 'Feature',
    count: 1,
  },
  {
    category: 'In-Progress (3)',
    numberIcon: HiOutlineChevronUp,
    head: 'In Progress',
    number: 9,
    titile: 'Animated solution screenshots',
    info: 'Screenshots of solutions with animations don’t display correctly.',
    btn: 'bug',
    count: 0,
  },
  {
    category: 'Live (2)',
    numberIcon: HiOutlineChevronUp,
    head: 'Live',
    number: 71,
    titile: 'Add micro-interactions',
    info: 'Small animations at specific points can add delight.',
    btn: 'Enhancement',
    count: 2,
  },
  {
    category: 'Live (2)',
    numberIcon: HiOutlineChevronUp,
    head: 'Live',
    number: 123,
    titile: 'More comprehensive reports',
    info: 'It would be great to see a more detailed breakdown of solutions.',
    btn: 'Feature',
    count: 2,
  },
];
