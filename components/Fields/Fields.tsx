import Field from "@/components/Fields/Field";
import { useTracks } from "@/store/tracks-store";
const Fields = () => {
    const { tracks } = useTracks();
    return (
        <>
            {
                tracks.map(track => (
                    <Field
                        key={'fId ' + Math.random()}
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