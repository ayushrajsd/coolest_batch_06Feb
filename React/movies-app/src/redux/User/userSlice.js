import {createSlice} from "@reduxjs/toolkit";

// const [user,setUser] = useState(null);
// const [error,setError] = useState(false);
// const [loading,setLoading] = useState(true);

// useEffect(()=>{
//     (async function(){
//         try{
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
//     })()
// },[])

const userSlice = createSlice({
    name:"userSlice",
    initialState:{
        user:null,
        error:false,
        loading:true
    },
    reducers:{
        userLoading:(state,action)=>{
            state.error = false;
            state.loading = action.payload;
        },
        userError:(state)=>{
            state.error = true;
            state.loading = false;
        },
        userData:(state,action)=>{
            state.loading = false;
            state.error = false;
            state.user = action.payload
        }
    }
})

export default userSlice;