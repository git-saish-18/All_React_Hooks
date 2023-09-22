import { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState("Hi i am saish");

  // calling for every update state

  //   useEffect(() => {
  //     if (count % 2 == 0) {
  //       window.alert("even number");
  //     } else {
  //       window.alert("odd number ");
  //     }
  //   });

  // calling only one when component render

  //   useEffect(() => {
  //     if (count % 2 == 0) {
  //       window.alert("even number");
  //     } else {
  //       window.alert("odd number ");
  //     }
  //   }, []);

  // calling only when count state changes
  //   useEffect(() => {
  //     if (count % 2 == 0) {
  //       console.log("even");
  //     }
  //   },[count]);

  // useEffect always return underfined
  // let myeffect = useEffect(() => {
  //   if (count % 2 === 0) {
  //     console.log("even");
  //   }
  // }, [count]);
  // console.log(myeffect);

  
  return (
    <>
      <h1>Use Effect</h1>
      <div>
        <input
          type="number"
          name="num"
          id=""
          placeholder="Number"
          value={count}
          onChange={(e) => {
            setCount(e.target.value);
          }}
        />
        <p>{count}</p>
        <div>
          <button
            type="button"
            onClick={() => {
              setMsg(msg === "Hi i am saish" ? "I Love This" : "Hi i am saish");
            }}
          >
            {msg}
          </button>
        </div>
      </div>
    </>
  );
};

export default UseEffect;
