import {useState} from 'react'

function TemperatureDisplay({temperature}) {
    // const [temperature, setTemperature] = useState("")
    const fahrenheit = (temperature * 9/5) + 32
    return (
        <div>
            <p>Yemperature in Celcius: {temperature} deg C</p>
            <p>Yemperature in Fahrenheit: {fahrenheit.toFixed(1)} deg F</p>
        </div>
    )
}

export default TemperatureDisplay