
import React, { useState, useEffect } from 'react';
// import './singleTrade.css'
import CandleGraph from './candle_graph/CandleGraph';
import TradeObjectInfo from './trade_info/trade_object_info';
import BC_Performance from '../../01_allTrades/01_chart/bc_peformance';


// import './trade_object_info.css'
// import TradeObjectInfo from './trade_info/trade_object_info';
// import CandleGraph from './candle_chart/CandleGraph';


const SingleTrade = (props) => {

    const {
        isTradeBeingViewed,
        tradeIdInView,
        allTrades,
        turnOverLayOff,
		browseChartsRight,
		browseChartsLeft,
		setIsTradeBeingViewd,
		colorTheme,
		setAllTrades,
		setTradeIdInView,
		selectedBC,
		setSelectedBC,	
		all_peformances,
		fetchData,
		access_trades,
		get_selected_trades,

    } = props




    return(
        
            <div className='SingleTrade' style={colorTheme.single_trade.background_color}>

				<div className='single_trade_wrapper1'>
					<div className='border_test'>



					<CandleGraph
						isTradeBeingViewed={isTradeBeingViewed}
						tradeIdInView={tradeIdInView}
						allTrades={allTrades}
						turnOverLayOff={turnOverLayOff}
						browseChartsRight={browseChartsRight}
						browseChartsLeft={browseChartsLeft}
						setIsTradeBeingViewd={setIsTradeBeingViewd}
						colorTheme={colorTheme}			
					/>

					</div>
				
					
				</div>

				<div className='single_trade_wrapper2'>
				<div className='border_test' style={{background: colorTheme.primary_color}}>


					<BC_Performance
						all_peformances={all_peformances}
						fetchData={fetchData}
						access_trades={access_trades}
						setAllTrades={setAllTrades}
						get_selected_trades={get_selected_trades}
						setTradeIdInView={setTradeIdInView}
						setSelectedBC={setSelectedBC}
						colorTheme={colorTheme}
					/> 
					
				</div>
				
					
				</div>
				


            </div>

   
    )
}

export default SingleTrade