import { BrowserRouter , Navigatie, Routes, Route }
  from 'react-router-dom';
import { loadCryptoMarketsPrices, loadCryptoInfo } from "./clientFunctions/loadCryptoMarketsPrices";
import HomePage from './scenes/homePage';
import MarketsComparator from './scenes/marketsComparator';
import './index.css';

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
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<HomePage/>} />
          <Route path='/' element={<MarketsComparator/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
