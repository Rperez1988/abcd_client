import React, { useState, useEffect, useRef } from 'react';
import Row from './01_chart/Row/Row'
import './TradesTable.css'
import config from '../../config.json';


const sort_greater_than_less_than = async () => {
	try {
		const res = await fetch(`${config.server}/patterns/sort_gtlt/`);
		const result = await res.json();
	
		console.log(result)
		

	} catch (e) { console.log(e); }

	
}

const sort_selected_by = async (sort_by) => {
	try {
        await fetch(`${config.server}/patterns/sort_selected/`, {
        method: 'POST',
        headers: {},
        body: JSON.stringify({
            sort: sort_by
		
        })
        });
    

	} catch (error) {console.log(error)}



	return
}

const add_to_patterns_count = async (count) => {

	// try {
    //     await fetch(`${config.server}/patterns/update_count/`, {
    //     method: 'POST',
    //     headers: {},
    //     body: JSON.stringify({
    //         count: count
		
    //     })
    //     });
    

	// } catch (error) {console.log(error)}


	return
}

// const filter_by_pnl = (allTrades, filterOrder, setAllTrades, setFilterOrder) => {

// 	switch (filterOrder){

// 		case 0:
	
// 			setAllTrades(allTrades.slice().sort((a, b) => parseInt(a.pnl.pnl) - parseInt(b.pnl.pnl)))
// 			setFilterOrder(1)
// 			return
// 		case 1: 
// 			setAllTrades(allTrades.slice().sort((a, b) => parseInt(a.pnl.pnl) - parseInt(b.pnl.pnl)).reverse())
// 			setFilterOrder(2)
// 			return
// 		case 2:
// 			setAllTrades(allTrades)
// 			setFilterOrder(0)
// 			return

// 		default:
// 			return
// 	}

		
// }
// const filter_by_return = (allTrades, filterOrder, setAllTrades, setFilterOrder) => {

// 	switch (filterOrder){

// 		case 0:
// 			setAllTrades(allTrades.slice().sort((a, b) => parseFloat(a.pnl['returnPercentage']) - parseFloat(b.pnl['returnPercentage'])))
// 			setFilterOrder(1)
// 			return
// 		case 1: 
// 			setAllTrades(allTrades.slice().sort((a, b) => parseFloat(a.pnl['returnPercentage']) - parseFloat(b.pnl['returnPercentage'])).reverse())
// 			setFilterOrder(2)
// 			return
// 		case 2:
// 			setAllTrades(allTrades)
// 			setFilterOrder(0)
// 			return
// 		default:
// 			return
// 	}


// }
// const filter_by_date = (allTrades, filterOrder, setAllTrades, setFilterOrder) => {

// 	switch (filterOrder){

// 		case 0:
// 			setAllTrades(allTrades.slice().sort((a, b) => new Date(a.enterExitInfo.enterDate) - new Date(b.enterExitInfo.enterDate)))
// 			setFilterOrder(1)
// 			return
// 		case 1: 
// 			setAllTrades(allTrades.slice().sort((a, b) => new Date(a.enterExitInfo.enterDate) - new Date(b.enterExitInfo.enterDate)).reverse())
// 			setFilterOrder(2)
// 			return
// 		case 2:
// 			setAllTrades(allTrades)
// 			setFilterOrder(0)
// 			return
// 		default:
// 				return
// 	}
// }
// const filter_by_duration = (allTrades, filterOrder, setAllTrades, setFilterOrder) => {

// 	switch (filterOrder){

// 		case 0:
// 			setAllTrades(allTrades.slice().sort((a, b) => parseInt(a.tradeInfo.tradeDuration) - parseInt(b.tradeInfo.tradeDuration)))
// 			setFilterOrder(1)
// 			return
// 		case 1: 
// 			setAllTrades(allTrades.slice().sort((a, b) => parseInt(a.tradeInfo.tradeDuration) - parseInt(b.tradeInfo.tradeDuration)).reverse())
// 			setFilterOrder(2)
// 			return
// 		case 2:
// 			setAllTrades(allTrades)
// 			setFilterOrder(0)
// 			return
// 	}

// }
// const filter_by_bc = (allTrades, filterOrder, setAllTrades, setFilterOrder) => {

