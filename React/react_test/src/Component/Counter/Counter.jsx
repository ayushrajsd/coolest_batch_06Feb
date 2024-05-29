import { useState } from "react"

export default function Counter(){
    const [count,setCount] = useState(0);

    return(
        <>
            <h1>Counter Component</h1>
            <h2>Count : {count}</h2>
            <div>
                <button onClick={()=>setCount(count+1)}>+</button>
                <button onClick={()=>setCount(count-1)}>-</button>
            </div>
        </>
    )
}