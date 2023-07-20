
import '../TradeAnalytics/TradeAnalytics.css'

const Peformance = (props) => {

    const {
        allTrades,
        tradeIdInView,
       }   = props
    
    const rowOne = [
        'Risk ', allTrades[tradeIdInView]['risk'],
        'PNL', allTrades[tradeIdInView]['pnl'],
        'Reward: ', allTrades[tradeIdInView]['reward'],
    ]
    const rowTwo = [
        'Price Entered: ',allTrades[tradeIdInView]['priceEnteredShort'],
        'Price Closed: ', allTrades[tradeIdInView]['priceClosedShort'],
        'Trade Duration: ', allTrades[tradeIdInView]['tradeDuration'],
    ]

    return(
        <div className='pivotDetails'>
        <div className="header">ABCD</div>
        <div className="pivotDetailsbody">

            <div className='pivotDetailsbodyrow'>

                {rowOne.map((index, item) => {
                    return(  <div className='pdbr1' key={Math.random()}>{item}</div>)
                })}
            
                </div>
                <div className='pivotDetailsbodyrow'>

                {rowTwo.map((index, item) => {
                    return(  <div className='pdbr1' key={Math.random()}>{item}</div>)
                })}

                </div>
         </div>

            

    </div>
    )
}

export default Peformance