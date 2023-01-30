import { defineStore } from "pinia";

interface NavBarState {
  isNavActive: boolean;
}
export const useNavBarStore = defineStore("navBar", {
  state: (): NavBarState => ({
    isNavActive: false,
  }),
  actions: {
    toggleNavActive () {
      this.isNavActive = !this.isNavActive;
      console.log("this.isNavActive: ", this.isNavActive);
    },
  },
});
