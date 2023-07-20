import '../../css/blackboxsettings.css'
import BlackBoxSettingsOptionsNew from './BlackBoxSettingOptionsNew';

const BlackBoxSettingsNew = (props) => {

    const {
        filterOptions,
        activeFilter,
        chartData,
        setChartData,
        setActiveFilterOne,
        setActiveFilterTwo,
        stockResults
    } = props

    const handleFilterChange = (val) => {


        val === 'Only Stocks With Trades Made' && filterOutStocksWithNoTradesMade()
      
        val === 'All Stocks Tested' && filterShowAllStocksTested()
      
        val === 'Trades' && filterByNumberOfTrades()
      
        val === 'PNL' && filterByPNLs()
    
        val === 'WR' && filterByWRs()
    
        val === 'Largest Win' && filterByLargestWin()
    
        val === 'Largest Lost' && filterByLargestLost()
      }
    
    const filterOutStocksWithNoTradesMade = () => {
        let filteredList = []
        chartData.map(item => (
            item['Trades'] !== 0 &&  filteredList.push(item)
        ))
        setChartData(filteredList)
        setActiveFilterOne('Only Stocks With Trades Made')

    }

    const filterShowAllStocksTested = () => {
        setChartData(stockResults)
        setActiveFilterOne('All Stocks Tested')
    }
 
    const filterByNumberOfTrades = () => {
        let filteredList = JSON.parse(JSON.stringify(chartData));
        filteredList.sort(function(a, b) {
            return(b['Trades'] - a['Trades']);
        });
        setChartData(filteredList)
        setActiveFilterTwo('Trades')
    }

    const filterByPNLs = () => {

        chartData.sort(function(a, b) {
            return(b['PNL'] - a['PNL']);
        });

        setActiveFilterTwo('PNL')
    }

    const filterByWRs = () => {

        chartData.sort(function(a, b) {
            return(a['WinRate'] - b['WinRate']);
        });
    
        setActiveFilterTwo('WR')

    }

    const filterByLargestWin = () => {

        chartData.sort(function(a, b) {
            return(b['Won'] - a['Won']);
        });

        setActiveFilterTwo('Largest Win')

    }

    const filterByLargestLost = () => {

        chartData.sort(function(a, b) {
            return(a['Lost'] - b['Lost']);
        });
        
        setActiveFilterTwo('Largest Lost')

    }


    let filterText = filterOptions.length > 2 ? 'Sort By' : 'Filter By'
  
    return (
        
        <div className='settingBox'>
            <div className='settingBox1'>
                <div className='settingBoxHeader'>
                    <div className='sbh'>{filterText}</div>
                </div>
                <div className='settingBoxBody'>
                    <div className='settingBoxOptionBox'>
                        {
                            filterOptions.map(item => {
                                return <BlackBoxSettingsOptionsNew key={item} item={item} handleFilterChange={handleFilterChange} activeFilter={activeFilter}/>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlackBoxSettingsNew

