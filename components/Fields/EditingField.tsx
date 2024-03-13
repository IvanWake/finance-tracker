'use client';
import { ChangeEvent } from "react";
import { useState } from 'react';
import SelectCurrency from "@/components/Layout/SelectCurrency";

type Props = {
    initialValue: string | number,
    isCurrency?: boolean,
}

const EditingField = ({ initialValue, isCurrency }: Props) => {
    const [fieldValue, setFieldValue] = useState(initialValue);
    const [isEditing, setIsEditing] = useState(false);

    const handleDoubleClick = () => setIsEditing(true);
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => setFieldValue(e.target.value);
    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => setFieldValue(e.target.value);
    const handleBlur = () => setIsEditing(false)

    const styleField = "text-center px-4 border-r border-l";

    return (
        <>
            {
                isEditing ?
                    isCurrency ? (
                        <td>
                            <SelectCurrency
                                handleBlur={handleBlur}
                                handleChange={handleChange}
                                selectedCurrency={fieldValue}
                            />
                        </td>
                    ) : (
                        <td>
                            <input
                                type="text"
                                size={3.5}
                                className="outline-none bg-black text-white text-center"
                                value={fieldValue}
                                onChange={handleChangeInput}
                                onBlur={handleBlur}
                                autoFocus
                            />
                        </td>
                    ) : isCurrency ? (
                        <td
                            onClick={handleDoubleClick}
                            className={styleField + " bg-amber-500"}>
                            {fieldValue}
                        </td>
                    ) : (
                        <td
                            onDoubleClick={handleDoubleClick}
                            className={styleField}>
                            {fieldValue}
                        </td>
                    )
            }
        </>
    );
};

export default EditingField;