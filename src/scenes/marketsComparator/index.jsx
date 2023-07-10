import Navbar from '../navbar';
import Table from '../../components/Table';
import Footer from '../footer';
import { useDataFetching } from '../../clientFunctions/useDataFetching';
import { useLocation } from 'react-router-dom';
import BeatLoader from "react-spinners/BeatLoader";

const MarketsComparator = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const abrev = queryParams.get('abrev');
    const ranking = queryParams.get('ranking');
    const data = useDataFetching("markets", abrev);
    if (!data?.Data?.CoinInfo) {
        return (
          <div className="loading-container">
                <BeatLoader color="#007bff" loading={true} size={15} />
                <button className='button-go-back' onClick={()=>{window.location.assign(window.location.origin)}}>Go back</button>
          </div>
        );
    }
    //Making footer stick down if no enough data
    const classFooter = (data?.Data?.Exchanges?.length < 7 || (data?.Data?.Exchanges?.length < 11 && window.innerHeight <= 1200 && window.innerWidth <1000)) ? "sticky-footer" : "ap"
    return (
        <div className='markets-comparator'>
            <Navbar />
            <div className='wrapper'>
                <div className='callToAction cta-markets'>
                    <div className='container-crypto-logo-name'>
                        {data?.Data?.CoinInfo?.ImageUrl && (
                            <img className="logo-crypto" src={`https://www.cryptocompare.com/${data.Data.CoinInfo.ImageUrl}`} alt={`Icon Crypto ${data.Data.Name}`} />
                        )}
                        {data?.Data?.CoinInfo?.FullName && <div>{data.Data.CoinInfo.FullName}</div>}
                    </div>
                    <div>Exchanges Comparator</div>
                </div>
                <div className='ranking-crypto'>{"Rank #"+ranking}</div>
                <Table headers={["#","Market","Price","Volume"]} data={data} typeOfTable={"markets"}/>
            </div>
            <Footer property={classFooter} />
        </div>
    )
}


export default MarketsComparator;