import {setDoc, doc, updateDoc} from "@firebase/firestore";
import { Track } from "@/store/tracks-store";
import {dbFirestore} from "@/firebase";


export const createUserTracks = async (id, items) => {

    const userTracks = {
        tracks: items,
    }
    try {
        const cartDoc = doc(dbFirestore, 'userTracks', id);
        await setDoc(cartDoc, userTracks);
    } catch (error) {
        console.log(error)
    }
}

export const updateUserTracks = async (id: string, items: Track[]) => {
    const userTracks = {
        tracks: items,
    }

    try {
        const tracksDoc = doc(dbFirestore, 'userTracks', id);
        await updateDoc(tracksDoc, userTracks);
    } catch (error) {
        console.log(error)
    }
};