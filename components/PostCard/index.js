import {
  faCloudDownloadAlt,
  faComment,
  faFileDownload,
  faGrinHearts,
  faHeart,
  faHeartbeat,
  faHeartBroken,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import PostCardWrapper from "./style.postcard";
const PostCard = () => {
  return (
    <PostCardWrapper>
      <div className="card">
        <div className="card-image">
          <img src="/images/posts_1.png" />
        </div>
        <div className="card-bottom">
          <div className="content-1">
            <div className="timestamp">
              <span>3 min ago</span>
            </div>
            <div className="download">
              <span>Download</span>
              <FontAwesomeIcon icon={faCloudDownloadAlt} />
            </div>
          </div>
          <div className="content-2">
            <div>
              <span>#Repost</span>
              <span>
                As we embark on our new journey, aiming to empower each ans
                every individual and community, we strive to enrich lives.
              </span>
            </div>
          </div>
          <div className="content-3">
            <div className="hearts">
              <FontAwesomeIcon icon={faHeart} />
              <span>4566</span>
            </div>
            <div className="comments">
              <FontAwesomeIcon icon={faComment} />
              <span>654</span>
            </div>
          </div>
        </div>
      </div>
    </PostCardWrapper>
  );
};

export default PostCard;
