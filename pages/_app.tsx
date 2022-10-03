import { AppProps } from "next/app";
import { FC } from "react";
import "the-new-css-reset/css/reset.css";
import "../styles/global.css";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
