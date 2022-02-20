import Head from "next/head";
import seo from "../../site-settings/seo";

export function MetaHead({
  desc,
  title,
  imgUrl,
  fullUrl,
  children,
  keywords,
  url,
  type="website",
}) {
  const formattedTitle = title ? `${title}` : seo.default.title;
  const domainedURL = `${process.env.NEXT_PUBLIC_DOMAIN}${url}`;
  const domainedImgURL = `${process.env.NEXT_PUBLIC_DOMAIN}${imgUrl}`;

  return (
    <>
      <Head>
        <title>{formattedTitle}</title>
        <meta property="title" content={formattedTitle} />
        <meta property="og:title" content={formattedTitle} />
        <meta property="twitter:title" content={formattedTitle} />
        <meta property="og:locale" content="en" />

        <meta charSet="utf-8" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="application-name" content={title} />
        <meta name="theme-color" content="#d6249f" />
        <meta name="apple-mobile-web-app-title" content={title} />
        <meta name="msapplication-TileColor" content="#d6249f" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, minimum-scale=1"
        />

        <meta property="type" content={type} />
        <meta property="og:type" content={type} />
        <meta property="twitter:type" content={type} />

        {keywords && (
            <meta name="keywords" content={keywords} />
        )}

        {domainedURL && (
          <>
            <meta property="url" content={domainedURL} />
            <meta property="og:url" content={domainedURL} />
            <meta property="twitter:url" content={domainedURL} />
          </>
        )}

        {desc && (
          <>
            <meta name="description" content={desc} />
            <meta property="description" content={desc} />
            <meta property="og:description" content={desc} />
            <meta property="twitter:description" content={desc} />
          </>
        )}

        {imgUrl && (
          <>
            <meta property="image" content={fullUrl || domainedImgURL} />
            <meta property="og:image" content={fullUrl || domainedImgURL} />
            <meta
              property="twitter:image"
              content={fullUrl || domainedImgURL}
            />
            <meta property="twitter:card" content="summary_large_image" />
          </>
        )}
        {children}
      </Head>
    </>
  );
}
