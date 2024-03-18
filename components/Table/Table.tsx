'use client';
import TableHeaders from "@/components/Table/TableHeaders";
import TableBody from "@/components/Table/TableBody";
import { useTracks } from "@/store/tracks-store";

const Table = () => {
    const { tracks } = useTracks();
    const tHeads: string[] = [
        'Name', 'Type', 'Frequency', 'Managed in',
        'Paid with', 'Currency', 'Amount'
    ];

    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        {
                            tracks?.length > 0 ?
                                <table className="min-w-full">
                                    <TableHeaders tHeads={tHeads}/>
                                    <TableBody/>
                                </table> :
                                <h1 className="text-3xl py-4">Пока ничего нет :(</h1>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Table;