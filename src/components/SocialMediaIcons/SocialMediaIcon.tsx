export type SocialMediaIconProps = {
  name: string;
  href: string;
  ariaLabel?: string;
  icon: React.ReactNode | React.ReactNode[];
};

export default function SocialMediaIcon({
  name,
  ariaLabel = `Go to Cuckoo and the Birds's ${name}`,
  href,
  icon,
}: SocialMediaIconProps) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className="focus:shadow-outline-light dark:focus:shadow-outline-dark rounded-sm focus:outline-none"
      target="_blank"
    >
      <span className="rounded-sm text-purple-700 hover:text-cyan-400 dark:text-purple-400 dark:hover:text-cyan-300">
        {icon}
      </span>
    </a>
  );
}
