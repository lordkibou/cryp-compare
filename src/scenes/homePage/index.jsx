import Navbar from '../navbar';
import Table from '../../components/Table';
import { useDataFetching } from '../../clientFunctions/useDataFetching';

const HomePage = () => {
    const data = useDataFetching()
    return (
        <div className='homePage'>
            <Navbar />
            <div className='wrapper'>
                <div className='callToAction'>
                    Compare the prices of the Top 100 cryptocurrencies
                </div>
                <Table headers={["#","Name","Price","24h %"]} data={data}/>
            </div>
        </div>
    )
}

export default HomePage;