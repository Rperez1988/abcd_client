import React, { useState, useEffect } from 'react';
import ChartLiveTradeBox from './ChartLiveTradeBox';
import './ChartLiveTradeBar.css'

const ChartLiveTradeBar = (props) => {

   const {
      index,
      setTradeID,
      item,
      testFunction,
      chartBarBeingHovered,
      chartIDBeingHovered,
      turnOverLayOn,
   } = props



   let x = false
   if(chartBarBeingHovered === item['stockNameSymbol'] && chartIDBeingHovered === item['tradeID']){
      x = true
   }

    return(
        <div className='chart-trades-bar' onClick={() => {turnOverLayOn(); setTradeID(index)}}>
         <div className='chart-trades-bar-border' onMouseEnter={() => {testFunction(item['stockNameSymbol'],item['tradeID'])}} >
            <ChartLiveTradeBox x={x} item={item}/>
         </div>
     </div>
    )

}

export default ChartLiveTradeBar