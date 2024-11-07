import { Wrapper } from "./styled.js";
import { useCurrentDate } from "./useCurrentDate.js";

export const Clock = () => {
  const {formattedDate,timeZone} = useCurrentDate();

  return (
    <Wrapper>
      &#9432; Exchange rate of: {formattedDate} {timeZone}
    </Wrapper>
  );
};

export default Clock;
