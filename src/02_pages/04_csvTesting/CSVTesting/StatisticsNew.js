import '../../css/strategyResults/strategyResults.css'
import StatisticsBlockNew from './StatisticsBlockNew';

const StatisticsNew = (props) => {

    const {listType, currentTradeStats, statistics} = props
    const list = listType === 'singleTradeStats' ? currentTradeStats : statistics

    return (

        <div className='stocksTestedPadding'>
            <div className='strategyresultsbody'>
                {
                  Object.keys(list).map(item => {                  
                    return <StatisticsBlockNew open={list[item]} label={item} key={item}/>

                  })
                }
            </div>   
        </div>
    );
}

export default StatisticsNew;




