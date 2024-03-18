'use client';
import { useState } from "react";
import AddFieldForm from "@/components/Fields/AddFieldForm";

const AddField = () => {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const hideFormHandler = () =>
        setIsFormVisible(prevState => !prevState);

    return (
        <>

            { isFormVisible ?
                <AddFieldForm onHideForm={hideFormHandler} /> :
                <button
                    type="button"
                    onClick={hideFormHandler}
                    className="bg-white rounded-full py-2 px-4 text-black font-medium">
                    Add Field
                </button>
            }
        </>
    );
}

export default AddField;