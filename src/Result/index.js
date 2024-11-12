import { LabelText, Output } from "./styled.js";

const Result = ({ result }) => {
  return (
    <p>
      <LabelText>Result:</LabelText>
      <Output>{result || ""}</Output>
    </p>
  );
};

export default Result;
