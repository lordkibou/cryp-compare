// ----------------------------------------------------------------------------
//   @params data: String  -->
//                          loadCryptoMarketsPrices() <--
//                      <--
// @return { Data: {Exchanges: Lista<{ PRICE: Real , MARKET: String }>} }
//
// Use CryptoCompare  $ Toplist Top Exchanges Full Data by Pair
// ----------------------------------------------------------------------------

module.exports = async function (data, cb) {
    try {
        let cryptoSymbol = data.cryptoSymbol;
        let response = await fetch(`https://min-api.cryptocompare.com/data/top/exchanges/full?fsyms=${cryptoSymbol}&tsym=USD&limit=15`);
        if (response.ok) {
            let dataOut = await response.json();  
            cb(dataOut , null);
        }
    }
    catch (e) { 
        cb(null , e)
    }
}

//-----------------------------------------------------------------------

//---------------------------------------------------------------
//@params data:List<String>
//@return string   "BTC,ETH,XRP,SAND"
//---------------------------------------------------------------
function loadParametersInURL(data) {
    let stringURLOut = "";
    data.forEach((crypto) => {
        stringURLOut += crypto + ","
    });
    return stringURLOut;
}