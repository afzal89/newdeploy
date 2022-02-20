import React from "react";
import StoryIconWrapper from "./style.storyicon";
const StoryIcon = ({ title, imageUrl, toggleModal }) => {
  return (
    <StoryIconWrapper>
      <div className="story-icon" onClick={toggleModal}>
        <div className="story-pic">
          <img src={"/images/insta-story.jpg"}></img>
          {/* <img src={url || "/no-image.jpg"}></img> */}
        </div>
        <div className="story-time">
          <span>{title}</span>
        </div>
      </div>
    </StoryIconWrapper>
  );
};

export default StoryIcon;
