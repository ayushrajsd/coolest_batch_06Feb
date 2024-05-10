import { useState } from "react";

function TemperatureInput({temperature, onTemperatureChange}) {
//   const [temperature, setTemperature] = useState("");
  return (
    <div>
      <label>Enter Temperature</label>
      <input
        type="text"
        value={temperature}
        onChange={(e) => onTemperatureChange(e.target.value)}
      />
    </div>
  );
}
export default TemperatureInput;