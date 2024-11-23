"use client";

import { BandcampIcon, BlueskyIcon } from "../icons/svg";
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
    icon: <></>, // <SpotifyIcon />,
  },
  {
    name: "Bluesky",
    href: "https://bsky.app/profile/tylerearls.com",
    icon: <BlueskyIcon />,
  },
];

export default function SocialMediaIcons() {
  return (
    <div className="flex justify-center gap-x-1">
      {SOCIAL_MEDIA_ICONS.map(({ name, href, icon, ariaLabel }, index) => (
        <SocialMediaIcon
          key={index}
          name={name}
          href={href}
          icon={icon}
          ariaLabel={ariaLabel}
        />
      ))}
    </div>
  );
}
