import { JSX } from "react";

import BookingPage from "@/pages/BookingPage.tsx";
import HomePage from "@/pages/HomePage.tsx";
import MusicDetailsPage from "@/pages/MusicPage/MusicDetailsPage.tsx";
import MusicPage from "@/pages/MusicPage/MusicPage.tsx";
import MusicPageOutlet from "@/pages/MusicPage/MusicPageOutlet.tsx";
import NotFoundPage from "@/pages/NotFoundPage.tsx";
import PressPage from "@/pages/PressPage.tsx";

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
    ariaLabel: "Visit Home Page",
    component: <HomePage />,
    href: "/",
    name: "Home",
  },
  {
    ariaLabel: "Visit Music Page",
    childLinks: [
      {
        component: <MusicPage />,
        href: "",
        index: true,
      },
      {
        component: <MusicDetailsPage />,
        href: ":releaseId",
      },
    ],
    component: <MusicPageOutlet />,
    href: "/music",
    name: "Music",
  },
  // {
  //   href: "/shows",
  //   name: "Shows",
  //   childLinks: [],
  // },
  {
    ariaLabel: "Visit Press Page",
    component: <PressPage />,
    href: "/press",
    name: "Press",
  },
  {
    ariaLabel: "Visit Booking Page",
    component: <BookingPage />,
    href: "/booking",
    name: "Booking",
  },
  {
    ariaLabel: "Listen to Tyler's music on Bandcamp",
    href: "https://cuckooandthebirds.bandcamp.com",
    isExternal: true,
    name: "Bandcamp",
  },
  {
    ariaLabel: "Navigate To 404 Page",
    component: <NotFoundPage />,
    hidden: true,
    href: "*",
    name: "404",
  },
];

export default routes;
