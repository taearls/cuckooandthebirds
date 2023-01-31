<template>
  <div>
    <text-card>
      <div>
        <h1
          class="text-center font-default text-4xl font-bold text-red-600 mb-8"
        >
          Our Story
        </h1>
        <section class="text-white text-xl">
          <text-image-card
            v-for="(item, index) in textAndImageData"
            :key="'text-item-' + index"
            :image-first="index % 2 === 0"
          >
            <template #image>
              <nuxt-img
                class="flex justify-center m-2 group-hover:opacity-80"
                :src="item.src"
                :alt="item.alt"
                preset="profile"
              />
            </template>
            <template #photo-credit>
              <p class="my-2">
                Photo by Sanjana Elina
              </p>
            </template>
            <template #text>
              <p
                v-if="item.parseHTML"
                v-html="item.text"
              />
              <p v-else>
                {{ item.text }}
              </p>
            </template>
          </text-image-card>
        </section>
      </div>
    </text-card>
  </div>
</template>

<script>
import TextCard from "@/components/widgets/TextCard.vue";
import TextImageCard from "@/components/widgets/TextImageCard.vue";
import { homePageTextData } from "@/assets/data/home";

export default defineComponent({
  components: {
    TextCard,
    TextImageCard,
  },
  data () {
    return {
      textData: homePageTextData,
      photoGroupLengths: {
        // harmonica: 2,
        joy: 5,
        martin: 11,
        profile: 7,
        rickenbacker: 6,
        telecaster: 2,
      },
    };
  },
  computed: {
    shuffledPhotoGroups () {
      return Object.keys(this.photoGroupLengths).sort(() => 0.5 - Math.random());
    },
    textAndImageData () {
      const photoGroups = this.shuffledPhotoGroups;
      return this.textData.map((item, i) => {
        const photoGroupName = photoGroups[i];
        if (photoGroupName == null) { return item; }

        const photoGroupLength = this.photoGroupLengths[photoGroupName];
        const photoId = this.getRandomNumberInRange({ max: photoGroupLength });
        return {
          ...item,
          src: `Sanjana%20Quarantine%20Photoshoot/${photoGroupName}/${photoId}`,
          alt: `Sanjana Quarantine Photoshoot ${photoGroupName}-${photoId}`,
        };
      });
    },
  },
  methods: {
    getRandomNumberInRange ({ max, min = 1 }) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
  },
});
</script>
