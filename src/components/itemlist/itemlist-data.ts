import { IconType } from 'react-icons';
import { HiOutlineChevronUp } from 'react-icons/hi';

export interface ItemListData {
  numberIcon: IconType;
  number: number;
  titile: string;
  info: string;
  btn: string;
  count: number;
}

export const listitemdata: Array<ItemListData> = [
  {
    numberIcon: HiOutlineChevronUp,
    number: 112,
    titile: 'Add tags for solutions',
    info: 'Easier to search for solutions based on a specific stack.',
    btn: 'Enhancement',
    count: 2,
  },
  {
    numberIcon: HiOutlineChevronUp,
    number: 99,
    titile: 'Add a dark theme option',
    info: 'Easier to search for solutions based on a specific stack.',
    btn: 'Feature',
    count: 4,
  },
  {
    numberIcon: HiOutlineChevronUp,
    number: 65,
    titile: 'Q&A within the challenge hubs',
    info: 'Easier to search for solutions based on a specific stack.',
    btn: 'Feature',
    count: 1,
  },
  {
    numberIcon: HiOutlineChevronUp,
    number: 51,
    titile: 'Allow image/video upload to feedback',
    info: 'Easier to search for solutions based on a specific stack.',
    btn: 'Enhancement',
    count: 2,
  },
  {
    numberIcon: HiOutlineChevronUp,
    number: 42,
    titile: 'Ability to follow others',
    info: 'Easier to search for solutions based on a specific stack.',
    btn: 'Feature',
    count: 3,
  },
  {
    numberIcon: HiOutlineChevronUp,
    number: 2,
    titile: 'Preview images not loading',
    info: 'Easier to search for solutions based on a specific stack.',
    btn: 'Bug',
    count: 0,
  },
];
