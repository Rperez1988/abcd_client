import React, { useState, useEffect } from 'react';

// pages
import SingleTrade from '../data_center/single_trade/singeTrade';
import Chart from './01_chart/Chart'

// api
import getActiveTrades from '../../03_api/02_getAllTrades/getAllTrades.js'
import createStatistics from '../../03_api/03_createStatistics/createStatistics.js'
import getStatistics from '../../03_api/04_getStatistics/getStatistics.js'
import saveSettings from '../../03_api/05_saveSettings/saveSettings.js'
import getSettings from '../../03_api/06_getSettings/getSettings.js'
import updateSelectedSetting_ from '../../03_api/updateSelectedSetting/12_editSetting/updateSelectedSetting';

// components
import TabDetails from './04_ratios/TabDetails';
import Settings from './03_statistics/Settings/Settings';
import './allTrades.css'
import line  from '../../img/line.png'
import SideBar from './00_sidebar/SideBar';
import Statistics from './03_statistics/Statistics';
import pivotIcon  from './img/bearishwhite.png'
import piggywhite  from './img/piggywhite.png'
import sharingwhite  from './img/sharingwhite.png'
import typesIcon  from './img/types.png'
import settingsIcon from './img/settingswhite.png'
import urr from './img/unRealizedReturn.png'
import StatisticsTab from './03_statistics/StatisticsTab/StatisticsTab';


const fetchData = async (selected_bc, selected_cd, access_trades, get_selected_trades,setAllTrades) => {
			
	await access_trades(selected_bc, selected_cd).catch(console.error);
	await get_selected_trades(setAllTrades)
	
	// await get_peformance()

}

