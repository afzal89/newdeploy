import { Box } from "@material-ui/core";
import Link from "next/link";
import React from "react";
import { PROFILE } from "../../site-settings/site-navigation";
import { numFormatter } from "../../util/helper";
import ProfileStory from "../BaseComponents/ProfileStory";
import LeftSidebarWrapper from "./style.leftsidebar";

const LeftSidebar = ({
  followers_count,
  follows_count,
  media_count,
  biography,
  external_url,
  city_name,
  name,
  username,
  profile_picture_url,
}) => {
  return (
    <LeftSidebarWrapper>
      <div className="left-panel">
        <div className="profile-outer">
          {/* <div className="profile-image">
           
            <img src="/user.jpg" />
          </div> */}
          <ProfileStory img={profile_picture_url} />
          <div className="profile-content">
            <Box textAlign="center" component="h2">
              {name}
            </Box>
            <p>
              <Link href={`/${PROFILE}/${username}`}>
                <a rel="dofollow" href={`/${PROFILE}/${username}`}>
                  @{username}
                </a>
              </Link>
            </p>
          </div>
        </div>
        <div className="count-outer">
          <div className="posts-outer">
            <div className="posts-value">
              <span>{numFormatter(media_count)}</span>
              <p>Post</p>
            </div>
          </div>
          <div className="followers-outer">
            <div className="followers-value">
              <span>{numFormatter(followers_count)}</span>
              <p>Followers</p>
            </div>
          </div>
          <div className="following-outer">
            <div className="following-value">
              <span>{numFormatter(follows_count)}</span>
              <p>Following</p>
            </div>
          </div>
        </div>
        <div className="profile-bio">
          <div className="bio-content">
            <span>{biography}</span>
            <a target="_blank" href={external_url}>
              {external_url}
            </a>
            {city_name || ""}
          </div>
        </div>
        {/* <div className="navigation">
          <div className="stories">
            <Link href="!#">
              <a href="!#">
                <FontAwesomeIcon icon={faDotCircle} />
                <span>Stories</span>
              </a>
            </Link>
          </div>
          <div className="posts">
            <Link href="!#">
              <a href="!#">
                <FontAwesomeIcon icon={faCopy} />
                <span>Posts</span>
              </a>
            </Link>
          </div>
        </div> */}
      </div>
    </LeftSidebarWrapper>
  );
};

export default LeftSidebar;
