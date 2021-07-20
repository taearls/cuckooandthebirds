<template>
  <!-- TODO: implement more robust a11y for dropdown menu: -->
  <!-- https://www.w3.org/TR/wai-aria-practices-1.1/#menubutton -->
  <div 
    class="w-full"
  >
    <div class="flex items-center">
      <button
        v-if="parent.childLinks && parent.childLinks.length > 0"
        :data-parent-path="parent.href"
        class="flex items-center justify-center my-1 p-0 sm:mx-2 sm:my-0 sm:pl-2 sm:pr-1 text-lg group hover:opacity-100 rounded-sm w-full sm:w-auto"
        @click="handleDropdownClick(parent)"
      >
        <span class="group-hover:text-cyan-300">{{ parent.name }}</span>
        <div
          class="inline-block arrow-right mx-2 group-hover:border-l-cyan-300 transition-transform"
          :class="{ down: parent.showChildren }"
        />
      </button>
    </div>
    <div 
      v-if="parent.childLinks && parent.childLinks.length > 0"
      v-show="parent.showChildren"
    >
      <ul class="static sm:absolute top-full z-20 flex flex-col sm:border sm:border-gray-600 bg-coolgray-900">
        <nav-child-link 
          v-for="(childLink, childLinkIndex) in parent.childLinks"
          :key="`nav-child-link-${childLinkIndex}`"
          :child-link="childLink"
          :parent-path="parent.href"
          :is-last="childLinkIndex === parent.childLinks.length - 1"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import NavChildLink from "./NavChildLink.vue";

export default {
  components: {
    NavChildLink,
  },
  props: {
    parent: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleDropdownClick(parent) {
      parent.showChildren = !parent.showChildren;
      this.$emit("toggle");
    },
    getFullChildPath(childPath) {
      return this.parent.parentPath + childPath;
    },
  },
};
</script>

<style scoped>
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
