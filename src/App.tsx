import Alert from "./components/alert";
import Button from "./components/button";
import Statetutorial from "./components/usestate";
import Reducer from "./components/useReducer";
import Effect from "./components/useEffect";
import { useState } from "react";
import Reftutorial from "./components/useref";
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
      <Reftutorial />
    </div>
  );
}

export default App;
