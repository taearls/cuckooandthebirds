<template>
  <div :style="`height: ${height}px`" />
</template>

<script>
export default defineComponent({
  props: {
    height: {
      type: Number,
      required: true,
    },
  },
});
</script>
