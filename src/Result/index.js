import { LabelText, Output } from "./styled.js";

const Result = ({ result }) => (
  <p>
    <LabelText>Result:</LabelText>
    <Output>{result || ""}</Output>
  </p>
);

export default Result;
