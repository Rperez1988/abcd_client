import React, {useState} from 'react';

// components
import StatisticsTab from './StatisticsTab/StatisticsTab';
import StatisticsList from './StatisticsList/StatisticsList';

// img
import pivotIcon  from './img/bearishwhite.png'
import piggywhite  from './img/piggywhite.png'
import sharingwhite  from './img/sharingwhite.png'
import typesIcon  from './img/types.png'
import settingsIcon from './img/settingswhite.png'
import urr from './img/unRealizedReturn.png'

// css 
import './Statistics.css'
// import './StatisticsList.css'
// import './StatisticsListRow.css'
// import './StatisticsTabs.css'
import Settings from './Settings/Settings';

const Statistics = (props) => {

    const {
		colorTheme,
		tradesList,
		allSavedSettings,
		setAllSavedSettings,
		updateSelectedSetting,
		loadSettings,
		performanceList
    } = props
    const [tradesTab, setTradesTab] = useState(false)
	const [peformanceTab, setPerformanceTab] = useState(true)
	const [investmentTab, setInvestmentTab] = useState(false)
	const [pivotTab, setPivotTab] = useState(false)
	const [settingsTab, setSettingsTab] = useState(false)
	const [unRealizedReturnTab, setUnRealizedReturnTab] = useState(false)
	const [settingsList, setSettingsList] = useState({})
	// const [tradesList, setTradesList] =	useState({})
	// const [performanceList, setPerformanceList] = useState({})
	const [investmentList, setInvestmentList] = useState({})
	const [pivotList, setPivotList] = useState({})
	const [unRealizedReturnList, setUnRealizedReturnList] = useState({})

    const activeTab = (tab) => {

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

	const divStyle = {
		background: colorTheme.statistics.background_color,
    };

    return(
        <div className='statistics_wrapper' style={divStyle}>
					 
			{/* <div className='statistics-tabs' >
				<StatisticsTab colorTheme={colorTheme} tab={tradesTab} activeTab={activeTab} tabText={'Trades'} tabIcon={typesIcon}/>
				<StatisticsTab colorTheme={colorTheme} tab={peformanceTab} activeTab={activeTab} tabText={'Peformance'} tabIcon={sharingwhite}/>
				<StatisticsTab colorTheme={colorTheme} tab={investmentTab} activeTab={activeTab} tabText={'Investment'} tabIcon={piggywhite}/>
				<StatisticsTab colorTheme={colorTheme}  tab={pivotTab} activeTab={activeTab} tabText={'Pivot'} tabIcon={pivotIcon}/>
				<StatisticsTab colorTheme={colorTheme} tab={unRealizedReturnTab} activeTab={activeTab} tabText={'UnRealized'} tabIcon={urr}/>
				<StatisticsTab colorTheme={colorTheme}t ab={settingsTab} activeTab={activeTab} tabText={'Settings'} tabIcon={settingsIcon}/>
				<StatisticsTab tab={settingsTab} activeTab={activeTab} tabText={'Settings'} tabIcon={settingsIcon}/>

			</div> */}

			
			


{/* 			
			<div className='statistics-stats'>
				<div className='statistics-stats_2'>
					
					{tradesTab && <StatisticsList list={tradesList}/>}
					{peformanceTab && <StatisticsList list={performanceList}/>}
					{investmentTab && <StatisticsList list={investmentList}/>}

				</div>
				<div className='statistics-stats_2'>
					{tradesTab && <StatisticsList list={tradesList}/>}
					{peformanceTab && <StatisticsList list={performanceList}/>}
					{investmentTab && <StatisticsList list={investmentList}/>}

					{pivotTab && <StatisticsList list={pivotList}/>}
					{settingsTab && <StatisticsList list={settingsList}/>}
					{unRealizedReturnTab && <StatisticsList list={unRealizedReturnList}/>}
				</div>

			</div> */}
        
   		</div>

    )
}

export default Statistics