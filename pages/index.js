import {useEffect, useState} from 'react'
import { MetaHead } from "../components/BaseComponents/Meta_Head";
import LandingPage from "../components/LandingPage";
import { GET_TOP_HASHTAG } from "../services";
import seo from "../site-settings/seo";
import { logo } from '../util/constants';

export default function Home() {
  const [topHashtags, setTopHashtags] = useState([]);

  useEffect(async () => {
    let data = []
    try {
      const response = await GET_TOP_HASHTAG();
      const dataObj = response.data.data[0] || [];
      delete dataObj._id;
      const dataKeys = Object.keys(dataObj);
      const dataValues = Object.values(dataObj).filter(Boolean);
      for (let i = 0; i < dataKeys.length; i++) {
        if (dataValues[i] && dataKeys[i])
          data.push({ label: dataKeys[i], value: dataValues[i] });
      }
    } catch (err) {
      data = [];
    }
    setTopHashtags(data);

  
  }, [])

  return (
    <div>
      <MetaHead
        title={seo.pages.homepage.title}
        url="/"
        imgUrl={`/${logo}`}
        desc={seo.pages.homepage.description}
      />
      <LandingPage data={topHashtags} />
    </div>
  );
}

export async function getServerSideProps(context) {
  let data = [];

  return {
    props: { data },
  };
}
