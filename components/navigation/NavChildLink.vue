<template>
  <li
    class="inline-block text-center sm:text-left border-gray-700 w-full mx-auto sm:mx-0 sm:w-auto"
  >
    <hr
      class="border-gray-700 w-4/5 sm:w-full mx-auto"
    >
    <nuxt-link
      :to="getFullChildPath(childLink.href)"
      class="child-link block px-4 my-2 sm:py-2 sm:my-0 text-sm sm:text-md hover:text-cyan-300 hover:opacity-100 rounded-sm w-full"
    >
      {{ childLink.name }}
    </nuxt-link>
  </li>
</template>

<script>
export default {
  props: {
    childLink: {
      type: Object,
      required: true,
    },
    parentPath: {
      type: String,
      required: true,
    },
    // use default value of true to handle one value being passed.
    isLast: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    getFullChildPath(childPath) {
      return this.parentPath + childPath;
    },
  },
};
</script>

<style scoped>
</style>
