<template>
  <text-card>
    <main id="press">
      <h1 class="text-center font-default text-4xl font-bold text-red-600 mb-8">
        Press
      </h1>
      <h2 class="text-red-600 text-2xl font-semibold">
        Interviews:
      </h2>
      <div class="flex flex-col my-4">
        <template v-for="(interview, index) in interviews" :key="'interview' + index">
          <a
            :href="interview.href"
            rel="noreferrer"
            target="_blank"
            class="interview-link"
          >
            {{ interview.text }}
          </a>
        </template>
      </div>

      <h2 class="text-red-600 text-2xl font-semibold">
        Reviews:
      </h2>
      <div class="flex flex-col my-4">
        <template v-for="(review, index) in reviews" :key="'review' + index">
          <a
            :href="review.href"
            rel="noreferrer"
            target="_blank"
            class="review-link"
          >
            {{ review.text }}
          </a>
        </template>
      </div>
    </main>
  </text-card>
</template>

<script>
import TextCard from "@/components/widgets/TextCard.vue";
import { interviews } from "~~/assets/data/press/interviewData";
import { reviews } from "~~/assets/data/press/reviewData";

export default defineComponent({
  components: {
    TextCard,
  },
  data () {
    return {
      interviews,
      reviews,
    };
  },
});
</script>

<style scoped>
.interview-link, .review-link {
  @apply inline-block w-max text-white text-xl px-2 mx-6 my-2 hover:text-cyan-300 rounded-sm;
}
</style>
