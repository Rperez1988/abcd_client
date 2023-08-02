
import React, { useState, useEffect } from 'react';
// import './singleTrade.css'
import CandleGraph from './candle_graph/CandleGraph';
import TradeObjectInfo from './trade_info/trade_object_info';
import BC_Performance from '../../01_allTrades/01_chart/bc_peformance';
import Settings from '../../01_allTrades/03_statistics/Settings/Settings';
import Chart from '../../01_allTrades/01_chart/Chart';
import right from './img/arrowright.png'
import left from './img/backbuttonwhite.png'


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

		allSavedSettings,
		setAllSavedSettings,
		updateSelectedSetting,
		loadSettings,
		number_of_pivots,
		setTradeID,
		tradesTab,
		setSelectedInfoPage,
		settingsIcon,
		typesIcon,
		all_symbols,
		selectedInfoPage


    } = props

	const [selectedIndex, setSelectedIndex] = useState(0)

	const selected_info_page = (settingsTab) => {

		switch(settingsTab){

			case 'Settings': 

				return <Settings 
				allSavedSettings={allSavedSettings}
				setAllSavedSettings={setAllSavedSettings}
				updateSelectedSetting={updateSelectedSetting}
				colorTheme= {colorTheme}
				loadSettings={loadSettings}
			/>
			case 'Trades': 
		
				return <Chart 
				number_of_pivots={number_of_pivots}
				all_trades_length={allTrades?.length}
				colorTheme={colorTheme} 
				allTrades={allTrades} 
				setTradeID={setTradeID} 
				setAllTrades={setAllTrades}
				setTradeIdInView={setTradeIdInView} 
				tradeIdInView={tradeIdInView}
				selectedBC={selectedBC}
				setSelectedBC={setSelectedBC}
				// filteredTrades={filteredTrades}
				// setFilteredTrades={setFilteredTrades}
				tradesTab={tradesTab}
				setSelectedInfoPage={setSelectedInfoPage}
				settingsIcon={settingsIcon}
				typesIcon={typesIcon}
				all_symbols={all_symbols}
				/>
			case 'BC':

				return  <BC_Performance
				all_peformances={all_peformances}
				fetchData={fetchData}
				access_trades={access_trades}
				setAllTrades={setAllTrades}
				get_selected_trades={get_selected_trades}
				setTradeIdInView={setTradeIdInView}
				setSelectedBC={setSelectedBC}
				colorTheme={colorTheme}
				allTrades={allTrades}
			/> 
		
		}


	}

    return(
        
            <div className='SingleTrade' style={colorTheme.single_trade.background_color}>

				<div className='single_trade_wrapper1'>


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

				<div className='single_trade_wrapper2'>

					<div className="cd_settings">
					
						<div className="cd_icon_wrapper" onClick={() => {setSelectedInfoPage('Trades')}}>

								<img className='cd_img'src={typesIcon}/>
						</div>
						
						<div className="cd_icon_wrapper"  onClick={() => {setSelectedInfoPage('Settings')}}>
								<img className='cd_img'src={settingsIcon}/>
						</div>

						<div className="cd_icon_wrapper"  onClick={() => {setSelectedInfoPage('BC')}}>
							BC
						</div>

						<div className="cd_icon_wrapper"  onClick={() => {setSelectedInfoPage('Settings')}}>
							CD
						</div>
								<div className="cd_icon_wrapper">
							<img className='cd_img'src={left} onClick={()=>{setSelectedIndex(selectedIndex === 0 ? 0 : (prevIndex => prevIndex - 1))}}/>
						</div>
						<div className="cd_icon_wrapper">
							<img className='cd_img'src={right} onClick={()=>{setSelectedIndex(selectedIndex === 100 ? 100 :prevIndex => prevIndex + 1)}}/>
						</div>

					</div>

				

					{selected_info_page(selectedInfoPage)}
			
					<div className="cd_settings"></div>

					
				</div>

				
				
            </div>

    )
}

export default SingleTrade