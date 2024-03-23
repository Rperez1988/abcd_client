





















// const createCanvas = (enter, risk, reward, testCandles_,eachCandleXPixelLocation,takeProfit,stopLoss,setTestState) => {

//     if (canvasChart.current) {
//         const canvas = canvasChart.current;
//         const ctx = canvas.getContext('2d');
        

//         if (ctx) {
            
//             // Set the CSS width & height property of the canvas element to 100% of its containing element..
//             canvas.style.width ='100%';
//             canvas.style.height = '100%';

//             canvas.height  = canvas.offsetHeight;
//             canvas.width  = canvas.offsetWidth;

//             let height = canvas.height / 10
//             let ySpacing = y_spacing
//             let start_pixel = 0 + ySpacing
//             let end_pixel = canvas.height + ySpacing

            
//             // GRID
//             for(let i = start_pixel; i < end_pixel; i += (height + shrink_expand_amount)){
//                 ctx.beginPath(); 
//                 ctx.strokeStyle = 'gray'
//                 ctx.lineWidth = .5
//                 let y = height   
//                 ctx.moveTo(0, i);    // Move to the starting point
//                 ctx.lineTo(canvas.width, i);   // Draw a line to the ending point
//                 ctx.stroke();
                
//             }
        
                    
            
    
//             // // let dateOfA = getABCDBarNumbers(scaledCandles,allTrades['pivotInfo']['pivotA']['date'])
//             // // let dateOfB = getABCDBarNumbers(scaledCandles,allTrades['pivotInfo']['pivotB']['date'])
//             // // let dateOfC = getABCDBarNumbers(scaledCandles,allTrades['pivotInfo']['pivotC']['date'])
//             // // let dateOfD = getABCDBarNumbers(scaledCandles,allTrades['pivotInfo']['pivotD']['date'])
            
//             // let dateOfA = selected_candles.findIndex(obj => obj.candle_date === selected_pattern.pattern_A_pivot_date);
//             // let dateOfB = selected_candles.findIndex(obj => obj.candle_date === selected_pattern.pattern_B_pivot_date);
//             // let dateOfC = selected_candles.findIndex(obj => obj.candle_date === selected_pattern.pattern_C_pivot_date);
//             // let dateOfD = selected_candles.findIndex(obj => obj.candle_date === selected_pattern.pattern_C_pivot_date);
            
            

//             // addGrid(
//             // 	ctx,
//             // 	pixelsInExpandedPriceUnit,
//             // 	expandInPlace, 
//             // 	spaceBetweenWicks, 
//             // 	spaceBetweenCandles, 
//             // 	canvasXSpacing, 
//             // 	candleWidth, 
//             // 	canvas.height, 
//             // 	expandSize, 
//             // 	canvasYSpacing, 
//             // 	canvas.width, 
//             // 	midPriceInCandleChart, 
//             // 	pixelsInAPriceUnit,
//             // 	colorTheme

//             // )
            
//             // addCandles(
//             // 	ctx,
//             // 	expandInPlace,
//             // 	testCandles_,
//             // 	addExpansion, 
//             // 	addYSpacing, 
//             // 	canvasYSpacing, 
//             // 	canvasPriceDimensions['height'], 
//             // 	canvasXSpacing, 
//             // 	candleWidth, 
//             // 	spaceBetweenCandles, 
//             // 	expandSize, 
//             // 	pixelPoint, 
//             // 	canvasAdjustedHeight,
//             // 	setTestState,
//             // 	midPriceInCandleChart, 
//             // 	gridPriceAdujuster,
//             // 	colorTheme,
//             // )
//             // addWicks(ctx,testCandles_,spaceBetweenCandles, spaceBetweenWicks, canvasXSpacing, canvasYSpacing, expandSize, midPriceInCandleChart, candleWidth, colorTheme)
//             // // allTrades['tradeInfo']['id'] !== '-' && retracementMeasurement && addRetracementPct(allTrades, ctx,eachCandleXPixelLocation,testCandles_,dateOfA,dateOfB,dateOfC,dateOfD, canvasDisplayHeight['left'], canvasYSpacing, expandSize, midPriceInCandleChart)

