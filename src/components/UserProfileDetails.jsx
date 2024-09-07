import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
<<<<<<< HEAD
<<<<<<< HEAD
import { FaChevronDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Menus, signOutAction } from "../utils/helpers";
=======
=======
>>>>>>> db656796fd7aaf507530c237ec4a38e5599a9292
import { FaChevronDown } from "react-icons/fa";
import { signOutAction } from "../utils/helpers";
import { Link } from "react-router-dom";
import { Menus } from "../utils/helpers";
<<<<<<< HEAD
>>>>>>> db656796fd7aaf507530c237ec4a38e5599a9292
=======
>>>>>>> db656796fd7aaf507530c237ec4a38e5599a9292
import { slideUpOut } from "../animation";

const UserProfileDetails = () => {
  const user = useSelector((state) => state.user?.user);
  const [isMenu, setIsMenu] = useState(false);
  return (
    <div className="flex items-center justify-center gap-4 relative">
      <div
        className="w-14 h-14 flex items-center justify-center rounded-xl overflow-hidden cursor-pointer bg-emerald-500"
        //featching the user info from the state its self
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> db656796fd7aaf507530c237ec4a38e5599a9292
=======

>>>>>>> db656796fd7aaf507530c237ec4a38e5599a9292
      >
        {user?.photoURL ? (
          <>
            {/* if user have photo url */}
            <motion.img
              whileHover={{ scale: 1.2 }}
              src={user?.photoURL}
              alt={user?.displayName}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </>
        ) : (
          <>
            {/* if does not have photo url */}
            <p className="text-xl text-white font-semibold capitalize">
              {user?.email[0]}
            </p>
          </>
        )}
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
      <motion.div
        onClick={() => setIsMenu(!isMenu)}
        whileTap={{ scale: 0.9 }}
        className="p-4 rounded-md flex items-center justify-center bg-secondary cursor-pointer"
      >
        <FaChevronDown className="text-primaryText" />
      </motion.div>

      <AnimatePresence>
        {isMenu && (
          <motion.div
            {...slideUpOut}
            className="bg-secondary absolute top-16 right-0 px-4 py-3 rounded-xl shadow-md z-10 flex flex-col items-start justify-start gap-4 min-w-[225px]"
          >
            {Menus &&
              Menus.map((menu) => (
                <Link
                  to={menu.uri}
                  key={menu.id}
                  className="text-primaryText text-lg hover:bg-[rgba(256,256,256,0.05)] px-2 py-1 w-full rounded-md"
                >
                  {menu.name}
                </Link>
              ))}
            <motion.p
              onClick={signOutAction}
              whileTap={{ scale: 0.9 }}
              className="text text-primaryText text-lg hover:bg-[rgba(256,256,256,0.05)] px-2 py-1 w-full rounded-md cursor-pointer"
            >
              Sign Out
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
=======
=======
>>>>>>> db656796fd7aaf507530c237ec4a38e5599a9292
      
      <motion.div
      onClick={() => setIsMenu(!isMenu)}
      whileTap={{scale:0.9}}
      className="p-4 rounded-md flex items-center justify-center bg-secondary cursor-pointer"
      > 
      <FaChevronDown className="text-primaryText" />

      </motion.div>
    
       <AnimatePresence>
       {isMenu && (
        <motion.div {...slideUpOut}
        className="bg-secondary absolute top-16 right-0 px-4 py-3 rounded-xl shadow-md z-10 flex flex-col items-start justify-start gap-4 min-w-[225px]"
        >
       {Menus && 
       Menus.map((menu) => {
        return (  <Link
          to ={menu.uri}
          key={menu.id}
          className="text-primaryText text-lg hover:bg-[rgba(256,256,256,0.05)] px-2 py-1 w-full rounded-md"
          > 
          {menu.name}
          </Link>
        )
        })}
        
         <motion.p
          onClick={signOutAction}
          whileTap={{scale:0.9}}
           className = "text text-primaryText text-lg hover:bg-[rgba(256,256,256,0.05)] px-2 py-1 w-full rounded-md cursor-pointer"
         >
         Sign Out
         </motion.p>
        </motion.div>
       )}
       </AnimatePresence>
<<<<<<< HEAD
>>>>>>> db656796fd7aaf507530c237ec4a38e5599a9292
=======
>>>>>>> db656796fd7aaf507530c237ec4a38e5599a9292
    </div>
  );
};

export default UserProfileDetails;
