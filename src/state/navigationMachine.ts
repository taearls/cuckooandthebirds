import { createMachine } from "xstate";

export const checkNavHeight = () => {
  const pageContainer = document.getElementById("page-container");
  const navigationBar = document.getElementById("navigation-bar");

  if (pageContainer && navigationBar) {
    pageContainer.style.marginTop =
      navigationBar.offsetHeight.toString() + "px";
  }
};

const onToggleAction = () =>
  setTimeout(() => {
    checkNavHeight();
  }, 0);

export const navigationMachine = createMachine({
  id: "navigation",
  initial: "closed",
  states: {
    closed: {
      on: {
        toggle: {
          actions: () => {
            onToggleAction();
          },
          target: "open",
        },
      },
    },
    open: {
      on: {
        toggle: {
          actions: () => {
            onToggleAction();
          },
          target: "closed",
        },
      },
    },
  },
});
