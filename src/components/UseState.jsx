import react, { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);
  const [userDetails, setUserDetails] = useState({
    name: "",
    rollno: "",
    div: "",
  });
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserDetails((prev) => {
      return { ...prev, [name]: value };
    });

    console.log(userDetails);
  };
  return (
    <>
      <button
        style={{ width: "10rem", margin: "2rem", cursor: "pointer" }}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        INC
      </button>
      <p>{count}</p>
      <button
        style={{ width: "10rem", margin: "2rem", cursor: "pointer" }}
        onClick={() => {
          setCount(count - 1 < 0 ? 0 : count - 1);
        }}
      >
        DEC
      </button>

      <div>
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            id="name"
            value={userDetails.name}
            onChange={handleInput}
          />
        </label>
        <label htmlFor="rollno">
          RollNo
          <input
            type="text"
            name="rollno"
            id="rollno"
            value={userDetails.rollno}
            onChange={handleInput}
          />
        </label>
        <label htmlFor="div">
          Div
          <input
            type="text"
            name="div"
            id="div"
            value={userDetails.div}
            onChange={handleInput}
          />
        </label>
      </div>

      <div style={{ margin: "2rem" }}>
        <span>{userDetails.rollno} </span>
        <span> {userDetails.name}</span>
        <span> {userDetails.div}</span>
      </div>
    </>
  );
};

export default UseState;
