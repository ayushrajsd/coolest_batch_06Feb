import {useEffect, useRef} from 'react'

function FocusInput(){
    const inputRef = useRef(null) // create a reference using useRef( initialValue)
    
    const focusInput = ()=>{
        console.log(inputRef.current)
        inputRef.current.focus()
    }

    useEffect(()=>{
        // focus the input element
        focusInput()
    },[])

   return(
    <div>
        <input type="text" ref={inputRef} />
        <button onClick={focusInput}>Focus Input</button>
    </div>
   ) 
}

export default FocusInput