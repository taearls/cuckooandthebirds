import BookingPage from "@/pages/BookingPage";
import HomePage from "@/pages/HomePage";
import MusicDetailsPage from "@/pages/MusicPage/MusicDetailsPage";
import MusicPage from "@/pages/MusicPage/MusicPage";
import MusicPageOutlet from "@/pages/MusicPage/MusicPageOutlet";
import NotFoundPage from "@/pages/NotFoundPage";
import PressPage from "@/pages/PressPage";
import { JSX } from "react";

export type RouteDataChildItem = {
  href: string;
  component: JSX.Element;
  index?: boolean;
};

export type RouteDataItem = {
  href: string;
  name: string;
  ariaLabel: string;
  isExternal?: boolean;
  component?: JSX.Element;
  hidden?: boolean;
  childLinks?: Array<RouteDataChildItem>;
};

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
    component: <MusicPageOutlet />,
    childLinks: [
      {
        href: "",
        component: <MusicPage />,
        index: true,
      },
      {
        href: ":releaseId",
        component: <MusicDetailsPage />,
      },
    ],
  },
  // {
  //   href: "/shows",
  //   name: "Shows",
  //   childLinks: [],
  // },
  {
    href: "/press",
    name: "Press",
    ariaLabel: "Visit Press Page",
    component: <PressPage />,
  },
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
  {
    href: "*",
    name: "404",
    ariaLabel: "Navigate To 404 Page",
    hidden: true,
    component: <NotFoundPage />,
  },
];

export default routes;
