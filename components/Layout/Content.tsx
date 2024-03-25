'use client';

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import { doc, getDoc } from "@firebase/firestore";
import { auth, dbFirestore } from "@/firebase";
import { useAuth } from "@/store/auth-store";
import { useTracks } from "@/store/tracks-store";
import Table from "@/components/Table/Table";
import AddField from "@/components/Fields/AddField";
import AuthBlock from "@/components/Auth/AuthBlock";
import Preloader from "@/components/Layout/Preloader";

const Content = () => {
    const [isUserLoading, setIsUserLoading] = useState<boolean>(true);
    const { setTracks } = useTracks();
    const { isUserAuth, setIsUserAuth, setUser } = useAuth();

    const getUserTracks = async (uId: string) => {
        try {
            const docRef = doc(dbFirestore, 'userTracks', uId);
            const docSnap = await getDoc(docRef);
            if (docSnap.data().tracks) {
                setTracks(docSnap.data().tracks);
            }
        } catch (error) {}
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user && user.uid && user.email) {
                setUser({
                    email: user.email,
                    id: user.uid,
                });
                getUserTracks(user.uid);
                setIsUserLoading(false);
                setIsUserAuth(true);
            } else {
                setIsUserLoading(false);
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