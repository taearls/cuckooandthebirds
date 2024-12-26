import NavigationBar, {
  NavigationBarProps,
} from "@/components/navigation/NavigationBar/NavigationBar";

const NAVIGATION_LINKS: NavigationBarProps["links"] = [
  {
    ariaLabel: "Visit Home Page",
    children: "Home",
    href: "/",
    isExternal: false,
  },
  {
    ariaLabel: "Visit Music Page",
    children: "Music",
    href: "/music",
    isExternal: false,
  },
  {
    ariaLabel: "Visit Contact Page",
    children: "Contact",
    href: "/contact",
    isExternal: false,
  },
  {
    ariaLabel: "Listen to Tyler's music on Bandcamp",
    children: "Bandcamp",
    href: "https://cuckooandthebirds.bandcamp.com",
    isExternal: true,
  },
];

export default function Header() {
  return (
    <header className="m-0 w-full">
      <NavigationBar links={NAVIGATION_LINKS} />
    </header>
  );
}
