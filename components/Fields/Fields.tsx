import Field from "@/components/Fields/Field";

const Fields = () => {
    type Tracks = {
        type: string,
        frequency: string,
        managedIn: string,
        paidWith: string,
        currency: string,
        amount: number,
    }

    const tracks: Tracks[] = [
        {
            type: 'string',
            frequency: 'string',
            managedIn: 'string',
            paidWith: 'string',
            currency: 'string',
            amount: 123,
        },
        {
            type: 'string1',
            frequency: 'string1',
            managedIn: 'string1',
            paidWith: 'string1',
            currency: 'string1',
            amount: 22,
        },
        {
            type: 'string2',
            frequency: 'string2',
            managedIn: 'string2',
            paidWith: 'string2',
            currency: 'string2',
            amount: 228,
        },
    ];

    return (
        <>
            {
                tracks.map(field => (
                    <Field
                        key={'fId ' + Math.random()}
                        type={field.type}
                        frequency={field.frequency}
                        managedIn={field.managedIn}
                        paidWith={field.paidWith}
                        currency={field.currency}
                        amount={field.amount}

                    />
                ))
            }
        </>
    );
}

export default Fields;