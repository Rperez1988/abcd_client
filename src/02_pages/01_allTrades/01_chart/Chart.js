import './Chart.css'
import TradesTable from "../TradesTable"

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
		setAllTrades,
		sortedPeformances,
		settingOptions,
		header
    } = props

    return(

		// <div className='Chart_Main' >
	
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
				sortedPeformances={sortedPeformances}
				settingOptions={settingOptions}
				header={header}
			/>

		// </div>
		
    )
}

export default Chart

