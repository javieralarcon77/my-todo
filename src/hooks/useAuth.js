import firebase from "firebase/app";
import { useEffect, useState } from "react";

export const useAuth = () => {

    const [user, setUser] = useState(null)

    useEffect(() => {
    
        firebase.auth().onAuthStateChanged((user)=>{
            //console.log(user);
            if(user){
                setUser({
                    id: user.uid,
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL,                    
                });
            }else{
                setUser(null);
            }
        })

    }, [])   

    return user;
}