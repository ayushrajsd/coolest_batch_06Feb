

// try{
    //             setLoading(true);
    //             const resp = await fetch("https://jsonplaceholder.typicode.com/users/1");
    //             const user = await resp.json();
    //             console.log(user);
    //             setUser(user);
    //         }catch(err){
    //             setError(true);
    //         }finally{
    //             setLoading(false);
    //         }
    
import userSlice from "./userSlice";

const actions = userSlice.actions;


const fetchUserMiddleware = ()=>{

    // it automatically get the dispatch
    return async function(dispatch){
        try{
            dispatch(actions.userLoading(true))
            const resp = await fetch("https://jsonplaceholder.typicode.com/users/1");
            const user = await resp.json();
            dispatch(actions.userData(user));
        }catch(err){
            dispatch(actions.userError());
        }finally{
            dispatch(actions.userLoading(false))
        }
    }
}

export default fetchUserMiddleware;