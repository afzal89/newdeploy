import { Link } from "@material-ui/core";
import React from "react";
import Header from "../Header";
import LeftSidebar from "../LeftSidebar";
import PostCard from "../PostCard";

import ProfileDetailWrapper from "./style.postdetail";
const PostDetailPage = () => {
  return (
    <ProfileDetailWrapper>
      <div className="landing">
        <LeftSidebar />
        <div className="right-panel">
          <div className="posts-display">
            <PostCard />
          </div>
        </div>
      </div>
    </ProfileDetailWrapper>
  );
};

export default PostDetailPage;
