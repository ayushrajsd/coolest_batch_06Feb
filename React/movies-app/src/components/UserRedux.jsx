import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import fetchUserMiddleware from "../redux/User/middleware";


export default function UserRedux(){

    const {error,loading,user} = useSelector((state)=>state.user)
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(fetchUserMiddleware());
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