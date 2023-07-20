import './TradeAnalytics.css'

const TradeAnalytics = (props) => {

    const {
        allTrades,
        tradeIdInView,
       }   = props

    const row = [
        'Symbol', allTrades[tradeIdInView]['stockNameSymbol'],
        'Status: ', allTrades[tradeIdInView]['tradeClosed'] ? 'Closed' : 'Active',
        'Trade ID: ', allTrades[tradeIdInView]['tradeID'],
        // 'Ending Price: ', allTrades[tradeIdInView]['priceClosedShort'],
        // 'Ending Date: ', allTrades[tradeIdInView]['currentDate'],
        'Trade Duration: ', allTrades[tradeIdInView]['tradeDuration'],
        // 'Trade Type: ', allTrades[tradeIdInView]['tradeType'],
    ]

    const rowTwo = [
        'RRR', allTrades[tradeIdInView]['riskRewardRatio'],
        'Type: ', allTrades[tradeIdInView]['tradeType'],
        'Shares', '1',
        '-', '-',
        // 'Status: ', allTrades[tradeIdInView]['tradeClosed'] ? 'Closed' : 'Active',
        // 'Ending Price: ', allTrades[tradeIdInView]['priceClosedShort'],
        // 'Ending Date: ', allTrades[tradeIdInView]['currentDate'],
        // 'Trade Duration: ', allTrades[tradeIdInView]['tradeDuration'],
        // 'Trade Type: ', allTrades[tradeIdInView]['tradeType'],
    ]

    const rowThree = [
        'Ending Price: ', allTrades[tradeIdInView]['priceClosedShort'],
        'Ending Date: ', allTrades[tradeIdInView]['currentDate'],
        '-', '-',
        '-', '-',
 
    ]


    
    
    const rowOne = ['Status: ','Trade ID: ', 'Symbol: ', 'Ending Price:', 'Ending Date', 'Trade Duration: ', 'Trade Type']

    return(
        <div className='pivotDetails'>
            <div className="header">ABCD</div>
            <div className="pivotDetailsbody">

            <div className='pivotDetailsbodyrow'>

                {row.map((index, item) => {
                    return(  <div className='pdbr1' key={Math.random()}>{item}</div>)
                })}
                
            </div>

            <div className='pivotDetailsbodyrow'>

                {rowTwo.map((index, item) => {
                    return(  <div className='pdbr1' key={Math.random()}>{item}</div>)
                })}
                
            </div>

            <div className='pivotDetailsbodyrow'>

            {rowThree.map((index, item) => {
                return(  <div className='pdbr1' key={Math.random()}>{item}</div>)
            })}

            </div>


            

    

            </div>
        </div>
    )
}

export default TradeAnalytics