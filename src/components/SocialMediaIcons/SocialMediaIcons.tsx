import { JustifyContentCSSValue } from "@/types/layout.ts";
import BandcampIcon from "../icons/BandcampIcon.tsx";
import InstagramIcon from "../icons/InstagramIcon.tsx";
import SpotifyIcon from "../icons/SpotifyIcon.tsx";
import YoutubeIcon from "../icons/YouTubeIcon.tsx";
import FlexContainer from "../layout/containers/FlexContainer/FlexContainer.tsx";
import SocialMediaIcon, { SocialMediaIconProps } from "./SocialMediaIcon.tsx";

const SOCIAL_MEDIA_ICONS: Array<SocialMediaIconProps> = [
  {
    href: "https://cuckooandthebirds.bandcamp.com",
    icon: <BandcampIcon />,
    name: "Bandcamp",
  },
  {
    href: "https://open.spotify.com/artist/3JcmKe00eIMMsC0MRkKknD?si=KAG0Wnb2Sr6TYP5Rp3MWeA",
    icon: <SpotifyIcon />,
    name: "Spotify",
  },
  {
    href: "https://www.instagram.com/cuckooandthebirds",
    icon: <InstagramIcon />,
    name: "Instagram",
  },
  {
    href: "https://www.youtube.com/@cuckooandthebirdsmusic",
    icon: <YoutubeIcon />,
    name: "YouTube",
  },
];

export default function SocialMediaIcons() {
  return (
    <FlexContainer justifyContent={JustifyContentCSSValue.CENTER} gapX={2}>
      {SOCIAL_MEDIA_ICONS.map(({ name, href, icon, ariaLabel }, index) => (
        <SocialMediaIcon
          key={`${icon}-${index}`}
          name={name}
          href={href}
          icon={icon}
          ariaLabel={ariaLabel}
        />
      ))}
    </FlexContainer>
  );
}
