import { GetServerSideProps } from "next";
import Head from "next/head";
import { Heading } from "../components/Heading";
import { heading } from "../components/Heading.css";
import { Layout } from "../components/Layout";
import { List } from "../components/List";
import { getSortedPostsData, Post } from "../lib/posts";
import Image from "next/image";
import { br_circle } from "../styles/util.css";
import { Page, siteTitle } from "../components/Page";
import { Header } from "../components/Header";
import { Link } from "../components/Link";
import { Date } from "../components/Date";
import { Spacer } from "../components/Spacer";

type HomePageProps = {
  allPostsData: Post[];
};

export const name = "eraser5th";

export const getServerSideProps: GetServerSideProps<
  HomePageProps
> = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

const HomePage: React.FC<HomePageProps> = ({ allPostsData }) => {
  return (
    <Page>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Layout>
        <Header>
          <Image
            priority
            src="/images/profile.png"
            className={br_circle}
            height={144}
            width={144}
            alt=""
          />
          <Heading level={2}>{name}</Heading>
        </Header>
        <Spacer size={16} />
        <section className={heading({ level: 4 })}>
          <p>
            Webフロントエンド（最近はデザインもちょっと）
            <br />
            趣味はVimなどの環境構築
            <br />
            UoA29, Zli所属
          </p>
          <p>
            (This is a sample website - you’ll be building a site like this on{" "}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p>
        </section>
        <section className={heading({ level: 4 })}>
          <Heading level={3}>Blog</Heading>
          <List>
            {allPostsData.map(({ id, date, title }) => (
              <List.Item key={id}>
                <Link to={`/posts/${id}`}>{title}</Link>{" "}
                <Date dateString={date} />
              </List.Item>
            ))}
          </List>
        </section>
      </Layout>
    </Page>
  );
};

export default HomePage;
