<template>
  <main
    :id="`${releaseId}-release`"
    class="font-default text-white"
  >
    <section>
      <h1 class="text-red-600 text-center text-3xl font-semibold mx-4 mb-8">
        {{ release.title }} ({{ release.year }})
      </h1>
      <div class="w-4/5 mx-auto">
        <div class="mx-auto w-11/12 mb-4 md:w-1/2 md:float-left md:mr-8 md:mb-2">
          <image-link
            target="_blank"
            rel="noreferrer"
            class="flex-col justify-center m-2"
            :image-src="release.imgsrc"
            :image-alt="release.alt"
            :image-href="release.href"
          >
            <cld-image
              class="flex justify-center m-2"
              format="jpg"
              :public-id="release.imgsrc"
              :alt="release.alt"
            >
              <cld-transformation
                width="400"
                quality="auto"
              />
            </cld-image>
            <span
              slot="link-text"
              class="block text-center text-red-600 text-lg italic mx-2"
            >Artwork by {{ release.artworkCredit }}</span>
          </image-link>
        </div>
        <div class="px-8">
          <template v-for="(description, index) in release.descriptions">
            <p
              :key="'description-' + index"
              class="text-xl"
            >
              {{ description }}
            </p>
            <br :key="'description-break-' + index">
          </template>
        </div>
        <div 
          v-if="release.videosrc != null"
          class="flex flex-col text-center justify-center mx-auto mb-8"
        >
          <p class="text-lg my-2">
            Check out the official music video for {{ release.title }}!
          </p>
          <lazy-youtube 
            ref="releaseVideo"
            class="mx-auto"
            :src="release.videosrc"
          />
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
import { LazyYoutube } from "vue-lazytube";
import ImageLink from "@/components/widgets/ImageLink.vue";
import TextCard from "@/components/widgets/TextCard.vue";
import releaseDetailsData from "@/assets/data/releases/releaseDetailsData.json";

export default {
  components: {
    ImageLink,
    LazyYoutube,
    TextCard,
  },
  async asyncData({ params, error }) {
    const releaseId = params.slug;
    if (releaseId in releaseDetailsData === false) {
      return error({ statusCode: 404, message: `${releaseId} does not exist` });
    }
    return { releaseId };
  },
  computed: {
    release() {
      if (this.releaseId in releaseDetailsData) {
        return releaseDetailsData[this.releaseId];
      }
      // in practice, this should never happen because asyncData creates the 404 response for us.
      throw new Error(`${this.releaseId} is not a valid release id.`);
    },
  },
  mounted() {
    const releaseLinks = document.querySelectorAll(".release-link");
    for (let i = 0; i < releaseLinks.length; i++) {
      let releaseLink = releaseLinks[i];
      releaseLink.addEventListener("focus", this.addFocusStyleToParent);
      releaseLink.addEventListener("blur", this.removeFocusStyleFromParent);
    }
  },
  destroyed() {
    const releaseLinks = document.querySelectorAll(".release-link");
    for (let i = 0; i < releaseLinks.length; i++) {
      let releaseLink = releaseLinks[i];
      releaseLink.removeEventListener("focus", this.addFocusStyleToParent);
      releaseLink.removeEventListener("blur", this.removeFocusStyleFromParent);
    }
  },
  methods: {
    addFocusStyleToParent(e) {
      e.target.parentElement.style.boxShadow = "0 0 3pt 2pt rgb(178, 245, 234)";
    },
    removeFocusStyleFromParent(e) {
      e.target.parentElement.style.boxShadow = "";
    },
  },
};
</script>
