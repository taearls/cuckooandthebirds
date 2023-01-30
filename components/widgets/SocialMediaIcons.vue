<template>
  <div class="flex justify-center">
    <i class="fab fa-youtube" />
    <a
      v-for="(link, index) in socialLinks"
      :key="index"
      class="mt-4 px-2 py-4 sm:px-4 text-red-600 hover:text-cyan-300 hover:opacity-100 rounded-sm"
      rel="noreferrer"
      target="_blank"
      :href="link.href"
      :aria-label="`Visit Cuckoo and the Birds's ${link.ariaLabel}`"
    >
      <span>
        <!-- <font-awesome-icon
          v-show="pageLoaded"
          :icon="[link.icon.lib, link.icon.to]"
          size="2x"
        /> -->
      </span>
    </a>
  </div>
</template>

<script>
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import { faBandcamp, faSpotify, faYoutube, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// library.add(faBandcamp, faSpotify, faYoutube, faEnvelope, faInstagram, faTwitter);

// TODO: add socialLinks to setup hook when Vue 3.x is released

/*
 * href: link to social media site
 * ariaLabel: website name that will be attached to aria-label
 * icon: {
 *  lib: font-awesome class
 *  to: name of destination (lowercase)
 * }
 */
const socialLinks = [
  {
    href: "https://cuckooandthebirds.bandcamp.com",
    ariaLabel: "Bandcamp",
    icon: {
      lib: "fab",
      to: "bandcamp",
    },
  },
  {
    href: "https://www.youtube.com/channel/UCoDdh8m-C8GPhGktauuuifQ",
    ariaLabel: "YouTube",
    icon: {
      lib: "fab",
      to: "youtube",
    },
  },
  {
    href: "https://open.spotify.com/artist/3JcmKe00eIMMsC0MRkKknD",
    ariaLabel: "Spotify",
    icon: {
      lib: "fab",
      to: "spotify",
    },
  },
  {
    href: "https://www.instagram.com/cuckooandthebirds",
    ariaLabel: "Instagram",
    icon: {
      lib: "fab",
      to: "instagram",
    },
  },
  {
    href: "https://www.twitter.com/cuckooandbirds",
    ariaLabel: "Twitter",
    icon: {
      lib: "fab",
      to: "twitter",
    },
  },
  {
    href: "mailto:cuckooandthebirds@gmail.com",
    ariaLabel: "Email",
    icon: {
      lib: "fa",
      to: "envelope",
    },
  },
];

export default defineComponent({
  // components: {
  //   FontAwesomeIcon,
  // },
  data () {
    return {
      socialLinks,
      pageLoaded: false,
    };
  },
  mounted () {
    this.pageLoaded = true;
  },
});
</script>

<style scoped>

</style>
