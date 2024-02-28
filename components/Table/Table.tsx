'use client';
import TableHeaders from "@/components/Table/TableHeaders";
import TableBody from "@/components/Table/TableBody";

const Table = () => {
    const tHeads: string[] = [
        'Type', 'Frequency', 'Managed in',
        'Paid with', 'Currency', 'Amount'
    ]

    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full">
                            <TableHeaders tHeads={tHeads} />
                            <TableBody />
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Table;