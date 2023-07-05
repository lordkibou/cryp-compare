
const Table = ({ headers, data, typeOfTable }) => {
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
                    {(typeOfTable === "general" && data != null) ? data.Data?.map((crypto, index) => {
                        return(<tr key={index}>
                            <td>{index+1}</td>
                            <td>${crypto.RAW.USD.FROMSYMBOL}</td>
                            <td>${crypto.RAW.USD.PRICE}</td>
                            <td>{crypto.RAW.USD.CHANGEPCT24HOUR}</td>
                        </tr>)
                    }) : (data != null) ? data.Data.Exchanges.map((crypto, index) => {
                        return (<tr key={index}>
                            <td>{index + 1}</td>
                            <td>{crypto.MARKET.charAt(0).toUpperCase() + crypto.MARKET.slice(1)}</td>
                            <td>${crypto.PRICE}</td>
                        </tr>)
                    }):console.log("a")}
                </tbody>
            </table>
        </div>
    );
}

export default Table;