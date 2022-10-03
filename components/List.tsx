import { list } from "./List.css";

type ListProps = {
  children: React.ReactNode;
  ordered?: boolean;
};

export const List = ({ children, ordered = false }: ListProps): JSX.Element => {
  if (ordered) {
    return <ol className={list}>{children}</ol>;
  }

  return <ul className={list}>{children}</ul>;
};

type ListItemProps = {
  children: React.ReactNode;
};

List.Item = (({ children }: ListItemProps) => {
  return <li>{children}</li>;
}) as React.FC<{
  children: React.ReactNode;
}>;
