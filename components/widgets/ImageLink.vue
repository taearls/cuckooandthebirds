<template>
  <div
    class="outline-none border-transparent"
    :class="isFocused ? 'shadow-outline-light-blur' : ''"
  >
    <a
      :href="imageHref"
      :target="target"
      :rel="rel"
      class="focus:shadow-none group"
      @focus="isFocused = true"
      @blur="isFocused = false"
    >
      <nuxt-img class="mx-auto w-full max-w-3xl min-w-[150px]" :src="imageSrc" :alt="imageAlt" format="jpg" />
    </a>
    <slot name="link-text" />
  </div>
</template>

<script>
export default defineComponent({
  props: {
    imageHref: {
      type: String,
      required: true,
    },
    imageSrc: {
      type: String,
      required: true,
    },
    imageAlt: {
      type: String,
      required: true,
    },
    target: {
      type: String,
      default: "_self",
    },
    rel: {
      type: String,
      default: "noreferrer",
    },
  },
  data () {
    return {
      isFocused: false,
    };
  },
});
</script>
