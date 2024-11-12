import { Container } from "./timeUpdatedStyled";

export const TimeUpdatedConversionRates = ({ conversionRates }) => {
  const date = new Date(conversionRates.date);

  return (
    <Container>
      Exchange rate of:{" "}
      {date.toLocaleDateString(undefined, {
        day: "numeric",
        month: "long",
        year: "numeric",
      })}
    </Container>
  );
};
