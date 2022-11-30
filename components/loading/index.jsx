import React from "react";
import { LoadContainer } from "./style";

const Loading = () => {
  return (
    <LoadContainer>
      <div class="loading">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </LoadContainer>
  );
};

export default Loading;
