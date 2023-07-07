import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./scenes/homePage";
import MarketsComparator from "./scenes/marketsComparator";
import "./index.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/markets" element={<MarketsComparator />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
