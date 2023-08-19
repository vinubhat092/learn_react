import Alert from "./components/alert";
import Button from "./components/button";
import Statetutorial from "./components/usestate";
import Reducer from "./components/useReducer";
import { useState } from "react";
function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    // <div>
    //   <Alert>
    //     Hello <span>world</span>
    //   </Alert>
    // </div>
    
    <div>
      { alertVisible && <Alert onClose={()=>setAlertVisibility(false)}>this is alert</Alert>}
      <Button
        color="primary"
        onClick={() => 
          setAlertVisibility(true)
        }
      >
        hello world
      </Button>
      <Reducer />
    </div>
  );
}

export default App;
