'use client';
import { useForm } from "react-hook-form";
import { useTracks } from "@/store/tracks-store";

type Props = {
    onHideForm: () => void
}

type FormFields = {
    type: string,
    frequency: string,
    managedIn: string,
    paidWith: string,
    currency: string,
    amount: number,
};

const AddFieldForm = ({ onHideForm }: Props) => {
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
        onHideForm();
    }

    return (
        <form className="flex flex-col justify-center space-y-2 my-2 text-white text-center border-white border-[1px] p-4" onSubmit={handleSubmit(submitHandler)}>
            <div className="flex space-x-2 justify-between items-center">
                <label htmlFor="type">Type</label>
                <input
                    {...register('fieldType', {required: true})}
                    id="type"
                    className="px-2 py-1 border-b-white border-b-[1px] focus:outline-none bg-black "
                    type="text"
                />
            </div>
            <div className="flex space-x-2 justify-between items-center">
                <label>Frequency</label>
                <select
                    {...register('fieldFrequency', {required: true})}
                    className="appearance-none outline-none rounded-full bg-amber-500 px-[1.7rem]">
                    <option value="Day">Day</option>
                    <option value="Week">Week</option>Month
                    <option value="Month">Month</option>
                    <option value="Year">Year</option>
                </select>
            </div>
            <div className="flex space-x-2 justify-between items-center">
                <label htmlFor="managedIn">Managed in</label>
                <input
                    {...register('fieldManagedIn', {required: true})}
                    id="managedIn"
                    className="px-2 py-1 border-b-white border-b-[1px] focus:outline-none bg-black"
                    type="text"
                />
            </div>
            <div className="flex space-x-2 justify-between items-center">
                <label htmlFor="paidWith">Paid With</label>
                <input
                    {...register('fieldPaidWith', {required: true})}
                    id="paidWith"
                    className="px-2 py-1 border-b-white border-b-[1px] focus:outline-none bg-black"
                    type="text"
                />
            </div>
            <div className="flex space-x-2 justify-between items-baseline">
                <label>Currency</label>
                <select
                    {...register('fieldCurrency', {required: true})}
                    className="appearance-none outline-none rounded-full bg-amber-500 px-[1.7rem]">
                    <option value="USD">USD</option>
                    <option value="RUB">RUB</option>
                </select>
            </div>
            <div className="flex space-x-2 justify-between items-center">
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
            <button
                type="button"
                onClick={() => onHideForm()}
                className="bg-white rounded-full py-2 px-4 text-black font-medium">
                &#8656; Cancel
            </button>
        </form>
    );
}

export default AddFieldForm;