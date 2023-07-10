import Navbar from '../navbar';
import Table from '../../components/Table';
import { useDataFetching } from '../../clientFunctions/useDataFetching';
import BeatLoader from "react-spinners/BeatLoader";
import Footer from '../footer';
import UpArrow from '../../components/UpArrow';

const HomePage =  () => {
    const data = useDataFetching("general", null)
    if (!data) {
        return (
          <div className="loading-container">
            <BeatLoader color="#007bff" loading={true} size={15} />
          </div>
        );
    }
    return (
        <div className='homePage'>
            <Navbar />
            <div className='wrapper'>
                <div className='callToAction'>
                    Compare the prices of your favorite Cryptocurrencies by Market Cap
                </div>
                <div className='data-provided'>
                    Data provided by CCData every 30 seconds
                </div>
                <Table headers={["#","Name","Price","24h %","Market Cap"]} data={data} typeOfTable={"general"}/>
            </div>
            <Footer />
            <UpArrow/>
        </div>
    )
}

export default HomePage;