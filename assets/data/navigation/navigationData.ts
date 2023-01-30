/*
 * href: nuxt-link url
 * name: route name that will appear on nav bar
 * childLinks: array of child pages (nested under the top-level href path)
 * showChildren: if true, show children pages in dropdown. should always be false if childLinks is empty.
 */
// TODO: add type definition for this
export default [
  {
    href: "/",
    name: "Bio",
    childLinks: [],
    showChildren: false,
  },
  {
    href: "/releases",
    name: "Releases",
    childLinks: [
      {
        href: "/twin-stars",
        name: "Twin Stars",
      },
      {
        href: "/show-me-the-dark",
        name: "Show Me The Dark",
      },
    ],
    showChildren: false,
  },
  // {
  //   href: "/shows",
  //   name: "Shows",
  //   childLinks: [],
  //   showChildren: false,
  // },
  {
    href: "/press",
    name: "Press",
    childLinks: [],
    showChildren: false,
  },
  {
    href: "/booking",
    name: "Booking",
    childLinks: [],
    showChildren: false,
  },
];
