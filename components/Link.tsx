import NextLink from "next/link";

export const Link: React.FC<{
  children: React.ReactNode;
  to: string;
}> = ({ children, to }) => {
  return (
    <NextLink href={to}>
      <a>{children}</a>
    </NextLink>
  );
};
