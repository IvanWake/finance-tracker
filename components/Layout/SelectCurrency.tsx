import { ChangeEvent } from "react";

type Props = {
    handleBlur: () => void,
    handleChange: (e: ChangeEvent<HTMLSelectElement>) => void,
    selectedCurrency: string | number,
}

const SelectCurrency = ({ handleBlur, handleChange, selectedCurrency }: Props) => {
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => handleChange(e);
    return (
        <select
            value={selectedCurrency}
            className="appearance-none outline-none bg-amber-500 px-[1.7rem] py-[1px]"
            onBlur={handleBlur}
            onChange={onChangeHandler}>
            <option onClick={handleBlur} value="USD">USD</option>
            <option onClick={handleBlur} value="RUB">RUB</option>
        </select>
    );
}

export default SelectCurrency;