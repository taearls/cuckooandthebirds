import { InlineAnchorContent } from "@/components/InlineAnchor/InlineAnchor";
import RenderIf from "@/components/layout/RenderIf";
import { RouteDataItem } from "@/util/constants/data/navigation/navigationData";
import { mergeClasses } from "@/util/styling/styling.utils";
import { useState } from "react";
import { NavLink } from "react-router";

import NavigationToggle from "../NavigationToggle/NavigationToggle";
import styles from "./NavigationBar.module.css";
import NavigationBarListItem from "./NavigationBarListItem";

export type NavigationBarProps = {
  links: Array<RouteDataItem>;
};

export default function NavigationBar({ links }: NavigationBarProps) {
  const [active, setActive] = useState<boolean>(false);

  return (
    // <div className="h-fit w-full">
    <nav className={mergeClasses(styles["navigation-bar"])}>
      <ul
        role="menu"
        className={mergeClasses(styles["navigation-list-container"])}
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

      <div className={mergeClasses(styles["navigation-toggle-container"])}>
        <NavigationToggle active={active} onClick={() => setActive(!active)} />
      </div>
    </nav>
    // </div>
  );
}
