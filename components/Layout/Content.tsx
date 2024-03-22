'use client';

import { useEffect } from "react";
import { useState } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "@/firebase";
import { useAuth } from "@/store/auth-store";
import Table from "@/components/Table/Table";
import AddField from "@/components/Fields/AddField";
import AuthBlock from "@/components/Auth/AuthBlock";
import Preloader from "@/components/Layout/Preloader";

const Content = () => {
    const [isUserLoading, serIsUserLoading] = useState<boolean>(true);
    const { isUserAuth, setIsUserAuth, setUser } = useAuth();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user && user.uid && user.email) {
                serIsUserLoading(true);
                setUser({
                    email: user.email,
                    id: user.uid,
                });
                serIsUserLoading(false);
                setIsUserAuth(true);
            } else {
                serIsUserLoading(false);
            }
        })
    }, [])

    return (
        <>
            {
                isUserLoading ? <Preloader alt="Preloader" width="100" height="100"/> :
                    isUserAuth ?
                        <>
                            <Table/>
                            <AddField/>
                        </> :
                        <AuthBlock/>
            }
        </>
    );
}

export default Content;