'use client';

import { useEffect } from "react";
import { updateUserTracks } from "@/service/http-service";
import { useTracks } from "@/store/tracks-store";
import { useAuth } from "@/store/auth-store";
import Field from "@/components/Fields/Field";

const Fields = () => {
    const { tracks } = useTracks();
    const { user } = useAuth();

    useEffect(() => {
        if (user.id) {
            if (tracks.length > 0) {
                updateUserTracks(user.id, tracks);
            }
        }
    }, [tracks]);


    return (
        <>
            {
                tracks.map(track => (
                    <Field
                        key={'fId ' + Math.random()}
                        name={track.name}
                        type={track.type}
                        frequency={track.frequency}
                        managedIn={track.managedIn}
                        paidWith={track.paidWith}
                        currency={track.currency}
                        amount={track.amount}
                    />
                ))
            }
        </>
    );
}

export default Fields;