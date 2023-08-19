import React, { useRef } from "react";

function Reftutorial() {
  const inputRef = useRef(null);

  const onClick = () => {
    inputRef.current.value = "";
  };
  return (
    <div>
      <h1>Pedro</h1>
      <input type="text" placeholder="type..." ref={inputRef}/>
      <button onClick={onClick}>change name</button>
    </div>
  );
}

export default Reftutorial;
