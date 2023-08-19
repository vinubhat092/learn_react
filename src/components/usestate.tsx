import React, { useState } from "react";

// function Counter() {
//   const [counter, setCounter] = useState(0);
//   const setcount=()=>{
//     setCounter(counter+1)
//   }
//   return <div>
//     {counter}
//     <button onClick={setcount}>increment</button>
//   </div>
// }

// export default Counter;

function Statetutorial() {
  const [inputvalue, setInputvalue] = useState("vinayak");
  let change = (event) => {
    const newValue = event.target.value;
    setInputvalue(newValue);
  };

  return (
    <div>
      <input placeholder="ENter something here......." onChange={change}></input>
      {inputvalue}
    </div>
  );
}

export default Statetutorial;
