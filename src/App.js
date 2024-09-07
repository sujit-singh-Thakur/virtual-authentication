import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
<<<<<<< HEAD
<<<<<<< HEAD
import { Home, NewProject } from "./container";
import { auth, db } from "./config/firebase.config";
import { collection, doc, onSnapshot, orderBy, query, setDoc } from "firebase/firestore";
import { Spinner } from "./components";
import { useDispatch } from "react-redux";
import { SET_USER } from "./context/actions/userActions";
// import { SET_PROJECTS } from "./context/actions/projectActions";
// import { SET_PROJECTS } from "./context/actions/projectActions";
import { SET_PROJECTS } from "./context/actions/ProjectActions";
=======
=======
>>>>>>> db656796fd7aaf507530c237ec4a38e5599a9292
import { Home,NewProject } from "./container";
import { auth, db } from "./config/firebase.config";
import { doc, setDoc } from "firebase/firestore";
import { Spinner } from "./components";
import { useDispatch } from "react-redux";
import { SET_USER } from "./context/actions/userActions";

>>>>>>> db656796fd7aaf507530c237ec4a38e5599a9292
const App = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged((userCred) => {
      if (userCred) {
        //got user credential
        // taking out email
        console.log(userCred?.providerData[0]);
        setDoc(doc(db, "users", userCred?.uid), userCred?.providerData[0]).then(
          () => {
            //dispatch the action to store
            dispatch(SET_USER(userCred?.providerData[0]));
            navigate("/home/projects", { replace: true });
          }
        );
      } else {
        //not got user credential
        navigate("/home/auth", { replace: true });
      }

      setInterval(() => {
        setIsLoading(false);
      }, 2000);
    });

    //clean up the listener event
    return () => unsuscribe();
  }, []);

<<<<<<< HEAD
<<<<<<< HEAD
  useEffect(()=> {
    const projectQuery = query(
      collection(db,"projects"),
      orderBy("id","desc")
    );
    const unsuscribe = onSnapshot(projectQuery, (querySnaps) => {
      const projectsList = querySnaps.docs.map((doc) => doc.data());
      dispatch(SET_PROJECTS(projectsList));
    });
    return unsuscribe;
  },[]);

=======
>>>>>>> db656796fd7aaf507530c237ec4a38e5599a9292
=======
>>>>>>> db656796fd7aaf507530c237ec4a38e5599a9292
  return (
    <>
      {isLoading ? (
        <div className="w-screen h-screen flex items-center justify-center overflow-hidden">
          <Spinner />
        </div>
      ) : (
        <div className="w-screen h-screen flex items-start justify-start overflow-hidden">
          <Routes>
            <Route path="/home/*" element={<Home />} />
            <Route path="/newProject" element={<NewProject />} />
<<<<<<< HEAD
<<<<<<< HEAD
            {/* if the route not match */}
            <Route path="*" element={<Navigate to={"/home"} />} />
          </Routes>
        </div>
      )}
    </>
  );
};

=======

            {/* if the route not match */}
            <Route path="*" element={<Navigate to={"/home"} />} />
          </Routes>
        </div>
      )}
    </>
  );
};

>>>>>>> db656796fd7aaf507530c237ec4a38e5599a9292
=======

            {/* if the route not match */}
            <Route path="*" element={<Navigate to={"/home"} />} />
          </Routes>
        </div>
      )}
    </>
  );
};

>>>>>>> db656796fd7aaf507530c237ec4a38e5599a9292
export default App;
