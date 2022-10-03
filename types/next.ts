import { GetStaticPropsResult } from "next";

export type MyGetStaticProps<
  PARAMS extends Record<string, any>,
  PROPS extends Record<string, any>
> = (arg: { params: PARAMS }) => Promise<GetStaticPropsResult<PROPS>>;
