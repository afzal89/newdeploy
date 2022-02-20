import Link from "next/link";
import React, { useState } from "react";
import ProfileWrapper from "./style.profilesearch";
import { useRouter } from "next/router";
import { Tooltip } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { isEmpty } from "lodash";
import {
  HASHTAG_SEARCH,
  PROFILE,
  SEARCH,
} from "../../site-settings/site-navigation";

const ProfileSearch = (props) => {
  const { data } = props;
  const router = useRouter();
  const [loading] = useState(false);

  const pathname = router.pathname.split("/")[1];

  return (
    <ProfileWrapper>
      <div className="profilesearch">
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
              className={pathname === "hashtagsearch" ? "active" : ""}
            >
              <a className={pathname === "hashtagsearch" ? "active" : ""}>
                <span>Hashtag</span>
              </a>
            </Link>
          </div>
        </div>
        <div className="profile-cards">
          {loading ? (
            <div className="loader">
              <img src="/loader2.svg" />
            </div>
          ) : !isEmpty(data) ? (
            [data].map((item) => (
              <Link key={item?.username} href={`/${PROFILE}/${item?.username}`}>
                <a>
                  <div className="profile-card">
                    <div className="profile-avatar">
                      <img
                        src={item?.profile_picture_url || "/user.jpg"}
                        alt="txt"
                      />
                    </div>
                    <div className="profile-info">
                      <div className="profile-name">
                        <Tooltip
                          placement="bottom-end"
                          title={item?.name || "__"}
                        >
                          <span>{item?.name || "__"} </span>
                        </Tooltip>
                        {item?.is_verified ? (
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            color="blue"
                            style={{ marginLeft: "0.3rem" }}
                          />
                        ) : (
                          <></>
                        )}
                        {/* {item?.user?.is_verified ? (
                          <span>
                            <FontAwesomeIcon
                              icon={faCheckCircle}
                              color="blue"
                              style={{ marginLeft: "0.3rem" }}
                            />
                          </span>
                        ) : (
                          <></>
                        )} */}
                      </div>
                      <p>@{item?.username || "__"}</p>
                    </div>
                  </div>
                </a>
              </Link>
            ))
          ) : (
            <div className="no-result">
              No result. <br /> 
              Developer is working on this, please search exact Instagram username for now
            </div>
          )}
        </div>
      </div>
    </ProfileWrapper>
  );
};

export default ProfileSearch;
