import { InlineAnchorContent } from "@/components/InlineAnchor/InlineAnchor";
import RenderIf from "@/components/layout/RenderIf";
import { RouteDataItem } from "@/util/constants/data/navigation/navigationData";
import { mergeClasses } from "@/util/styling/styling.utils";
import { useState } from "react";
import { NavLink } from "react-router";

import NavigationToggle from "../NavigationToggle/NavigationToggle";
import NavigationBarListItem from "./NavigationBarListItem";

export type NavigationBarProps = {
  links: Array<RouteDataItem>;
};

export default function NavigationBar({ links }: NavigationBarProps) {
  const [active, setActive] = useState<boolean>(false);

  return (
    <div className="h-fit w-full">
      <nav
        className={mergeClasses(
          active && "",
          !active && "justify-end",
          "fixed top-0 flex min-h-16 w-full border border-b border-l-0 border-r-0 border-t-0",
        )}
      >
        <ul
          role="menu"
          className={mergeClasses(
            active && "sm:h-16 sm:flex-row flex-col self-center",
            "inline-flex h-auto w-40 items-center justify-center sm:w-full",
          )}
        >
          <RenderIf condition={active}>
            {links.map((link, index) => {
              return (
                <NavigationBarListItem
                  key={index}
                  isLast={index === links.length - 1}
                >
                  <NavLink to={link.href} aria-label={link.ariaLabel}>
                    <InlineAnchorContent
                      isExternal={Boolean(link.isExternal)}
                      bold
                      underline={false}
                    >
                      {link.name}
                    </InlineAnchorContent>
                  </NavLink>
                </NavigationBarListItem>
              );
            })}
          </RenderIf>
        </ul>

        <div
          className={mergeClasses(
            !active && "",
            "inline-flex self-end my-auto mx-4 ml-[calc(-36px-1rem)]",
          )}
        >
          <NavigationToggle
            active={active}
            onClick={() => setActive(!active)}
          />
        </div>
      </nav>
    </div>
  );
}
