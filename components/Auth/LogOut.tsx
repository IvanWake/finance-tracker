'use client';

import {signOut} from "@firebase/auth";
import {auth} from "@/firebase";
import AuthButton from "@/components/Auth/AuthButton";
import {useAuth} from "@/store/auth-store";

const LogOut = () => {

    const {setIsUserAuth, isUserAuth} = useAuth();

    const logOutHandler = () => {
        signOut(auth)
            .then(() => {
                setIsUserAuth(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <>
            {
                isUserAuth && <div onClick={logOutHandler}>
                  <AuthButton
                      content="Log Out"
                      addingStyles="text-white bg-black px-6 border-[1px] text-xl
                      font-medium hover:bg-white hover:text-black"
                  />
                </div>
            }
        </>
    );
}

export default LogOut;