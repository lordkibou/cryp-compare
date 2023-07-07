

// ----------------------------------------------------------------------------
//   @params data:Entero  -->
//                          loadCryptoInfo() <--
//                      <--
// @return { Data: List<{ RAW:{ USD: { FROMSYMBOL: String, PRICE: Real , CHANGEPCT24HOUR: Real, IMAGEURL: String}}}> }
//
// Use CryptoCompare  $ Toplist by Marketcap Full Data
// ----------------------------------------------------------------------------

export const loadCryptoInfo = async function (cb) {
    try {
        let response = await fetch(`https://min-api.cryptocompare.com/data/top/mktcapfull?limit=82&tsym=USD&api_key={c4ebc752ad6c6f0a5ec7c8ad330b32e5a5f14a92c49458aae12522d773ddc7fc}`);
        if (response.ok) {
            let dataOut = await response.json();  
            cb(dataOut , null);
        }
    }
    catch (e) { 
        cb(null , e)
    }
}

// ----------------------------------------------------------------------------
//   @params data: String  -->
//                          loadCryptoMarketsPrices() <--
//                      <--
// @return { Data: {Exchanges: Lista<{ PRICE: Real , MARKET: String }>} }
//
// Use CryptoCompare  $ Toplist Top Exchanges Full Data by Pair
// ----------------------------------------------------------------------------

export const loadCryptoMarketsPrices = async function (data, cb) {
    try {
        let response = await fetch(`https://min-api.cryptocompare.com/data/top/exchanges/full?fsym=${data}&tsym=USD&limit=15&api_key={c4ebc752ad6c6f0a5ec7c8ad330b32e5a5f14a92c49458aae12522d773ddc7fc}`);
        if (response.ok) {
            let dataOut = await response.json();  
            cb(dataOut , null);
        }
    }
    catch (e) { 
        cb(null , e)
    }
}