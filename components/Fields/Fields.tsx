import { useState } from "react";
import EditingField from "@/components/Fields/EditingField";

const Fields = () => {
    const [editedValue, setEditedValue] = useState("Бета версия");

    const saveHandler = (fieldValue: string) => {
        setEditedValue(fieldValue);
    }

    return (
        <tr>
            <EditingField initialValue={editedValue} onSave={saveHandler}/>
            <EditingField initialValue={editedValue} onSave={saveHandler}/>
            <EditingField initialValue={editedValue} onSave={saveHandler}/>
            <EditingField initialValue={editedValue} onSave={saveHandler}/>
            <EditingField initialValue={editedValue} onSave={saveHandler}/>
            <EditingField initialValue={editedValue} onSave={saveHandler}/>
        </tr>
    );
}

export default Fields;