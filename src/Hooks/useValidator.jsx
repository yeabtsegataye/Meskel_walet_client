import { UseAuthContext } from "./useAuthContext";
import {useState, useEffect} from 'react'

 export const useValidator = ()=>{

const {user, dispatch} = UseAuthContext()
const [valid ,setValid] = useState(false)
const api_valid = import.meta.env.VITE_API_VALID
    // const Verifiy = ()=>{
useEffect(()=>{
    if(!user){
      setValid(false)
      dispatch({type: 'LOGOUT'})
      return
    }
      const tok = user.token  
    fetch(api_valid, {
      method: "POST",
      headers: { authorization: `beared ${tok}` },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const states = data.user;
        setValid(states);
        if (!states) {
          dispatch({ type: "LOGOUT" });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },[ dispatch,user])

  return {valid}
}