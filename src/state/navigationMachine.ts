import { createMachine } from "xstate";

const onToggleAction = () =>
  setTimeout(() => {
    const pageContainer = document.getElementById("page-container");
    const navigationBar = document.getElementById("navigation-bar");

    if (pageContainer && navigationBar) {
      pageContainer.style.marginTop =
        navigationBar.offsetHeight.toString() + "px";
    }
  }, 0);

export const navigationMachine = createMachine({
  id: "navigation",
  initial: "closed",
  states: {
    closed: {
      on: {
        toggle: {
          target: "open",
          actions: () => {
            onToggleAction();
          },
        },
      },
    },
    open: {
      on: {
        toggle: {
          target: "closed",
          actions: () => {
            onToggleAction();
          },
        },
      },
    },
  },
});
