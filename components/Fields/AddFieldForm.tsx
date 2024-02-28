'use client';
import { useForm } from "react-hook-form";
import { useTracks } from "@/store/tracks-store";

type Props = {
    onAddField: () => void
}

type FormFields = {
    type: string,
    frequency: string,
    managedIn: string,
    paidWith: string,
    currency: string,
    amount: number,
};

const AddFieldForm = ({onAddField}: Props) => {
    const {
        handleSubmit,
        register
    } = useForm<FormFields>();
    const { addTrack } = useTracks();

    const submitHandler = (fields) => {
        addTrack({
                type: fields.fieldType,
                frequency: fields.fieldFrequency,
                managedIn: fields.fieldManagedIn,
                paidWith: fields.fieldPaidWith,
                currency: fields.fieldCurrency,
                amount: fields.fieldAmount,
            });
        onAddField();
    }

    return (
        <form className="flex flex-col space-y-2 my-2 text-white text-center" onSubmit={handleSubmit(submitHandler)}>
            <div className="flex space-x-2 justify-center items-center">
                <label htmlFor="type">Type</label>
                <input
                    {...register('fieldType', {required: true})}
                    id="type"
                    className="px-2 py-1 border-b-white border-b-[1px] focus:outline-none bg-black "
                    type="text"
                />
            </div>
            <div className="flex space-x-2 justify-center items-center">
                <label htmlFor="frequency">Frequency</label>
                <input
                    {...register('fieldFrequency', {required: true})}
                    id="frequency"
                    className="px-2 py-1 border-b-white border-b-[1px] focus:outline-none bg-black"
                    type="text"
                />
            </div>
            <div className="flex space-x-2 justify-center items-center">
                <label htmlFor="managedIn">Managed in</label>
                <input
                    {...register('fieldManagedIn', {required: true})}
                    id="managedIn"
                    className="px-2 py-1 border-b-white border-b-[1px] focus:outline-none bg-black"
                    type="text"
                />
            </div>
            <div className="flex space-x-2 justify-center items-center">
                <label htmlFor="paidWith">Paid With</label>
                <input
                    {...register('fieldPaidWith', {required: true})}
                    id="paidWith"
                    className="px-2 py-1 border-b-white border-b-[1px] focus:outline-none bg-black"
                    type="text"
                />
            </div>
            <div className="flex space-x-2 justify-center items-center">
                <label htmlFor="currency">Currency</label>
                <input
                    {...register('fieldCurrency', {required: true})}
                    id="currency"
                    className="px-2 py-1 border-b-white border-b-[1px] focus:outline-none bg-black"
                    type="text"
                />
            </div>
            <div className="flex space-x-2 justify-center items-center">
                <label htmlFor="amount">Amount</label>
                <input
                    {...register('fieldAmount', {required: true})}
                    id="amount"
                    className="px-2 py-1 border-b-white border-b-[1px] focus:outline-none bg-black"
                    type="number"
                />
            </div>
            <button
                type="submit"
                className="bg-white rounded-full py-2 px-4 text-black font-medium">
                Add Field
            </button>
        </form>
    );
}

export default AddFieldForm;