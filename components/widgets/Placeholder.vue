<template>
  <div :style="`height: ${height}px`" />
</template>

<script>
export default {
  props: {
    height: {
      type: Number,
      required: true,
    },
  },
};
</script>
