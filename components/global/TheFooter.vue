<template>
  <footer>
    <br>
    <social-media-icons />
    <p
      class="mx-auto text-white font-default text-center text-sm font-thin tracking-wide"
      v-html="footerText"
    />
    <the-embedded-player />
  </footer>
</template>

<script>
import SocialMediaIcons from "@/components/widgets/SocialMediaIcons.vue";
import TheEmbeddedPlayer from "@/components/global/TheEmbeddedPlayer.vue";

export default defineComponent({
  components: {
    SocialMediaIcons,
    TheEmbeddedPlayer,
  },
  computed: {
    footerText () {
      const currentYear = new Date().getFullYear();
      return `&copy; 2019-${currentYear} &bull; Cuckoo and the Birds`;
    },
  },
});
</script>

<style scoped>
footer {
  width: 100%;
  padding-bottom: 8px;
  margin-bottom: 120px !important; /* to override body * style */
}
</style>
