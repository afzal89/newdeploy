import HashTagSearch from "../../components/HashtagSearch";
import { useRouter } from "next/router";
import { MetaHead } from "../../components/BaseComponents/Meta_Head";
import { GET_HASHTAG_ID } from "../../services";
import { HASHTAG_SEARCH } from "../../site-settings/site-navigation";
import seo from "../../site-settings/seo";
import { logo } from '../../util/constants';

const Page = (props) => {
  const { data } = props;
  const router = useRouter();
  const qr = router.query.search;
  return (
    <>
      <MetaHead
        title={seo.pages.hashtag.title(qr)}
        url={`/${HASHTAG_SEARCH}/${qr}`}
        imgUrl={`/${logo}`}
        desc={seo.pages.hashtag.description({
          count: "",
          keyword: qr,
          timeAgo: "",
        })}
        keywords={seo.pages.hashtag.keywords(qr)}
      />
      <HashTagSearch data={data} />
    </>
  );
};

export default Page;

const normalizeResponse = (hastags, keyword) =>
  hastags.map((hashtag) => ({ ...hashtag, keyword }));

export async function getServerSideProps(context) {
  const search = context.query.search;
  let data = [];
  try {
    const res = await GET_HASHTAG_ID(search);
    data = res?.data?.data || [];
  } catch (err) {
    //no need to handle
  }

  return {
    props: { data: normalizeResponse(data, search) },
  };
}
