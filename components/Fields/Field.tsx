import EditingField from "@/components/Fields/EditingField";

type Props = {
    name: string,
    type: string,
    frequency: string,
    managedIn: string,
    paidWith: string,
    currency: string,
    amount: number,
}

const Field = (
    {
        name,
        type,
        frequency,
        managedIn,
        paidWith,
        currency,
        amount,
    }: Props) => {

    return (
        <>
            <tr className="border-b border-l border-r text-center">
                <EditingField initialValue={name}/>
                <EditingField initialValue={type}/>
                <EditingField initialValue={frequency}/>
                <EditingField initialValue={managedIn}/>
                <EditingField initialValue={paidWith}/>
                <EditingField initialValue={currency} isCurrency={true}/>
                <EditingField initialValue={amount}/>
            </tr>
        </>
    );
}

export default Field;