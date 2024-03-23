export const addCandles = (ctx, expandInPlace, candles, isExpand, isYSpacing, canvasYSpacing, priceBarHeight, canvasXSpacing, candleWidth, spaceBetweenCandles, expandSize, pixelPoint, canvasAdjustedHeight,setTestState, midPriceInCandleChart, gridPriceAdujuster,colorTheme) => {

	const addYSpacingToCandle = (startOfCandle) => {

		let additionalSpacing = canvasYSpacing - priceBarHeight
		let x = startOfCandle - additionalSpacing 
		return x
	}	
	const addExpandToCandle = (canvasAdjustedHeight, o, c) => {
		let open_ = 0
		let close_ = 0

		if(expandSize){
			for(let i = 0; i < expandSize; i++){
				open_ = ((o * canvasAdjustedHeight) / 100) 
				close_ = ((c * canvasAdjustedHeight) / 100) 
			}
		}
		return [open_, close_]
	}
	const convertCandlesToChartSize = (o,c) => {

		let close = (c / 1000) * 100
		let open = (o / 1000) * 100

		close = close * pixelPoint
		open = open * pixelPoint

		close *= 10
		open *= 10

		return [open, close]
	}
	const plotFirstCandle = (close, open, red, green, start, height) => {
	
		// let start = (canvasLeftCoordinates + canvasXSpacing)
		if(close > open){
			ctx.fillStyle = green
			ctx.fillRect(canvasXSpacing, start, candleWidth, height);
		}
		else if(close < open){
			ctx.fillStyle = red
			ctx.fillRect(canvasXSpacing, start,  candleWidth, height);
		}
		currentXPosition += canvasXSpacing
	}
	const plotOtherCandles = (close, open, red, green, start, height) => {
		if(open === close){
			ctx.fillStyle = 'white'
			ctx.fillRect(currentXPosition, start, candleWidth, 1);
		}
		else if(open < close){
			ctx.fillStyle = green
			ctx.fillRect(currentXPosition, start, candleWidth, height);
		}
		else if(open > close){
			ctx.fillStyle = red
			ctx.fillRect(currentXPosition, start, candleWidth, height);
		}	

		start = start + spaceBetweenCandles
	}
	const plotCandles = () => {
			
		canvasAdjustedHeight -= 100 // Deduct starting pct.

		ctx.beginPath(); 
		// const green ="#f81423"
		const red = '#09f0f0'	
		const green ='#2b2f3a'
		for (let i = 0; i < candles.length; i += 1) 
		{

			let o = candles[i]['open']
			let c = candles[i]['close']
	
			isExpand && (o = o + addExpandToCandle(canvasAdjustedHeight,o,c)[0])
			isExpand && (c = c + addExpandToCandle(canvasAdjustedHeight,o,c)[1])
		

			let open = convertCandlesToChartSize(o,c)[0]
			let close = convertCandlesToChartSize(o,c)[1]

			let highOfCandle
			let lowOfcandle
			open > close && (highOfCandle = open)
			open > close && (lowOfcandle = close)
			open < close && (highOfCandle = close)
			open < close && (lowOfcandle = open)

			let heightOfCandle = highOfCandle - lowOfcandle 

			isYSpacing && (highOfCandle = addYSpacingToCandle(highOfCandle))
			highOfCandle = (priceBarHeight - highOfCandle) + (expandSize * (midPriceInCandleChart / 100))
			i === 0 && plotFirstCandle(close, open, red, green, highOfCandle, heightOfCandle)
			i >= 1 && plotOtherCandles(close, open, red, green,  highOfCandle, heightOfCandle)
			currentXPosition += candleWidth + spaceBetweenCandles
		}

		ctx.stroke();
		
	}
	// let currentXPosition = 0
	// plotCandles()

	ctx.beginPath(); 
	let currentXPosition = 0
	let i = 0
	let start = 0

	for (i = 0; i < candles.length; i += 1) 
	{

		let candleHeight = candles[i]['close'] - candles[i]['open']
		let candleStartingPoint
		expandInPlace && (candleStartingPoint = (canvasYSpacing - candles[i]['close']) + (expandSize * (midPriceInCandleChart / 100)))
		!expandInPlace && (candleStartingPoint = (canvasYSpacing - candles[i]['close']))
		let greenCandle = candles[i]['close'] < candles[i]['open'] 
		let redCandle = candles[i]['close'] > candles[i]['open']
		let evenCandle = candles[i]['close'] === candles[i]['open']
		// let colorGreen ="#f81423"
		let colorGreen = "#f81423"
		let colorRed = '#09f0f0'
		let red = colorTheme.single_trade.candle_chart.chart.chart.candles.losing_wick
		let green = colorTheme.single_trade.candle_chart.chart.chart.candles.winning_wick

		if(i === 0){

			if(greenCandle){
				ctx.fillStyle = red
				ctx.fillRect(canvasXSpacing, candleStartingPoint, candleWidth, candleHeight);
			}
			else if(redCandle){
				ctx.fillStyle = green
				ctx.fillRect(canvasXSpacing, candleStartingPoint,  candleWidth, candleHeight);
			}
			currentXPosition += canvasXSpacing

		}

		else if(i >= 1){
			if(evenCandle){
				ctx.fillStyle = 'white'
				ctx.fillRect(currentXPosition, candleStartingPoint, candleWidth, 1);
			}
			else if(greenCandle){
				ctx.fillStyle = red
				ctx.fillRect(currentXPosition, candleStartingPoint, candleWidth, candleHeight);
			}
			else if(green){
				ctx.fillStyle = green
				ctx.fillRect(currentXPosition, candleStartingPoint, candleWidth, candleHeight);
			}	

			start = start + spaceBetweenCandles
		}
		currentXPosition += candleWidth + spaceBetweenCandles
	}

	// Put here to make chart run on early render
	setTestState(true)

	

}
export const addWicks = (ctx,candles, spaceBetweenCandles, spaceBetweenWicks, canvasXSpacing, canvasYSpacing, expandSize, midPriceInCandleChart, candleWidth, colorTheme) => {
			
	let xIndividualLine = spaceBetweenWicks + canvasXSpacing-5
	candles.map((item) => {
	
		
		if(item['close'] >= item['open']){
			return(
				
				ctx.beginPath(),
				// ctx.strokeStyle = "#09f0f0",
				ctx.strokeStyle = colorTheme.single_trade.candle_chart.chart.chart.candles.winning_wick,
				ctx.moveTo(xIndividualLine, canvasYSpacing + (expandSize * (midPriceInCandleChart / 100)) - item['high']),
				ctx.lineTo(xIndividualLine, canvasYSpacing + (expandSize * (midPriceInCandleChart / 100)) - item['close']),
				ctx.moveTo(xIndividualLine, canvasYSpacing + (expandSize * (midPriceInCandleChart / 100)) - item['open']),
				ctx.lineTo(xIndividualLine, canvasYSpacing + (expandSize * (midPriceInCandleChart / 100)) - item['low']),
				ctx.lineJoin = "bevel",
				ctx.lineWidth = 1,
				xIndividualLine += candleWidth + spaceBetweenCandles,
				ctx.stroke()
			)
		}

		else if(item['close'] < item['open']){
			return(
			
				ctx.beginPath(),
				// ctx.strokeStyle = '#f81423',
				ctx.strokeStyle = colorTheme.single_trade.candle_chart.chart.chart.candles.losing_wick,
				ctx.moveTo(xIndividualLine, canvasYSpacing + (expandSize * (midPriceInCandleChart / 100)) - item['high']),
				ctx.lineTo(xIndividualLine, canvasYSpacing + (expandSize * (midPriceInCandleChart / 100)) - item['close']),
				ctx.moveTo(xIndividualLine, canvasYSpacing + (expandSize * (midPriceInCandleChart / 100)) - item['open']),
				ctx.lineTo(xIndividualLine, canvasYSpacing + (expandSize * (midPriceInCandleChart / 100)) - item['low']),
				ctx.lineJoin = "bevel",
				ctx.lineWidth = 1,
				xIndividualLine += candleWidth + spaceBetweenCandles,
				ctx.stroke(),
				ctx.fill(),
				ctx.closePath(),
				ctx.stroke()
			

			)
		}
	})

}
export const addGrid = (ctx, pixelsInExpandedPriceUnit, expandInPlace, spaceBetweenWicks, spaceBetweenCandles, canvasXSpacing, candleWidth, canvasDisplayHeight, expandSize, canvasYSpacing, canvasWidth, midPriceInCandleChart, priceUnitSize, colorTheme) => {
	const plotXGrid = () => {

		let xCordinate = spaceBetweenWicks + canvasXSpacing - 5
		for (let i = 0; i < 10; i += 1) 
		{
			ctx.moveTo(xCordinate, 50)
			ctx.lineTo(xCordinate, 50)
			xCordinate += (candleWidth + spaceBetweenCandles) * 10
		}
	}
	const plotYGrid = (startingPixel,priceUnitSize) => {
		for (let i = startingPixel; i >= -canvasDisplayHeight; (i -= pixelsInExpandedPriceUnit)) 
		{
			let additionalSpacing = (canvasYSpacing - canvasDisplayHeight)
			let ySpacing =  i + additionalSpacing
			ctx.moveTo(0, ySpacing);
			ctx.lineTo(canvasWidth, ySpacing);   
		}
	}
	
	const draw = () => {
		// let priceUnitSize = canvasDisplayHeight / priceUnitAmount
		let startPoint 
		expandInPlace ? (startPoint = canvasDisplayHeight + (expandSize * (midPriceInCandleChart / (100)))) : (startPoint = canvasDisplayHeight)
		ctx.beginPath(); 
		// ctx.strokeStyle = '#0a5d72';
		// ctx.strokeStyle = '#902020';
		// ctx.strokeStyle = colorTheme.candle_chart.grid_line_color
		ctx.lineWidth = .2;   
		// plotYGrid(startPoint, priceUnitSize)
		plotXGrid()
		ctx.stroke();
	}
	draw()
}
export const addPrices = (
	selected_pattern,
	enter, 
	risk, 
	reward, 
	allTrades, 
	pixelsInExpandedPriceUnit, 
	pixelsInAPriceUnit, 
	priceIncrement, 
	ctx,
	setting, 
	priceBarHeight, 
	expandSize, 
	midPriceInCandleChart, 
	canvasDimensionHeight, 
	inFullScreen, 
	canvasYSpacing,
	width,
	) => {

	const getAmountMidExpandSize = (setting) => {

		if(setting){
			let expandAmount = ((midPriceInCandleChart / 100) * expandSize)
			expandAmount += canvasDimensionHeight 
			return expandAmount
		}
		else{
			return canvasDimensionHeight
		}

	}
	const addEachPrice = (allTrades, midExpandSize,pixelsInExpandedPriceUnit,ySpacing) => {

		const desiredFontSize = width * .35;

		ctx.font = `${desiredFontSize}px sans-serif`; 

		ctx.fillStyle = "white";
		ctx.textAlign = "center";
		ctx.beginPath(); 
		ctx.strokeStyle = 'darkgray';
		ctx.lineJoin = "bevel";
		let startingPrice = 0
	

		for (let ycord = midExpandSize; ycord >= -1000; ycord -= pixelsInExpandedPriceUnit) 
		{
			// fillText(text, x-cord, y-cord)
			ctx.fillText(startingPrice.toFixed(2),  width /2, (ycord + ySpacing));
			startingPrice += priceIncrement
		}

		// fillText(text, x-cord, y-cord)

		let y = canvasYSpacing + (expandSize * (midPriceInCandleChart / 100)) - enter - risk
		let x = canvasYSpacing + (expandSize * (midPriceInCandleChart / 100)) - enter
		let z = parseFloat(canvasYSpacing + (expandSize * (midPriceInCandleChart / 100)) - enter + risk)
		
		let green_exit = selected_pattern.trade_entered_price + selected_pattern.trade_pnl
		let enter_price = selected_pattern.trade_entered_price
		let red_exit = selected_pattern.trade_entered_price - selected_pattern.trade_risk

	
		ctx.font = `${desiredFontSize}px sans-serif`; 
		ctx.fillStyle = 'white'
		ctx.fillText(parseFloat(enter_price).toFixed(2), width /2, x);
		ctx.fillStyle = 'teal'
		ctx.fillText(parseFloat(green_exit).toFixed(2),  width /2, y);
		ctx.fillStyle = 'red'
		ctx.fillText(parseFloat(red_exit).toFixed(2),  width /2, z);
		

		ctx.stroke();
	}

	let midExpandSize = getAmountMidExpandSize(setting) // How much to lower start of canvas.
	let ySpacing = canvasYSpacing - canvasDimensionHeight // tracks any additional y-spacing.
	addEachPrice(allTrades, midExpandSize, pixelsInExpandedPriceUnit, ySpacing)

	
}
export const addDates = (ctx,candles, spaceBetweenWicks, canvasXSpacing, inFullScreen, candleWidth, spaceBetweenCandles, testCandles) => {

	let xCordinate = spaceBetweenWicks + canvasXSpacing -3
	
	ctx.beginPath(); 
	ctx.strokeStyle = 'white';
	// ctx.lineJoin = "bevel";
	
	ctx.font = "bolder 19px 'Source Sans Pro', sans-serif" 
	ctx.fillStyle = "white"; 
	ctx.textAlign = "center";
	let textcenter = inFullScreen ? 22 : 30

	let i = 0
	
	let dateIncrement = 10
	let eachYGridRowPixelSize = (candleWidth + spaceBetweenCandles) * 9

	// for (i = 0; i < candles.length; i += dateIncrement) 
	// {		
	// 	var date = new Date(testCandles[i]['date']).toLocaleDateString("en-US", {month: "2-digit", day: "2-digit" })
	// 	ctx.fillText(date, xCordinate, textcenter);
	// 	xCordinate += candleWidth + spaceBetweenCandles + eachYGridRowPixelSize
	// }

	// ctx.lineWidth = .2;   
	// ctx.stroke();

}
export const addCrossHairs = (ctx, xyActiveCoordinates, canvasTopCoordinates, priceBarHeight, canvasLeftCoordinates) => {

	ctx.beginPath(); 
	ctx.strokeStyle = 'gray';
	ctx.setLineDash([5, 5]);

	const getCurrentYCordMouseLocation = () => {
		// let onePecentOfDisplaySize = (canvasDisplayHeight / canvasDimensionHeight) // Divide the current display height by dimension height to get the amount of pixels that are within 1% of the the canvas display height.
		let onePecentOfDisplaySize = 1
		let ycord = xyActiveCoordinates['y'] - canvasTopCoordinates // Align y-cord with the start of the canvas by subtracting the space in between 'canvasTopCoordinates'(160.70).
		let currentPosition = ((ycord / onePecentOfDisplaySize)) // new y-cord.
		return currentPosition
	}
	const createXHair = () => {
		ctx.moveTo(0, yMouselocation);
		ctx.lineTo(xMouselocation, yMouselocation);

		ctx.moveTo(0, yMouselocation); 
		ctx.lineTo(2350, yMouselocation);
	}
	const createYHair = () => {
		ctx.moveTo(xMouselocation, yMouselocation); 
		ctx.lineTo(xMouselocation, 0);

		ctx.moveTo(xMouselocation, yMouselocation); 
		ctx.lineTo(xMouselocation, priceBarHeight);
	}
	let yMouselocation = getCurrentYCordMouseLocation()
	let xMouselocation = xyActiveCoordinates['x'] - canvasLeftCoordinates
	createXHair()
	createYHair()

	ctx.lineWidth = 1;   
	ctx.stroke();
}
export const addCrossHairsPrice = (ctx, addExpansion, addYSpacing, xyActiveCoordinates, canvasTopCoordinates, canvasDimensionHeight, pixelPoint, canvasYSpacing, priceBarHeight, expandSize, midCandleChartPrice, inFullScreen, expandInPlace, currentHeight, colorTheme, height, width) => {
	
	const draw = (inFullScreen, yMouseLocationOnCanvas, mouseLocationPrice) => {
		ctx.beginPath(); 
		ctx.setLineDash([5, 5]);

		const desiredFontSize = width * .35;

		ctx.font = `${desiredFontSize}px sans-serif`;
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';
		// ctx.font = "bolder 19px 'Source Sans Pro', sans-serif" 
		// ctx.fillStyle = colorTheme.single_trade.candle_chart.chart.prices.crosshair_price_backround
		ctx.fillStyle = 'rgb(8, 20, 36)'
		ctx.fillRect(0, (yMouseLocationOnCanvas - 25), 100, 40);
		ctx.fillStyle = "white";
		// ctx.fillStyle = colorTheme.single_trade.candle_chart.chart.dates.crosshair_price_color
		ctx.fillText(mouseLocationPrice, width / 2, yMouseLocationOnCanvas);
		ctx.stroke();
	}
	const adjustMousePixelPointLocToNewExpandedHeight = (currentHeightPct,mousePixelPointLoc) =>{
		
		let oneHundredPct = 100
		
		// convert current height into the new canvas height.
		let newCanvasHeight = (currentHeightPct / oneHundredPct)

		// get pixel location of new canvas height.
		mousePixelPointLoc = mousePixelPointLoc / newCanvasHeight

		return mousePixelPointLoc
	}
	const addExpandInPlace = (expandInPlace,additionalYSpacing) => {
		if(expandInPlace){
			// track the expansion size.

		
			let midExpansionSize = ((midCandleChartPrice / 100) * expandSize)
			// console.log('Mid:', midCandleChartPrice)
			// console.log('ExpandSize:',expandSize)
			// console.log('Mid / 100:', (midCandleChartPrice / 100))
			// console.log('Mid / 100) * expandSize:', (midCandleChartPrice / 100) * expandSize)
			
			// console.log('Mid / expandSize) * 100', (midCandleChartPrice / expandSize) * 100)
		
			// add y-spacing and expanded size.
			additionalYSpacing = additionalYSpacing + midExpansionSize
		}
		return additionalYSpacing
	}

	// set top of canvas to the zero start point.
	let alignedYCord = xyActiveCoordinates['y'] - canvasTopCoordinates

	// pixel point/canvas price of mouse location.
	let mousePixelPointLoc = canvasDimensionHeight - (alignedYCord / pixelPoint)

	// track any additional y-spacing outside of the default spacing.
	let additionalYSpacing = (canvasYSpacing) - priceBarHeight

	// add expand in place.
	additionalYSpacing = addExpandInPlace(expandInPlace, additionalYSpacing)

	// convert additional y-spacing into pixel point/canvas price size.
	let setCanvasDimenionHeight = 1000
	let ySpacingInPixelPoints = (additionalYSpacing  / priceBarHeight) * setCanvasDimenionHeight

	// adjust mouse pixel location for additional y-spacing.
	addYSpacing && (mousePixelPointLoc = parseFloat(mousePixelPointLoc) + parseFloat(ySpacingInPixelPoints))

	// adjust mouse pixel location for additional expansion.
	addExpansion && (mousePixelPointLoc = adjustMousePixelPointLocToNewExpandedHeight(currentHeight, mousePixelPointLoc))

	// draw prices.
	ctx.textAlign = 'center';
	ctx.textBaseline = 'middle';
	draw(inFullScreen, alignedYCord, (mousePixelPointLoc / 10).toFixed(2))



}
export const addCrossHairsDate = (ctx, xyActiveCoordinates, canvasLeftCoordinates, inFullScreen, testCandles, onCandle, colorTheme, canvasWidth) => {

	try{

			let xMouselocation = xyActiveCoordinates['x'] - canvasLeftCoordinates
			ctx.beginPath(); 
			ctx.setLineDash([5, 5]);
			ctx.font = "bolder 19px 'Source Sans Pro', sans-serif" 
			// ctx.fillStyle = colorTheme.single_trade.candle_chart.chart.dates.crosshair_price_backround
			ctx.fillStyle = 'rgb(8, 20, 36)'
			ctx.fillRect(xMouselocation - 50, 0, 100, 40);
		
			ctx.fillStyle = colorTheme.single_trade.candle_chart.chart.dates.crosshair_price_color
			ctx.fillText(testCandles[onCandle]['date'], xMouselocation, 30);
			ctx.lineWidth = 1;   
			ctx.stroke();
	
	}catch(error){
		// console.log(error)
	}


}



// Canvas Display Height: Default pixel size of parent element.
// Canvas Dimension Height: Set pixel size. Set to Canvas Display Size.
// Pixel Point/Price: Pixel size of a single price int. Set to Canvas Dimension Height / 1000
// Price Unit: Distance in Pixel Point/Price of each y-grid line.

