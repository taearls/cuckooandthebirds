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
      <icon :name="link.icon.name" size="32px" />
    </a>
  </div>
</template>

<script lang="ts">
/*
 * href: link to social media site
 * ariaLabel: website name that will be attached to aria-label
 * icon: {
 *  name: identifying name of icon
 * }
 */
export type SocialLink = {
  href: string;
  ariaLabel: string;
  icon: { name: string };
}

const socialLinks: SocialLink[] = [
  {
    href: "https://cuckooandthebirds.bandcamp.com",
    ariaLabel: "Bandcamp",
    icon: {
      name: "mdi:bandcamp",
    },
  },
  {
    href: "https://www.youtube.com/channel/UCoDdh8m-C8GPhGktauuuifQ",
    ariaLabel: "YouTube",
    icon: {
      name: "mdi:youtube",
    },
  },
  {
    href: "https://open.spotify.com/artist/3JcmKe00eIMMsC0MRkKknD",
    ariaLabel: "Spotify",
    icon: {
      name: "mdi:spotify",
    },
  },
  {
    href: "https://www.instagram.com/cuckooandthebirds",
    ariaLabel: "Instagram",
    icon: {
      name: "mdi:instagram",
    },
  },
  {
    href: "https://www.twitter.com/cuckooandbirds",
    ariaLabel: "Twitter",
    icon: {
      name: "mdi:twitter",
    },
  },
  {
    href: "mailto:cuckooandthebirds@gmail.com",
    ariaLabel: "Email",
    icon: {
      name: "mdi:email",
    },
  },
];

export default defineComponent({
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
