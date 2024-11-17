import { jsxOrEmptyString } from "@/util/utils";
import RenderIf from "../layout/RenderIf";
import styles from "./VideoPlayer.module.css";

export type VideoPlayerProps = {
  title: string;
  srcVideo: string;
  anchor?: {
    href: string;
    title: string;
  };
};

export default function VideoPlayer({
  title = "Embedded Bandcamp Music Player",
  srcVideo,
  anchor,
}: VideoPlayerProps) {
  return (
    <iframe
      rel="preconnect"
      title={title}
      className={styles["video-player"]}
      src={srcVideo}
      seamless
    >
      <RenderIf condition={Boolean(anchor)}>
        <a href={anchor?.href || ""}>{jsxOrEmptyString(anchor?.title)}</a>
      </RenderIf>
    </iframe>
  );
}
