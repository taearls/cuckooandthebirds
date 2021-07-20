<template>
  <div
    id="nav-container"
    class="fixed z-100 flex items-center justify-end w-screen top-0 font-default text-white border-gray-500 h-fit sm:h-16"
    :class="{
      'border-b': isNavActive,
      'border-b-0 h-16': !isNavActive
    }"
  >
    <transition
      name="fade"
      mode="out-in"
    >
      <nav
        v-show="isNavActive"
        id="nav-bar"
        class="w-screen"
      >
        <ul class="flex flex-col h-auto justify-center sm:flex-row sm:justify-end">
          <li
            v-for="(parent, index) in navigationData"
            :key="'parent-' + index"
            class="flex items-center mx-auto sm:py-2 text-center w-1/3 border border-t-0 border-l-0 border-r-0 border-b-1 border-gray-600 sm:border-none sm:mx-0 sm:w-auto"
            :class="{
              'border-none': index === navigationData.length - 1,
            }"
          >
            <nuxt-link
              v-if="parent.childLinks && parent.childLinks.length === 0"
              :to="parent.href"
              :tabindex="isNavActive ? 0 : -1"
              class="px-4 my-2 text-lg hover:text-cyan-300 hover:opacity-100 rounded-sm w-full sm:w-auto"
            >
              {{ parent.name }}
            </nuxt-link>
            <nav-child-links-container 
              v-else
              :parent="parent"
              @toggle="$emit('navbar-height-changed')"
            />
          </li>
        </ul>
      </nav>
    </transition>
    <nav-bar-toggle />
  </div>
</template>

<script>
import { mapState } from "vuex";
import NavBarToggle from "./NavBarToggle.vue";
import NavChildLinksContainer from "./NavChildLinksContainer.vue";
import navigationData from "@/assets/data/navigation/navigationData";

export default {
  components: {
    NavBarToggle,
    NavChildLinksContainer,
  },
  data() {
    return {
      navigationData,
    };
  },
  computed: {
    ...mapState([
      "isNavActive",
    ]),
  },
  watch: {
    isNavActive(isActive) {
      if (isActive) {
        this.initializeFocus();
      } else {
        // if the nav is inactive, the child link lists should collapse, too.
        this.navigationData.map((section) => section.showChildren = false);
      }
    },
  },
  methods: {
    initializeFocus() {
      // need to use next tick to ensure tabindex is set to 0 before attempting to focus
      this.$nextTick(() => {
        const activeRouterLink = document.querySelector("a.nuxt-link-exact-active");
        if (activeRouterLink == null) {
          const firstRouterLink = document.querySelector("#navbar ul li:first-child a");
          if (firstRouterLink != null) {
            firstRouterLink.focus();
          }
        } else if (activeRouterLink.classList.contains("child-link")) {
          // grab parent subpath for child page, use it to match against the button with that path as a data attribute.
          const path = window.location.pathname;
          
          // e.g., "/releases/twin-stars" will return ["/releases", "/twin-stars"]
          const parentPathRegex = /\/[a-z-]*/gi;
          const parentPath = path.match(parentPathRegex) ? path.match(parentPathRegex)[0] : "none";
          
          // NOTE: each button which opens a dropdown menu needs a `data-parent-path` attribute whose value is the parent path.
          // it would be nice to find a better idiomatic Vue solution for this.
          const dropdownButton = document.querySelector(`[data-parent-path='${parentPath}']`);

          // rather than clicking this menu open then focusing on the specific child page, just focus on it. less of a side effect that way. 
          if (dropdownButton != null) dropdownButton.focus();
        } else {
          activeRouterLink.focus();
        }
      });
    },
    handleDropdownClick(section) {
      section.showChildren = !section.showChildren;
      this.$emit("navbar-height-changed");
    },
  },
};
</script>

<style scoped>
#nav-container {
  will-change: border-bottom-width;
  transition: border-bottom-width 0.1s ease-in;
}
.arrow-right {
  width: 0; 
  height: 0; 
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: 8px solid white;
}
.arrow-right.down {
  transform: rotate(90deg);
}
</style>
