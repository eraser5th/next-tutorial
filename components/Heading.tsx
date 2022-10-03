import { heading } from "./Heading.css";

export const Heading: React.FC<{
  children: React.ReactNode;
  level: 1 | 2 | 3 | 4;
}> = ({ children, level }) => {
  return <header className={heading({ level })}>{children}</header>;
};
