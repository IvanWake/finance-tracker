type Props = {
    handleBlur?: () => void,
    handleChange?: () => void,
    selectedCurrency: string,
}

const SelectCurrency = ({ handleBlur, handleChange, selectedCurrency }: Props) => {
    return (
        <select
            value={selectedCurrency}
            className="appearance-none outline-none rounded-full bg-amber-500 px-[1.7rem] py-[1px]"
            onBlur={handleBlur}
            onChange={handleChange}>
            <option onClick={handleBlur} value="USD">USD</option>
            <option onClick={handleBlur} value="RUB">RUB</option>
        </select>
    );
}

export default SelectCurrency;