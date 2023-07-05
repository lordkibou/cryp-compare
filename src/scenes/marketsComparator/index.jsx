import Navbar from '../navbar';
import Table from '../../components/Table';
import { useDataFetching } from '../../clientFunctions/useDataFetching';

const MarketsComparator =  () => {
    const data = useDataFetching("markets","DOGE");
    return (
        <div className='markets-comparator'>
            <Navbar />
            <div className='wrapper'>
                <div className='callToAction'>
                    BTC Markets Comparator
                </div>
                <Table headers={["#","Market","Price"]} data={data} typeOfTable={"markets"}/>
            </div>
        </div>
    )
}


export default MarketsComparator;