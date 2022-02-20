import Link from "next/link";
import React, { useEffect, useState } from "react";
import HeaderWrapper from "./style.header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { PROFILE, SEARCH } from "../../site-settings/site-navigation";
import { logo } from '../../util/constants';

const Header = ({ token }) => {
  const Router = useRouter();
  const [search, setsearch] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    Router.push(`/${SEARCH}/${search}`);
  }

  useEffect(() => {
    if (
      Object.keys(Router.query).length &&
      Router.pathname !== `/${PROFILE}/[profile]`
    )
      setsearch(Object.values(Router.query)?.[0]);
  }, [Router?.query]);

  return (
    <HeaderWrapper>
      <div className="header">
        <div className="logo-outer">
          <Link href="/">
            <a>
              <span className="logo">
                <img src={`/${logo}`} />
              </span>
              <span>Invewer</span>
            </a>
          </Link>
        </div>
        <div className="container">
          {Router.pathname !== "/" && (
            <div className="search-outer">
              <form className="searchbar" onSubmit={handleSubmit}>
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
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </form>
            </div>
          )}
        </div>
        <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", width: "30%" }}>
          <Link href="/TermCondition">Terms & Condition</Link>
          <Link href="/Privacy">Privacy Policy</Link>
        </div>
      </div>
      <div></div>
    </HeaderWrapper>
  );
};

export default Header;
