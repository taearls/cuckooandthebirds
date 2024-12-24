export default function MusicPage() {
  return <div>Music Page</div>;
}

{
  /* <template>
  <main id="releases" class="font-default text-white">
    <h1 class="text-center font-default text-4xl font-bold text-red-600 mb-8">
      Releases
    </h1>
    <text-card class="release-header-text">
      Click on the album artwork below to learn more about it!
    </text-card>
    <section class="flex flex-col md:flex-row justify-center">
      <div
        v-for="release in sortedReleases"
        :key="release.id"
        class="mx-auto w-4/5"
      >
        <image-link
          class="mx-auto my-4 w-11/12"
          :image-src="release.cldImgPath"
          :image-alt="release.alt"
          :image-href="`releases/${release.releaseId}`"
        >
          <template v-slot:link-text>
            <text-card class="mx-auto text-center">
              <p class="text-xl sm:text-lg">
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
import ImageLink from "@/components/widgets/ImageLink.vue";
import TextCard from "@/components/widgets/TextCard.vue";

import releases from "@/assets/data/releases/releaseSlugData.json";

export default {
  components: {
    ImageLink,
    TextCard,
  },
  data() {
    return {
      releases,
    };
  },
  computed: {
    sortedReleases() {
      return [...this.releases].sort((a, b) => a.year > b.year);
    },
  },
};
</script>

<style>
.release-header-text {
  @apply my-4 text-xl mx-auto text-center max-w-65ch;
}
</style> */
}
