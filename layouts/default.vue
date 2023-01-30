<template>
  <div id="app">
    <placeholder :height="navbarHeight" />
    <nav-bar
      ref="nav-container"
      @navbar-height-changed="updateNavBarHeight"
    />
    <div id="body-wrapper">
      <slot />
    </div>

    <the-footer />
  </div>
</template>

<script>
import { useNavBarStore } from "@/stores/navbar-store";

import NavBar from "@/components/navigation/NavBar.vue";
import TheFooter from "@/components/global/TheFooter.vue";
import Placeholder from "@/components/widgets/Placeholder.vue";

const NAV_ADDITIONAL_OFFSET = 20;

export default {
  components: {
    NavBar,
    TheFooter,
    Placeholder,
  },
  setup () {
    const navBarStore = useNavBarStore();

    const isNavActive = computed(() => navBarStore.isNavActive);

    return {
      // you can also access the whole store in your component by returning it
      navBarStore,
      isNavActive,
    };
  },
  data () {
    return {
      navbarHeight: 84, // default value matches h-16 class + NAV_ADDITIONAL_OFFSET
    };
  },
  watch: {
    isNavActive () {
      this.updateNavBarHeight();
    },
  },
  mounted () {
    this.updateNavBarHeight();
    window.addEventListener("resize", this.updateNavBarHeight);
  },
  unmounted () {
    window.removeEventListener("resize", this.updateNavBarHeight);
  },
  methods: {
    updateNavBarHeight () {
      this.$nextTick(() => {
        const navContainer = this.$refs["nav-container"];
        this.navbarHeight = navContainer.$el.offsetHeight + NAV_ADDITIONAL_OFFSET;
      });
    },
  },
};
</script>

<style>
body {
  @apply bg-coolgray-900 font-default p-0 m-0;
}
body *:focus {
  outline: 0;
  box-shadow: 0 0 3pt 2pt rgb(178, 245, 234);
  border-color: transparent;
}

#body-wrapper {
  @apply w-4/5 mx-auto;
}

p {
  line-height: 2rem !important;
  /* max-width: 50ch; */
}

/* transitions */
.fade-enter-active {
  transition: all 400ms ease-out;
}
.fade-leave-active {
  transition: all 200ms ease-in;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
