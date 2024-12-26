import InlineAnchor, {
  InlineAnchorContent,
  InlineAnchorProps,
} from "@/components/InlineAnchor/InlineAnchor";
import { NavLink } from "react-router";

import NavigationBarListItem from "./NavigationBarListItem";

export type NavigationBarProps = {
  links: Array<InlineAnchorProps>;
};

export default function NavigationBar({ links }: NavigationBarProps) {
  return (
    <div className="h-fit w-full">
      <nav className="font-default fixed top-0 flex h-48 w-full flex-col items-center justify-evenly border border-b border-l-0 border-r-0 border-t-0 text-black sm:h-16 sm:flex-row sm:justify-center dark:text-white">
        <ul
          role="menu"
          className="flex h-auto w-40 flex-col items-center justify-center sm:h-16 sm:w-full sm:flex-row"
        >
          {links.map((link, index) => {
            return (
              <NavigationBarListItem
                key={index}
                isLast={index === links.length - 1}
              >
                <NavLink to={link.href}>
                  <InlineAnchorContent isExternal={Boolean(link.isExternal)}>
                    {link.children}
                  </InlineAnchorContent>
                </NavLink>
              </NavigationBarListItem>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
