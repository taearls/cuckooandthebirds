import BookingPage from "@/pages/BookingPage";
import HomePage from "@/pages/HomePage";
import MusicPage from "@/pages/MusicPage";
import { JSX } from "react";

export type RouteDataItem = {
  href: string;
  name: string;
  ariaLabel: string;
  isExternal?: boolean;
  component?: JSX.Element;
  childLinks?: Array<RouteDataItem>;
};

// TODO: add type definition for this
const routes: Array<RouteDataItem> = [
  {
    href: "/",
    ariaLabel: "Visit Home Page",
    name: "Home",
    component: <HomePage />,
  },
  {
    href: "/music",
    ariaLabel: "Visit Music Page",
    name: "Music",
    component: <MusicPage />,
    childLinks: [
      // {
      //   href: "/twin-stars",
      //   name: "Twin Stars",
      // },
      // {
      //   href: "/show-me-the-dark",
      //   name: "Show Me The Dark",
      // },
    ],
  },
  // {
  //   href: "/shows",
  //   name: "Shows",
  //   childLinks: [],
  //   showChildren: false,
  // },
  // {
  //   href: "/press",
  //   name: "Press",
  //   childLinks: [],
  // },
  {
    href: "/booking",
    ariaLabel: "Visit Booking Page",
    name: "Booking",
    component: <BookingPage />,
  },
  {
    ariaLabel: "Listen to Tyler's music on Bandcamp",
    name: "Bandcamp",
    href: "https://cuckooandthebirds.bandcamp.com",
    isExternal: true,
  },
];

export default routes;
