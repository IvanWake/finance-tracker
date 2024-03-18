type Props = {
    tHeads: string[]
}

const TableHeaders = ({tHeads}: Props) => {
    return (
        <thead className="bg-black border-b text-[#ccc]">
        <tr>
            {
                tHeads.map(header => (
                    <th
                        key={"tHead " + tHeads.indexOf(header)}
                        className="px-2 font-medium"
                    >
                        { header }
                    </th>
                ))
            }
        </tr>
        </thead>
    );
}

export default TableHeaders;