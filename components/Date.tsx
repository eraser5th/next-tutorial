import { parseISO, format } from "date-fns";
import { date } from "./Date.css";

export const Date: React.FC<{ dateString: string }> = ({ dateString }) => {
  return (
    <time dateTime={dateString} className={date}>
      {format(parseISO(dateString), "LLLL d, yyyy")}
    </time>
  );
};
