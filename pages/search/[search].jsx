import { useRouter } from "next/router";
import { MetaHead } from "../../components/BaseComponents/Meta_Head";
import ProfileSearch from "../../components/ProfileSearch";
import { GET_USER_PROFILE_DETAIL_LIMITED } from "../../services";
import seo from "../../site-settings/seo";
import { SEARCH } from "../../site-settings/site-navigation";
import { logo } from '../../util/constants';

const Page = (props) => {
  const { data } = props;
  const router = useRouter();
  const qr = router.query.search;

  return (
    <>
      <MetaHead
        title={seo.pages.search.title(qr)}
        url={`/${SEARCH}/${qr}`}
        imgUrl={`/${logo}`}
        desc={seo.pages.search.description(qr)}
        keywords={seo.pages.search.keywords(qr)}
      />
      <ProfileSearch data={data} />
    </>
  );
};

export default Page;

export async function getServerSideProps(context) {
  const username = context.query.search;
  let data;
  try {
    const res = await GET_USER_PROFILE_DETAIL_LIMITED(username);
    data = res?.data?.business_discovery || {};
  } catch (err) {
    data = {};
  }

  return {
    props: { data },
  };
}
