import Row from "./Row/Row"
import './Chart.css'
import { useEffect, useState } from "react"

import ChartSettings from "./Settings/ChartSettings"
import BC_Performance_Row from "./bc_peformance_row"
import TradesTable from "../TradesTable"
import BC_Performance from "./bc_peformance"
import StatisticsTab from "../03_statistics/StatisticsTab/StatisticsTab"
// import '../../../../Multi-Platform.css'


const Chart = (props) => {

    const {
		number_of_pivots,
		all_trades_length,
        allTrades,
		turnOverLayOn,
        setTradeID,
		colorTheme,
		tradeIdInView,
		selectedBC,
		setAllTrades

    } = props

	const style_settings = {
		background: colorTheme.chart.settings,
	};


    return(

		<div className='Chart_Main' >
	
			<div className='chart-settings' 
        
		style={{background: 'rgb(17 36 62)',
		color: "white"
	
	}}
		
			>

				<div className="number_of_trades">{selectedBC ? selectedBC : allTrades.length}</div>
				<div className="number_of_trades">Bull </div>	
				<div className="number_of_trades">{all_trades_length} Trades</div>	
				<div className="number_of_trades" >All Trades</div>
				
			</div>


			<TradesTable 
				allTrades={allTrades}
		
				turnOverLayOn={turnOverLayOn}
				setTradeID={setTradeID}
				colorTheme={colorTheme}
		
				all_trades_length={all_trades_length}
				number_of_pivots={number_of_pivots}
				selectedBC={selectedBC}
				tradeIdInView={tradeIdInView}
				setAllTrades={setAllTrades}
			/>

		</div>
		
    )
}

export default Chart

