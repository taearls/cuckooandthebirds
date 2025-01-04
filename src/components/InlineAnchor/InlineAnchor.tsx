import { mergeClasses } from "@/util/styling/styling.utils";

import ExternalLinkIcon from "../icons/ExternalLinkIcon";

export type InlineAnchorProps = {
  ariaLabel: string;
  href: string;
  children: string;
  accent?: boolean;
  isExternal?: boolean;
  bold?: boolean;
  noColor?: boolean;
  underline?: boolean;
};

export default function InlineAnchor({
  ariaLabel,
  href,
  children,
  isExternal = false,
  bold = true,
  accent = false,
  underline = true,
}: InlineAnchorProps) {
  return (
    <span className="inline-block">
      <a
        href={href}
        aria-label={ariaLabel}
        target={isExternal ? "_blank" : undefined}
        rel="noreferrer"
      >
        <InlineAnchorContent
          isExternal={isExternal}
          accent={accent}
          bold={bold}
          underline={underline}
        >
          {children}
        </InlineAnchorContent>
      </a>
    </span>
  );
}

export function InlineAnchorContent({
  children,
  isExternal = false,
  bold = true,
  accent = false,
  underline = true,
}: Omit<InlineAnchorProps, "href" | "ariaLabel">) {
  const boldClass = bold ? "font-extrabold" : "font-normal";

  return (
    <span
      className={mergeClasses(
        boldClass,
        accent && "accent",
        "focus:shadow-outline-light gap-x-1 dark:focus:shadow-outline-dark inline-flex items-center rounded-sm text-lg focus:outline-none sm:items-center sm:justify-center group",
      )}
    >
      <span className={mergeClasses(underline && "underline", "inline-flex")}>
        {children}
      </span>
      {isExternal && (
        <span className="inline-flex">
          <ExternalLinkIcon />
        </span>
      )}
    </span>
  );
}
