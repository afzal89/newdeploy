import Link from "next/link";
import React, { useState } from "react";
import HashTagCard from "../HashtagCard";
import HashtagWrapper from "./syle.hashtag";
import { useRouter } from "next/router";
import { HASHTAG_SEARCH, SEARCH } from "../../site-settings/site-navigation";

const HashTagSearch = ({ data }) => {
  const router = useRouter();
  const [loading] = useState(false);
  const [result] = useState(data || []);
  const pathname = router.pathname.split("/")[1];

  return (
    <HashtagWrapper>
      <div className="hashtag-search">
        <div className="navigation">
          <div className="profile">
            <Link
              href={
                router.query.search ? `/${SEARCH}/${router.query.search}` : "/"
              }
              className={pathname === SEARCH ? "active" : ""}
            >
              <a className={pathname === SEARCH ? "active" : ""}>
                <span>Profile</span>
              </a>
            </Link>
          </div>
          <div className="hashtag">
            <Link
              href={
                router.query.search
                  ? `/${HASHTAG_SEARCH}/${router.query.search}`
                  : "/"
              }
              className={pathname === HASHTAG_SEARCH ? "active" : ""}
            >
              <a className={pathname === HASHTAG_SEARCH ? "active" : ""}>
                <span>Hashtag</span>
              </a>
            </Link>
          </div>
        </div>
        <div className="hashtags">
          {loading ? (
            <div className="loader">
              <img src="/loader2.svg" />
            </div>
          ) : result.length > 0 ? (
            result.map((item, i) => (
              <HashTagCard
                key={i}
                tag={item.keyword}
                // count={item?.hashtag?.media_count || item?.Post}
              />
            ))
          ) : (
            <div className="no-result">
              No result <br /> Search with another key word!
            </div>
          )}
        </div>
      </div>
    </HashtagWrapper>
  );
};

export default HashTagSearch;
