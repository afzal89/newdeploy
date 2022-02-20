import React, { useState } from "react";

import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import StoryWrapper from "./style.profilestory";

const ProfileStory = ({ img }) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <>
      <button onClick={onOpenModal}>
        <div className="profile-image">
          {/* <img src={profile_pic_url} alt={full_name} /> */}
          <img src={img || "/user.jpg"} />
        </div>
      </button>

      <Modal
        open={open}
        center
        onClose={onCloseModal}
        classNames={{ modal: "customModal" }}
        styles={{
          modal: {
            margin: "0",

            padding: "0",
          },
        }}
      >
        <StoryWrapper>
          <div className="content">
            <img src={img || "/user.jpg"} />
          </div>
        </StoryWrapper>
      </Modal>
    </>
  );
};

export default ProfileStory;
