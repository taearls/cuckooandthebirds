import CloudinaryImage from "@/components/CloudinaryImage/CloudinaryImage";
import FlexContainer from "@/components/layout/containers/FlexContainer/FlexContainer";
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
        <FlexContainer
          flexFlow="column"
          responsive={{ flexFlow: { prefix: "md", value: "row" } }}
        >
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
        </FlexContainer>
      </section>
    </main>
  );
}