//             // addAngles(allTrades, ctx,eachCandleXPixelLocation,testCandles_,dateOfA,dateOfB,dateOfC,dateOfD, canvasDisplayHeight['left'], canvasYSpacing, expandSize, midPriceInCandleChart)
            
//             // // allTrades['tradeInfo']['id'] !== '-' && isSR && addSupportAndResistanceLine(allTrades, enter, ctx,eachCandleXPixelLocation,testCandles_,dateOfA,dateOfB,dateOfC,dateOfD, canvasDisplayHeight, canvasYSpacing, expandSize, midPriceInCandleChart)
//             // // allTrades['tradeInfo']['id'] !== '-' && addEnteredLine(ctx, enter, eachCandleXPixelLocation,testCandles_,dateOfA,dateOfB,dateOfC,dateOfD,canvasDisplayHeight, canvasYSpacing, midPriceInCandleChart, expandSize)
//             // // allTrades['tradeInfo']['id'] !== '-' && addProfitBorder(enter, risk, reward, pixelPoint, allTrades, ctx, eachCandleXPixelLocation ,testCandles_, dateOfA, dateOfB, dateOfC, dateOfD, takeProfit, stopLoss, canvasDisplayHeight, canvasYSpacing, expandSize, midPriceInCandleChart)
//             // // // addStopLossBorder(enter, risk, reward, pixelPoint, allTrades, ctx, eachCandleXPixelLocation ,testCandles_, dateOfA, dateOfB, dateOfC, dateOfD, takeProfit, stopLoss, canvasDisplayHeight, canvasYSpacing, expandSize, midPriceInCandleChart)
//             // // isFibRetracement && addFibRetracement(ctx,allTrades,inFullScreen,midPriceInCandleChart,dateOfA,dateOfB,dateOfC,dateOfD,canvasYSpacing,expandSize,eachCandleXPixelLocation,testCandles_,canvasDisplayHeight)
//             // // isA && addDisplayPivotA(ctx, eachCandleXPixelLocation, dateOfA, allTrades['settings']['pivotLength'], testCandles_, canvasDisplayHeight, canvasYSpacing, expandSize, midPriceInCandleChart)
//             // // allTrades['tradeInfo']['id'] !== '-' && isB && addDisplayPivotB(ctx, eachCandleXPixelLocation, dateOfB, allTrades['settings']['pivotLength'], testCandles_, canvasDisplayHeight, canvasYSpacing, expandSize, midPriceInCandleChart)
//             // // allTrades['tradeInfo']['id'] !== '-' && isRR && addStopLossLine(ctx,eachCandleXPixelLocation,testCandles_,dateOfA,dateOfB,dateOfC,dateOfD,takeProfit,stopLoss)
//             // // allTrades['tradeInfo']['id'] !== '-' && isABCD && addABCDborder(ctx,eachCandleXPixelLocation,testCandles_,dateOfA,dateOfB,dateOfC,dateOfD,takeProfit,stopLoss)
//             // // allTrades['tradeInfo']['id'] !== '-' && isABCD && addABCDsymbols(ctx,eachCandleXPixelLocation,testCandles_,dateOfA,dateOfB,dateOfC,dateOfD,takeProfit,stopLoss)


            
//             // // allTrades['tradeInfo']['id'] !== '-' && retracementMeasurement && addRetracementPctNums(allTrades, ctx,eachCandleXPixelLocation,testCandles_,dateOfA,dateOfB,dateOfC,dateOfD, canvasDisplayHeight['left'], canvasYSpacing, expandSize, midPriceInCandleChart)
//             // // allTrades['tradeInfo']['id'] !== '-' && isPriceAndDayMeasurement && addDistanceDisplay(allTrades, ctx,eachCandleXPixelLocation,testCandles_,dateOfA,dateOfB,dateOfC,dateOfD, canvasDisplayHeight['left'], canvasYSpacing, expandSize, midPriceInCandleChart)
        
//             // checkIfMouseIsOverChart(xyActiveCoordinates, canvasDisplayHeight) && addCrossHairs(
//             // 	ctx,
//             // 	xyActiveCoordinates, 
//             // 	canvasDisplayHeight['top'], 
//             // 	canvasPriceDimensions['height'], 
//             // 	canvasDisplayHeight['left']
//             // )
        
