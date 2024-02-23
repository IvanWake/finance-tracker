import TableHeaders from "@/components/Table/TableHeaders";

const Table = () => {
    const tHeads = [
        'Type', 'Frequency', 'Managed in',
        'Paid with', 'Currency', 'Amount'
    ];
    return (
        <table className="border-collapse my-8 border-solid border-[1px] border-[#ccc] w-full">
            <TableHeaders tHeads={tHeads}/>
        </table>
    );
}

export default Table;