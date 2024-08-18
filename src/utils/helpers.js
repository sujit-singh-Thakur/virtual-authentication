// import {GoogleAuthProvider, signInWithRedirect } from "firebase/auth"
// import { auth } from "../config/firebase.cinfig" 

// const googleProvider = new GoogleAuthProvider();

// export const signInWithGoogle = async () =>{
//     await signInWithRedirect(auth, googleProvider).then(usercred => {
//         window.location.reload()
//     })
// }

import {GoogleAuthProvider, signInWithPopup } from "firebase/auth";
 import { auth } from "../config/firebase.cinfig" 
export const  handleGoogle = async(e)=>{
    const provider =  await new GoogleAuthProvider();
    return  signInWithPopup(auth, provider);
}