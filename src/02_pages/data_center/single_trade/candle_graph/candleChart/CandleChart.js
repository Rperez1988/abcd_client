
// components
import React, {useState, useEffect} from 'react'; 
import {mousePressedOnCanvas,mouseReleasedOnCanvas,mousePressedOnPrices,mouseReleasedOnPrices,scrollZoom,checkIfMouseIsOverChart,checkIfMouseIsOverPrices,getWhichCandleMouseIsOver} from './MouseStatus/MouseStatus';
import {addCandles,addWicks,addGrid,addPrices,addDates,addCrossHairs,addCrossHairsPrice,addCrossHairsDate} from './Builder/ChartBuilder';
import {getChartCorners,getPriceBarCorners} from './Dimensions/CanvasDimensions';
import {addRetracementPct, addRetracementPctNums, addAngles, addSupportAndResistanceLine, addEnteredLine, addABCDsymbols, addProfitLine, addABCDborder, addStopLossLine,addStopLossBorder,addProfitBorder,addFibRetracement, addDisplayPivotA, addDisplayPivotB, addDistanceDisplay} from './AddsOns/ChartAddOns';
import {getCanvasXandYSpacing, getPriceBarXandYSpacing, getCanvasYSpacing} from './Spacing/ChartSpacing';
import {getStartingExpandSize, addPercentChangeToCandles ,getABCDBarNumbers ,getEachCandlesXCordPixelLocation, getPercentageChangeOfCanvasHeight, trackChangeInCanvasHieght} from './Utlities/Utilities';

// css
import './CandleChart.css'

