import '../../css/Strategy Testing/strategyTesting.css'
import '../../css/strategyresults.css'
import '../../css/stocksTested/stocktested.css'
import '../../css/chartbar.css'

const ChartBarNew = (props) => {

    const {
        getStockResultSelected,
        item,
    } = props

    return (
        <div className='stocksTestedChartBar' onClick={() => getStockResultSelected(item, item['tradeid'])}>
             {
              Object.keys(item).map((el, index) => {
                let x = ''
                if(el !== 'tradeid'){ 
                  x = <div className='stocksTesteddChartBarLabel' key={index}>{item[el]}</div>
                }
                return x
              })
              }
        </div>
      );
}

export default ChartBarNew;


