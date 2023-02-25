<template>
  <main
    :id="`${$route.params.releaseId}-release`"
    class="font-default text-white"
  >
    <section>
      <h1 class="text-red-600 text-center text-3xl md:text-4xl font-semibold mx-4 mb-8">
        {{ release.title }} ({{ release.year }})
      </h1>
      <div class="w-4/5 mx-auto">
        <div class="mx-auto w-11/12 mb-4">
          <image-link
            target="_blank"
            rel="noreferrer"
            class="flex-col justify-center m-2"
            :image-src="release.imgsrc"
            :image-alt="release.alt"
            :image-href="release.href"
          >
            <template #link-text>
              <span
                class="block text-center text-red-600 text-lg md:text-xl italic m-4"
              >Artwork by {{ release.artworkCredit }}</span>
            </template>
          </image-link>
        </div>
        <div class="px-8">
          <template v-for="(description, index) in release.descriptions" :key="'description-' + index">
            <p
              class="text-xl"
            >
              {{ description }}
            </p>
            <br>
          </template>
        </div>
        <div
          v-if="release.videosrc != null"
          class="flex flex-col text-center justify-center mx-auto mb-8"
        >
          <p class="text-lg my-2">
            Check out the official music video for {{ release.title }}!
          </p>
          <div class="mx-auto">
            <iframe
              width="560"
              height="315"
              :src="release.videosrc"
              :title="`YouTube video player for ${release.title}`"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            />
          </div>
        </div>
      </div>

      <text-card>
        <div>
          <h2 class="text-red-600 text-2xl font-semibold mb-4">
            Credits:
          </h2>
          <div class="my-4">
            <p
              v-for="(performer, index) in release.performingCredits"
              :key="'performer-' + index"
              class="px-8 text-xl"
            >
              {{ performer }}
            </p>
          </div>
          <div
            v-if="release.videoCredits.length > 0"
            class="my-4"
          >
            <p
              v-for="(videoCredit, index) in release.videoCredits"
              :key="'video-credit-' + index"
              class="px-8 text-xl"
            >
              {{ videoCredit }}
            </p>
          </div>
          <div class="my-4">
            <p
              v-for="(performingCredit, index) in release.recordingCredits"
              :key="'performing-credit-' + index"
              class="px-8 text-xl"
            >
              {{ performingCredit }}
            </p>
          </div>
        </div>
      </text-card>
    </section>
  </main>
</template>

<script>
import ImageLink from "@/components/widgets/ImageLink.vue";
import TextCard from "@/components/widgets/TextCard.vue";
import { releaseDetailsData } from "@/assets/data/releases";

export default defineComponent({
  components: {
    ImageLink,
    TextCard,
  },
  computed: {
    release () {
      const { releaseId } = this.$route.params;
      return releaseDetailsData[releaseId];
    },
  },
  mounted () {
    const releaseLinks = document.querySelectorAll(".release-link");
    for (let i = 0; i < releaseLinks.length; i++) {
      const releaseLink = releaseLinks[i];
      releaseLink.addEventListener("focus", this.addFocusStyleToParent);
      releaseLink.addEventListener("blur", this.removeFocusStyleFromParent);
    }
  },
  unmounted () {
    const releaseLinks = document.querySelectorAll(".release-link");
    for (let i = 0; i < releaseLinks.length; i++) {
      const releaseLink = releaseLinks[i];
      releaseLink.removeEventListener("focus", this.addFocusStyleToParent);
      releaseLink.removeEventListener("blur", this.removeFocusStyleFromParent);
    }
  },
  methods: {
    addFocusStyleToParent (e) {
      e.target.parentElement.style.boxShadow = "0 0 3pt 2pt rgb(178, 245, 234)";
    },
    removeFocusStyleFromParent (e) {
      e.target.parentElement.style.boxShadow = "";
    },
  },
});
</script>
