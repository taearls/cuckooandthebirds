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
      <FlexContainer flexFlow="column" gapY={8}>
        <HeadingOne>Music</HeadingOne>
        <Paragraph>
          Click on the album artwork below to learn more about it!
        </Paragraph>
        <section>
          <FlexContainer
            flexFlow="column"
            gapX={4}
            gapY={4}
            responsive={{ flexFlow: { prefix: "md", value: "row" } }}
          >
            {sortedReleases.map((release) => (
              <FlexContainer
                key={release.releaseId}
                flexFlow="column"
                alignItems="center"
                gapY={2}
              >
                <Link to={`/music/${release.releaseId}`}>
                  <div className="hover:opacity-75">
                    <CloudinaryImage
                      alt={release.alt}
                      publicId={release.cldImgPath}
                    />
                  </div>
                </Link>
                <Paragraph>
                  {release.title} ({release.year})
                </Paragraph>
              </FlexContainer>
            ))}
          </FlexContainer>
        </section>
      </FlexContainer>
    </main>
  );
}
