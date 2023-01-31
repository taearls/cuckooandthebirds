<template>
  <main
    id="releases"
    class="font-default text-white"
  >
    <h1 class="text-center font-default text-4xl font-bold text-red-600 mb-8">
      Releases
    </h1>
    <text-card class="release-header-text">
      Click on the album artwork below to learn more about it!
    </text-card>
    <section class="flex flex-col md:flex-row justify-center">
      <div
        v-for="release in releases"
        :key="release.id"
        class="mx-auto w-4/5"
      >
        <image-link
          class="mx-auto my-4 w-11/12"
          :image-src="release.src"
          :image-alt="release.alt"
          :image-href="`releases/${release.releaseId}`"
        >
          <template #link-text>
            <text-card
              class="mx-auto my-2 text-center"
            >
              <p class="text-lg sm:text-xl">
                {{ release.title }} ({{ release.year }})
              </p>
            </text-card>
          </template>
        </image-link>
      </div>
    </section>
  </main>
</template>

<script>
import { defineComponent } from "vue";
import ImageLink from "@/components/widgets/ImageLink.vue";
import TextCard from "@/components/widgets/TextCard.vue";
import releases from "@/assets/data/releases/releaseSlugData.json";

export default defineComponent({
  components: {
    ImageLink,
    TextCard,
  },
  data () {
    return {
      releases,
    };
  },
});
</script>

<style>
.release-header-text {
  @apply my-4 text-xl sm:text-2xl mx-auto text-center max-w-65ch;
}
</style>
