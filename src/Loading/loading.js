import { useState, useEffect } from "react";
import LoadingGif from "../Bean_Eater.gif";
import { LoadingImageStyled, LoadingStatus } from "./loadingStyled";

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
    <LoadingStatus>
      Just a moment ...
      {showGif && <LoadingImageStyled src={LoadingGif} alt="Loading..." />}
    </LoadingStatus>
  );
};

export default Loading;
