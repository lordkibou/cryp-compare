import { loadCryptoMarketsPrices, loadCryptoInfo } from "./clientFunctions/loadCryptoMarketsPrices";

document.addEventListener('DOMContentLoaded', async function () {
  // First page: 0, with 50 cryptos
  /*
  await loadCryptoMarketsPrices( "DOGE" , function (res , err) {
    if (err) {
      console.log(err)
      return
    }
    console.log(res)
  });
  await loadCryptoInfo(0, function (res, err) {
    if (err) {
      console.log(err)
      return
    }
    console.log(res)
  })
  */
})
function App() {
  return (
    <div className="App">
      <p>Hola mundo</p>
    </div>
  );
}

export default App;
