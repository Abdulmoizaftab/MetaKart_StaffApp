import {createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({
    name:"staff",
    initialState:{
        currentUser:null,
        isFetching:false,
        error:false
    },
    reducers:{
        loginStart:(state)=>{ 
            state.isFetching=true;
            // console.log("working")
        },
        loginSuccess:(state,action)=>{ 
            state.isFetching=false;
            state.currentUser=action.payload
            state.error=false;
        },
        loginFailure:(state)=>{ 
            state.isFetching=false;
            state.error=true
        },
        Logout:(state)=>{ 
           state.currentUser=null
        },
    },
})

export const {loginStart,loginSuccess,loginFailure,Logout} = userSlice.actions
export default userSlice.reducer;