import { useContext } from "react";
import EarnDeduceCreateContext from "./EarnDeduceCreateContext";

const Child = () => {
  const data = useContext(EarnDeduceCreateContext);
  return (
    <div>
      I am the Child Component : <p>{data.data.name}</p>
    </div>
  );
};

export default Child;
