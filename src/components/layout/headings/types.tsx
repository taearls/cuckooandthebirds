import { TextAlignment } from "@/types/layout";

export type HeadingProps = {
  children: React.ReactNode | React.ReactNode[];
  // TODO: find better way to express this
  align?:
    | typeof TextAlignment.LEFT
    | typeof TextAlignment.CENTER
    | typeof TextAlignment.RIGHT;
  accent?: boolean;
};
