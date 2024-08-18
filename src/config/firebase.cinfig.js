// import {getApps, getApp} from "firebase/app";
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBg-oNnZ8ZFYQy_b4Sy7RfxA-rx_Zq7nHQ",
  authDomain: "fir-project-49802.firebaseapp.com",
  projectId: "fir-project-49802",
  storageBucket: "fir-project-49802.appspot.com",
  messagingSenderId: "58919433614",
  appId: "1:58919433614:web:3365e17cb467f297a5a0df"
};


// const firebaseConfig = {
//   apiKey:process.env.API_KAY ,
//   authDomain:process.env.REACT_APP_AUTHDOMAIN,
//   projectId:process.env.REACT_APP_PROJECTID,
//   storageBucket:process.env.REACT_APP_STORAGEBUCKET,
//   messagingSenderId:process.env.REACT_APP_MESSAGINGSENDERID,
//   appId:process.env.REACT_APP_APPID,
// };


  // const app= getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
  const app = initializeApp(firebaseConfig);
   export const auth = getAuth(app);
  // const db = getFirestore(app);

  // export   {app, auth, db};
  export default app;
