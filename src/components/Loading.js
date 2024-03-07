import React from "react";
import SyncLoader from "react-spinners/SyncLoader";

const Loading = () => {
  return (
    <SyncLoader
      color="#356494"
      size={15}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Loading;