//         }
//     }
// }

	// useEffect(()=> {
		
	// 	let graphHeightPercentChange = getPercentageChangeOfCanvasHeight(canvasPriceDimensions, expandSize)
	// 	let ajustedCandles = addPercentChangeToCandles(scaledCandles, graphHeightPercentChange, pixelPoint)
	// 	let enter = addPercentToEnter(allTrades, graphHeightPercentChange, pixelPoint)[0]
	// 	let risk = addPercentToEnter(allTrades, graphHeightPercentChange, pixelPoint)[1]
	// 	let reward = addPercentToEnter(allTrades, graphHeightPercentChange, pixelPoint)[2]
	// 	let scale = addPercentToEnter(allTrades, graphHeightPercentChange, pixelPoint)[3]
	// 	let eachCandleXPixelLocation = getEachCandlesXCordPixelLocation(canvasDisplayHeight, canvasXSpacing, candleWidth, scaledCandles, spaceBetweenCandles)
		

	// 	let inscreasedCanvasSize = trackChangeInCanvasHieght(canvasPriceDimensions, expandSize, defaultHeightPCt, priceUnitAmount, additionalCanvasPixels)
	// 	setCanvasAdjustedHeight(inscreasedCanvasSize)
	// 	getWhichCandleMouseIsOver(canvasDisplayHeight, canvasXSpacing, candleWidth, scaledCandles, xyActiveCoordinates, setOnCandle, spaceBetweenCandles)
		
	// 	// createCanvas(enter, risk, reward, ajustedCandles,eachCandleXPixelLocation, 1,1 ,setTestState)
	// 	createCanvasDates(ajustedCandles)
	// 	createCanvasPrices(enter, risk, reward, allTrades)

	// 	// if(expandSize > 50 && expandSize < 100){
	// 	// 	setGridAndPriceAmount(2)
	// 	// }
	// 	// if(expandSize > 100 && expandSize < 200){
	// 	// 	setGridAndPriceAmount(4)
	// 	// }
	// 	// if(expandSize > 200 && expandSize < 300){
	// 	// 	setGridAndPriceAmount(6)
	// 	// }
	// 	// if(expandSize > 300 && expandSize < 400){
	// 	// 	setGridAndPriceAmount(8)
	// 	// }
	// 	// if(expandSize > 500 && expandSize < 600){
	// 	// 	setGridAndPriceAmount(10)
	// 	// }
	// 	// if(expandSize > 700 && expandSize < 800){
	// 	// 	setGridAndPriceAmount(12)
	// 	// }
	// 	// if(expandSize > 800 && expandSize < 900){
	// 	// 	setGridAndPriceAmount(14)
	// 	// }
	// 	// if(expandSize > 900 && expandSize < 1000){
	// 	// 	setGridAndPriceAmount(16)
	// 	// }
	// 	// if(expandSize > 1000 && expandSize < 1100){
	// 	// 	setGridAndPriceAmount(18)
	// 	// }
	// 	// if(expandSize > 1200 && expandSize < 1300){
	// 	// 	setGridAndPriceAmount(20)
	// 	// }
	// 	// if(expandSize > 1400 && expandSize < 1500){
	// 	// 	setGridAndPriceAmount(22)
	// 	// }
	// 	// if(expandSize > 1600 && expandSize < 1700){
	// 	// 	setGridAndPriceAmount(24)
	// 	// }
	// 	// if(expandSize > 1700 && expandSize < 2000){
	// 	// 	setGridAndPriceAmount(26)
	// 	// }





	// }, [
	// 	selected_candles,
	// 	gridAndPriceAmount,candleWidth, canvasXSpacing, canvasYSpacing, expandSize, mousePosition, isABCD, isRR, isSR, isCandles, testState, isA, isB,isFibRetracement, isPriceAndDayMeasurement, retracementMeasurement,
	
	// ])



    // useEffect(() => {		

	// 	let isMouseOverChart = checkIfMouseIsOverChart(xyActiveCoordinates, canvasDisplayHeight)
	// 	let isMouseOverPrices = checkIfMouseIsOverPrices(xyActiveCoordinates, canvasPriceDimensions)
	// 	// !isMouseOverPrices && setIsMousePressedOnPrices(false)
	
	
	// 	getCanvasXandYSpacing(
	// 		isMouseOverChart, 
	// 		isMousePressedOnCanvas, 
	// 		xyActiveCoordinates, 
	// 		xCoordinatesOnMouseClick
	// 		,setCanvasXSpacing, 
	// 		prevCanvasXSpacing, 
	// 		yCoordinatesOnMouseClick, 
	// 		setCanvasYSpacing,
	// 		prevCanvasYSpacing,
	// 		setIsMousePressedOnCanvas, 
	// 		setPrevCanvasXSpacing, 
	// 		setPrevCanvasYSpacing, 
	// 		canvasYSpacing, 
	// 		canvasXSpacing,
	// 		mouseReleasedOnCanvas)

	// 	getPriceBarXandYSpacing(
	// 		isMouseOverPrices, 
	// 		isMousePressedOnPrices, 
	// 		xyActiveCoordinates, 
	// 		yCoordinatesOnMouseClick, 
	// 		setExpandSize, 
	// 		previousExpandSize,
	// 		mouseReleasedOnPrices)

	

	// },[
	// 	mousePosition
	// ])


    // useEffect(()=> {
	// 	setCanvasYSpacing(getCanvasYSpacing(midPriceInCandleChart, canvasDisplayHeight['height'], pixelPoint))
	// 	setPrevCanvasYSpacing(getCanvasYSpacing(midPriceInCandleChart, canvasDisplayHeight['height'], pixelPoint))
	// 	setExpandSize(getStartingExpandSize(highAndLowDistanceApart, expandSize, inFullScreen,  parseFloat(canvasDisplayHeight['height'])))
	// 	setPreviousExpandSize(getStartingExpandSize(highAndLowDistanceApart, expandSize, inFullScreen))
	// 	const getStartingWidth = () => {
	// 		// allTrades['chartData'].length ===  20 && (x = (50 / 2))

	// 	let x 

	// 	if(inFullScreen){
	// 		x = (100  / (selected_candles.length / 3))
	// 	}
	// 	if(!inFullScreen){
	// 		x = (50  / (selected_candles.length / 10))
	// 	}
		


	// 	setCandleWidth(x)
	// 	setSpaceBetweenCandles(x)
	// 	setSpaceBetweenWicks(((canvasDisplayHeight['width'] / 2) / 2) + 5)

	
	// 	}
		
	// 	getStartingWidth()
	// 	setOnCandle(0)
	// 	setCanvasXSpacing(canvasDisplayHeight['width'] / 4)
	// 	// setCanvasYSpacing(canvasDisplayHeight['height'] / 2)
	// 	// let quarter = canvasDisplayHeight['width'] / 4
	// 	// let third = quarter * 3
	// 	// third = third
	// 	function calculateCandleWidthAndSpacing(graphWidth, numCandles) {
	// 		const denominator = 3 * numCandles + numCandles - 1;
	// 		const candleWidth = graphWidth / denominator;
	// 		const widthBetweenCandles = graphWidth / denominator;
	// 		return { candleWidth, widthBetweenCandles };
	// 	  }
		
	// 	const graphWidth = canvasDisplayHeight['width']; // Width of the graph in pixels
	// 	const numCandles = selected_candles.length;   // Number of candles

	// 	const { candleWidth, widthBetweenCandles } = calculateCandleWidthAndSpacing(graphWidth, numCandles);

	// 	setCandleWidth(candleWidth)
	// 	setSpaceBetweenWicks((candleWidth / 2) + 5)
	// 	setSpaceBetweenCandles(candleWidth)
	
	// }, [scaledCandles,canvasDisplayHeight])
	
	// const createCanvasPrices = (enter, risk, reward, allTrades) => {
	// 	if (canvasPriceBar.current) {
	// 		const canvas = canvasPriceBar.current;
	// 		const ctx = canvas.getContext('2d');
	// 		if (ctx) {
	// 			canvas.style.width ='100%';		
	// 			canvas.style.height = '100%';
	// 			canvas.height = canvas.offsetHeight;
	// 			canvas.width = canvas.offsetWidth;
				
	


	// 			let width = canvas.width
	// 			let height = canvas.height + y_spacing
	// 			let start_pixel = 0 + y_spacing

				
	// 			let text = 'O'
	// 			let fontSize = 15; // Set the initial font size

	// 			// Set the font style and size
	// 			ctx.font = `${fontSize}px Arial`;

	// 			// IF A TEXT AND A LINE WERE GIVEN THE SAME X,Y CORDS THE LINE WOULD SIT UNDER THE THE TEXT.
	// 			// SO THE PRICE WOULD APPEAR UN-ALIGNED. TO SOLVE THIS. CAN TAKE THE HEIGHT OF THE TEXT AND THEN LOWER IT BE HALF ITS HEIGHT.
	// 			// SO THAT THE MID OF THE TEXT IS EQAUL TO THE LINE.
	// 			let textMetrics = ctx.measureText(text);
	// 			let textHeight = textMetrics.actualBoundingBoxAscent + textMetrics.actualBoundingBoxDescent;
	// 			let yOffset = textHeight / 2

	// 			let price = 0;
	// 			const textWidth = ctx.measureText(price).width;

	// 			// Calculate the position to center the text horizontally
	// 			const x = (canvas.width - textWidth) / 2;
						
	// 			let fraction_of_height = canvas.height  / 10
	
			
	
	// 			for(let i = height; i >= start_pixel; i -= fraction_of_height + shrink_expand_amount){
	// 				ctx.fillStyle = 'ghostwhite'
	// 				ctx.fillText(price,  x, i + yOffset);
	// 				price += 1
	// 			}





	// 			// testState && expandSize > - 100 && addPrices(
	// 			// 	selected_pattern,
	// 			// 	enter, 
	// 			// 	risk, 
	// 			// 	reward,
	// 			// 	allTrades, 
	// 			// 	pixelsInExpandedPriceUnit,
	// 			// 	pixelsInAPriceUnit,
	// 			// 	priceIncrement,
	// 			// 	ctx, 
	// 			// 	expandInPlace, 
	// 			// 	canvasPriceDimensions['height'], 
	// 			// 	expandSize, 
	// 			// 	midPriceInCandleChart, 
	// 			// 	canvasDimensionHeight, 
	// 			// 	inFullScreen, 
	// 			// 	canvasYSpacing,
	// 			// 	canvas.offsetWidth,

	// 			// )

	// 			// allTrades['tradeInfo']['id'] !== '-' && addCrossHairsPrice(
	// 			// 	ctx, 
	// 			// 	addExpansion, 
	// 			// 	addYSpacing, 
	// 			// 	xyActiveCoordinates, 
	// 			// 	canvasDisplayHeight['top'], 
	// 			// 	canvasDimensionHeight, 
	// 			// 	pixelPoint, 
	// 			// 	canvasYSpacing, 
	// 			// 	canvasPriceDimensions['height'], 
	// 			// 	expandSize, 
	// 			// 	midPriceInCandleChart, 
	// 			// 	inFullScreen,
	// 			// 	expandInPlace, 
	// 			// 	canvasAdjustedHeight,
	// 			// 	colorTheme,
	// 			// 	canvas.height,
	// 			// 	canvas.offsetWidth
	// 			// )
	// 		}
	// 	}
	// }
	// const createCanvasDates = (testCandles_) => {
	// 	// if (canvasDatesBar.current) {
	// 	// 	const canvasDates = canvasDatesBar.current;
	// 	// 	const ctxDates = canvasDates.getContext('2d');

	// 	// 	if (ctxDates) {
	// 	// 		ctxDates.canvas.width = window.innerHeight;
	// 	// 		ctxDates.canvas.height = window.innerHeight;
	// 	// 		canvasDates.style.width ='100%';
	// 	// 		canvasDates.style.height='100%';
	// 	// 		canvasDates.width  = canvasDates.offsetWidth;
	// 	// 		canvasDates.height = canvasDates.offsetHeight;
		
	// 	// 		allTrades['tradeInfo']['id'] !== '-' && addDates(ctxDates,testCandles_, spaceBetweenWicks, canvasXSpacing, inFullScreen, candleWidth, spaceBetweenCandles, scaledCandles)
	// 	// 		allTrades['tradeInfo']['id'] !== '-' && addCrossHairsDate(ctxDates,xyActiveCoordinates, canvasDisplayHeight['left'], inFullScreen, scaledCandles, onCandle, colorTheme)
	// 	// 	}
	// 	// }
	// }
