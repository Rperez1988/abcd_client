import Row from "./Row/Row"
import './Chart.css'
import { useEffect, useState } from "react"

import ChartSettings from "./Settings/ChartSettings"
import BC_Performance_Row from "./bc_peformance_row"
import TradesTable from "../TradesTable"
import BC_Performance from "./bc_peformance"
import StatisticsTab from "../03_statistics/StatisticsTab/StatisticsTab"
// import '../../../../Multi-Platform.css'
import left_arrow from './img/left.png'
import right_arrow from './img/right.png'
import config from '../../../config.json'

const server_filter_trades_by_symbol = async (symbol) => {

	console.log('symbol',symbol)
	try{
		await fetch(`http://${config.server}/access_trades/get_trades_of_selected_symbol`, {
			method: 'POST',
			headers: {},
			body: JSON.stringify({

				symbol: symbol,

			})
		});

	} catch(error){console.log(error)}

}
const get_selected_trades = async (setAllTrades) => {

	try {
		const res = await fetch(`http://${config.server}/access_trades/access_filtered`);

		const result = await res.json();
	
		setAllTrades(result)
			
		

	} catch (e) { console.log(e); }
}
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
		all_symbols

    } = props



	const style_settings = {
		background: colorTheme.chart.settings,
	};

	const [inputValue, setInputValue] = useState('');

	const handleInputChange = (event) => {
		setInputValue(event.target.value);
	};
	

	const [isInputActive, setIsInputActive] = useState(false);
	const [selected_symbol_index, set_selected_symbol_index] = useState(0)
	const [selected_symbol, set_selected_symbol] = useState()

	const handleFocusChange = () => {
		setIsInputActive(true);

	}

	const handleFocusBlur = () => {
		
		setIsInputActive(false);
	}	

	useEffect(()=>{

		if(all_symbols){
			set_selected_symbol(all_symbols[0])
		}
		
			

	},[all_symbols])

	console.log(all_symbols)


	const [loading, setLoading] = useState(false);

    return(

		<div className='Chart_Main' >
	
			<div className='chart-settings' style={{background: 'rgb(17 36 62)', color: "white"}}>

				<div className="settings_column">
					<div className="settings_column_row_header"># of Trades</div>
					<div className="settings_column_row">
						<div className="settings_column_row_item">{all_trades_length}</div>
				
					</div>
				</div>

				<div className="settings_column">
					<div className="settings_column_row_header">Market</div>
					<div className="settings_column_row">
					<div className="settings_column_row_item">All</div>
						<div className="settings_column_row_item">Bull</div>
						<div className="settings_column_row_item">Bear</div>
					</div>
				</div>

				<div className="settings_column">
					<div className="settings_column_row_header">Result</div>
					<div className="settings_column_row">
						<div className="settings_column_row_item">All</div>
						<div className="settings_column_row_item">Won</div>
						<div className="settings_column_row_item">Lost</div>
						<div className="settings_column_row_item">Live</div>
						<div className="settings_column_row_item">Aborted</div>
					</div>
				</div>
	
			</div>

			{/* <div className='chart-settings2' style={{background: 'rgb(17 36 62)', color: "white"}}>

				<div className='trades_search_container'>

					<div className="tsw">

						<div className={selected_symbol_index === 0 ? 'search_button_active'  : "search_button_"}>
					

						<img className={selected_symbol_index === 0 ? 'search_button_icon_active'  : "search_button_icon"} src={left_arrow}
						
								
							onMouseDown ={async () => {
								
								try {

								
							
									if(selected_symbol_index > 0){

										setLoading(true);
										// Increment the selected_symbol_index
									   set_selected_symbol_index(prev => prev - 1);
	 
									   // Wait for set_selected_symbol_index to finish before proceeding
									   await new Promise(resolve => setTimeout(resolve, 0));
	   
									   // Now set the selected_symbol using the updated index
									   set_selected_symbol(all_symbols[selected_symbol_index - 1]);
	   
									   // Wait for set_selected_symbol to finish before proceeding
									   await new Promise(resolve => setTimeout(resolve, 0));
	   
									   // Filter trades by the selected_symbol on the server
									   await server_filter_trades_by_symbol(all_symbols[selected_symbol_index - 1]);
	   
									   // Wait for server_filter_trades_by_symbol to finish before proceeding
									   await new Promise(resolve => setTimeout(resolve, 0));
	   
									   // Now get the selected trades and update the state using setAllTrades
									   get_selected_trades(setAllTrades);
									 }
			 
									
								} 
								catch (error) {
									console.error('Error occurred:', error);
								}finally{
									setLoading(false);
								}
							}}
													
						
						/>
						</div>

						<div className="trades_search_wrapper">

							<input className="trades_search" placeholder={selected_symbol} type="text" value={inputValue} onFocus={handleFocusChange} onBlur={handleFocusBlur} onChange={handleInputChange}/> 

							{isInputActive && 

								<div className='trades_search_dropdown'>

									{

										all_symbols.map((item,index)=>{
											
								
											return(
												<div className={index === selected_symbol_index ? 'symbol_dropdown_active' :'symbol_dropdown'} style={{zIndex: '99999'}}
												onMouseDown={async () => {
													try {
														setLoading(true);
														await set_selected_symbol(all_symbols[index]);
														await set_selected_symbol_index(index);
														await server_filter_trades_by_symbol(item);
														await get_selected_trades(setAllTrades);
													} catch (error) {
														console.error('Error occurred:', error);
													} finally {
														setLoading(false); // Set loading to false after the async operations are done (success or error)
													  }
												}}
												>{item}</div>
											)
										})
									}


								</div> 

							}

						</div>
							
						<div className={selected_symbol_index === all_symbols?.length - 1 ? 'search_button_active'  : "search_button_"}>

						<img className={selected_symbol_index === all_symbols?.length -1 ? 'search_button_icon_active'  : "search_button_icon"} src={right_arrow}
							
							onMouseDown ={async () => {
					
								try {


								if(selected_symbol_index < all_symbols.length - 1){

									setLoading(true);


							  	 // Increment the selected_symbol_index
								  set_selected_symbol_index(prev => prev + 1);

								  // Wait for set_selected_symbol_index to finish before proceeding
								  await new Promise(resolve => setTimeout(resolve, 0));
  
								  // Now set the selected_symbol using the updated index
								  set_selected_symbol(all_symbols[selected_symbol_index + 1]);
  
								  // Wait for set_selected_symbol to finish before proceeding
								  await new Promise(resolve => setTimeout(resolve, 0));
  
								  // Filter trades by the selected_symbol on the server
								  await server_filter_trades_by_symbol(all_symbols[selected_symbol_index + 1]);
  
								  // Wait for server_filter_trades_by_symbol to finish before proceeding
								  await new Promise(resolve => setTimeout(resolve, 0));
  
								  // Now get the selected trades and update the state using setAllTrades
								  get_selected_trades(setAllTrades);
								}
		
									
								} 
								catch (error) {
									console.error('Error occurred:', error);
								}finally{
									setLoading(false);
								}
							}}
							
							
							/>

						</div>

					</div>

				</div>
							
			</div>
		    
			<div className="loading">{loading ? 'Loading...' : ''}</div> */}

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

