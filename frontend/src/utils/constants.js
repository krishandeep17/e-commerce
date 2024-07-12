import AccessoriesImg from "../assets/categories/accessories.png";
import LaptopImg from "../assets/categories/laptop.png";
import SmartphoneImg from "../assets/categories/smartphone.png";
import TabletImg from "../assets/categories/tablet.png";
import TelevisionImg from "../assets/categories/television.png";
import WatchesImg from "../assets/categories/watches.png";
import {
  HeadphoneIcon,
  LaptopIcon,
  SmartphoneIcon,
  TabletIcon,
  TelevisionIcon,
  WatchIcon,
} from "../components/icons";

export const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
export const MILLISECONDS_PER_HOUR = 1000 * 60 * 60;
export const MILLISECONDS_PER_MINUTE = 1000 * 60;
export const MILLISECONDS_PER_SECOND = 1000;

export const MAX_QUANTITY = 5;

export const categories = [
  {
    slug: "laptops",
    label: "Laptops",
    image: LaptopImg,
    icon: LaptopIcon,
  },
  {
    slug: "tablets",
    label: "Tablets",
    image: TabletImg,
    icon: TabletIcon,
  },
  {
    slug: "watches",
    label: "Watches",
    image: WatchesImg,
    icon: WatchIcon,
  },
  {
    slug: "phones",
    label: "Phones",
    image: SmartphoneImg,
    icon: SmartphoneIcon,
  },
  {
    slug: "accessories",
    label: "Accessories",
    image: AccessoriesImg,
    icon: HeadphoneIcon,
  },
  {
    slug: "tv-home",
    label: "TV & Home",
    image: TelevisionImg,
    icon: TelevisionIcon,
  },
];
