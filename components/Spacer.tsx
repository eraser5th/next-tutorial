import { spacer } from "./Spacer.css";

export const Spacer: React.FC<{
  size: 2 | 4 | 8 | 12 | 16 | 32;
}> = ({ size }) => {
  return <div className={spacer({ size })} />;
};