const CandleChart = (props) => {

	const {
		inFullScreen,
		allTrades,
		scaledCandles,
		highAndLowDistanceApart,
		midPriceInCandleChart,
		isCandles,
		isABCD,
		isRR,
		isSR,
		isA,
        isB,
		isFibRetracement,
		isPriceAndDayMeasurement,
		retracementMeasurement,
		colorTheme,
	} = props
	


	const [testState, setTestState] = useState()
	const [spaceBetweenCandles, setSpaceBetweenCandles] = useState(inFullScreen ? 5 : 5)		// Space Between Candles: Starting pixel distance between each candle.
	const [candleWidth, setCandleWidth] = useState(inFullScreen ? 5 : 1)						// Candle Width: Starting pixel width of a candle.
	const [spaceBetweenWicks, setSpaceBetweenWicks] = useState(7.5)							    // Space Between Wicks: Starting pixel distance between each wick.
 	const [canvasDisplayHeight, setCanvasDisplayHeight] = useState({
		'height': null,
		'width': null,
		'left': null, 
		'top': null,
		'right': null,
		'bot': null, 
	})
	const [canvasPriceDimensions, setCanvasPriceDimensions] = useState({
		'height': null,
		'width': null,
		'left': null, 
		'top': null,
		'right': null,
		'bot': null, 
	})
	const [mousePosition, setMousePosition] = useState({});										// Mouse Position: Holds the current x and y coordinate location of the mouse.
	const [xCoordinatesOnMouseClick, setXCoordinatesOnMouseClick] = useState()					// X-Coordintate On Mouse Click: Holds the x-coordinate location of the latest mouse click.
	const [yCoordinatesOnMouseClick, setYCoordinatesOnMouseClick] = useState()					// Y-Coordintate On Mouse Click: Holds the y-coordinate location of the latest mouse click.
	const [isMousePressedOnCanvas, setIsMousePressedOnCanvas] = useState(false)
	const [isMousePressedOnPrices, setIsMousePressedOnPrices] = useState(false)
	const [onCandle, setOnCandle] = useState(5)
	const pixelPoint = canvasPriceDimensions['height'] / 1000
	const [canvasXSpacing, setCanvasXSpacing] = useState(0)									// Canvas X Spacing: Pixel distance between the left side of the canvas and the left side of the starting candle.
	const [canvasYSpacing, setCanvasYSpacing] = useState(0)	
	const [prevCanvasYSpacing, setPrevCanvasYSpacing] = useState(0)		
	const [prevCanvasXSpacing, setPrevCanvasXSpacing] = useState(0)								// Previous Canvas Y Spacing: 	
	const expandInPlace = true
	const addExpansion = true
	const addYSpacing = true
	const main_ = React.createRef(null)
	const canvasPriceBar = React.createRef(null)
	const canvasChart = React.createRef(null);
	const canvasDatesBar = React.createRef(null)
	const [priceSpacing, setPriceSpacing] = useState(100) 										// Price Spacing: Pixel space between each price unit on the price bar. 
	const [previousPriceSpacing, setPreviousPriceSpacing] = useState(100) 						// Previous Spacing: 
    
	const [expandSize, setExpandSize] = useState(()=>{
		return 0
	})	// Track how much a price unit has expanded.				

	const [previousExpandSize, setPreviousExpandSize] = useState(0)								// Previous Expand Size: 
	const [gridPriceAdujuster, setgridPriceAdjuster] = useState(1)
	let xyActiveCoordinates = JSON.parse(JSON.stringify(mousePosition))
	const [canvasAdjustedHeight, setCanvasAdjustedHeight] = useState()
	const canvasDimensionHeight = 1000 	
	let defaultHeightPCt = 100
	const [gridAndPriceAmount, setGridAndPriceAmount] = useState(1)
    let priceUnitAmount = 10 * gridAndPriceAmount
	let priceIncrement = 10 / gridAndPriceAmount
	let additionalCanvasPixels = (expandSize * priceUnitAmount) / gridAndPriceAmount
	let pixelsInAPriceUnit = canvasDisplayHeight['height'] / priceUnitAmount
	let pixelsInExpandedPriceUnit = pixelsInAPriceUnit + (additionalCanvasPixels / priceUnitAmount)
	// let ohlc_display = (testCandles[onCandle]['open'] > testCandles[onCandle]['close']) ? 'details-value-ohlc-red' : 'details-value-ohlc-green'
	let ohlc_display = 'details-value-ohlc-red'

	useEffect(()=> {
		setCanvasYSpacing(getCanvasYSpacing(midPriceInCandleChart, canvasDisplayHeight['height'], pixelPoint))
		setPrevCanvasYSpacing(getCanvasYSpacing(midPriceInCandleChart, canvasDisplayHeight['height'], pixelPoint))
		setExpandSize(getStartingExpandSize(highAndLowDistanceApart, expandSize, inFullScreen,  parseFloat(canvasDisplayHeight['height'])))
		setPreviousExpandSize(getStartingExpandSize(highAndLowDistanceApart, expandSize, inFullScreen))
		const getStartingWidth = () => {
			// allTrades['chartData'].length ===  20 && (x = (50 / 2))

		let x 

		if(inFullScreen){
			x = (100  / (allTrades['chartData'].length / 3))
		}
		if(!inFullScreen){
			x = (50  / (allTrades['chartData'].length / 10))
		}
		


		setCandleWidth(x)
		setSpaceBetweenCandles(x)
		setSpaceBetweenWicks(((canvasDisplayHeight['width'] / 2) / 2) + 5)

	
		}
		
		getStartingWidth()
		setOnCandle(0)
		setCanvasXSpacing(canvasDisplayHeight['width'] / 4)
		// setCanvasYSpacing(canvasDisplayHeight['height'] / 2)
		// let quarter = canvasDisplayHeight['width'] / 4
		// let third = quarter * 3
		// third = third
		function calculateCandleWidthAndSpacing(graphWidth, numCandles) {
			const denominator = 3 * numCandles + numCandles - 1;
			const candleWidth = graphWidth / denominator;
			const widthBetweenCandles = graphWidth / denominator;
			return { candleWidth, widthBetweenCandles };
		  }
		
		const graphWidth = canvasDisplayHeight['width']; // Width of the graph in pixels
		const numCandles = allTrades['chartData'].length;   // Number of candles

		const { candleWidth, widthBetweenCandles } = calculateCandleWidthAndSpacing(graphWidth, numCandles);

		setCandleWidth(candleWidth)
		setSpaceBetweenWicks((candleWidth / 2) + 5)
		setSpaceBetweenCandles(candleWidth)
		// console.log('height',canvasDisplayHeight['height'].toFixed(2))
		// console.log('bars',allTrades['chartData'].length, 'pixel length', (allTrades['chartData'].length * candleWidth) + (allTrades['chartData'].length * spaceBetweenCandles))

	}, [scaledCandles,canvasDisplayHeight])
	
	useEffect(()=> {
		
		let graphHeightPercentChange = getPercentageChangeOfCanvasHeight(canvasPriceDimensions, expandSize)
		let ajustedCandles = addPercentChangeToCandles(scaledCandles, graphHeightPercentChange, pixelPoint)
		let enter = addPercentToEnter(allTrades, graphHeightPercentChange, pixelPoint)[0]
		let risk = addPercentToEnter(allTrades, graphHeightPercentChange, pixelPoint)[1]
		let reward = addPercentToEnter(allTrades, graphHeightPercentChange, pixelPoint)[2]
		let scale = addPercentToEnter(allTrades, graphHeightPercentChange, pixelPoint)[3]
		let eachCandleXPixelLocation = getEachCandlesXCordPixelLocation(canvasDisplayHeight, canvasXSpacing, candleWidth, scaledCandles, spaceBetweenCandles)
		

		let inscreasedCanvasSize = trackChangeInCanvasHieght(canvasPriceDimensions, expandSize, defaultHeightPCt, priceUnitAmount, additionalCanvasPixels)
		setCanvasAdjustedHeight(inscreasedCanvasSize)
		getWhichCandleMouseIsOver(canvasDisplayHeight, canvasXSpacing, candleWidth, scaledCandles, xyActiveCoordinates, setOnCandle, spaceBetweenCandles)
		
		createCanvas(enter, risk, reward, ajustedCandles,eachCandleXPixelLocation, 1,1 ,setTestState)
		createCanvasDates(ajustedCandles)
		createCanvasPrices(enter, risk, reward, allTrades)

		// if(expandSize > 50 && expandSize < 100){
		// 	setGridAndPriceAmount(2)
		// }
		// if(expandSize > 100 && expandSize < 200){
		// 	setGridAndPriceAmount(4)
		// }
		// if(expandSize > 200 && expandSize < 300){
		// 	setGridAndPriceAmount(6)
		// }
		// if(expandSize > 300 && expandSize < 400){
		// 	setGridAndPriceAmount(8)
		// }
		// if(expandSize > 500 && expandSize < 600){
		// 	setGridAndPriceAmount(10)
		// }
		// if(expandSize > 700 && expandSize < 800){
		// 	setGridAndPriceAmount(12)
		// }
		// if(expandSize > 800 && expandSize < 900){
		// 	setGridAndPriceAmount(14)
		// }
		// if(expandSize > 900 && expandSize < 1000){
		// 	setGridAndPriceAmount(16)
		// }
		// if(expandSize > 1000 && expandSize < 1100){
		// 	setGridAndPriceAmount(18)
		// }
		// if(expandSize > 1200 && expandSize < 1300){
		// 	setGridAndPriceAmount(20)
		// }
		// if(expandSize > 1400 && expandSize < 1500){
		// 	setGridAndPriceAmount(22)
		// }
		// if(expandSize > 1600 && expandSize < 1700){
		// 	setGridAndPriceAmount(24)
		// }
		// if(expandSize > 1700 && expandSize < 2000){
		// 	setGridAndPriceAmount(26)
		// }





	}, [gridAndPriceAmount,candleWidth, canvasXSpacing, canvasYSpacing, expandSize, mousePosition, isABCD, isRR, isSR, isCandles, testState, isA, isB,isFibRetracement, isPriceAndDayMeasurement, retracementMeasurement,])

	useEffect(() => {		

		let isMouseOverChart = checkIfMouseIsOverChart(xyActiveCoordinates, canvasDisplayHeight)
		let isMouseOverPrices = checkIfMouseIsOverPrices(xyActiveCoordinates, canvasPriceDimensions)
		!isMouseOverPrices && setIsMousePressedOnPrices(false)
		
		getCanvasXandYSpacing(
			isMouseOverChart, 
			isMousePressedOnCanvas, 
			xyActiveCoordinates, 
			xCoordinatesOnMouseClick
			,setCanvasXSpacing, 
			prevCanvasXSpacing, 
			yCoordinatesOnMouseClick, 
			setCanvasYSpacing,
			prevCanvasYSpacing,
			setIsMousePressedOnCanvas, 
			setPrevCanvasXSpacing, 
			setPrevCanvasYSpacing, 
			canvasYSpacing, 
			canvasXSpacing,
			mouseReleasedOnCanvas)

		getPriceBarXandYSpacing(
			isMouseOverPrices, 
			isMousePressedOnPrices, 
			xyActiveCoordinates, 
			yCoordinatesOnMouseClick, 
			setExpandSize, 
			previousExpandSize,
			mouseReleasedOnPrices)

	},[mousePosition])

	useEffect(() => {
		
		// Get canvas dimensions.
		canvasChart.current && getChartCorners(canvasChart,setCanvasDisplayHeight)
		canvasPriceBar.current && getPriceBarCorners(canvasPriceBar, setCanvasPriceDimensions)

		// locate mouse position.
		const handleMouseMove = (event) => {
			setMousePosition({ x: event.clientX, y: event.clientY });
		};
		window.addEventListener('mousemove', handleMouseMove);
		return () => {window.removeEventListener('mousemove',handleMouseMove);};

	},[]); 

	const createCanvas = (enter, risk, reward, testCandles_,eachCandleXPixelLocation,takeProfit,stopLoss,setTestState) => {

		if (canvasChart.current) {
			const canvas = canvasChart.current;
			const ctx = canvas.getContext('2d');

			if (ctx) {
				canvas.style.width ='100%';
				canvas.style.height = '100%';
				canvas.height  = canvas.offsetHeight;
				canvas.width  = canvas.offsetWidth;
		
				let dateOfA = getABCDBarNumbers(scaledCandles,allTrades['pivotInfo']['pivotA']['date'])
				let dateOfB = getABCDBarNumbers(scaledCandles,allTrades['pivotInfo']['pivotB']['date'])
				let dateOfC = getABCDBarNumbers(scaledCandles,allTrades['pivotInfo']['pivotC']['date'])
				let dateOfD = getABCDBarNumbers(scaledCandles,allTrades['pivotInfo']['pivotD']['date'])
				

				// allTrades['tradeInfo']['id'] !== '-' && canvasDisplayHeight['height'] !== null && expandSize > -100 && addGrid(
				// 	ctx,
				// 	pixelsInExpandedPriceUnit,
				// 	expandInPlace, 
				// 	spaceBetweenWicks, 
				// 	spaceBetweenCandles, 
				// 	canvasXSpacing, 
				// 	candleWidth, 
				// 	canvas.height, 
				// 	expandSize, 
				// 	canvasYSpacing, 
				// 	canvas.width, 
				// 	midPriceInCandleChart, 
				// 	pixelsInAPriceUnit,
				// 	colorTheme

				// )
				
				allTrades['tradeInfo']['id'] !== '-' && isCandles && addCandles(
					ctx,
					expandInPlace,
					testCandles_,
					addExpansion, 
					addYSpacing, 
					canvasYSpacing, 
					canvasPriceDimensions['height'], 
					canvasXSpacing, 
					candleWidth, 
					spaceBetweenCandles, 
					expandSize, 
					pixelPoint, 
					canvasAdjustedHeight,
					setTestState,
					midPriceInCandleChart, 
					gridPriceAdujuster,
					colorTheme,
				)
				allTrades['tradeInfo']['id'] !== '-' && isCandles && addWicks(ctx,testCandles_,spaceBetweenCandles, spaceBetweenWicks, canvasXSpacing, canvasYSpacing, expandSize, midPriceInCandleChart, candleWidth, colorTheme)
				allTrades['tradeInfo']['id'] !== '-' && retracementMeasurement && addRetracementPct(allTrades, ctx,eachCandleXPixelLocation,testCandles_,dateOfA,dateOfB,dateOfC,dateOfD, canvasDisplayHeight['left'], canvasYSpacing, expandSize, midPriceInCandleChart)

				
				// console.log('isABCD', isABCD)
				allTrades['tradeInfo']['id'] !== '-' && isABCD && addAngles(allTrades, ctx,eachCandleXPixelLocation,testCandles_,dateOfA,dateOfB,dateOfC,dateOfD, canvasDisplayHeight['left'], canvasYSpacing, expandSize, midPriceInCandleChart)
				
				allTrades['tradeInfo']['id'] !== '-' && isSR && addSupportAndResistanceLine(allTrades, enter, ctx,eachCandleXPixelLocation,testCandles_,dateOfA,dateOfB,dateOfC,dateOfD, canvasDisplayHeight, canvasYSpacing, expandSize, midPriceInCandleChart)
				allTrades['tradeInfo']['id'] !== '-' && addEnteredLine(ctx, enter, eachCandleXPixelLocation,testCandles_,dateOfA,dateOfB,dateOfC,dateOfD,canvasDisplayHeight, canvasYSpacing, midPriceInCandleChart, expandSize)
				allTrades['tradeInfo']['id'] !== '-' && addProfitBorder(enter, risk, reward, pixelPoint, allTrades, ctx, eachCandleXPixelLocation ,testCandles_, dateOfA, dateOfB, dateOfC, dateOfD, takeProfit, stopLoss, canvasDisplayHeight, canvasYSpacing, expandSize, midPriceInCandleChart)
				// // addStopLossBorder(enter, risk, reward, pixelPoint, allTrades, ctx, eachCandleXPixelLocation ,testCandles_, dateOfA, dateOfB, dateOfC, dateOfD, takeProfit, stopLoss, canvasDisplayHeight, canvasYSpacing, expandSize, midPriceInCandleChart)
				// isFibRetracement && addFibRetracement(ctx,allTrades,inFullScreen,midPriceInCandleChart,dateOfA,dateOfB,dateOfC,dateOfD,canvasYSpacing,expandSize,eachCandleXPixelLocation,testCandles_,canvasDisplayHeight)
				// isA && addDisplayPivotA(ctx, eachCandleXPixelLocation, dateOfA, allTrades['settings']['pivotLength'], testCandles_, canvasDisplayHeight, canvasYSpacing, expandSize, midPriceInCandleChart)
				// allTrades['tradeInfo']['id'] !== '-' && isB && addDisplayPivotB(ctx, eachCandleXPixelLocation, dateOfB, allTrades['settings']['pivotLength'], testCandles_, canvasDisplayHeight, canvasYSpacing, expandSize, midPriceInCandleChart)
				// allTrades['tradeInfo']['id'] !== '-' && isRR && addStopLossLine(ctx,eachCandleXPixelLocation,testCandles_,dateOfA,dateOfB,dateOfC,dateOfD,takeProfit,stopLoss)
				// allTrades['tradeInfo']['id'] !== '-' && isABCD && addABCDborder(ctx,eachCandleXPixelLocation,testCandles_,dateOfA,dateOfB,dateOfC,dateOfD,takeProfit,stopLoss)
				// allTrades['tradeInfo']['id'] !== '-' && isABCD && addABCDsymbols(ctx,eachCandleXPixelLocation,testCandles_,dateOfA,dateOfB,dateOfC,dateOfD,takeProfit,stopLoss)

	
				
				allTrades['tradeInfo']['id'] !== '-' && retracementMeasurement && addRetracementPctNums(allTrades, ctx,eachCandleXPixelLocation,testCandles_,dateOfA,dateOfB,dateOfC,dateOfD, canvasDisplayHeight['left'], canvasYSpacing, expandSize, midPriceInCandleChart)
				allTrades['tradeInfo']['id'] !== '-' && isPriceAndDayMeasurement && addDistanceDisplay(allTrades, ctx,eachCandleXPixelLocation,testCandles_,dateOfA,dateOfB,dateOfC,dateOfD, canvasDisplayHeight['left'], canvasYSpacing, expandSize, midPriceInCandleChart)
			
				allTrades['tradeInfo']['id'] !== '-' && checkIfMouseIsOverChart(xyActiveCoordinates, canvasDisplayHeight) && addCrossHairs(
					ctx,
					xyActiveCoordinates, 
					canvasDisplayHeight['top'], 
					canvasPriceDimensions['height'], 
					canvasDisplayHeight['left']
				)
			
			}
		}
	}
	const createCanvasPrices = (enter, risk, reward, allTrades) => {
		if (canvasPriceBar.current) {
			const canvas = canvasPriceBar.current;
			const ctx = canvas.getContext('2d');
			if (ctx) {
				canvas.style.width ='100%';		
				canvas.style.height = '100%';
				canvas.height = canvas.offsetHeight;
				canvas.width = canvas.offsetWidth;

				allTrades['tradeInfo']['id'] !== '-' && testState && expandSize > - 100 && addPrices(
					enter, 
					risk, 
					reward,
					allTrades, 
					pixelsInExpandedPriceUnit,
					pixelsInAPriceUnit,
					priceIncrement,
					ctx, 
					expandInPlace, 
					canvasPriceDimensions['height'], 
					expandSize, 
					midPriceInCandleChart, 
					canvasDimensionHeight, 
					inFullScreen, 
					canvasYSpacing,
			
					canvas.offsetWidth

				)

				allTrades['tradeInfo']['id'] !== '-' && addCrossHairsPrice(
					ctx, 
					addExpansion, 
					addYSpacing, 
					xyActiveCoordinates, 
					canvasDisplayHeight['top'], 
					canvasDimensionHeight, 
					pixelPoint, 
					canvasYSpacing, 
					canvasPriceDimensions['height'], 
					expandSize, 
					midPriceInCandleChart, 
					inFullScreen,
					expandInPlace, 
					canvasAdjustedHeight,
					colorTheme,
					canvas.height,
					canvas.offsetWidth
				)
			}
		}
	}
	const createCanvasDates = (testCandles_) => {
		if (canvasDatesBar.current) {
			const canvasDates = canvasDatesBar.current;
			const ctxDates = canvasDates.getContext('2d');

			if (ctxDates) {
				ctxDates.canvas.width = window.innerHeight;
				ctxDates.canvas.height = window.innerHeight;
				canvasDates.style.width ='100%';
				canvasDates.style.height='100%';
				canvasDates.width  = canvasDates.offsetWidth;
				canvasDates.height = canvasDates.offsetHeight;
		
				allTrades['tradeInfo']['id'] !== '-' && addDates(ctxDates,testCandles_, spaceBetweenWicks, canvasXSpacing, inFullScreen, candleWidth, spaceBetweenCandles, scaledCandles)
				allTrades['tradeInfo']['id'] !== '-' && addCrossHairsDate(ctxDates,xyActiveCoordinates, canvasDisplayHeight['left'], inFullScreen, scaledCandles, onCandle, colorTheme)
			}
		}
	}
	const addPercentToEnter = (allTrades, pi, pixelPoint) => {

		let scale 
		if(allTrades.enterExitInfo['enterPrice'] < 10){
			scale = 1000
		}
		if(allTrades.enterExitInfo['enterPrice'] < 100){
			scale = 100
		}
		if(allTrades.enterExitInfo['enterPrice'] > 100){
			scale = 10
		}
		if(allTrades.enterExitInfo['enterPrice'] > 1000){
			scale = 1
		}


		let enter = (allTrades.enterExitInfo['enterPrice'] / 1000) * 100
		let risk = (allTrades.pnl['risk'] / 1000) * 100
		let reward = (allTrades.pnl['reward'] / 1000) * 100

		
		enter = (enter * pixelPoint) * scale
		risk = (risk * pixelPoint) * scale
		reward = (reward * pixelPoint) * scale

		let enter_increase = (((pi - 100) / 100) * enter)
		let risk_increase = (((pi - 100) / 100) * risk)
		let reward_increase = (((pi - 100) / 100) * reward)

		enter = enter + enter_increase
		risk = risk + risk_increase
		reward = reward + reward_increase


		return [enter, risk, reward, scale]


	}


	console.log(expandSize)
    return(
		<div className='candle_chart_container'>

			<div className='candle_chart_container_2'>

				<div className='candle_chart_wrapper' ref={main_}>
{/* 
					<div className='canvas_header'>

					{inFullScreen &&	<><div className='dash'></div>

						<div className='details-box-bar'>
		
						
							<div className={allTrades['tradeClosed'] === 'True' ? 'details-value-tradeStatus-closed' : 'details-value-tradeStatus-open'}>
								{allTrades['tradeClosed'] === 'True' ? 'Closed' : 'Open'}
							</div>
							
						</div>

						

						<div className='details-box-bar'>
							<div className='details-key-bar'>Bar</div>
							<div className='details-value-bar'>{onCandle}</div>
						</div>
						
						
						<div className='details-box-type'>
							<div className='details-key-type'>Type</div>
							<div className='details-value-type'>{allTrades['completeTradeType']}</div>
						</div>
						

						<div className='details-box-entered'>
							<div className='details-key-entered'>Entered</div>
							<div className='details-value-entered'>{allTrades['priceOfC']}</div>
						</div>
						

						<div className='details-box-stoploss'>
							<div className='details-key-stoploss'>Stop-Loss</div>
							<div className='details-value-stoploss'>{allTrades['stopLoss']}</div>
						</div>
						

						<div className='details-box-takeprofit'>
							<div className='details-key-takeprofit'>Take-Profit</div>
							<div className='details-value-takeprofit'>{allTrades['takeProfit']}</div>
						</div>
						

						<div className='details-box-risk'>
							<div className='details-key-risk'>Risk</div>
							<div className='details-value-risk'>{allTrades['risk']}</div>
						</div>
						

						<div className='details-box-reward'>
							<div className='details-key-reward'>Reward</div>
							<div className='details-value-reward'>{allTrades['reward']}</div>
						</div>
						

						</>}

					</div> */}

					<div className='canvas' style={colorTheme.single_trade.candle_chart.chart.chart.background_color}>
						<canvas id='canvas' 
							ref={canvasChart} 
							// style={{backgroundColor: '#041420'}}
							// style={{backgroundColor: '#080915'}}
							onMouseUp={() => {mouseReleasedOnCanvas(setIsMousePressedOnCanvas,setPrevCanvasXSpacing,setPrevCanvasYSpacing,canvasXSpacing,canvasYSpacing)}} 
							onMouseDown={() => {mousePressedOnCanvas(setIsMousePressedOnCanvas,setXCoordinatesOnMouseClick,setYCoordinatesOnMouseClick,xyActiveCoordinates)}}
							onWheel = {(event) => {scrollZoom(event, candleWidth, setSpaceBetweenCandles, spaceBetweenCandles, setCandleWidth, setSpaceBetweenWicks, spaceBetweenWicks)}}>

							
						</canvas>
					</div>

					<div className='canvas_dates' >
						<canvas id='canvasDatesBar' 
							ref={canvasDatesBar}
							style={colorTheme.single_trade.candle_chart.chart.dates}></canvas>

					</div>

				</div>	

				<div className='canvas_prices' style={colorTheme.single_trade.candle_chart.chart.prices} onWheel={(event) => {
					
					event.deltaY < 0 && setExpandSize((prevState)=>{

				
						return prevState + 10
					})
					event.deltaY > 0 && setExpandSize((prevState)=>{

				
						return prevState - 10
					})
		
		
				
				}}
					
					
					>
					
					<div className='pricesa'></div>
					
					<div className='pricesb'
						onMouseUp={() => {mouseReleasedOnPrices(isMousePressedOnPrices,setIsMousePressedOnPrices,setPreviousExpandSize,expandSize)}} 
						onMouseDown={() => {mousePressedOnPrices(setPreviousPriceSpacing,setIsMousePressedOnPrices,setXCoordinatesOnMouseClick,setYCoordinatesOnMouseClick,priceSpacing,xyActiveCoordinates)}}>
						<canvas ref={canvasPriceBar}
						></canvas>
					</div>
					
					<div className='pricesc'></div>

				</div>
				
			</div>

	    </div>
    )
}

export default CandleChart