import { GetStaticPaths, GetStaticPropsResult } from "next";
import Head from "next/head";
import Image from "next/image";
import { name } from "..";
import { BackToHome } from "../../components/BackToHome";
import { Date } from "../../components/Date";
import { Header } from "../../components/Header";
import { Heading } from "../../components/Heading";
import { HTML } from "../../components/HTML";
import { Layout } from "../../components/Layout";
import { Page } from "../../components/Page";
import { Spacer } from "../../components/Spacer";
import { getAllPostIds, getPostData, Post } from "../../lib/posts";
import { br_circle } from "../../styles/util.css";
import { MyGetStaticProps } from "../../types/next";

type PostPageParams = {
  id: string;
};

type PostPageProps = {
  postData: Post;
};

export const getStaticPaths: GetStaticPaths<PostPageParams> = () => {
  const paths = getAllPostIds();
  return {
    paths: paths.map((id) => ({ params: { id } })),
    fallback: false,
  };
};

export const getStaticProps: MyGetStaticProps<
  PostPageParams,
  PostPageProps
> = async ({
  params: { id },
}): Promise<GetStaticPropsResult<PostPageProps>> => {
  const postData = await getPostData(id);
  return {
    props: {
      postData,
    },
  };
};

const PostPage: React.FC<PostPageProps> = ({ postData }) => {
  return (
    <Page>
      <Head>
        <title>{postData.title}</title>
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
        <Heading level={1}>{postData.title}</Heading>
        <Date dateString={postData.date} />
        <Spacer size={32} />
        <HTML htmlStr={postData.contentHtml} />
        <BackToHome />
      </Layout>
    </Page>
  );
};

export default PostPage;
