
// import React, { useState, useEffect } from 'react';
// // import './singleTrade.css'
// import CandleGraph from './candle_graph/CandleGraph';
// import TradeObjectInfo from './trade_info/trade_object_info';
// import BC_Performance from '../../01_allTrades/01_chart/bc_peformance';
// import Settings from '../../01_allTrades/03_statistics/Settings/Settings';
// import Chart from '../../01_allTrades/01_chart/Chart';
// import right from './img/arrowright.png'
// import left from './img/backbuttonwhite.png'
// import config from '../../../config.json'
// import TableComponent from '../../01_allTrades/TableComponent';

// // 10:23


// const SingleTrade = (props) => {

//     const {
//         tradeIdInView,
//         allTrades,
// 		colorTheme,
// 		setAllTrades,
// 		setTradeIdInView,
// 		selectedBC,
// 		setSelectedBC,	
// 		number_of_pivots,
// 		setTradeID,
// 		tradesTab,
// 		setSelectedInfoPage,
// 		settingsIcon,
// 		typesIcon,
// 		all_symbols,
// 		selectedInfoPage,		
// 		sortedPeformances,
// 		settingOptions,
// 		header,
// 		tableData,
// 		tableDataName,
// 		setSortedPeformances,
// 		allPatterns,
// 		set_selected_pattern



//     } = props



//     return(
        
//             <div className='SingleTrade' style={colorTheme.single_trade.background_color}>
// {/* 
// 				<div className='single_trade_wrapper1'>

// 					<CandleGraph
// 						isTradeBeingViewed={isTradeBeingViewed}
// 						tradeIdInView={tradeIdInView}
// 						allTrades={allTrades}
// 						turnOverLayOff={turnOverLayOff}
// 						browseChartsRight={browseChartsRight}
// 						browseChartsLeft={browseChartsLeft}
// 						setIsTradeBeingViewd={setIsTradeBeingViewd}
// 						colorTheme={colorTheme}		
// 						isFullScreen={isFullScreen}
// 						setIsFullScreen={setIsFullScreen}	
// 					/>
			
// 				</div> */}

// 				<div className='single_trade_wrapper2'>	

// 					<TableComponent 
// 						number_of_pivots={number_of_pivots}
// 						all_trades_length={allTrades?.length}
// 						colorTheme={colorTheme} 
// 						allTrades={allTrades} 
// 						setTradeID={setTradeID} 
// 						setAllTrades={setAllTrades}
// 						setTradeIdInView={setTradeIdInView} 
// 						tradeIdInView={tradeIdInView}
// 						selectedBC={selectedBC}
// 						setSelectedBC={setSelectedBC}
// 						tradesTab={tradesTab}
// 						setSelectedInfoPage={setSelectedInfoPage}
// 						settingsIcon={settingsIcon}
// 						typesIcon={typesIcon}
// 						all_symbols={all_symbols}
// 						sortedPeformances={sortedPeformances}
// 						width={'90%'} 
// 						selectedInfoPage={selectedInfoPage}
// 						settingOptions={settingOptions}
// 						header={header}
// 						tableData={tableData}
// 						tableDataName={tableDataName}
// 						setSortedPeformances={setSortedPeformances}
// 						allPatterns={allPatterns}
// 						set_selected_pattern={set_selected_pattern}
					
// 					/>
	
// 							<div className="trades_search_wrapper">

		

// 							</div>
								
		
// 				</div>

//             </div>

//     )
// }

// export default SingleTrade


		