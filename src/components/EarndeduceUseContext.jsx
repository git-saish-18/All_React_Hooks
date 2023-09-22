import { useState } from "react";
import EarnDeduceCreateContext from "./EarnDeduceCreateContext";

const EarnDeduceUseContext = (props) => {
  const data = {
    name: "saish",
  };
  const mysolve = {
    div: "b",
  };
  return (
    <EarnDeduceCreateContext.Provider value={{ data, mysolve }}>
      {props.children}
    </EarnDeduceCreateContext.Provider>
  );
};

export default EarnDeduceUseContext;
