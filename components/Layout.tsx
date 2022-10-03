import { layout } from "./Layout.css";

export const Layout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className={layout}>
      <main>{children}</main>
    </div>
  );
};
