import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SimpleForm from "./components/Form";
import TemperatureInput from "./components/TemperatureInput";
import TemperatureDisplay from "./components/TemperatureDisplay";
import ExampleComponent from "./components/Effect";
import FetchDataComponent from "./components/FetchData";

function App() {
  const [count, setCount] = useState(0); // returns an array with two elements which is a state variable and a function to update it
  const [temperature, setTemperature] = useState("");

  const handleTemperatureChange = (newTemperature) => {
    setTemperature(newTemperature);
  };
  // let ctr = 0
  // const count = arr[0]
  // const setCount = arr[1]
  const incrementCount = () => {
    setCount(count + 1); // update the count state with the new value ( incremented value)
    // ctr += 1
    // console.log(ctr)
  };
  const decrementCount = () => {
    setCount(count - 1); // update the count state with the new value ( decremented value)
    // ctr -= 1
  };

  return (
    <>
      {/* <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
      <SimpleForm />
      <TemperatureInput
        temperature={temperature}
        onTemperatureChange={handleTemperatureChange}
      />
      <TemperatureDisplay temperature={temperature}/> */}
      <ExampleComponent />
      <FetchDataComponent/>
    </>
  );
}

export default App;
