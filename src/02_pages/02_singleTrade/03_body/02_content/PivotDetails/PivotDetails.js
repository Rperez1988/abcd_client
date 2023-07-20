
import '../TradeAnalytics/TradeAnalytics.css'
import './PivotDetails.css'

const PivotDetails = (props) => {

    const {
        allTrades,
        tradeIdInView,
       }   = props
    

    const label = ['', 'A','B','C','D']
    const dates = ['Date:', allTrades[tradeIdInView]['dateOfA'], allTrades[tradeIdInView]['dateOfB'], allTrades[tradeIdInView]['dateOfC'],  allTrades[tradeIdInView]['dateOfD'],]
    const prices = ['Price:', allTrades[tradeIdInView]['priceOfA'], allTrades[tradeIdInView]['priceOfB'], allTrades[tradeIdInView]['priceOfC'],  allTrades[tradeIdInView]['priceOfD'],]
    const length = ['Length','20','20','-','-']
    const angle = ['Angle','-','-','-','-']
    const size = ['Duration:', allTrades[tradeIdInView]['length_AtoB'], allTrades[tradeIdInView]['length_BtoC'], allTrades[tradeIdInView]['length_CtoD'],  allTrades[tradeIdInView]['length_AtoD'],]
    const rsi = ['RSI:', '-', '-', allTrades[tradeIdInView]['rsiOnEnter'], '']

    const x = ['BC Retracement:', allTrades[tradeIdInView]['bcRetracement'], 'CD Retracement:', '', 'Type:', '', ]



    
    
    const rowOne = ['Status: ','Trade ID: ', 'Symbol: ', 'Ending Price:', 'Ending Date', 'Trade Duration: ', 'Trade Type']

    return(
        <div className='pivotDetails'>
            <div className="header">ABCD</div>
            <div className="pivotDetailsbody">

            <div className='pivotDetailsbodyrow'>

                {label.map(item => {
                    return(  <div className='pdbr1' key={Math.random()}>{item}</div>)
                })}
                
                </div>
                <div className='pivotDetailsbodyrow'>

                {dates.map(item => {
                    return(  <div className='pdbr1' key={Math.random()}>{item}</div>)
                })}
                  
                </div>

                <div className='pivotDetailsbodyrow'>

                {prices.map(item => {
                    return(  <div className='pdbr1' key={Math.random()}>{item}</div>)
                })}
                
                </div>

                <div className='pivotDetailsbodyrow'>

                {length.map(item => {
                    return(  <div className='pdbr1' key={Math.random()}>{item}</div>)
                })}

                </div>

                
                <div className='pivotDetailsbodyrow'>

                {angle.map(item => {
                    return(  <div className='pdbr1' key={Math.random()}>{item}</div>)
                })}

                </div>

                <div className='pivotDetailsbodyrow'>

                {size.map(item => {
                    return(  <div className='pdbr1'key={Math.random()}>{item}</div>)
                })}

                </div>

                <div className='pivotDetailsbodyrow'>

                {rsi.map(item => {
                    return(  <div className='pdbr1'key={Math.random()}>{item}</div>)
                })}

                </div>

                <div className='pivotDetailsbodyrow'>

                {x.map(item => {
                    return(  <div className='pdbr1'key={Math.random()}>{item}</div>)
                })}

                </div>

                        
                        
                          
                                

      

            </div>
        </div>
    )
}

export default PivotDetails