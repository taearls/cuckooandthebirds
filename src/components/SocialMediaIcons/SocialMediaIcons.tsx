import BandcampIcon from "../icons/BandcampIcon";
import InstagramIcon from "../icons/InstagramIcon";
import SpotifyIcon from "../icons/SpotifyIcon";
import YoutubeIcon from "../icons/YouTubeIcon";
import SocialMediaIcon, { SocialMediaIconProps } from "./SocialMediaIcon";

const SOCIAL_MEDIA_ICONS: Array<SocialMediaIconProps> = [
  {
    name: "Bandcamp",
    href: "https://cuckooandthebirds.bandcamp.com",
    icon: <BandcampIcon />,
  },
  {
    name: "Spotify",
    href: "https://open.spotify.com/artist/3JcmKe00eIMMsC0MRkKknD?si=KAG0Wnb2Sr6TYP5Rp3MWeA",
    icon: <SpotifyIcon />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/cuckooandthebirds",
    icon: <InstagramIcon />,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@cuckooandthebirdsmusic",
    icon: <YoutubeIcon />,
  },
];

export default function SocialMediaIcons() {
  return (
    <div className="flex justify-center gap-x-2">
      {SOCIAL_MEDIA_ICONS.map(({ name, href, icon, ariaLabel }, index) => (
        <SocialMediaIcon
          key={`${icon}-${index}`}
          name={name}
          href={href}
          icon={icon}
          ariaLabel={ariaLabel}
        />
      ))}
    </div>
  );
}
