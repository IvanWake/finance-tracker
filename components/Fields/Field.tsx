'use client';
import EditingField from "@/components/Fields/EditingField";
import { useState } from "react";

type Props = {
    type: string,
    frequency: string,
    managedIn: string,
    paidWith: string,
    currency: string,
    amount: number,
}

const Field = ({type, frequency, managedIn, paidWith, currency, amount}: Props) => {
    return (
        <tr>
            <EditingField initialValue={type} />
            <EditingField initialValue={frequency} />
            <EditingField initialValue={managedIn} />
            <EditingField initialValue={paidWith} />
            <EditingField initialValue={currency} />
            <EditingField initialValue={amount} />
        </tr>
    );
}

export default Field;