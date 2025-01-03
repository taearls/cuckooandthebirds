export type ParagraphProps = {
  children: React.ReactNode | React.ReactNode[];
};

export default function Paragraph({ children }: ParagraphProps) {
  return <p className="my-4 text-lg leading-normal md:text-xl">{children}</p>;
}
