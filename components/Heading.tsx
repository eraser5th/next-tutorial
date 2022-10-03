import { heading } from "./Heading.css";

export const Heading: React.FC<{
  children: React.ReactNode;
  level: 1 | 2 | 3 | 4;
}> = ({ children, level }) => {
  return <h1 className={heading({ level })}>{children}</h1>;
};
