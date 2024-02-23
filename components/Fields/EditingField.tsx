'use client';
import React, {useState} from 'react';

type Props = {
    initialValue: () => void,
    onSave: () => void,
}

const EditingField = ({initialValue, onSave}: Props) => {
    const [fieldValue, setFieldValue] = useState(initialValue);
    const [isEditing, setIsEditing] = useState(false);

    const handleDoubleClick = () => setIsEditing(true);

    const handleChange = (e) => {
        setFieldValue(e.target.value);
    };

    const handleBlur = () => {
        setIsEditing(false);
        onSave(fieldValue);
    };

    return (
        <>
            {
                isEditing ? (
                    <input
                        type="text"
                        size="3.5"
                        className="focus: outline-none"
                        value={fieldValue}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoFocus // Поле в фокусе сразу после рендера
                    />
                ) : (
                    <td
                        onDoubleClick={handleDoubleClick}
                        className="text-center">
                        {fieldValue}
                    </td>
                )
            }
        </>
    );
};

export default EditingField;