const access_trades = async (selected_bc, selected_cd) => {

	try{
		await fetch('http://192.168.1.189:8000/access_trades/access_trades', {
			method: 'POST',
			headers: {},
			body: JSON.stringify({

				bc: selected_bc,
				cd: selected_cd

			})
		});



	} catch(error){console.log(error)}

}
const get_selected_trades = async (setAllTrades) => {

	try {
		const res = await fetch('http://192.168.1.189:8000/access_trades/access_filtered');


		const result = await res.json();
		if (result.length === 0) {


			setAllTrades(
	
					[
						{
							settings: {
								rrr: '',
								// s&r: "average",
								'market': '',
								'aBelowB': '',
								// entryRSI: '',
								// pivotLength: '',
								// barsFromBack:'',
								// settingsName:'',
								// maxAtoBLength:'',
								// maxBtoCLength:'',
								// maxCtoDLength: '',
								// pivotSteepness: [
								// 	'',
								// 	'',
								// ],
								// abnormalPriceJump:'',
								// inRestrictionArea: '',
							},
							// "id": 20668,
							tradeInfo: {
								"id": '-',
								"rsi": "-",
								"abc_ID": '-',
								"symbol": '-',
								"volume": '-',
								"endDate": '-',
								"exchange": '-',
								"startDate": '-',
								"tradeOpen": '-',
								"currentDate": '-',
								"tradeClosed": '-',
								"tradeResult": '-',
								"abcd_volumes": '-',
								"currentPrice": '-',
								"pivot_number": '-',
								"tradeDuration": '-',
								"average_volume": '-',
								"tradeCloseDate": '-',
								"tradeStartDate":'-',
								"closingTradeType":'-',
								"openingTradeType":'-',
								"completeTradeType": '-',
								"percentage_change": '-',
								"lowest_price_dropped": '-',
							},
							length: {
								'a_length': '',
								'b_length':'',
								'a_b_length': '',
								'b_c_length': '',
								'abcd_length': '',
								'a_b_c_length':'',
							},
							pivotInfo: {
								'pivotA': {
									low: '',
									date:'',
									high: '',
									open: '',
									close: '',
									// pivot": "<Strategies.trading_bot.abcd.models.A_PivotSingle.A_PivotSingle object at 0x000001E17B4B4130>"
								},
								'pivotB': {
									low: '',
									date:'',
									high: '',
									open: '',
									close: '',
									// pivot": "<Strategies.trading_bot.abcd.models.A_PivotSingle.A_PivotSingle object at 0x000001E17B4B4130>"
								},
								'pivotC': {
									low: '',
									date:'',
									high: '',
									open: '',
									close: '',
									// pivot": "<Strategies.trading_bot.abcd.models.A_PivotSingle.A_PivotSingle object at 0x000001E17B4B4130>"
								},
								'pivotD': {
									low: '',
									date:'',
									high: '',
									open: '',
									close: '',
									// pivot": "<Strategies.trading_bot.abcd.models.A_PivotSingle.A_PivotSingle object at 0x000001E17B4B4130>"
								},
							},
						
							pnl: {
								// pnl: '',
								risk: '',
								reward: '',
								stopLoss: '',
								takeProfit:'',
								riskRewardRatio:'',
								returnPercentage: '',
							},
							retracement: {
								bcRetracement: '',
								cdRetracement: '',
							},
							enterExitInfo: {
								// exitDate:'',
								enterDate:'',
								exitPrice: '',
								enterPrice: '',
							},
							duration: {
								'bars': {
									'A_to_B': '',
									'B_to_C': '',
									'C_to_D': '',
									'ab_pct': '',
									'bc_pct': '',
									'cd_pct': '',
								},
								'days': {
									'A_to_B': "",
									'B_to_C': "",
									'C_to_D': ""
								}
							},
							movement: {
								aToBPct:'',
								bToCPct: '',
								cToDPct:'',
								atoBMovement:'',
								btoCMovement: '',
								ctoDMovement:'',
								aToB_pctInBars:'',
								bToC_pctInBars: '',
								cToD_pctInBars:'',
							},
							chartData: [
								{
									"Low": 17.65,
									"Date": "2018-09-12",
									"High": 17.95,
									"Open": 17.85,
									"Close": 17.9
								},
								// {
								// 	"Low": 17.7,
								// 	"Date": "2018-09-13",
								// 	"High": 18,
								// 	"Open": 18,
								// 	"Close": 17.75
								// },
								// {
								// 	"Low": 17.65,
								// 	"Date": "2018-09-14",
								// 	"High": 18,
								// 	"Open": 17.75,
								// 	"Close": 17.85
								// },
								// {
								// 	"Low": 17.65,
								// 	"Date": "2018-09-17",
								// 	"High": 17.9,
								// 	"Open": 17.9,
								// 	"Close": 17.8
								// },
								// {
								// 	"Low": 17.65,
								// 	"Date": "2018-09-18",
								// 	"High": 18,
								// 	"Open": 17.85,
								// 	"Close": 17.75
								// },
								// {
								// 	"Low": 17.3,
								// 	"Date": "2018-09-19",
								// 	"High": 17.85,
								// 	"Open": 17.7,
								// 	"Close": 17.45
								// },
								// {
								// 	"Low": 17.35,
								// 	"Date": "2018-09-20",
								// 	"High": 17.8,
								// 	"Open": 17.55,
								// 	"Close": 17.5
								// },
								// {
								// 	"Low": 17.45,
								// 	"Date": "2018-09-21",
								// 	"High": 17.8,
								// 	"Open": 17.45,
								// 	"Close": 17.5
								// },
								// {
								// 	"Low": 17.1,
								// 	"Date": "2018-09-24",
								// 	"High": 17.5,
								// 	"Open": 17.45,
								// 	"Close": 17.3
								// },
								// {
								// 	"Low": 17,
								// 	"Date": "2018-09-25",
								// 	"High": 17.45,
								// 	"Open": 17.3,
								// 	"Close": 17.05
								// },
								// {
								// 	"Low": 16.8,
								// 	"Date": "2018-09-26",
								// 	"High": 17.18,
								// 	"Open": 17.1,
								// 	"Close": 16.95
								// },
								// {
								// 	"Low": 16.75,
								// 	"Date": "2018-09-27",
								// 	"High": 17.05,
								// 	"Open": 17,
								// 	"Close": 16.8
								// },
								// {
								// 	"Low": 16.55,
								// 	"Date": "2018-09-28",
								// 	"High": 16.9,
								// 	"Open": 16.65,
								// 	"Close": 16.75
								// },
								// {
								// 	"Low": 16.39,
								// 	"Date": "2018-10-01",
								// 	"High": 17.19,
								// 	"Open": 16.9,
								// 	"Close": 16.59
								// },
								// {
								// 	"Low": 16.09,
								// 	"Date": "2018-10-02",
								// 	"High": 16.6,
								// 	"Open": 16.55,
								// 	"Close": 16.13
								// },
								// {
								// 	"Low": 16.01,
								// 	"Date": "2018-10-03",
								// 	"High": 16.96,
								// 	"Open": 16.18,
								// 	"Close": 16.77
								// },
								// {
								// 	"Low": 16.82,
								// 	"Date": "2018-10-04",
								// 	"High": 17.21,
								// 	"Open": 16.82,
								// 	"Close": 16.99
								// },
								// {
								// 	"Low": 16.93,
								// 	"Date": "2018-10-05",
								// 	"High": 17.13,
								// 	"Open": 17.05,
								// 	"Close": 16.98
								// },
								// {
								// 	"Low": 16.92,
								// 	"Date": "2018-10-08",
								// 	"High": 17.28,
								// 	"Open": 17,
								// 	"Close": 17.13
								// },
								// {
								// 	"Low": 16.91,
								// 	"Date": "2018-10-09",
								// 	"High": 17.51,
								// 	"Open": 17.12,
								// 	"Close": 16.94
								// },
								// {
								// 	"Low": 16.59,
								// 	"Date": "2018-10-10",
								// 	"High": 17.55,
								// 	"Open": 16.93,
								// 	"Close": 16.64
								// },
								// {
								// 	"Low": 15.85,
								// 	"Date": "2018-10-11",
								// 	"High": 16.66,
								// 	"Open": 16.61,
								// 	"Close": 15.88
								// },
								// {
								// 	"Low": 15.36,
								// 	"Date": "2018-10-12",
								// 	"High": 16.1,
								// 	"Open": 16.1,
								// 	"Close": 15.75
								// },
								// {
								// 	"Low": 15.57,
								// 	"Date": "2018-10-15",
								// 	"High": 15.95,
								// 	"Open": 15.73,
								// 	"Close": 15.91
								// },
								// {
								// 	"Low": 15.77,
								// 	"Date": "2018-10-16",
								// 	"High": 16.61,
								// 	"Open": 15.97,
								// 	"Close": 15.95
								// },
								// {
								// 	"Low": 15.77,
								// 	"Date": "2018-10-17",
								// 	"High": 16.23,
								// 	"Open": 15.86,
								// 	"Close": 16.18
								// },
								// {
								// 	"Low": 15.82,
								// 	"Date": "2018-10-18",
								// 	"High": 16.21,
								// 	"Open": 16.21,
								// 	"Close": 15.83
								// },
								// {
								// 	"Low": 15.5,
								// 	"Date": "2018-10-19",
								// 	"High": 16.02,
								// 	"Open": 15.79,
								// 	"Close": 15.65
								// },
								// {
								// 	"Low": 15.44,
								// 	"Date": "2018-10-22",
								// 	"High": 15.94,
								// 	"Open": 15.73,
								// 	"Close": 15.48
								// },
								// {
								// 	"Low": 0,
								// 	"Date": "2018-10-23",
								// 	"High": 0,
								// 	"Open": 0,
								// 	"Close": 0
								// },
						
						
						
							
							],

						}
					]
				
				
			)
			
			
			// setAllTrades([
			// 	{
			// 		id: 0,
			// 		chartData: [
			// 			{
			// 				0: {Low: 17.65, Date: '2018-09-12', High: 17.95, Open: 17.85, Close: 17.9}
			// 			}
			// 		],
			// 		duration: {
			// 			bars: {
			// 				A_to_B: 0,
			// 				B_to_C: 0,
			// 				C_to_D: 0,
			// 				ab_pct: 0,
			// 				bc_pct: 0,
			// 				cd_pct: 0
			// 			},
			// 			days: {
			// 				A_to_B: 0,
			// 				B_to_C: 0,
			// 				C_to_D: 0
			// 			}
		
			// 		},
			// 		enterExitInfo:{
			// 			enterDate: '01-01-01',
			// 			enterPrice: '0.00',
			// 			extDate: '01-01-01',
			// 			exitPrice: '0.00',
			// 		},
			// 		tradeInfo: {
			// 			id: 0,
			// 			rsi: "29.38",
			// 			abc_ID: 0,
			// 			symbol: "ACBI",
			// 			volume: 76955,
			// 			endDate: "2018-10-23",
			// 			exchange: "Nasdaq",
			// 			startDate: "2018-09-12",
			// 			tradeOpen: false,
			// 			currentDate: "2018-10-23",
			// 			tradeClosed: true,
			// 			tradeResult: "Win",
			// 			abcd_volumes: "[37414.0, 33820.0, 32635.0, 36444.0, 44210.0, 138294.0, 125349.0, 146690.0, 35726.0, 66953.0, 61920.0, 40767.0, 59584.0, 77068.0, 56434.0, 230800.0, 168971.0, 72863.0, 220402.0, 112834.0, 196389.0, 100207.0, 110943.0, 69188.0, 73717.0, 111852.0, 46653.0, 78835.0, 122293.0]",
			// 			currentPrice: 15.5,
			// 			pivot_number: 1,
			// 			tradeDuration: "23",
			// 			average_volume: 93422.58620689655,
			// 			tradeCloseDate: "2018-11-15",
			// 			tradeStartDate: "2018-10-23",
			// 			closingTradeType: "Bull",
			// 			openingTradeType: "Bull",
			// 			completeTradeType: "Bull",
			// 			percentage_change: "-17.63",
			// 			lowest_price_dropped: "14.55"
			// 		},
			// 		pnl:{
			// 			"pnl": "1.88",
			// 			"risk": "1.88",
			// 			"reward": "1.88",
			// 			"stopLoss": "13.37",
			// 			"takeProfit": "17.13",
			// 			"riskRewardRatio": 5,
			// 			"returnPercentage": "12.33"
			// 		},
			// 		retracement:{
			// 			"bcRetracement": "53.48",
			// 			"cdRetracement": "106.28"
			// 		},
		
			// 	}
			// ])
		}
		else {
			console.log(result)
			
			// return result
		}
		
		

	} catch (e) { console.log(e); }
}


