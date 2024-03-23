import React, { useState, useEffect } from 'react';
import './allTrades.css'
import config from '../../config.json';
import CandleGraph from '../data_center/single_trade/candle_graph/CandleGraph';
import TableComponent from './TableComponent';

const create_selected_candles_in_django = async (selected_pattern) => {
	
	try {
		await fetch(`${config.server}/candle_data/selected_candles/`, {
		method: 'POST',
		headers: {},
		body: JSON.stringify({
			symbol: selected_pattern?.trade_symbol,
			trade_id: selected_pattern?.id,
			candles: selected_pattern?.candles

		})
		});
	
	} catch (error) {console.log(error)}
	
}
const filter_greater_than_less_than = async (set_selected_patterns) => {
	
	try {
        await fetch(`${config.server}/patterns/gtlt/`, {
        method: 'POST',
        headers: {},
        body: JSON.stringify({
            symbol: 'hello'

        })
        });
    
	} catch (error) {console.log(error)}
	
}
// SEND SELCTED SYMBOL AND ITS TRADE IDS
const send_selected_symbol = async (symbol__info) => {


	// try {
    //     await fetch(`${config.server}/all_patterns_info/get_selected_symbol/`, {
    //     method: 'POST',
    //     headers: {},
    //     body: JSON.stringify({
    //         symbol: symbol__info.symbol,
	// 		trade_ids: symbol__info.abcd_instances
    //     })
    //     });
    

	// } catch (error) {console.log(error)}

}
// GET SELECTED PATTERNS THAT WERE SET BY 'send_selected_symbol'
const get_selected_patterns_from_django = async (set_selected_patterns) => {

	try {
		const res = await fetch(`${config.server}/patterns/abcd_patterns/`);
		const result = await res.json();
		set_selected_patterns(result)

		return result
		
	} catch (e) { console.log(e); }
}
const get_updated_count_patterns = async (set_selected_patterns) => {

	try {
		const res = await fetch(`${config.server}/patterns/selected_abcd/`);
		const result = await res.json();

		set_selected_patterns(result)
	} catch (e) { console.log(e); }

}
const get_selected_candles_in_django = async () => {

	try {
		const res = await fetch(`${config.server}/candle_data/view_selected_candles/`);
		const result = await res.json();
		// set_selected_candles(result)
		
		return result
		

	} catch (e) { console.log(e); }
}
const get_symbol_totals_from_django = async(set_all_pattern_info) => {

	try {
		const res = await fetch(`${config.server}/all_patterns_info/view_all_info/`);
		const result = await res.json();

		set_all_pattern_info(result)
	} catch (e) { console.log(e); }
}
const DataCentral = (props) => {
	
	const {
		colorTheme
	} = props

	const [tradeIdInView, setTradeIdInView] = useState(0)
	const [isTradeBeingViewed, setIsTradeBeingViewd] = useState()
	const [isFullScreen, setIsFullScreen] = useState(false)
	const [all_pattern_info, set_all_pattern_info] = useState()
	const [selected_patterns, set_selected_patterns] = useState()
	const [selected_pattern, set_selected_pattern] = useState()
	const [selected_candles, set_selected_candles] = useState()
	const [selected_pattern_statistics, set_selected_pattern_statistics] = useState()


	// CHART VIEW TOOLS
	const browseChartsRight = () => {
		setTradeIdInView(prevTradeInView => prevTradeInView + 1)
	}
	const browseChartsLeft = () => {
		setTradeIdInView(prevTradeInView => prevTradeInView - 1)
	}

	// GET SYMBOL TOTAL LIST
	useEffect(() => {

		const get_starting_data = async () => {
			await get_symbol_totals_from_django(set_all_pattern_info)
			let res = await get_selected_patterns_from_django(set_selected_patterns)
			set_selected_pattern(res[0])
		}
		get_starting_data()	
	},[]);

	/**	 
	 *  Whenever the SELECTED_PATTERN changes, this function will do 3 task.
	 * -
	 * 	1. Set the new 'selected_pattern' statistics to 'selected_pattern_statistics'.
	 *  2. Tell django to create a instance of the 'selected_pattern' candles.
	 *  3. Get the 'selected_pattern' candles from django and set it to 'selected_candles'.
	 */
	useEffect(()=>{

		const prepare_selected_candle_data = async () => {

			set_selected_pattern_statistics(
				{
					// 'id': selected_pattern?.id,
					'Symbol': selected_pattern?.trade_symbol,
					'ABCD Bar Length': selected_pattern?.pattern_ABCD_bar_length,
					'ABCD End Date': selected_pattern?.pattern_ABCD_end_date,
					'ABCD Start Date': selected_pattern?.pattern_ABCD_start_date,
					'ABC Bar Length': selected_pattern?.pattern_ABC_bar_length,
					'ABC End Date': selected_pattern?.pattern_ABC_end_date,
					'ABC Start Date': selected_pattern?.pattern_ABC_start_date,
					'AB Bar Length': selected_pattern?.pattern_AB_bar_duration,
					'AB End Date': selected_pattern?.pattern_AB_end_date,
					'AB Start Date': selected_pattern?.pattern_AB_start_date,
					'A Close': selected_pattern?.pattern_A_close,
					'A End Date': selected_pattern?.pattern_A_end_date,
					'A High': selected_pattern?.pattern_A_high,
					'A Low': selected_pattern?.pattern_A_low,
					'A Open': selected_pattern?.pattern_A_open,
					'A Date': selected_pattern?.pattern_A_pivot_date,
					'A Start Date': selected_pattern?.pattern_A_start_date,
					'BC Bar Length': selected_pattern?.pattern_BC_bar_length,
					'B Close': selected_pattern?.pattern_B_close,
					'B End Date': selected_pattern?.pattern_B_end_date,
			
					'B High': selected_pattern?.pattern_B_high,
					'B Low': selected_pattern?.pattern_B_low,
					'B Open': selected_pattern?.pattern_B_open,
					'B Date': selected_pattern?.pattern_B_pivot_date,
					'B Start Date': selected_pattern?.pattern_B_start_date,
					'CD Bar Length': selected_pattern?.pattern_CD_bar_length,
					'C Bar Retracement': selected_pattern?.pattern_C_bar_retracement,
					'C Close': selected_pattern?.pattern_C_close,
					'C End Date': selected_pattern?.pattern_C_end_date,
					'C High': selected_pattern?.pattern_C_high,
					'C Low': selected_pattern?.pattern_C_low,
					'C Open': selected_pattern?.pattern_C_open,
					'C Date': selected_pattern?.pattern_C_pivot_date,
					'C Price Retracement': selected_pattern?.pattern_C_price_retracement,
					'C Start Date': selected_pattern?.pattern_C_start_date,
					'D Bar Retracement': selected_pattern?.pattern_D_bar_retracement,
					'D Price Retracement': selected_pattern?.pattern_D_price_retracement,
			
					'Trade Created': String(selected_pattern?.trade_created),
					'Trade Bar Length': selected_pattern?.trade_duration_bars,
					'Trade Day Length': selected_pattern?.trade_duration_days,
					'Entered Date': selected_pattern?.trade_entered_date,
					'Entered Price': selected_pattern?.trade_entered_price,
					'Exited Date': selected_pattern?.trade_exited_date,
					'Exited Price': selected_pattern?.trade_exited_price,
					'Closed': String(selected_pattern?.trade_is_closed),
					'Open': String(selected_pattern?.trade_is_open),
					'PNL': selected_pattern?.trade_pnl,
					'Result': selected_pattern?.trade_result,
					'Return Percentage': selected_pattern?.trade_return_percentage,
					'Reward': selected_pattern?.trade_reward,
					'Risk': selected_pattern?.trade_risk,
					'RRR': selected_pattern?.trade_rrr,
					'Stop Loss': selected_pattern?.trade_stop_loss,
			
					'Take Profit': selected_pattern?.trade_take_profit,
	
					'Current Date': selected_pattern?.current_date,
					'Creation Date': selected_pattern?.d_dropped_below_b
				
				}
			)
			
			await create_selected_candles_in_django(selected_pattern)
		
			let candles = await get_selected_candles_in_django()
			candles.sort((a, b) => (a.candle_date > b.candle_date) ? 1 : -1);
			set_selected_candles(candles)
	
		}
	
		prepare_selected_candle_data()
	}, [selected_pattern])
	
	// DISPLAY SINGLE PATTERN INFO
	const resultArray = selected_pattern ? Object.entries(selected_pattern_statistics).map(([key, value]) => {
		return (
			<div className='pattern_stat_container' key={key}>
			<div className='pattern_stat_key'>{key}</div>
			<div className='pattern_stat_val'>{value}</div>
			</div>
		);
	}) : null;


	return (
		
		<div className='allTrades_body'> 

			 <div className='patterns_list'>

				<div className='table1'>
				<TableComponent 
					tableDataName={'Symbols'}
					tableData={all_pattern_info}
					header={ ['Symbol', 'ABCDs', 'Passed', 'Failed', 'Open','Pct']}
					send_selected_symbol={send_selected_symbol}
					get_selected_patterns_from_django={get_selected_patterns_from_django}
					set_selected_patterns={set_selected_patterns}
					set_selected_pattern={set_selected_pattern}
					get_updated_count_patterns={get_updated_count_patterns}

				/>

				</div>

				<div className='table2'>
				<TableComponent 
					tableDataName={'Single Trade'}
					tableData={selected_patterns}
					header={ [
						'#',
						'STATUS',
						'SYMBOL',
						'DURATION',
						'ENTER',
						'EXIT',
						'PNL',
						'RETURN',
						'AB'
					]}
					send_selected_symbol={send_selected_symbol}
					get_selected_patterns_from_django={get_selected_patterns_from_django}
					set_selected_patterns={set_selected_patterns}
					set_selected_pattern={set_selected_pattern}
					settingOptions={['All', 'Open', 'Bull', 'Bear']}
					get_updated_count_patterns={get_updated_count_patterns}
				
					
					

				/>

				</div>

				
			</div> 

			<div className='selected_pattern_container'>
				
				{/* <div className='cd_settings'></div> */}
				
				{/* <div className='selected_pattern_body'> */}
				
					<div className='pattern_details_container'>
{/* 
						<div className='pattern_dates'>
							
							<div className='pattern_date'>Lengths</div>
							<div className='pattern_date'>{selected_pattern && selected_pattern.pattern_AB_bar_duration}</div>
							<div className='pattern_date'>{selected_pattern && selected_pattern.pattern_BC_bar_length}</div>
							<div className='pattern_date'>{selected_pattern && selected_pattern.pattern_CD_bar_length}</div>
							<div className='pattern_date'>{selected_pattern && selected_pattern.trade_duration_bars}</div>
					
					
						</div>
							
						<div className='pattern_dates'>
							<div className='pattern_date'>Dates</div>
						
							<div className='pattern_date'>{selected_pattern && selected_pattern.pattern_A_pivot_date}</div>
							<div className='pattern_date'>{selected_pattern && selected_pattern.pattern_B_pivot_date}</div>
							<div className='pattern_date'>{selected_pattern && selected_pattern.pattern_C_pivot_date}</div>
							<div className='pattern_date'>{selected_pattern && selected_pattern.trade_entered_date}</div>
							<div className='pattern_date'>{selected_pattern && selected_pattern.trade_exited_date}</div>
						</div> */}
							
						{/* <div className='cchart'> */}
						
							{selected_candles != undefined && <CandleGraph
								isTradeBeingViewed={isTradeBeingViewed}
								tradeIdInView={tradeIdInView}
								// allTrades={selected_candles}
								// turnOverLayOff={turnOverLayOff}
								browseChartsRight={browseChartsRight}
								browseChartsLeft={browseChartsLeft}
								setIsTradeBeingViewd={setIsTradeBeingViewd}
								colorTheme={colorTheme}			
								isFullScreen={isFullScreen}
								setIsFullScreen={setIsFullScreen}
								selected_candles={selected_candles}
								selected_pattern={selected_pattern}
								/>
							}
						{/* </div> */}

						{/* <div className='pattern_basics'></div> */}
			
					</div>

					 {/* <div className='aps'>
						{resultArray}
					</div>  */}
				
				{/* </div> */}
				{/* <div className='cd_settings'></div> */}
			</div>

			
		</div>

	);
}

export default DataCentral;