import { Wrapper } from "./styled.js";
import { useCurrentDate } from "./useCurrentDate.js";

export const Clock = () => {
  const date = useCurrentDate();

  const formattedDate = date.toLocaleDateString(undefined, {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    day: "numeric",
    month: "long",
  });

  const timeZone = date
    .toLocaleTimeString(undefined, { timeZoneName: "short" })
    .split(" ")
    .pop();


  return (
    <Wrapper>
      &#9432; Exchange rate of: {formattedDate} {timeZone}
    </Wrapper>
  );
};

export default Clock;
