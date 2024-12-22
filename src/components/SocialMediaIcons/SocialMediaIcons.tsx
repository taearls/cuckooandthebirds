"use client";

import SocialMediaIcon, { SocialMediaIconProps, SocialMediaIconVariant } from "./SocialMediaIcon";

const SOCIAL_MEDIA_ICONS: Array<SocialMediaIconProps> = [
  {
    name: "Bandcamp",
    href: "https://cuckooandthebirds.bandcamp.com",
    icon: SocialMediaIconVariant.BANDCAMP,
  },
  {
    name: "Spotify",
    href: "https://open.spotify.com/artist/3JcmKe00eIMMsC0MRkKknD?si=KAG0Wnb2Sr6TYP5Rp3MWeA",
    icon: SocialMediaIconVariant.SPOTIFY, // <SpotifyIcon />,
  },
  {
    name: "Instagram",
    href: "https://bsky.app/profile/tylerearls.com",// TODO: update link
    icon: SocialMediaIconVariant.INSTAGRAM,
  },
  {
    name: "Instagram",
    href: "https://bsky.app/profile/tylerearls.com", // TODO: update link
    icon: SocialMediaIconVariant.YOUTUBE,
  },
];

export default function SocialMediaIcons() {
  return (
    <div className="flex justify-center gap-x-1">
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
