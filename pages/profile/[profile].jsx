import { useRouter } from "next/router";
import React from "react";
import { MetaHead } from "../../components/BaseComponents/Meta_Head";
import Profile from "../../components/ProfilePage";
import { GET_USER_PROFILE_DETAIL } from "../../services";
import seo from "../../site-settings/seo";
import { PROFILE } from "../../site-settings/site-navigation";
import { logo } from '../../util/constants';
import { numFormatter } from "../../util/helper";

const Page = (props) => {
  const { data } = props;
  const router = useRouter();
  const qr = router.query.hashtag;
  return (
    <>
      <MetaHead
        title={seo.pages.profile.title({
          name: data?.name,
          username: data?.username,
        })}
        url={`/${PROFILE}/${qr}`}
        imgUrl={`/${logo}`}
        desc={seo.pages.profile.description({
          name: data?.name,
          followers: numFormatter(data?.followers_count),
          following: numFormatter(data?.follows_count),
          postCount: numFormatter(data?.media_count),
          username: data?.username,
        })}
        fullUrl={data?.profile_picture_url}
        keywords={seo.pages.profile.keywords(data?.name || data?.username || qr)}
        type= {seo.pages.profile.type}
      />
      <Profile data={data} />
    </>
  );
};

export default Page;

export async function getServerSideProps(context) {
  const username = context.query.profile;
  let data;
  try {
    const res = await GET_USER_PROFILE_DETAIL(username);
    data = res?.data?.business_discovery || {};
  } catch (err) {
    data = {};
  }

  return {
    props: { data },
  };
}