const updateSelectedSetting = (index, allSavedSettings, loadSettings, setAllSavedSettings, selectedSetting) => {

	if(index === 0){

		let s = {
			settingsName: 'Setting ' + allSavedSettings.length,
			market: '',
			pivotLength: '',
			rrr: '',
			sAndr:'',
			maxAtoBLength: '',
			maxBtoCLength: '',
			maxCtoDLength:'',
			entryRSI:'',
			abnormalPriceJump: '',
			pivotSteepness: '',
			entryRSI: '',
			abnormalPriceJump: '',
			pivotSteepness: '',
			aBelowB: '',
			startDate: '',
			endDate: '',
			isComplete: false,
			isSelected: true
		}

		saveSettings(s, loadSettings)
	}
	else{
		updateSelectedSetting_(selectedSetting.id,allSavedSettings[index].id, loadSettings)
	}

};
const get_number_of_pivots = (objectList) => {
		
	// Array to store unique pivot_number values
	var uniquePivotNumbers = [];

	// Loop through the objectList
	for (var i = 0; i < objectList?.length; i++) {
	var pivotNumber = objectList[i]?.tradeInfo['pivot_number'];

	// Check if the pivotNumber is not already in the uniquePivotNumbers array
	if (uniquePivotNumbers.indexOf(pivotNumber) === -1) {
		// Add the pivotNumber to the uniquePivotNumbers array
		uniquePivotNumbers.push(pivotNumber);
	}
	}
	return uniquePivotNumbers
}
const get_all_data_from_django = async (loadSettings, setAllTrades, set_all_symbols) => {

	await getActiveTrades(setAllTrades, set_all_symbols)
	await createStatistics()
	await loadSettings()
	// let result = await getStatistics()
	// await fillStatistics(result)
	
	

}
const DataCentral = (props) => {
	
	const {
		colorTheme,
	} = props

	const [allTrades, setAllTrades] = useState()
	const [tradeIdInView, setTradeIdInView] = useState(0)
	const [isTradeBeingViewed, setIsTradeBeingViewd] = useState()
	const [allSavedSettings, setAllSavedSettings] = useState()
	const [tradesTab, setTradesTab] = useState(false)
	const [peformanceTab, setPerformanceTab] = useState(true)
	const [investmentTab, setInvestmentTab] = useState(false)
	const [pivotTab, setPivotTab] = useState(false)
	const [settingsTab, setSettingsTab] = useState(false)
	const [unRealizedReturnTab, setUnRealizedReturnTab] = useState(false)
	const [selectedInfoPage, setSelectedInfoPage] = useState('Trades')
	const [selectedBC, setSelectedBC] = useState()
	const [all_symbols, set_all_symbols] = useState()
	


	useEffect(() => {
		loadSettings()
		get_all_data_from_django(loadSettings, setAllTrades, set_all_symbols)
	},[]);

	const handle_info_page_selected = (tab) => {

		if(tab === 'Trades'){
			setTradesTab(true)
			setPerformanceTab(false)
			setInvestmentTab(false)
			setPivotTab(false)
			setUnRealizedReturnTab(false)
			setSettingsTab(false)
		}
		else if(tab === 'Peformance'){
			setTradesTab(false)
			setPerformanceTab(true)
			setInvestmentTab(false)
			setPivotTab(false)
			setUnRealizedReturnTab(false)
			setSettingsTab(false)
		}
		else if(tab === 'Investment'){
			setTradesTab(false)
			setPerformanceTab(false)
			setInvestmentTab(true)
			setPivotTab(false)
			setUnRealizedReturnTab(false)
			setSettingsTab(false)
		}
		else if(tab === 'Pivot'){
			setTradesTab(false)
			setPerformanceTab(false)
			setInvestmentTab(false)
			setPivotTab(true)
			setUnRealizedReturnTab(false)
			setSettingsTab(false)
		}
		else if(tab === 'Settings'){
			setTradesTab(false)
			setPerformanceTab(false)
			setInvestmentTab(false)
			setPivotTab(false)
			setUnRealizedReturnTab(false)
			setSettingsTab(true)
		}
		else if(tab === 'UnRealized'){
			setTradesTab(false)
			setPerformanceTab(false)
			setInvestmentTab(false)
			setPivotTab(false)
			setSettingsTab(false)
			setUnRealizedReturnTab(true)
		}
	}
	const loadSettings = async () => {

		const savedSettings = await getSettings().catch(console.error)

		setAllSavedSettings(savedSettings)
	}
	const setTradeID = (el) => {
		setTradeIdInView(el)
		setIsTradeBeingViewd(true)
	}
	const browseChartsRight = () => {
		setTradeIdInView(prevTradeInView => prevTradeInView + 1)
	}
	const browseChartsLeft = () => {
		setTradeIdInView(prevTradeInView => prevTradeInView - 1)
	}
	let number_of_pivots = get_number_of_pivots(allTrades)

	useEffect(()=>{

		// allTrades && setFilteredTrades(allTrades)

		// On chart load get peformance data.
		const get_peformance = async () =>{

			try {

				const res = await fetch('http://192.168.1.189:8000/access_trades/access_peformance');

				const result = await res.json();
	
				set_all_peformances(result)

			} catch (e) { console.log(e); }
		}

		get_peformance()

	},[allTrades])

	const [all_peformances, set_all_peformances] = useState(false)
	
	// const [filteredTrades, setFilteredTrades] = useState([])
	
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
		}


	}

	console.log(all_symbols)

	return (
		
		<div className='allTrades_body'> 

			{ <SingleTrade 
				browseChartsRight={browseChartsRight} 
				browseChartsLeft={browseChartsLeft} 
				setTradeIdInView={setTradeIdInView} 
				isTradeBeingViewed={isTradeBeingViewed} 
				tradeIdInView={tradeIdInView} 
				allTrades={allTrades} 
				setIsTradeBeingViewd={setIsTradeBeingViewd}
				colorTheme={colorTheme}
				setAllTrades={setAllTrades}
				selectedBC={selectedBC}
				setSelectedBC={setSelectedBC}
				all_peformances={all_peformances}
				fetchData={fetchData}
				access_trades={access_trades}
				get_selected_trades={get_selected_trades}
				
			/>} 

					
		<div className='statistics-collapsed'>
			<div className='statistics_wrapper_' style={     {background: colorTheme.card_header_color}}>
				
				<div className="cd_settings">
				
				<div className="cd_icon_wrapper" onClick={() => {setSelectedInfoPage('Trades')}}>

						<img className='cd_img'src={typesIcon}/>
				</div>
				
				<div className="cd_icon_wrapper"  onClick={() => {setSelectedInfoPage('Settings')}}>
						<img className='cd_img'src={settingsIcon}/>
				</div>

            	</div>

				{selected_info_page(selectedInfoPage)}
		
			</div>	
		</div>
				
		
	
		
		

			
	

		</div>

	);
}

export default DataCentral;

			{/* <div className='statistics-tabs' >
					<StatisticsTab colorTheme={colorTheme} tab={tradesTab} handle_info_page_selected={setSelectedInfoPage} tabText={'Trades'} tabIcon={typesIcon}/>
				
					<StatisticsTab colorTheme={colorTheme} tab={settingsTab} handle_info_page_selected={setSelectedInfoPage} tabText={'Settings'} tabIcon={settingsIcon}/>
				</div>
 */}
