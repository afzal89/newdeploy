import React, { useState, useRef } from "react";
import Masonry from "react-masonry-css";
import { useRouter } from "next/router";
import LeftSidebar from "../LeftSidebar";
import ProfileWrapper from "./style.profile";
import { saveAs } from "file-saver";
import HighlightedStory from "../BaseComponents/HighlightedStory";
import Feed from "./Feed";
import { GET_USER_PROFILE_DETAIL } from "../../services";
import InfiniteScroll from "react-infinite-scroll-component";
import { Box } from "@material-ui/core";

const breakPoints = {
  default: 2,
  768: 1,
};

const Profile = (props) => {
  const { data } = props;

  const [profile, setprofile] = useState();
  const [highlightstories, sethighlightstories] = useState([]);
  const [feed, setfeed] = useState(data?.media?.data || []);
  const [loading, setloading] = useState(false);
  const nextRef = useRef(data?.media?.paging?.cursors.after);

  const router = useRouter();
  const username = router.query.profile;

  function downloadURL(url) {
    saveAs(url, "post-image");
  }

  const fetchData = () => {
    if (nextRef.current) {
      GET_USER_PROFILE_DETAIL(username, nextRef.current)
        .then((res) => {
          if (Array.isArray(res?.data?.business_discovery?.media.data)) {
            setfeed((current) => [
              ...current,
              ...res.data.business_discovery.media.data,
            ]);
          }

          if (res?.data.business_discovery?.media?.paging?.cursors?.after) {
            nextRef.current =
              res?.data.business_discovery?.media?.paging?.cursors?.after;
          } else {
            nextRef.current = null;
          }
        })
        .catch((err) => {
          nextRef.current = null;
        });
    }
  };

  return (
    <ProfileWrapper>
      {loading ? (
        <div className="loader">
          <img src="/loader2.svg" />
        </div>
      ) : (
        <div className="landing">
          {data && <LeftSidebar {...data} />}
          <div className="right-panel">
            <Box
              component="h1"
              textAlign="center"
              sx={{
                textAlign: "center",
              }}
            >
              {data?.name} instagram profile
            </Box>
            {highlightstories?.length > 0 && (
              <div className="stories">
                <h2>Stories</h2>
                <div className="stories-display">
                  {highlightstories.map((m, i) => {
                    console.log(m.node);
                    return (
                      // <StoryIcon {...m.node} />
                      <HighlightedStory key={i} {...m.node} />
                    );
                  })}
                </div>
              </div>
            )}
            {/* <div className="mobile-navigation">
            <div className="stories">
              <Link>Stories</Link>
            </div>
            <div className="posts">
              <Link>Posts</Link>
            </div>
          </div> */}
            <div className="feed">
              {profile && <h2>Feed</h2>}
              <div className="posts-display">
                <InfiniteScroll
                  dataLength={feed.length} //This is important field to render the next data
                  next={fetchData}
                  hasMore={!!nextRef.current}
                  loader={<h3>Loading...</h3>}
                  // endMessage={
                  //   <p style={{ textAlign: "center" }}>
                  //     <b>Yay! You have seen it all</b>
                  //   </p>
                  // }
                  // below props only if you need pull down functionality
                  // refreshFunction={this.refresh}
                  // pullDownToRefresh
                  // pullDownToRefreshThreshold={50}
                  // pullDownToRefreshContent={
                  //   <h3 style={{ textAlign: "center" }}>
                  //     &#8595; Pull down to refresh
                  //   </h3>
                  // }
                  // releaseToRefreshContent={
                  //   <h3 style={{ textAlign: "center" }}>
                  //     &#8593; Release to refresh
                  //   </h3>
                  // }
                >
                  <Masonry
                    breakpointCols={breakPoints}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                  >
                    {feed?.length > 0
                      ? feed.map((item, i) => {
                          return <Feed key={i} item={item} />;
                        })
                      : profile && (
                          <div>{`${profile?.full_name} has no feed!`}</div>
                        )}
                  </Masonry>
                </InfiniteScroll>
              </div>
            </div>
          </div>
        </div>
      )}
    </ProfileWrapper>
  );
};

export default Profile;
