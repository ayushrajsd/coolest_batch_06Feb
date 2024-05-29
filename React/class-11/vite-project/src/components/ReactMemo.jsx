import {useState, memo} from 'react'
const Counter = memo(({count})=>{ // shallow comparision
    console.log("Counter component re-rendered")
    return <div>Counter: {count}</div>
})

const Memo = () => {
    const [count, setCount] = useState(0)
    const [otherState, setOtherState] = useState(false)
    
    const incrementCount = () => {
        setCount(count + 1)
    }
    const toggleState = () => {
        setOtherState(!otherState)
    }
    return(
        <div>
            <h1>React memo example</h1>
            <Counter count={count}/>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={toggleState}>Toggle other state</button>
        </div>
    )
}

export default Memo