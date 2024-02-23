type Props = {
    tHeads: string[]
}

const TableHeaders = ({tHeads}: Props) => {
    return (
        <thead>
        <tr>
            {
                tHeads.map(header => (
                    <th
                        key={"tHead " + tHeads.indexOf(header)}
                        className="p-2 font-medium"
                    >
                        {header}
                    </th>
                ))
            }
        </tr>
        </thead>
    );
}

export default TableHeaders;