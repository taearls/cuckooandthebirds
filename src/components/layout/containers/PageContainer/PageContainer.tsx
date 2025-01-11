import { navigationMachine } from "@/state/navigationMachine";
import { useMachine } from "@xstate/react";
import { useEffect, useLayoutEffect, useState } from "react";

import styles from "./PageContainer.module.css";

export type PageContainerProps = {
  children: React.ReactNode | React.ReactNode[];
};

export default function PageContainer({ children }: PageContainerProps) {
  // height of page container controlled in NavigationBar
  return (
    <div
      id="page-container"
      className={`${styles["page-container"]} top-0 mx-auto w-full bg-none px-24 py-4 leading-8`}
    >
      {children}
    </div>
  );
}
