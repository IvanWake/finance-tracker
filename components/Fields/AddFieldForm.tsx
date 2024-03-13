'use client';
import { useForm } from "react-hook-form";
import { useTracks } from "@/store/tracks-store";

type Props = {
    onHideForm: () => void
}

type AddingFields = {
    fieldName: string,
    fieldType: string,
    fieldFrequency: string,
    fieldManagedIn: string,
    fieldPaidWith: string,
    fieldCurrency: string,
    fieldAmount: string,
}


const AddFieldForm = ({ onHideForm }: Props) => {
    const {
        handleSubmit,
        register
    } = useForm<AddingFields>();
    const { addTrack } = useTracks();

    const submitHandler = (fields: AddingFields) => {
        addTrack({
                name: fields.fieldName,
                type: fields.fieldType,
                frequency: fields.fieldFrequency,
                managedIn: fields.fieldManagedIn,
                paidWith: fields.fieldPaidWith,
                currency: fields.fieldCurrency,
                amount: parseFloat(fields.fieldAmount),
            });
        onHideForm();
    }

    return (
        <form className="flex flex-col justify-center space-y-2 my-2 text-white text-center border-white border-[1px] p-4" onSubmit={handleSubmit(submitHandler)}>
            <div className="flex space-x-2 justify-between items-center">
                <label htmlFor="name">Name</label>
                <input
                    {...register('fieldName', {required: true})}
                    id="name"
                    className="px-2 py-1 border-b-white border-b-[1px] focus:outline-none bg-black"
                    type="text"
                />
            </div>
            <div className="flex space-x-2 justify-between items-center">
                <label>Type</label>
                <select
                    {...register('fieldType', {required: true})}
                    className="appearance-none outline-none rounded-full bg-amber-500 px-[0.8rem] pb-[0.2   rem] text-center">
                    <option value="Software">Software</option>
                    <option value="Programming">Programming</option>Month
                    <option value="Music">Music</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div className="flex space-x-2 justify-between items-center">
                <label>Frequency</label>
                <select
                    {...register('fieldFrequency', {required: true})}
                    className="appearance-none outline-none rounded-full bg-amber-500 px-[0.4rem] text-center">
                    <option value="Day">Day</option>
                    <option value="Week">Week</option>Month
                    <option value="Month">Month</option>
                    <option value="Year">Year</option>
                </select>
            </div>
            <div className="flex space-x-2 justify-between items-center">
                <label>Managed In</label>
                <select
                    {...register('fieldManagedIn', {required: true})}
                    className="appearance-none outline-none rounded-full bg-amber-500 px-[0.8rem] text-center">
                    <option value="In App">In App</option>
                    <option value="Apple">Apple</option>Month
                </select>
            </div>
            <div className="flex space-x-2 justify-between items-center">
                <label>Paid With</label>
                <select
                    {...register('fieldPaidWith', {required: true})}
                    className="appearance-none outline-none rounded-full bg-amber-500 px-[0.8rem] text-center">
                    <option value="Debt Card">Debt Card</option>
                    <option value="Credit Card">Credit Card</option>
                    <option value="Pay Pal">Pay Pal</option>
                </select>
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
                Cancel
            </button>
        </form>
    );
}

export default AddFieldForm;