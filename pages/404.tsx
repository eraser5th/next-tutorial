import Head from "next/head";
import { Heading } from "../components/Heading";
import { Layout } from "../components/Layout";
import { Page } from "../components/Page";

const Custom404: React.FC = () => {
  return (
    <Page>
      <Head>
        <title>404 not found</title>
      </Head>
      <Layout>
        <Heading level={1}>404 - Page Not Found</Heading>
      </Layout>
    </Page>
  );
};

export default Custom404;
