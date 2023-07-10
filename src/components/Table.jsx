import { redirectMarketsPage } from "../clientFunctions/redirectMarketsPage";

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
                            const ranking = index + 1
                            const claseNumero = crypto.RAW.USD.CHANGEPCT24HOUR < 0 ? "rojo" : "verde";
                            return(<tr key={index}>
                                <td className="rank-number">{index+1}</td>
                                <td className="td-button" onClick={() => redirectMarketsPage(abrev,ranking)}><div className="container-button-crypto"><img className="logo-crypto" src={`https://www.cryptocompare.com/${crypto.CoinInfo.ImageUrl}`} alt={`Icon Crypto ${abrev}`} /><div>{crypto.CoinInfo.FullName}</div><div className="abrev">{abrev}</div></div></td>
                                <td>{crypto.RAW.USD.PRICE.toLocaleString("en-US", {
                                    style: "currency",
                                    currency: "USD",
                                })}</td>
                                <td className={`${claseNumero}`}>{claseNumero === "rojo" ? <span className="icono-rojo">&#9660;</span> : <span className="icono-verde">&#9650;</span>}{crypto.RAW.USD.CHANGEPCT24HOUR.toFixed(2)}%</td>
                                <td>{crypto.RAW.USD.MKTCAP.toLocaleString("en-US", {
                                    style: "currency",
                                    currency: "USD",
                                })}</td>
                            </tr>)
                        }
                    }) : (data != null) ? data.Data.Exchanges.map((crypto, index) => {
                        return (<tr key={index}>
                            <td className="rank-number">{index + 1}</td>
                            <td>{crypto.MARKET.charAt(0).toUpperCase() + crypto.MARKET.slice(1)}</td>
                            <td>{crypto.PRICE.toLocaleString("en-US", {
                                    style: "currency",
                                    currency: "USD",
                            })}</td>
                            <td>{(crypto.VOLUME24HOURTO !=0)?`${crypto.VOLUME24HOURTO.toLocaleString("en-US", {
                                    style: "currency",
                                    currency: "USD",
                            })}`:"None"}</td>
                        </tr>)
                    }):console.log("a")}
                </tbody>
            </table>
        </div>
    );
}

export default Table;