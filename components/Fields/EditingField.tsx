'use client';
import React, {useState} from 'react';

type Props = {
    initialValue: () => void,
    onSave: () => void,
}

const EditingField = ({initialValue}: Props) => {
    const [fieldValue, setFieldValue] = useState(initialValue);
    const [isEditing, setIsEditing] = useState(false);

    const handleDoubleClick = () => setIsEditing(true);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setFieldValue(e.target.value);
    const handleBlur = () => setIsEditing(false)

    return (
        <>
            {
                isEditing ? (
                    <input
                        type="text"
                        size="3.5"
                        className="focus: outline-none bg-black text-white text-center"
                        value={fieldValue}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoFocus // Поле в фокусе сразу после рендера
                    />
                ) : (
                    <td
                        onDoubleClick={handleDoubleClick}
                        className="text-center px-4 border-r border-l">
                        {fieldValue}
                    </td>
                )
            }
        </>
    );
};

export default EditingField;