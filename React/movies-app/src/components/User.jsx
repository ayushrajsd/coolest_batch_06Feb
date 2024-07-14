import { useEffect, useState } from "react"


export default function User(){

    const [user,setUser] = useState(null);
    const [error,setError] = useState(false);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        (async function(){
            try{
                setLoading(true);
                const resp = await fetch("https://jsonplaceholder.typicode.com/users/1");
                const user = await resp.json();
                console.log(user);
                setUser(user);
            }catch(err){
                setError(true);
            }finally{
                setLoading(false);
            }
        })()
    },[])

    if(error){
        return <h1>...Ops Something went wrong</h1>
    }
    if(loading){
        return <h1>...Loading</h1>
    }

    return(
        <>
            <h1>User component</h1>
            <h2>Name : {user.name}</h2>
            <h2>Phone : {user.phone}</h2>
        </>
    )
}