
import { create } from "zustand";

export const useAuthStore = create((set)=>({
  authUser : {name : "john",_id:123,age:27},
  isLoading : false,
  isLoggedIn:false,

  login: ()=>{
    console.log("we just logged in");
    set({isLoggedIn:true , isLoading:true});
  },
}));