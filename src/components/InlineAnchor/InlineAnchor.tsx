// import Link from "next/link";
import { ExternalLinkIcon } from "../icons";

export type InlineAnchorProps = {
  ariaLabel: string;
  href: string;
  children: string;
  isExternal?: boolean;
  bold?: boolean;
  noColor?: boolean;
};

export default function InlineAnchor({
  ariaLabel,
  href,
  children,
  isExternal = false,
  bold = true,
}: InlineAnchorProps) {
  const boldClass = bold ? "font-extrabold" : "font-normal";
  return (
    <span className="inline-block">
      <a
        className={`${boldClass} accent focus:shadow-outline-light dark:focus:shadow-outline-dark inline-flex items-center rounded-sm text-lg focus:outline-none sm:items-center sm:justify-center group`}
        href={href}
        aria-label={ariaLabel}
        target={isExternal ? "_blank" : undefined}
        rel="noreferrer"
      >
        <span className={`inline-flex`}>{children}</span>
        {isExternal && (
          <span className="ml-1 inline-flex">
            <ExternalLinkIcon />
          </span>
        )}
      </a>
    </span>
  );
}
