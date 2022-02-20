import React, { useState } from "react";
import LamdingWrapper from "./style.landing";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import Tags from "./Tags";
import { SEARCH } from "../../site-settings/site-navigation";

const LandingPage = (props) => {
  const Router = useRouter();
  const [loading] = useState(false);
  const [search, setsearch] = useState(Object.values(Router.query)?.[0] || "");

  function handleSubmit(e) {
    e.preventDefault();
    Router.push(`/${SEARCH}/${search}`);
  }

  return (
    <LamdingWrapper>
      <div className="landing">
        <div className="top__banner">
          <div className="banner-content">
            <div className="banner__image">
              <img src="/images/Banner-1.jpg" />
            </div>
            <div className="container">
              <h2>Instagram Story Viewer</h2>
              <span>Browse Instagram content without logging in.</span>
              <div className="search-outer">
                <form onSubmit={handleSubmit} className="searchbar">
                  <div className="search-field">
                    <input
                      required
                      type="text"
                      placeholder="Search Profile / Hashtags"
                      name="search"
                      value={search}
                      onChange={(e) => setsearch(e.target.value)}
                    />
                  </div>

                  <button type="submit" className="search-icon">
                    <FontAwesomeIcon icon={faSearch} />{" "}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {loading ? (
          <div className="loader">
            <img src="/loader2.svg" />
          </div>
        ) : (
          <div className="hashtag-content">
            <h2>Popular Hashtags</h2>
            <div className="hashtags-data">
              {props?.data?.length > 0 && props.data.map((m, i) => <Tags key={i} {...m} />)}
            </div>
          </div>
        )}
      </div>
    </LamdingWrapper>
  );
};

export default LandingPage;
