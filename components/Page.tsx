import { Head } from "./Head";

export const siteTitle = "Next.js Sample Website";

export const Page: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div>
      <Head
        description="Learn how to build a personal website using Next.js"
        faviconUrl=""
        siteTitle="Next.jsSampleWebsite"
      />
      {children}
    </div>
  );
};