// 	switch (filterOrder){

// 		case 0:
// 			setAllTrades(allTrades.slice().sort((a, b) => parseInt(a.retracement.bcRetracement) - parseInt(b.retracement.bcRetracement)))
// 			setFilterOrder(1)
// 			return
// 		case 1: 
// 			setAllTrades(allTrades.slice().sort((a, b) => parseInt(a.retracement.bcRetracement) - parseInt(b.retracement.bcRetracement)).reverse())
// 			setFilterOrder(2)
// 			return
// 		case 2:
// 			setAllTrades(allTrades)
// 			setFilterOrder(0)
// 			return
// 	}

		
// }
// const filter_by_cd = (allTrades, filterOrder, setAllTrades, setFilterOrder) => {

// 	switch (filterOrder){

// 		case 0:
// 			setAllTrades(allTrades.slice().sort((a, b) => parseInt(a.retracement.cdRetracement) - parseInt(b.retracement.cdRetracement)))
// 			setFilterOrder(1)
// 			return
// 		case 1: 
// 			setAllTrades(allTrades.slice().sort((a, b) => parseInt(a.retracement.cdRetracement) - parseInt(b.retracement.cdRetracement)).reverse())
// 			setFilterOrder(2)
// 			return
// 		case 2:
// 			setAllTrades(allTrades)
// 			setFilterOrder(0)
// 			return
// 	}

		
// }
// const filter_by_rsi = (allTrades, filterOrder, setAllTrades, setFilterOrder) => {

// 	switch (filterOrder){

// 		case 0:
// 			setAllTrades(allTrades.slice().sort((a, b) => parseInt(a.tradeInfo.rsi) - parseInt(b.tradeInfo.rsi)))
// 			setFilterOrder(1)
// 			return
// 		case 1: 
// 			setAllTrades(allTrades.slice().sort((a, b) => parseInt(a.tradeInfo.rsi) - parseInt(b.tradeInfo.rsi)).reverse())
// 			setFilterOrder(2)
// 			return
// 		case 2:
// 			setAllTrades(allTrades)
// 			setFilterOrder(0)
// 			return
// 	}
// }

