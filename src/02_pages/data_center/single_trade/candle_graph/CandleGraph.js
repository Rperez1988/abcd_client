import { useState, useEffect } from "react"
import NavBar from "./NavBar"
import { SideBar } from "./SideBar"
import CandleChart from "./candleChart/CandleChart"
import TradeObjectInfo from "../trade_info/trade_object_info"




const CandleGraph = (props) => {

    const {
        isTradeBeingViewed,
        tradeIdInView,
        allTrades,
        turnOverLayOff,
		browseChartsRight,
		browseChartsLeft,
		setIsTradeBeingViewd,
		colorTheme,
		isFullScreen,
		setIsFullScreen,
		selected_candles,
		selected_pattern
    } = props

	const [candles, set_candles] = useState()
	const [inFullScreen, setInFullScreen] = useState(true)
	const [isABCD, setIsABCD] = useState(true)
	const [isRR, setIsRR] = useState(false)
	const [isSR, setIsSR] = useState(false)
	const [isAtEndOfTrades, setIsAtEndOfTrades] = useState(false)
	const [isAtStartOfTrades, setIsAtStartOfTrades] = useState(false)
	const [isA, setIsA] = useState(false)
	const [isB, setIsB] = useState(false)
	const [isFibRetracement, setIsFibRetracement] = useState(true)
	const [isPriceAndDayMeasurement, setIsPriceAndDayMeasurement] = useState(false)
	const [retracementMeasurement, setIsRetracementMeasurement] = useState(true)
    const [scaledCandles, setScaledCandles] = useState()
	const [highAndLowDistanceApart, setHighAndLowDistanceApart] = useState()
	const [isCandles, setIsCandles] = useState(true)
	const [midPriceInCandleChart, setMidPriceInCandleChart] = useState()
	const get_mid_price = () => {
		let prices = []
		selected_candles.map((item)=>{
			prices.push(item.candle_close)
			prices.push(item.candle_open)
		})
		let sum = 0;
		for (let i = 0; i < prices.length; i++) {
			sum += prices[i];
		}
		let mid = (sum / prices.length).toFixed(2)
		return parseFloat(mid)
	}
	get_mid_price()
    useEffect(() => {
		
		// const prep_candles = () => {

		// 	let new_candles = selected_candles.map((item)=> ({
		// 			...item,
		// 			static_wick_high : 0,
		// 			dynamic_wick_high : 0,
		// 			static_open : 0,
		// 			dynamic_open : 0,
		// 			static_close : 0,
		// 			dynamic_close : 0,
		// 			static_wick_low : 0,
		// 			dynamic_wick_low : 0,
		// 	}))
		// 	set_candles(new_candles)
		// }
		// prep_candles()


		const process_data = async () => {

			// SAFTEY NET FOR FIRST RENDER selcted_candles IS UNDEFINED, OR NULL
			if(selected_candles !== undefined){
				
				// GET AVERAGE OF ALL CANDLES
				const getAverageOfCandles = async () => {
					
					// GET ALL PRICES IN EACH CANDLE.
					let all_prices = []
					selected_candles.forEach(candle => {	
						all_prices.push(parseFloat(candle.candle_high)) 
						all_prices.push(parseFloat(candle.candle_close))
						all_prices.push(parseFloat(candle.candle_open))
						all_prices.push(parseFloat(candle.candle_low))
					})
	
					// GET AVERAGE OF ALL PRICES.
					const average_of_all_prices = all_prices.reduce((a, b) => a + b, 0) / all_prices.length;

					return average_of_all_prices
				}

				
				const scaleCandlesToFitChart = async (average) => {
	
					let candles = []
					let scale = 2
	
					if(average < 10){
						scale = 10
					}
					if(average >= 10 && average < 100 ){
						scale = 10
					}
					if(average >= 100){
						scale = 1
					}

					selected_candles.forEach(item => {	
						candles.push({
							'date': item.candle_date,
							'high': item.candle_high * scale,
							'close': item.candle_close * scale,
							'open': item.candle_open * scale,
							'low':item.candle_low * scale,
						})
				
					})
	
					return candles
				}
				const getHighLowAndDistanceInBetween = async (arr) => {
	
					let avg = []
					arr.forEach(item => {	
						avg.push(parseFloat(item['high'])) 
						avg.push(parseFloat(item['low']))
					})
					
					let min = Math.min( ...avg)
					let max = Math.max(...avg)
					let highAndLowDistanceApart = max - min
		
					let mid = min + (highAndLowDistanceApart / 2)
					return [min, max, highAndLowDistanceApart, mid]
				}
				let average = await getAverageOfCandles()
				let candles = await scaleCandlesToFitChart(average)
				let minMaxDistance = await getHighLowAndDistanceInBetween(candles)
	
				let highAndLowDistanceApart = minMaxDistance[2]
				let midPriceInCandleChart = minMaxDistance[3]
	
				setScaledCandles(candles)
				setHighAndLowDistanceApart(highAndLowDistanceApart)
				setMidPriceInCandleChart(midPriceInCandleChart)
	
			}
				
		}
		process_data()
		
	
	},[selected_pattern, selected_candles])
	let x = midPriceInCandleChart && (selected_pattern != undefined)
	const get_abcd_bar_numbers = () => {
		let numbers = []
		let prices = []
		selected_candles.map((item,index)=>{
		
			if(item?.candle_date === selected_pattern?.pattern_A_pivot_date ||
				item?.candle_date === selected_pattern?.pattern_B_pivot_date ||
				item?.candle_date === selected_pattern?.pattern_C_pivot_date ||
				item?.candle_date === selected_pattern?.trade_entered_date){
				
					numbers.push(index)
					if(item.candle_open > item.candle_close){
						prices.push(item.candle_open)
					}
					else if(item.candle_open < item.candle_close){
						prices.push(item.candle_close)
					}
					
			}
		})
		return [numbers, prices]
	}
    return(

        <div className='candle_chart_'>
{/* 
			<div className="left_">
				<div className="trades_object_info_wrapper"  style={{background: colorTheme.primary_color}}>

					<TradeObjectInfo 
						allTrades={allTrades}
						colorTheme={colorTheme}
						tradeIdInView={tradeIdInView}
					/>
					
				</div>
			</div> */}

			{/* <div className="right_"> */}
					
				{/* <div className="trades_object_info_wrapper"  style={{background: colorTheme.primary_color}}> */}

				{/* <NavBar
					turnOverLayOff={turnOverLayOff}
					setIsTradeBeingViewd={setIsTradeBeingViewd}
					isTradeBeingViewed={isTradeBeingViewed}
					allTrades={allTrades}
					tradeIdInView={tradeIdInView}
					browseChartsLeft={browseChartsLeft}
					setIsAtEndOfTrades={setIsAtEndOfTrades}
					setIsAtStartOfTrades={setIsAtStartOfTrades}
					browseChartsRight={browseChartsRight}
					isAtStartOfTrades={isAtStartOfTrades}
					isAtEndOfTrades={isAtEndOfTrades}
					setInFullScreen={setInFullScreen}
					inFullScreen={inFullScreen}
					colorTheme={colorTheme}
					setIsABCD={setIsABCD}
					isABCD={isABCD}
					retracementMeasurement={retracementMeasurement}
					setIsRetracementMeasurement={setIsRetracementMeasurement}
					isCandles={isCandles}
					setIsCandles={setIsCandles}
					isFullScreen={isFullScreen}
					setIsFullScreen={setIsFullScreen}
					selected_candles={selected_candles}
				/> */}
				{
					x && 
					<CandleChart 
						inFullScreen={inFullScreen} 
						allTrades={allTrades} 
						scaledCandles={scaledCandles} 
						highAndLowDistanceApart={highAndLowDistanceApart} 
						midPriceInCandleChart={midPriceInCandleChart}
						isCandles={isCandles}
						isABCD={isABCD} 
						isRR={isRR} 
						isSR={isSR} 
						isA={isA}
						isB={isB}
						isFibRetracement={isFibRetracement}
						isPriceAndDayMeasurement={isPriceAndDayMeasurement}
						retracementMeasurement={retracementMeasurement}
						colorTheme={colorTheme}
						selected_candles={selected_candles}
						selected_pattern={selected_pattern}
						middle_price = {get_mid_price()}
						abcd_bar_locations = {get_abcd_bar_numbers()}
				
					/>
				} 
				{/* </div> */}

		
			{/* </div> */}

		</div>

      
    )
}

export default CandleGraph