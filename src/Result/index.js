import "./result.css";

const Result = ({ result }) => {
  return (
    <p>
      <span className="form__labelText">Result:</span>
      <span className="form__result">{result || ""}</span>
    </p>
  );
};

export default Result;
