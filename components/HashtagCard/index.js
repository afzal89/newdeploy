import Link from "next/link";
import React from "react";
import { HASHTAG } from "../../site-settings/site-navigation";
import HashTagWrapper from "./style.hashtag";

const HashTagCard = (props) => {
  return (
    <HashTagWrapper>
      <Link href={`/${HASHTAG}/${props.tag}`}>
        <a>
          <div className="hashtag">
            <div className="content">
              <h3>#{props.tag}</h3>
              <span>{props.count}</span>
            </div>
          </div>
        </a>
      </Link>
    </HashTagWrapper>
  );
};

export default HashTagCard;
