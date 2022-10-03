export const HTML: React.FC<{
  htmlStr: string;
}> = ({ htmlStr }) => {
  return <div dangerouslySetInnerHTML={{ __html: htmlStr }} />;
};
