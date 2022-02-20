import axios from "axios";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { MetaHead } from "../components/BaseComponents/Meta_Head";
import TermsCondition from "../components/Term&Condition/index";

export default function Home() {
 
  return (
    <div>
      <MetaHead title="Terms And Conditions | Invewer" url="/TermCondition" />
      <TermsCondition />
    </div>
  );
}
