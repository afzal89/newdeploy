import { faComment, faHeart, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import React, { useState, useEffect, useRef } from "react";
import Masonry from "react-masonry-css";
import HashTagWrapper from "./style.HashTagpostPage";
import { saveAs } from "file-saver";
import Link from "next/link";
import { fromNow, numFormatter } from "../../util/helper";
import { MEDIA } from "../../util/constants";
import Carousel from "../Carousel";
import { GET_RECENT_MEDIA_BY_HASHTAG } from "../../services";
import InfiniteScroll from "react-infinite-scroll-component";
import Image from "next/image";
import { HASHTAG, PROFILE } from "../../site-settings/site-navigation";
import { Box, Typography } from "@material-ui/core";

const HashTagPostPage = (props) => {
  const { data, id } = props;
  const router = useRouter();
  const [posts, setposts] = useState(data?.data || []);
  const nextRef = useRef(data?.paging?.cursors.after);
  const [loading] = useState(false);

  useEffect(() => {
    setposts(data?.data || []);
  }, [data]);

  function downloadImg(url) {
    saveAs(url, "post-image");
  }

  async function goToProfile(username) {
    router.push(`/${PROFILE}/${username}`);
  }

  const breakPoints = {
    default: 3,
    800: 2,
    600: 1,
  };

  const renderMedia = (type, url, child = []) => {
    if (type === MEDIA.VIDEO) {
      return <video src={url} loop controls />;
    } else if (type === MEDIA.IMAGE) {
      return (
        <Image
          unoptimized={true}
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="contain"
          src={url || "/no-image.jpg"}
        />
      );
    } else if (type === MEDIA.CAROUSEL_ALBUM) {
      return <Carousel child={child} />;
    }
  };

  const fetchData = () => {
    if (nextRef.current && id) {
      GET_RECENT_MEDIA_BY_HASHTAG(id, nextRef.current)
        .then((res) => {
          if (Array.isArray(res?.data?.data)) {
            setposts((current) => [...current, ...res.data.data]);
          }
          if (res?.data?.paging?.cursors.after) {
            nextRef.current = res?.data?.paging?.cursors.after;
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
    <HashTagWrapper>
      <Typography align="center" component="h1" variant="h3">
        Hashtag&nbsp;
        <Link href={`/${HASHTAG}/${router?.query?.hashtag}`}>
          <a
            style={{
              color: "rgb(254 102 86)",
              textDecoration: 'underline'
            }}
            href={`/${HASHTAG}/${router?.query?.hashtag}`}
            rel="dofollow"
          >
            #{router?.query?.hashtag}
          </a>
        </Link>&nbsp;instagram media
      </Typography>
      <div className="hashtag-page">
        {loading ? (
          <div className="loader">
            <img src="/loader2.svg" />
          </div>
        ) : (
          <div className="posts-display">
            {posts?.length > 0 ? (
              <InfiniteScroll
                dataLength={posts.length} //This is important field to render the next data
                next={fetchData}
                hasMore={!!nextRef.current}
                loader={<h2>Loading...</h2>}
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
                  className={posts.length > 0 ? "my-masonry-grid" : ""}
                  columnClassName={
                    posts.length > 0 ? "my-masonry-grid_column" : "no-posts"
                  }
                >
                  {posts.map((item, i) => {
                    const hashtags =
                      item.caption?.length > 0
                        ? item.caption.match(/#[\w]+(?=\s|$)/g)
                        : [];

                    const profiles =
                      item.caption?.length > 0
                        ? item.caption.match(/@[\w]+(?=\s|$)/g)
                        : [];

                    const filteredContent =
                      item.caption?.length > 0 &&
                      item.caption
                        .split(/[ \n,.]+/)
                        .filter(
                          (f) =>
                            !f.startsWith("#") &&
                            !f.startsWith("@") &&
                            !f.includes("@") &&
                            !f.includes("#")
                        )
                        .filter(Boolean)
                        .join(" ");

                    return (
                      <div className="card" key={i}>
                        <div className="card-image">
                          {renderMedia(
                            item.media_type,
                            item.media_url,
                            item?.children?.data
                          )}
                        </div>
                        <div className="card-bottom">
                          <div className="content-1">
                            <div className="timestamp">
                              <span>{fromNow(item?.timestamp) || ""}</span>
                            </div>
                            {/* <div
                              className="download"
                              onClick={() =>
                                downloadImg(item.media_url)
                              }
                            >
                              <span>Download</span>
                              <FontAwesomeIcon icon={faCloudDownloadAlt} />
                            </div> */}
                          </div>
                          <div>
                            {filteredContent || ""}
                            <Box display="flex" flexWrap="wrap">
                              {" "}
                              {profiles?.length > 0 &&
                                profiles.map((m, i) => (
                                  <React.Fragment key={i}>
                                    <span
                                      style={{
                                        cursor: "pointer",
                                        color: "#31bdf5",
                                        fontWeight: "700",
                                      }}
                                      onClick={() => goToProfile(m.slice(1))}
                                    >
                                      {m}
                                    </span>{" "}
                                  </React.Fragment>
                                ))}
                              {hashtags?.length > 0 &&
                                hashtags.map((m, i) => (
                                  <Link
                                    href={`/${HASHTAG}/${m.slice(1)}`}
                                    key={i}
                                  >
                                    <span
                                      style={{
                                        color: "#31bdf5",
                                        cursor: "pointer",
                                        marginRight: "3px",
                                      }}
                                    >
                                      <a
                                        rel="dofollow"
                                        href={`/${HASHTAG}/${m.slice(1)}`}
                                      >
                                        {m}
                                      </a>
                                    </span>
                                  </Link>
                                ))}
                            </Box>
                          </div>
                          <div className="content-3">
                            <div className="hearts">
                              <FontAwesomeIcon icon={faHeart} />
                              <span>
                                {numFormatter(item?.like_count) || "0"}
                              </span>
                            </div>
                            <div className="comments">
                              <FontAwesomeIcon icon={faComment} />
                              <span>
                                {numFormatter(item?.comments_count) || "0"}
                              </span>
                            </div>
                            {item.media_type === MEDIA.VIDEO &&
                              item.video_view_count && (
                                <div className="hearts">
                                  <FontAwesomeIcon icon={faEye} />
                                  <span>
                                    {numFormatter(item?.video_view_count) ||
                                      "0"}
                                  </span>
                                </div>
                              )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Masonry>
              </InfiniteScroll>
            ) : (
              <div
                className="no-result"
                style={{
                  textAlign: "center",
                  gridColumn: "-1/1",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                No result. <br /> Search with another key word!
              </div>
            )}
          </div>
        )}
      </div>
    </HashTagWrapper>
  );
};

export default HashTagPostPage;
