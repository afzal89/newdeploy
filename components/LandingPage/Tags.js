import Link from "next/link";
import React, { useState } from "react";
import { HASHTAG } from "../../site-settings/site-navigation";

const Tags = ({ label, value }) => {
  const [more, setmore] = useState(false);
  function Toggle() {
    setmore((m) => !m);
  }
  return (
    <div className="hashtag-category">
      <div className="hashtag-outer">
        <span>{label[0].toUpperCase() + label.slice(1)}</span>
        <div className={more ? "views-all" : "hashtags-mapping"}>
          {value.map((item, i) => (
            <Link key={i} href={`/${HASHTAG}/${item.Hashtags}`}>
              <a>
                <div className="hashtag">
                  <div className="content">
                    <h3>#{item.Hashtags}</h3>
                    <span>{item.Post}</span>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
        <div className="hashtag-more">
          <a onClick={() => Toggle()} className="view-more">
            {more ? <span>Collapse</span> : <span>View More</span>}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Tags;
