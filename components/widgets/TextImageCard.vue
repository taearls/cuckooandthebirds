<template>
  <div
    class="flex flex-col sm:flex-row w-full justify-between"
    :class="imageFirst ? 'mt-4' : 'my-8 sm:flex-row-reverse'"
  >
    <div class="p-4 self-center max-w-md w-full sm:w-1/2 text-red-500 text-center">
      <slot name="image" />
      <slot name="photo-credit" />
    </div>
    <div class="p-4 self-center w-full sm:w-1/2">
      <slot name="text" />
    </div>
  </div>
</template>

<script>
export default defineComponent({
  props: {
    imageFirst: {
      type: Boolean,
      default: true,
    },
  },
});
</script>
