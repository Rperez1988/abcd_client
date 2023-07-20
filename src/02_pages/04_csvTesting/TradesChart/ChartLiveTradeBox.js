// import React, { useState, useEffect } from 'react';
import './ChartLiveTradeBox.css'

const ChartLiveTradeBox = (props) => {

    const {
        item,
        x,
    } = props

    let y = 'chart-trades-bar-cube'
    let z = 'symbol2'

    if(x === true){
        y = 'chart-trades-bar-cube-Hovered'
        z = 'symbol2-Hovered'
    }
    

    return(
        <>

            <div className='tickerSymbol'>
               <div className={z}>
                     {item['stockNameSymbol']}  
               </div>
            </div>

            <div className={y}>
               {item['tradeOpen'] === 'True' &&  <div className='chart-trades-bar-cube-active'>Active</div>}
               {item['tradeClosed'] === 'True' &&  <div className='chart-trades-bar-cube-closed'>Closed</div>}
              
            </div>

            <div className={y}>
               <div className='chart-trades-bar-cube-text'>{item['tradeType']}</div>
            </div>

            <div className={y}>
               <div className='chart-trades-bar-cube-text'>{parseFloat(item['priceOfC'])}</div>
            </div>

            <div className={y}>
               <div className='chart-trades-bar-cube-text'>{parseFloat(item['currentPrice'])}</div>
            </div>

            <div className={y}>
               {parseFloat(item['pnl']) < 0 && <div className='ticksdown'>{parseFloat(item['pnl']).toFixed(2)}</div>}
               {parseFloat(item['pnl']) > 0 && <div className='ticksup'>{parseFloat(item['pnl']).toFixed(2)}</div>}
    
            </div>

            <div className={y}>
               <div className='chart-trades-bar-cube-text'>{item['tradeResult']}</div>
            </div>
       

            <div className={y}>
               {/* <div className='chart-trades-bar-cube-text'>{(((item['currentPrice'] - item['priceEnteredShort']) * item['priceEnteredShort']) / 100).toFixed(2)}%</div> */}
            </div>

            <div className={y}>
               <div className='chart-trades-bar-cube-text'>{item['tradeDuration']} Days</div>
            </div>

            <div className={y}>
               <div className='chart-trades-bar-cube-text'>1:5</div>
            </div>

            <div className={y}>
               <div className='chart-trades-bar-cube-text'>1</div>
            </div>
         
            <div className={y}>
               <div className='chart-trades-bar-cube-trendFollow'>AB=CD</div>
            </div>
            
     
    
        </>
    )

}

export default ChartLiveTradeBox