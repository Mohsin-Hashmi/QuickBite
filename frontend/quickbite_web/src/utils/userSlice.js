import { createSlice } from "@reduxjs/toolkit";

export const userSlice= createSlice({
    name:"user",
    initialState:null,
    reducers:{
        addUser: (state,action)=>{
            state=action.payload;
        },
        removeUser: (state)=>{
          state.user= null
        }
    }
});

export const {addUser, removeUser}=userSlice.actions;
export default userSlice.reducer;