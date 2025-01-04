import { mergeClasses } from "@/util/styling/styling.utils";
import { useState } from "react";

import styles from "./NavigationToggle.module.css";

export default function NavigationToggle() {
  const [active, setActive] = useState<boolean>(false);
  return (
    <button
      id="custom-toggler"
      className={mergeClasses(active && "active", "group pt-1 px-1 rounded-sm")}
      aria-Label={`${active ? "Close Navigation" : "Open Navigation"}`}
      onClick={() => setActive(!active)}
    >
      <div
        id={styles["toggler-top"]}
        className="bg-red-600 group-hover:bg-cyan-300"
      />
      <div
        id={styles["toggler-middle"]}
        className="bg-red-600 group-hover:bg-cyan-300"
      />
      <div
        id={styles["toggler-bottom"]}
        className="bg-red-600 group-hover:bg-cyan-300"
      />
    </button>
  );
}
