import { Link } from "./Link";
import { backToHome } from "./BackToHome.css";

export const BackToHome: React.FC = () => {
  return (
    <div className={backToHome}>
      <Link to="/">← Back to home</Link>
    </div>
  );
};
