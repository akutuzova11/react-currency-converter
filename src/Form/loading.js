import { useState, useEffect } from "react";
import LoadingGif from "../Bean_Eater.gif"

export const Loading = () => {
  const [showGif, setShowGif] = useState(false);

  useEffect(() => {
    setShowGif(true);
    const intervalId = setTimeout(() => {
      setShowGif(false);
    }, 2000);

    return () => {
      clearTimeout(intervalId);
    };
  }, []);
  return (
    <div>{showGif && <img src={LoadingGif} alt="Loading..." />}</div>
  );
};
