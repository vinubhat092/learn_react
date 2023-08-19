import React, { useEffect, useState } from "react";
import axios from "axios";

function Effect() {
    const [data,setdata] = useState("")
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {setdata(response.data[0].email)});
      console.log("api called")

  },[]);                                                     
  return <div>Hello world {data}</div>;
}

export default Effect;

// use [] for mentioning state so that nly when that state changes useEffect function will be called 