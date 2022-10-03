import NextHead from "next/head";

export const Head: React.FC<{
  faviconUrl: string;
  description: string;
  siteTitle: string;
}> = ({ faviconUrl, description, siteTitle }) => {
  return (
    <NextHead>
      <link rel="icon" href={faviconUrl} />
      <meta name="description" content={description} />
      <meta
        property="og:image"
        content={`https://og-image.vercel.app/${encodeURI(
          siteTitle
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
      />
      <meta name="og:title" content={siteTitle} />
      <meta name="twitter:card" content="summary_large_image" />
    </NextHead>
  );
};
