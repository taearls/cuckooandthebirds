import { mergeClasses } from "@/util/styling/styling.utils";

export type ParagraphProps = {
  children: React.ReactNode | React.ReactNode[];
  accent?: boolean;
  italic?: boolean;
};

export default function Paragraph({
  children,
  accent = false,
  italic = false,
}: ParagraphProps) {
  return (
    <p
      className={mergeClasses(
        accent && "accent",
        italic && "italic",
        "my-4 text-lg leading-normal md:text-xl",
      )}
    >
      {children}
    </p>
  );
}
