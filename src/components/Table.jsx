
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
                    {/*Check if there is no data and what type the table is, if is data general, filter the ones which dont have the
                    information that we need and then map returning the structure that we want in the table, each in <tr>
                    if the type is market, we only map, the data is always all right*/}
                    {(typeOfTable === "general" && data != null) ? data.Data.filter((crypto)=>{return crypto.RAW})?.map((crypto, index) => {
                        if (crypto.RAW) {
                            const abrev = crypto.RAW.USD.FROMSYMBOL
                            return(<tr key={index}>
                                <td>{index+1}</td>
                                <td className="td-button"><div className="container-button-crypto"><img className="logo-crypto" src={`https://www.cryptocompare.com/${crypto.CoinInfo.ImageUrl}`} alt={`Icon Crypto ${abrev}`} /><div>{crypto.CoinInfo.FullName}</div><div className="abrev">{abrev}</div></div></td>
                                <td>${crypto.RAW.USD.PRICE}</td>
                                <td>{crypto.RAW.USD.CHANGEPCT24HOUR.toFixed(2)}</td>
                            </tr>)
                        }
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