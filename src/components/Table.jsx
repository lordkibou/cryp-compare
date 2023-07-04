
const Table = ({headers,data}) => {
    return (
        <div className="table">
            <table>
                <thead>
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>BTC</td>
                        <td>$30,000</td>
                        <td>1.45%</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}


export default Table;