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
    } = props

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


    useEffect(() => {

			const getAverageOfCandles = () => {

				let avg = []
				allTrades[tradeIdInView]['chartData'].forEach(item => {	
					avg.push(parseFloat(item['High'])) 
					avg.push(parseFloat(item['Close']))
					avg.push(parseFloat(item['Open']))
					avg.push(parseFloat(item['Low']))
				})

				const arr = avg;
				const average = arr.reduce((a, b) => a + b, 0) / arr.length;
				return average
			}
			const scaleCandlesToFitChart = (average) => {

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

				allTrades[tradeIdInView]['chartData'].forEach(item => {
					candles.push({
						'date': item['Date'],
						'high': item['High'] * scale,
						'close': item['Close'] * scale,
						'open': item['Open']* scale,
						'low':item['Low'] * scale,
					})
				})
				return candles
			}
			const getHighLowAndDistanceInBetween = (arr) => {

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
			let average = getAverageOfCandles()
			let candles = scaleCandlesToFitChart(average)
			let minMaxDistance = getHighLowAndDistanceInBetween(candles)

			let highAndLowDistanceApart = minMaxDistance[2]
			let midPriceInCandleChart = minMaxDistance[3]

			setScaledCandles(candles)
			setHighAndLowDistanceApart(highAndLowDistanceApart)
			setMidPriceInCandleChart(midPriceInCandleChart)
	
	},[allTrades, tradeIdInView])

    return(

        <div className='candle_chart_'>


			<div className="left_">
				<div className="trades_object_info_wrapper"  style={{background: colorTheme.primary_color}}>





				<TradeObjectInfo 
					allTrades={allTrades}
					colorTheme={colorTheme}
					tradeIdInView={tradeIdInView}
			
				/>
</div>
			</div>

			<div className="right_">
				
			<div className="trades_object_info_wrapper"  style={{background: colorTheme.primary_color}}>



			<NavBar
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
            />


			

			{midPriceInCandleChart && <CandleChart 
				inFullScreen={inFullScreen} 
				allTrades={allTrades[tradeIdInView]} 
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
			/>} 
			</div>

		
		</div>

		</div>

      
    )
}

export default CandleGraph