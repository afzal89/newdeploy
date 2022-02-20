import { useRouter } from "next/router";
import React from "react";
import { MetaHead } from "../../components/BaseComponents/Meta_Head";
import HashTagPostPage from "../../components/HashTagPostPage";
import { GET_HASHTAG_ID, GET_RECENT_MEDIA_BY_HASHTAG } from "../../services";
import seo from "../../site-settings/seo";
import { HASHTAG } from "../../site-settings/site-navigation";
import { logo } from "../../util/constants";

const Page = (props) => {
  const { data, id } = props;
  const router = useRouter();
  const qr = router.query.hashtag;
  return (
    <>
      <MetaHead
        title={seo.pages.hashtag.title(qr)}
        url={`/${HASHTAG}/${qr}`}
        imgUrl={`/${logo}`}
        desc={seo.pages.hashtag.description({
          count: "",
          keyword: qr,
          timeAgo: "10 minutes ago",
        })}
        keywords={seo.pages.hashtag.keywords(qr)}
      />

      <HashTagPostPage data={data} id={id} />
    </>
  );
};

export default Page;

export async function getServerSideProps(context) {
  let id = "";
  let media = [];
  try {
    const search = context.query.hashtag;
    const res = await GET_HASHTAG_ID(search);
    const data = res?.data?.data || [];

    try {
      if (Array.isArray(data) && data.length > 0) {
        id = data[0].id;
        const response = await GET_RECENT_MEDIA_BY_HASHTAG(id);
        media = response?.data;
      }
    } catch (err) {
      //no need to handle
    }
  } catch (err) {
    console.log(err);
  }

  return {
    props: { data: media, id },
  };
}
