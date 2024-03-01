'use client';
import {useState} from 'react';
import SelectCurrency from "@/components/Layout/SelectCurrency";

type Props = {
    initialValue: string | number,
    onSave: () => void,
    isCurrency?: string,
}

const EditingField = ({initialValue, isCurrency}: Props) => {
    const [fieldValue, setFieldValue] = useState(initialValue);
    const [isEditing, setIsEditing] = useState(false);

    const handleDoubleClick = () => setIsEditing(true);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setFieldValue(e.target.value);
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
                                size="3.5"
                                className="outline-none bg-black text-white text-center"
                                value={fieldValue}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                autoFocus // Поле в фокусе сразу после рендера
                            />
                        </td>
                    ) : isCurrency ? (
                        <td
                            onClick={handleDoubleClick}
                            className={styleField + " bg-amber-500 rounded-full"}>
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