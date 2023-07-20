import ChartLiveTradeBar from './ChartLiveTradeBar';
import './TradesChart.css'

const Chart = (props) => {

    const {
        chartHeader,
        activeTrades,
        setTradeID,
        turnOverLayOn,
        chartBeingHovered,
        chartIDBeingHovered,
        testFunction,
        mouseLeave,
        
    } = props

    return(

        <div className='activeTradesContainer'>
         fasdfasdfasdfasdfasdfasdfas

            <div className='chart-header'>
               <div className='chart-trades-bar-border'>
                  {chartHeader.map((item, index) => {
                     
                     return(
                        <div className='x' key={index}>
                           {item === '' && <div className='tickerSymbol'key={index}>
                              <div className='chart-header-cube-stocktext' key={index}>{item}</div>
                           </div>}

                           {item !== '' && <div className='chart-header-cube'key={index}>
                              <div className='chart-header-cube-text' key={index}>{item}</div>
                           </div>}
                        </div>
                     )
                  })}
               </div>     
            </div>

            <div className='chart-trades' onMouseLeave={() => {mouseLeave()}}> 
               {activeTrades.map((item, index) => {
         

      
                  return (

                     
                     <ChartLiveTradeBar index={index} setTradeID={setTradeID} turnOverLayOn={turnOverLayOn} chartBarBeingHovered={chartBeingHovered} chartIDBeingHovered={chartIDBeingHovered} testFunction={testFunction} key={index} item={item}/>
                  )
               })}
            </div>

         </div>
    )
}

export default Chart