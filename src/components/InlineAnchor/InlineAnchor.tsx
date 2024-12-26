import ExternalLinkIcon from "../icons/ExternalLinkIcon";

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
  return (
    <span className="inline-block">
      <a
        href={href}
        aria-label={ariaLabel}
        target={isExternal ? "_blank" : undefined}
        rel="noreferrer"
      >
        <InlineAnchorContent isExternal={isExternal} bold={bold}>
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
}: Pick<InlineAnchorProps, "children" | "isExternal" | "bold">) {
  const boldClass = bold ? "font-extrabold" : "font-normal";

  return (
    <span
      className={`${boldClass} accent focus:shadow-outline-light dark:focus:shadow-outline-dark inline-flex items-center rounded-sm text-lg focus:outline-none sm:items-center sm:justify-center group`}
    >
      <span className={`inline-flex`}>{children}</span>
      {isExternal && (
        <span className="ml-1 inline-flex">
          <ExternalLinkIcon />
        </span>
      )}
    </span>
  );
}
