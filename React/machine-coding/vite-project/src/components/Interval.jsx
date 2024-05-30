import {useState, useRef, useEffect} from 'react';
function Timer(){
    const [seconds, setSeconds] = useState(0);
    const intervalRef = useRef(null);

    useEffect(()=>{
        intervalRef.current = setInterval(()=>{
            setSeconds((prevSeconds)=>prevSeconds+1)
        },1000)

        return ()=>{
            clearInterval(intervalRef.current)
        }
    },[])

    return (
        <div>
            {/* <p>{ intervalRef.current}</p> */}
            <p>Seconds: {seconds}</p>
            <button onClick={()=>clearInterval(intervalRef.current)}>Stop Timer</button>
        </div>
    )
}

export default Timer