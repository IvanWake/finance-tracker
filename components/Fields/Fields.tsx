import { useTracks } from "@/store/tracks-store";
import Field from "@/components/Fields/Field";

const Fields = () => {
    const { tracks } = useTracks();

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