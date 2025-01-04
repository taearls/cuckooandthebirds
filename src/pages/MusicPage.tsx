import CloudinaryImage from "@/components/CloudinaryImage/CloudinaryImage";
import HeadingOne from "@/components/layout/headings/HeadingOne";
import Paragraph from "@/components/layout/Paragraph/Paragraph";
import { Link } from "react-router";

export const RELEASE_SLUG_DATA = [
  {
    title: "Show Me The Dark",
    releaseId: "show-me-the-dark",
    cldImgPath: "Show Me The Dark/show-me-the-dark-artwork",
    alt: "Artwork for Show Me The Dark",
    year: 2021,
  },
  {
    title: "Twin Stars",
    releaseId: "twin-stars",
    cldImgPath: "Twin Stars/twin-stars-album-art.jpg",
    alt: "Album Artwork for Twin Stars",
    year: 2019,
  },
];

export default function MusicPage() {
  const sortedReleases = RELEASE_SLUG_DATA.sort((a, b) => {
    if (a.year > b.year) return -1;
    else if (a.year < b.year) return 1;
    return 0;
  });

  return (
    <main>
      <HeadingOne>Music</HeadingOne>
      <Paragraph>
        Click on the album artwork below to learn more about it!
      </Paragraph>
      <section className="flex flex-col md:flex-row justify-center">
        {sortedReleases.map((release) => (
          <div key={release.releaseId} className="mx-auto w-4/5">
            <Link to={`/music/${release.releaseId}`}>
              <CloudinaryImage
                alt={release.alt}
                publicId={release.cldImgPath}
              />
            </Link>
            <p className="text-xl sm:text-lg">
              {release.title} ({release.year})
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}

{
  /* <template>
  
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
