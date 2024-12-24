import { NavigationBar, NavigationBarProps } from "@/components/navigation";

const NAVIGATION_LINKS: NavigationBarProps["links"] = [
  {
    ariaLabel: "Visit Home Page",
    children: "Home",
    href: "/",
    isExternal: false,
    bold: true,
  },
  {
    ariaLabel: "Visit Web Projects Page",
    children: "Web",
    href: "/web-projects",
    isExternal: false,
    bold: true,
  },
  {
    ariaLabel: "Visit Contact Page",
    children: "Contact",
    href: "/contact",
    isExternal: false,
    bold: true,
  },
  {
    ariaLabel: "Listen to Tyler's music on Bandcamp",
    children: "Music",
    href: "https://cuckooandthebirds.bandcamp.com",
    isExternal: true,
    bold: true,
  },
];

export default function Header() {
  return (
    <header className="m-0 w-full">
      <NavigationBar links={NAVIGATION_LINKS} />
    </header>
  );
}
