import React, { useEffect, useState } from "react";

import { Modal } from "react-responsive-modal";
import Link from "next/link";
import "react-responsive-modal/styles.css";
import StoryWrapper from "./style.highlightedstory";
import StoryIcon from "../../StoryIcon";

const HighlightedStory = ({
  title,
  cover_media: { thumbnail_src },
  cover_media_cropped_thumbnail: { url },
}) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <>
      <StoryIcon toggleModal={onOpenModal} title={title} imageUrl={url} />

      <Modal
        open={open}
        center
        onClose={onCloseModal}
        classNames={{ modal: "customModal" }}
        styles={{
          modal: {
            background:
              "linear-gradient(18deg, #dee4e8 0%, rgb(236 229 228) 25%, rgb(239 237 237) 51%, #bfdaf3 75%, #d5e0ea 100%)",
            width: "360px",

            margin: "0",

            padding: "0",
          },
        }}
      >
        <StoryWrapper>
          <div className="content">
            <div className="video">
              <video src="/dummy-video.mp4" loop controls={false} muted />
            </div>
            {/* <img src="/no-image.jpg" /> */}
          </div>
        </StoryWrapper>
      </Modal>
    </>
  );
};

export default HighlightedStory;
