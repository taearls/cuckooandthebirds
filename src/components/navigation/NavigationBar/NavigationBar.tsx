import { InlineAnchorContent } from "@/components/InlineAnchor/InlineAnchor";
import FlexContainer from "@/components/layout/containers/FlexContainer/FlexContainer";
import RenderIf from "@/components/layout/RenderIf";
import { navigationMachine } from "@/state/navigationMachine";
import { RouteDataItem } from "@/util/constants/data/navigation/navigationData";
import { mergeClasses } from "@/util/styling/styling.utils";
import { useMachine } from "@xstate/react";
import { NavLink } from "react-router";

import NavigationToggle from "../NavigationToggle/NavigationToggle";
import styles from "./NavigationBar.module.css";
import NavigationBarListItem from "./NavigationBarListItem";

export type NavigationBarProps = {
  links: Array<RouteDataItem>;
};

export default function NavigationBar({ links }: NavigationBarProps) {
  const [current, send] = useMachine(navigationMachine);

  const handleToggle = () => {
    send({ type: "toggle" });
  };

  return (
    <nav id="navigation-bar" className={mergeClasses(styles["navigation-bar"])}>
      <ul
        role="menu"
        className={mergeClasses(styles["navigation-list-container"])}
      >
        <RenderIf condition={current.value === "open"}>
          <FlexContainer
            flexFlow="column"
            responsive={{
              gapX: { prefix: "sm", value: 2 },
              flexFlow: { prefix: "sm", value: "row" },
            }}
          >
            {links
              .filter((link) => !link.hidden)
              .map((link, index) => {
                return (
                  <NavigationBarListItem
                    key={index}
                    isLast={index === links.length - 1}
                  >
                    <NavLink
                      to={link.href}
                      aria-label={link.ariaLabel}
                      className={({ isActive }) =>
                        mergeClasses(isActive && "active")
                      }
                    >
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
          </FlexContainer>
        </RenderIf>
      </ul>

      <div className={mergeClasses(styles["navigation-toggle-container"])}>
        <NavigationToggle
          active={current.value === "open"}
          onClick={handleToggle}
        />
      </div>
    </nav>
  );
}
