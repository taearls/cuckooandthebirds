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
      <!-- <template v-if="isCloudinaryImage">
        <client-only>
          <cld-image
            class="flex justify-center m-2 group-hover:opacity-80"
            format="jpg"
            :public-id="imageSrc"
            :alt="imageAlt"
          >
            <cld-transformation
              width="400"
              quality="auto"
            />
          </cld-image>
        </client-only>
      </template> -->
      <!-- <template v-else> -->
      <img
        class="flex justify-center m-2 group-hover:opacity-80"
        :src="imageSrc"
        :alt="imageAlt"
      >
      <!-- </template> -->
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
    isCloudinaryImage: {
      type: Boolean,
      default: true,
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
