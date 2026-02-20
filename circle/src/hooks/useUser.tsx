import { useContext } from "react";
import { LoginMeContext } from "../context/loginMeProvider";

export const useUser = () => {
    const context = useContext(LoginMeContext); 
    if(!context){
        throw new Error("useUser must be used inside LoginMeProvider");
    }       
    return context;
}