const TradesTable = (props) => {

    const {
		tableData,
		tableDataName,
		send_selected_symbol,
        setTradeID,
		setAllTrades,
		currentFilter,
		header,
		setSortedPeformances,
		access_trades,
		get_selected_trades,
		setSelectedBC,
		setcds,
		create_cd_objects,
		get_cd_ojbects,
		allPatterns,
		set_selected_pattern,
		retrieve_patterns,
		set_selected_patterns,
		retrieve_total_patterns_info,
		get_updated_count_patterns,
		

    } = props

	// const [symbol_filter_order, set_symbol_filter_order] = useState(0)
	// const [pnl_filter_order, set_pnl_filter_order] = useState(0)
	// const [return_filter_order, set_return_filter_order] = useState(0)
	// const [date_filter_order, set_date_filter_order] = useState(0)
	// const [duration_filter_order, set_duration, filter_order] = useState(0)
	// const [bc_filter_order, set_bc_filter_order] = useState(0)
	// const [cd_filter_order, set_cd_filter_order] = useState(0)
	// const [rsi_filter_order, set_rsi_filter_order] = useState(0)
	const [activeRowIndex, setActiveRowIndex] = useState(1)
	const [idOfTradeClicked, setidOfTradeClicked] = useState()
	const [sorted_data, set_sorted_data] = useState()
	
	useEffect(()=>{
		set_sorted_data(tableData)

		// if(tableData){
		// 	set_selected_pattern(tableData[0])
		// }
		
	}, [tableData])

	useEffect(()=>{
	
		// setActiveRowIndex(0)
	}, [sorted_data])

	const header_sorting_methods = async (tableDataName, item) => {

		if(tableDataName === 'Symbols'){
			if(item === 'Symbol'){
				let sorted_d = [...tableData].sort((a, b) => b.symbol - a.symbol)
				set_sorted_data(sorted_d)
			}
			if(item === 'ABCDs'){
				let sorted_d = [...tableData].sort((a, b) => b.total_abcds - a.total_abcds)
				set_sorted_data(sorted_d)
			}
			if(item === 'Passed'){
				let sortedData = [...tableData].sort((a, b) => b.passed_abcds - a.passed_abcds)
				set_sorted_data(sortedData)
			}
			if(item === 'Failed'){
				let sortedData = [...tableData].sort((a, b) => b.failed_abcds - a.failed_abcds)
				set_sorted_data(sortedData)
			}
			if(item === 'Open'){
				let sortedData = [...tableData].sort((a, b) => b.open_abcds - a.open_abcds)
				set_sorted_data(sortedData)
			}
			if(item === 'Pct'){
				let sortedData = [...tableData].sort((a, b) => b.passed_pct - a.passed_pct)
				set_sorted_data(sortedData)
			}
		
		}
		if(tableDataName === 'Single Trade') {
			if(item === 'RETURN'){
				let sorted_d = [...tableData].sort((a, b) => b.trade_return_percentage - a.trade_return_percentage)
				set_sorted_data(sorted_d)
			}
			if(item === 'PNL'){
				let sorted_d = [...tableData].sort((a, b) => b.trade_pnl - a.trade_pnl)
				set_sorted_data(sorted_d)
			}
			if(item === 'DURATION'){
				let sorted_d = [...tableData].sort((a, b) => b.trade_duration_bars - a.trade_duration_bars).reverse()
				set_sorted_data(sorted_d)
			}
			if(item === 'ENTER'){
				await sort_greater_than_less_than()
				await retrieve_patterns(set_selected_patterns)
				// let sorted_d = [...tableData].sort((a, b) => b.trade_entered_price - a.trade_entered_price)
				// set_sorted_data(sorted_d)
			}
			// 
			// item === 'SYMBOL' && filter_by_symbol(tableData, symbol_filter_order, setAllTrades, set_symbol_filter_order)
			// item === 'PNL' && filter_by_pnl(tableData, pnl_filter_order, setAllTrades, set_pnl_filter_order)
			// item === 'RETURN %' && filter_by_return(tableData, return_filter_order, setAllTrades, set_return_filter_order)
			// item === 'D DATE' && filter_by_date(tableData, date_filter_order, setAllTrades, set_date_filter_order)
			// item === 'DURATION' && filter_by_duration(tableData, duration_filter_order, setAllTrades, set_duration, filter_order)
			// item === 'BC' && filter_by_bc(tableData, bc_filter_order, setAllTrades, set_bc_filter_order)
			// item === 'CD' && filter_by_cd(tableData, cd_filter_order, setAllTrades, set_cd_filter_order)
			// item === 'RSI' && filter_by_rsi(tableData, rsi_filter_order, setAllTrades, set_rsi_filter_order)
		}
		if(tableDataName === 'BC Peformance'){

			if(item === 'Lost'){
				let sortedData = [...tableData].sort((a, b) => b.lost - a.lost)
				setSortedPeformances(sortedData)
				console.log(sortedData)
			}
			if(item === 'Trades'){
				let sortedData = [...tableData].sort((a, b) => b.trades - a.trades)
				setSortedPeformances(sortedData)
				console.log(sortedData)
			}
			if(item === 'Lost'){
				let sortedData = [...tableData].sort((a, b) => b.lost - a.lost)
				setSortedPeformances(sortedData)
			}
			if(item === 'APD'){
				// let sortedData = [...tableData].sort((a, b) => b.average_price_dropped - a.average_price_dropped)
		
				let sortedData = [...tableData].sort((a, b) => {
					const aValue = parseFloat(a.average_price_dropped);
					const bValue = parseFloat(b.average_price_dropped);
					return bValue - aValue;
				  });
				setSortedPeformances(sortedData)
			}
			if(item === 'LPD'){
				// let sortedData = [...tableData].sort((a, b) => b.lowest_price_dropped - a.lowest_price_dropped)
				let sortedData = [...tableData].sort((a, b) => {
					const aValue = parseFloat(a.lowest_price_dropped);
					const bValue = parseFloat(b.lowest_price_dropped);
					return bValue - aValue;
				  });
				setSortedPeformances(sortedData)
			}
			if(item === 'RSI WR'){
				let sortedData = [...tableData].sort((a, b) => b.rsi_wr - a.rsi_wr)
				setSortedPeformances(sortedData)
			}
			if(item === 'VOL LR'){
				let sortedData = [...tableData].sort((a, b) => b.volume_change_lose_pct - a.volume_change_lose_pct)
				setSortedPeformances(sortedData)
			}
			if(item === 'VOL WR'){
				let sortedData = [...tableData].sort((a, b) => b.volume_change_win_pct - a.volume_change_win_pct)
				setSortedPeformances(sortedData)
			}
			if(item === 'Win Pct'){
				// let sortedData = [...tableData].sort((a, b) => b.win_pct - a.win_pct)
		
				let sortedData = [...tableData].sort((a, b) => {
					const aValue = parseFloat(a.win_pct);
					const bValue = parseFloat(b.win_pct);
					return bValue - aValue;
				  });
				setSortedPeformances(sortedData)
			}
			if(item === 'Wins'){
				let sortedData = [...tableData].sort((a, b) => b.wins - a.wins)
				setSortedPeformances(sortedData)
			}
			if(item === 'BC'){
				let sortedData = [...tableData].sort((a, b) => b.retracement - a.retracement)
				setSortedPeformances(sortedData)
			}
			if(item === 'Avg Len L'){
				let sortedData = [...tableData].sort((a, b) => b.average_length - a.average_length)
				setSortedPeformances(sortedData)
			}
		}
	}
	const scrollContainerRef = useRef(null)

	useEffect(() => {
		const handleScroll = async  () => {
		  const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
			

		  // Check if you have reached the bottom
		  if (scrollTop + clientHeight >= scrollHeight) {
			
			set_scroll_index(prevState => prevState + 1)
		
		  
		  }
		  
		};
	
		// Attach scroll event listener
		scrollContainerRef.current.addEventListener('scroll', handleScroll);

		
	
		// Cleanup the event listener on component unmount
		// return () => {
		// if(scrollContainerRef){
		// 	scrollContainerRef.current.removeEventListener('scroll', handleScroll);
		// }
		  
		// };
	  }, []);
	const componentMounted = useRef(false)

	const [scroll_index, set_scroll_index] = useState(1)

	//   useEffect(() => {
	// 	if(componentMounted.current){
	// 		const x = async () => {
	
	// 		await add_to_patterns_count(scroll_index);
	// 		await get_updated_count_patterns(set_selected_patterns)
	// 	}
	// 		x()
		
	// 	}
	// 	else{
	// 		componentMounted.current = true
	// 	}
			
	//   }, [scroll_index]);
	
	return(
        <div className='trades_table_container'>
			
			{/* Table Header */}
        	<div className='Chart_Header'>
				{header?.map((item,index) => {
					return(	
						<div key={index} className='rowcolor1--header' onClick={async () =>{
							// await sort_selected_by(item)
							// await retrieve_patterns(set_selected_patterns)
							header_sorting_methods(tableDataName, item)
						}} >{item}</div>
					)
				})}
			
			</div>

			{/* Trade Table */}
            <div className='Chart_Trades_Expanded'  ref={scrollContainerRef}
				style={{

					backgroundColor: 'rgb(8, 20, 36)' ,
					
					
				}}
			
			>
				
				{tableData !== undefined && 
				
					sorted_data?.map((item,index) => {
						
								
						// if(tableDataName === 'Symbols'){
									
						// 		return(<Row
						// 			key={index}
						// 			index={index}
						// 			active={activeRowIndex === index ? true : false}
						// 			setActiveRowIndex={setActiveRowIndex}
						// 			data = {[
						// 				item.symbol,
						// 				item.total_abcds,
						// 				item.passed_abcds,
						// 				item.failed_abcds,
						// 				item.open_abcds,
						// 				item.passed_pct.toFixed(2)
						// 			]}
						// 			send_selected_symbol={send_selected_symbol}
						// 			symbol_info={item}
						// 			retrieve_patterns={retrieve_patterns}
						// 			set_selected_patterns={set_selected_patterns}
						// 			item={item}
						// 			set_selected_pattern={set_selected_pattern}
									
								
						// 		/>)
						
						// }

						let status = null
						if(item.trade_result === 'Win'){
							status = 'Bull'
						}
						if(item.trade_result === 'Lost'){
							status = 'Bear'
						}
						if(item.trade_is_open === true){
							status = 'Open'
						}

						if(tableDataName === 'Single Trade'){
								
								return(<Row
									key={index}
									active={activeRowIndex === index ? true : false}
									setActiveRowIndex={setActiveRowIndex}
									item={item} 
									index={index} 
									setTradeID={setTradeID}
									isactive={idOfTradeClicked === item.id}
									idOfTradeClicked={idOfTradeClicked}
									setidOfTradeClicked={setidOfTradeClicked}
									tableDataName={tableDataName}
									data = {[
										index + 1,
										status, 
										
										item.trade_symbol,
										item.trade_duration_bars,
										item.trade_entered_price,
										item.trade_exited_price,
										item.trade_pnl,
										item.trade_return_percentage,
										item.pattern_A_pivot_date,
									]}
									allPatterns={allPatterns}
									set_selected_pattern={set_selected_pattern}
									send_selected_symbol={send_selected_symbol}
									retrieve_patterns={retrieve_patterns}
									set_selected_patterns={set_selected_patterns}
								
								/>)
							
						}

						// if(tableDataName === 'BC Peformance'){

						// 	if(item.trades > 0){
						// 		return(<Row
						// 			key={index}
						// 			active={activeRowIndex === index ? true : false}
						// 			setActiveRowIndex={setActiveRowIndex}
						// 			item={item} 
						// 			index={index} 
						// 			setTradeID={setTradeID}
						// 			// colorTheme={colorTheme}
						// 			isactive={idOfTradeClicked === item.id}
						// 			idOfTradeClicked={idOfTradeClicked}
						// 			setidOfTradeClicked={setidOfTradeClicked}
	
						// 			tableDataName={tableDataName}
						// 			data = {[
						// 				item.retracement,
						// 				item.trades,
						// 				item.wins,
						// 				item.lost,
						// 				item.active,
						// 				item.win_pct,
						// 				item.lowest_price_dropped,
						// 				item.average_price_dropped,
						// 				item.rsi_wr,
						// 				item.volume_change_win_pct,
						// 				item.volume_change_lose_pct,
						// 				item.average_length_win,
						// 				item.average_length
						// 			]}
						// 			access_trades={access_trades}
						// 			get_selected_trades={get_selected_trades}
						// 			setAllTrades={setAllTrades}
						// 			setSelectedBC={setSelectedBC}
						// 			create_cd_objects={create_cd_objects}
						// 			get_cd_ojbects={get_cd_ojbects}
						// 			setcds={setcds}
								
	
	
		
	
						// 		/>)
						// 	}
						
							
						// }

						// if(tableDataName === 'CD Peformance'){
							
						// 	if(item.trades > 0){
						// 		return(<Row
						// 			key={index}
						// 			active={activeRowIndex === index ? true : false}
						// 			setActiveRowIndex={setActiveRowIndex}
						// 			item={item} 
						// 			index={index} 
						// 			setTradeID={setTradeID}
						// 			// colorTheme={colorTheme}
						// 			isactive={idOfTradeClicked === item.id}
						// 			idOfTradeClicked={idOfTradeClicked}
						// 			setidOfTradeClicked={setidOfTradeClicked}
	
						// 			tableDataName={tableDataName}
						// 			data = {[
						// 				item.cd,
						// 				item.trades,
						// 				item.wins,
						// 				item.lost,
						// 				item.active,
						// 				item.win_pct,
						// 				item.lowest_price_dropped,
						// 				item.average_price_dropped,
						// 				item.rsi_wr,
						// 				item.volume_change_win_pct,
						// 				item.volume_change_lose_pct,
						// 				item.average_length_win,
						// 				item.average_length
						// 			]}
						// 			access_trades={access_trades}
						// 			get_selected_trades={get_selected_trades}
						// 			setAllTrades={setAllTrades}
						// 			setSelectedBC={setSelectedBC}
									
								
	
	
		
	
						// 		/>)

						// 	}
							
							
						// }

					
					})
				}

            </div>

        </div>
    )
}

export default TradesTable