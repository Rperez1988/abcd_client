export const addAngles = (allTrades, ctx,cpp_,testCandles_,dateOfA,dateOfB,dateOfC,dateOfD, canvasLeftCoordinates, canvasYSpacing, expandSize, midPriceInCandleChart) => {


	let a = cpp_[dateOfA]['start'] - canvasLeftCoordinates
	let b = cpp_[dateOfB]['start'] - canvasLeftCoordinates
	let c = cpp_[dateOfC]['start'] - canvasLeftCoordinates
	let d = cpp_[dateOfD]['start'] - canvasLeftCoordinates

	var grad= ctx.createLinearGradient(600, 0, 1500, 0)
	grad.addColorStop(0, "lightblue");
	grad.addColorStop(1, "#333366");
	// grad.addColorStop(0, "black");

	ctx.beginPath(); 
	ctx.setLineDash([0, 0]);
	ctx.strokeStyle = grad;

	ctx.lineJoin = "round";
	
	let aLow = (testCandles_[dateOfA]['high'] > testCandles_[dateOfA]['low']) ? testCandles_[dateOfA]['high'] : testCandles_[dateOfA]['low']
	let aHigh = (testCandles_[dateOfA]['high'] < testCandles_[dateOfA]['low']) ? testCandles_[dateOfA]['high'] : testCandles_[dateOfA]['low']

	let bLow = (testCandles_[dateOfB]['high'] < testCandles_[dateOfB]['low']) ? testCandles_[dateOfB]['high'] : testCandles_[dateOfB]['low']
	let bHigh = (testCandles_[dateOfB]['high'] > testCandles_[dateOfB]['low']) ? testCandles_[dateOfB]['high'] : testCandles_[dateOfB]['low']

	let cLow = (testCandles_[dateOfC]['high'] > testCandles_[dateOfC]['low']) ? testCandles_[dateOfC]['high'] : testCandles_[dateOfC]['low']
	let cHigh = (testCandles_[dateOfC]['high'] < testCandles_[dateOfC]['low']) ? testCandles_[dateOfC]['high'] : testCandles_[dateOfC]['low']

	let dLow = (testCandles_[dateOfD]['high'] < testCandles_[dateOfD]['low']) ? testCandles_[dateOfD]['high'] : testCandles_[dateOfD]['low']
	let dHigh = (testCandles_[dateOfD]['high'] > testCandles_[dateOfD]['low']) ? testCandles_[dateOfD]['high'] : testCandles_[dateOfD]['low']
	
	// ctx.moveTo(a, canvasYSpacing + (expandSize * (midPriceInCandleChart / 100)) - aHigh)
	// ctx.lineTo(b, canvasYSpacing + (expandSize * (midPriceInCandleChart / 100)) - bHigh)

	// ctx.moveTo(b, canvasYSpacing + (expandSize * (midPriceInCandleChart / 100)) - bHigh)
	// ctx.lineTo(c, canvasYSpacing + (expandSize * (midPriceInCandleChart / 100)) - cHigh)

	// ctx.moveTo(c, canvasYSpacing + (expandSize * (midPriceInCandleChart / 100)) - cHigh)
	// ctx.lineTo(d, canvasYSpacing + (expandSize * (midPriceInCandleChart / 100)) - dHigh)


	ctx.moveTo(a, canvasYSpacing + (expandSize * (midPriceInCandleChart / 100)) - aLow)
	ctx.lineTo(b, canvasYSpacing + (expandSize * (midPriceInCandleChart / 100)) - bLow)

	ctx.moveTo(b, canvasYSpacing + (expandSize * (midPriceInCandleChart / 100)) - bLow)
	ctx.lineTo(c, canvasYSpacing + (expandSize * (midPriceInCandleChart / 100)) - cLow)

	ctx.moveTo(c, canvasYSpacing + (expandSize * (midPriceInCandleChart / 100)) - cLow)
	ctx.lineTo(d, canvasYSpacing + (expandSize * (midPriceInCandleChart / 100)) - dLow)


	ctx.lineWidth = 5;  	
	// ctx.fill()	
	// ctx.lineCap = 'round';
	// ctx.closePath()
	ctx.stroke()
	ctx.closePath();
}
export const addRetracementPctNums = (allTrades, ctx,cpp_,testCandles_,dateOfA,dateOfB,dateOfC,dateOfD, canvasLeftCoordinates, canvasYSpacing, expandSize, midPriceInCandleChart) => {
	let a = cpp_[dateOfA]['start'] - canvasLeftCoordinates
	let b = cpp_[dateOfB]['start'] - canvasLeftCoordinates
	let c = cpp_[dateOfC]['start'] - canvasLeftCoordinates
	let d = cpp_[dateOfD]['start'] - canvasLeftCoordinates

		
	let aLow = (testCandles_[dateOfA]['high'] < testCandles_[dateOfA]['low']) ? testCandles_[dateOfA]['high'] : testCandles_[dateOfA]['low']
	let aHigh = (testCandles_[dateOfA]['high'] > testCandles_[dateOfA]['low']) ? testCandles_[dateOfA]['high'] : testCandles_[dateOfA]['low']

	let bLow = (testCandles_[dateOfB]['high'] < testCandles_[dateOfB]['low']) ? testCandles_[dateOfB]['high'] : testCandles_[dateOfB]['low']
	let bHigh = (testCandles_[dateOfB]['high'] > testCandles_[dateOfB]['low']) ? testCandles_[dateOfB]['high'] : testCandles_[dateOfB]['low']

	let cLow = (testCandles_[dateOfC]['high'] > testCandles_[dateOfC]['low']) ? testCandles_[dateOfC]['high'] : testCandles_[dateOfC]['low']
	let cHigh = (testCandles_[dateOfC]['high'] > testCandles_[dateOfC]['low']) ? testCandles_[dateOfC]['high'] : testCandles_[dateOfC]['low']

	let dLow = (testCandles_[dateOfD]['high'] < testCandles_[dateOfD]['low']) ? testCandles_[dateOfD]['high'] : testCandles_[dateOfD]['low']
	let dHigh = (testCandles_[dateOfD]['high'] > testCandles_[dateOfD]['low']) ? testCandles_[dateOfD]['high'] : testCandles_[dateOfD]['low']
	

	let acMidPoint = a + ((c - a) / 2)
	let bcMidPoint = b + ((d - b) / 2)
	ctx.beginPath(); 
	ctx.globalAlpha = 1;
	ctx.font = "22px 'Source Sans Pro', sans-serif"
	ctx.fillStyle =  'white';
	ctx.textAlign = "center";

	// fillText(text, x, y, maxWidth);
	ctx.fillText(allTrades['retracement']['bcRetracement'], acMidPoint, canvasYSpacing + (expandSize * (midPriceInCandleChart / 100)) - aHigh ,500)
	ctx.fillText('-'+allTrades['retracement']['cdRetracement'], bcMidPoint, canvasYSpacing + (expandSize * (midPriceInCandleChart / 100)) - dLow ,500)
	
	ctx.stroke()
	ctx.closePath();;
}
export const addSupportAndResistanceLine = (allTrades, enter, ctx,eachCandleXPixelLocation,testCandles_,dateOfA,dateOfB,dateOfC,dateOfD, canvasChartDimensions, canvasYSpacing, expandSize, midPriceInCandleChart) => {

			ctx.beginPath(); 

			
			ctx.setLineDash([5, 10]);
			ctx.strokeStyle = 'white';
			ctx.lineJoin = "bevel";
			ctx.lineWidth = 2;  	

			
			let a = eachCandleXPixelLocation[dateOfA]['start'] - canvasChartDimensions['left']
			let c = eachCandleXPixelLocation[dateOfC]['start'] - canvasChartDimensions['left']
			let d = eachCandleXPixelLocation[dateOfD]['start'] - canvasChartDimensions['left']
		
		
			// (allTrades['tradeClosed'] === 'True') && (d = eachCandleXPixelLocation[dateOfD]['start'] - canvasChartDimensions['left'])
		
			// let cHigh = (testCandles_[dateOfC]['open'] > testCandles_[dateOfC]['close']) ? testCandles_[dateOfC]['close'] : testCandles_[dateOfC]['open']
		
			ctx.moveTo(a, canvasYSpacing + (expandSize * (midPriceInCandleChart / 100)) - enter)
			ctx.lineTo(d, canvasYSpacing + (expandSize * (midPriceInCandleChart / 100)) - enter)
			// (allTrades['tradeClosed'] === 'True') && ( ctx.lineTo(d, canvasYSpacing + (expandSize * (mid / 100)) - enter))
		
		
			ctx.fill()	
			ctx.closePath()
			ctx.stroke()
			ctx.closePath();
	




}
export const addEnteredLine = (ctx, enter, eachCandleXPixelLocation,testCandles_,dateOfA,dateOfB,dateOfC,dateOfD,canvasChartDimensions, canvasYSpacing, midPriceInCandleChart, expandSize) => {

	let d = eachCandleXPixelLocation[dateOfD]['start'] - canvasChartDimensions['left']

	ctx.beginPath();
	ctx.setLineDash([]);
	ctx.lineWidth = 1;  	
	ctx.strokeStyle = 'white';
	ctx.moveTo(d, canvasYSpacing + (expandSize * (midPriceInCandleChart / 100)) - enter); // Begin first sub-path
	ctx.lineTo(d + 2500, canvasYSpacing + (expandSize * (midPriceInCandleChart / 100)) - enter);
	ctx.stroke()
	ctx.closePath();;




}
export const addABCDsymbols = (ctx,cpp_,testCandles_,dateOfA,dateOfB,dateOfC,dateOfD,takeProfit,stopLoss, canvasChartDimensions, canvasYSpacing, expandSize, midPriceInCandleChart) => {
	// fillText(text, x, y, maxWidth)
	let a = cpp_[dateOfA]['start'] - canvasChartDimensions['left']
	let b = cpp_[dateOfB]['start'] - canvasChartDimensions['left']
	let c = cpp_[dateOfC]['start'] - canvasChartDimensions['left']
	let d = cpp_[dateOfD]['end'] - canvasChartDimensions['left']

	ctx.beginPath(); 
	ctx.font = "25px sans-serif";
	ctx.fillStyle = "black";
	ctx.fillText('A', a,  canvasYSpacing + (expandSize * (midPriceInCandleChart / 100)) - testCandles_[dateOfA]['open']  + 45 , 50)
	ctx.fillText('B', b,  canvasYSpacing + (expandSize * (midPriceInCandleChart / 100)) - testCandles_[dateOfB]['open']  - 65, 50)
	ctx.fillText('C', c,  canvasYSpacing + (expandSize * (midPriceInCandleChart / 100)) - testCandles_[dateOfC]['open']  + 75 , 50)
	ctx.fillText('D', d,  canvasYSpacing + (expandSize * (midPriceInCandleChart / 100)) - testCandles_[dateOfD]['open']  + 45 , 50)
	ctx.stroke()
	ctx.closePath();;
	ctx.fill()	
}
export const addABCDborder = (ctx,cpp_,testCandles_,dateOfA,dateOfB,dateOfC,dateOfD,takeProfit,stopLoss, canvasChartDimensions,canvasYSpacing, expandSize, midPriceInCandleChart) => {
		
		let a = cpp_[dateOfA]['start'] - canvasChartDimensions['left']
		let b = cpp_[dateOfB]['start'] - canvasChartDimensions['left']
		let c = cpp_[dateOfC]['start'] - canvasChartDimensions['left']
		let d = cpp_[dateOfD]['end'] - canvasChartDimensions['left']
		
		ctx.beginPath();
		ctx.setLineDash([]);

		ctx.lineWidth = 2;  
		ctx.strokeStyle = "black";
		ctx.fillStyle = "darkorange";
		ctx.globalAlpha = 1;
		ctx.roundRect(a - 6, canvasYSpacing + (expandSize * (midPriceInCandleChart / 100)) - testCandles_[dateOfA]['open'] + 20, 28, 32, 5);
		ctx.roundRect(b - 6, canvasYSpacing + (expandSize * (midPriceInCandleChart / 100)) - testCandles_[dateOfB]['open'] - 90, 28, 32, 5);
		ctx.roundRect(c - 5, canvasYSpacing + (expandSize * (midPriceInCandleChart / 100)) - testCandles_[dateOfC]['open'] + 50, 28, 32, 5);
		ctx.roundRect(d - 5, canvasYSpacing + (expandSize * (midPriceInCandleChart / 100)) - testCandles_[dateOfD]['open'] + 20, 28, 32, 5);
		ctx.fill()	
		ctx.closePath()
		ctx.stroke()
		ctx.closePath();

}
export const addStopLossBorder = (enter, risk, reward, pixelPoint, allTrades, ctx,cpp_,testCandles_,dateOfA,dateOfB,dateOfC,dateOfD,takeProfit,stopLoss,canvasChartDimensions, canvasYSpacing, expandSize, midPriceInCandleChart) => {

	let a = cpp_[dateOfA]['start'] - canvasChartDimensions['left']
	let b = cpp_[dateOfB]['start'] - canvasChartDimensions['left']
	let c = cpp_[dateOfC]['start'] - canvasChartDimensions['left']
	let d = cpp_[dateOfD]['start'] - canvasChartDimensions['left']

	let x = c
	let y 
	let width = d - c
	let height
	let rad = 5


	// if(allTrades['closingTradeType'] === 'Bull'){
		y = (canvasYSpacing + (expandSize * (midPriceInCandleChart / 100))) - (enter - risk)
		height = ((enter - risk) - enter)
// }
	// else if(allTrades['closingTradeType'] === 'Bear'){
	// 	y = (canvasYSpacing + (expandSize * (mid / 100))) - (enter - risk)
	// 	height = ((enter - risk) - enter)
	// }
	ctx.beginPath(); 
	ctx.setLineDash([]);

	ctx.lineWidth = 3;  

	ctx.globalAlpha = 0.2;
	// roundRect(x, y, width, height, radi)
	ctx.roundRect(d, y, width, height, 5);
	ctx.strokeStyle = 'red'
	ctx.fillStyle = 'red';
	ctx.fill()		
	ctx.closePath()
	ctx.stroke()
	ctx.closePath();

}
export const addProfitBorder = (enter, risk, reward, pixelPoint, allTrades, ctx,cpp_,testCandles_,dateOfA,dateOfB,dateOfC,dateOfD,takeProfit,stopLoss,canvasChartDimensions, canvasYSpacing, expandSize, midPriceInCandleChart) => {
	

	const green = '#09f0f0'	
	const red ='#2b2f3a'
	let d = cpp_[dateOfD]['start'] - canvasChartDimensions['left']

	ctx.beginPath();
	ctx.setLineDash([]);
	ctx.lineWidth = 1;  	
	ctx.strokeStyle = 'red'
	ctx.moveTo(d, canvasYSpacing + (expandSize * (midPriceInCandleChart / 100)) - enter + reward); // Begin first sub-path
	ctx.lineTo(d + 2500, canvasYSpacing + (expandSize * (midPriceInCandleChart / 100)) - enter + reward);
	ctx.stroke()
	ctx.closePath();;

	ctx.beginPath();
	ctx.setLineDash([]);
	ctx.lineWidth = 1;  	
	ctx.strokeStyle = green
	ctx.moveTo(d, canvasYSpacing + (expandSize * (midPriceInCandleChart / 100)) - enter - risk); // Begin first sub-path
	ctx.lineTo(d + 2500, canvasYSpacing + (expandSize * (midPriceInCandleChart / 100)) - enter - risk);
	ctx.stroke()
	ctx.closePath();;


	// let a = cpp_[dateOfA]['start'] - canvasChartDimensions['left']
	// let b = cpp_[dateOfB]['start'] - canvasChartDimensions['left']
	// let c = cpp_[dateOfC]['start'] - canvasChartDimensions['left']
	// let d = cpp_[dateOfD]['start'] - canvasChartDimensions['left']

	// let x = c
	// let y 
	// let width =  d - c
	// let height
	// let rad = 5


	// // if(allTrades['closingTradeType'] === 'Bull'){
	// y = (canvasYSpacing + (expandSize * (midPriceInCandleChart / 100))) - (enter + reward)
	// height = ((enter + reward) - enter)
	// // }
	// // else if(allTrades['closingTradeType'] === 'Bear'){
	// // 	y = (canvasYSpacing + (expandSize * (mid / 100))) - (enter - reward)
	// // 	height = ((enter - reward) - enter)
	// // }
	// // console.log('enter:',enter)
	// // console.log('risk:',risk)
	// // console.log('reward:',reward)
	// ctx.beginPath(); 
	// ctx.setLineDash([]);

	// ctx.lineWidth = 3;  

	// ctx.globalAlpha = 0.2;
	// // roundRect(x, y, width, height, radi)
	// ctx.roundRect(d, y, width, height, 5);
	// ctx.strokeStyle = 'white'
	// ctx.fillStyle = 'green';
	// // ctx.fill()		

	// ctx.stroke()
	// ctx.closePath();
}
export const addDisplayPivotA = (ctx, eachCandleXPixelLocation, dateOfA, length, testCandles_, canvasChartDimensions, canvasYSpacing, expandSize, midPriceInCandleChart) => {


	let start = dateOfA - length
	let end = dateOfA + length + 1

	let high = testCandles_[end]['high']
	
	let low = testCandles_[dateOfA]['low']
	
	let a = eachCandleXPixelLocation[start]['start'] - canvasChartDimensions['left']
	let b = eachCandleXPixelLocation[end]['start'] - canvasChartDimensions['left']
	let y = (canvasYSpacing + (expandSize * (midPriceInCandleChart / 100))) - high
	ctx.beginPath(); 
	ctx.setLineDash([]);

	ctx.lineWidth = 3;  

	ctx.globalAlpha = 0.2;
	// roundRect(x, y, width, height, radi)
	ctx.roundRect(a, y, b-a, high-low, 5);
	ctx.strokeStyle = 'white'
	ctx.fillStyle = 'orange';
	ctx.fill()		
	ctx.closePath()
	ctx.stroke()
	ctx.closePath();

}
export const addDisplayPivotB = (ctx, eachCandleXPixelLocation, dateOfB, length, testCandles_, canvasChartDimensions, canvasYSpacing, expandSize, midPriceInCandleChart) => {


	let start = dateOfB - length
	let end = dateOfB + length + 1

	let high = testCandles_[start]['low']
	
	let low = testCandles_[dateOfB]['high']
	
	let a = eachCandleXPixelLocation[start]['start'] - canvasChartDimensions['left']
	let b = eachCandleXPixelLocation[end]['start'] - canvasChartDimensions['left']
	let y = (canvasYSpacing + (expandSize * (midPriceInCandleChart / 100))) - high
	ctx.beginPath(); 
	ctx.setLineDash([]);

	ctx.lineWidth = 3;  

	ctx.globalAlpha = 0.2;
	// roundRect(x, y, width, height, radi)
	ctx.roundRect(a, y, b-a, high-low, 5);
	ctx.strokeStyle = 'white'
	ctx.fillStyle = 'orange';
	ctx.fill()		
	ctx.closePath()
	ctx.stroke()
	ctx.closePath();

}
export const addFibRetracement = (ctx,allTrades,inFullScreen,midPriceInCandleChart,dateOfA,dateOfB,dateOfC,dateOfD,canvasYSpacing,expandSize,eachCandleXPixelLocation,testCandles_,canvasChartDimensions) => {
	
	// let low = testCandles_[dateOfA]['high']
	// let bHigh = testCandles_[dateOfB]['low']

	let low = testCandles_[dateOfC]['high']
	let bHigh = testCandles_[dateOfB]['low']

	let height = bHigh - low
		

	let fibRows = [
		-1.0,
		-0.35,
		-0.267,
		-0.10,
		0,
		0.236,
		0.382,
		0.5,
		0.618,
		0.786,
		1,
		// (allTrades['bcRetracement'] / 10).toFixed(2)
	]
	let fibColors = [
		'purple',
		'red',
		'green',
		'yellow',
		'gray',
		'blue',
		'white'
	]
	
	let xGridStartPoint = eachCandleXPixelLocation[dateOfB]['start'] - canvasChartDimensions['left']
	let xGridEndPoint = eachCandleXPixelLocation[dateOfC]['start'] - canvasChartDimensions['left']
	let expandAdj = canvasYSpacing + (expandSize * (midPriceInCandleChart / 100))

	const addLines = () => {

		fibRows.forEach((el,index)=>{
			ctx.beginPath();
			ctx.setLineDash([]);
			ctx.globalAlpha = 1;
			ctx.lineWidth = el === (allTrades['bcRetracement'] / 10).toFixed(2) ? 1.5 : 1.5  	
			
			ctx.strokeStyle =  el === (allTrades['bcRetracement'] / 10).toFixed(2) ? 'yellow' : "orange";
			
			let num = ((el * height) * 1)
			ctx.moveTo(xGridStartPoint, expandAdj -(bHigh - num))
			ctx.lineTo(xGridEndPoint + 50, expandAdj - (bHigh - num))
			ctx.closePath()
			ctx.stroke()
			ctx.closePath();;
		})

	}
	const addNumbers = () => {
		
		fibRows.forEach((el)=>{
			ctx.beginPath(); 
			ctx.globalAlpha = 1;
			ctx.font = inFullScreen ? "22px 'Source Sans Pro', sans-serif" : "13px 'Source Sans Pro', sans-serif"
			ctx.strokeStyle ="white"
			ctx.fillStyle =  el === (allTrades['bcRetracement'] / 10).toFixed(2) ?'yellow' : "orange";
			ctx.textAlign = "center";
			let num = ((el * height) * 1)
		
			ctx.fillText(el + '%', el === (allTrades['bcRetracement'] / 10).toFixed(2) ? xGridEndPoint + 100 : xGridStartPoint - 50, expandAdj - (bHigh - num) + 5 , 75)
			ctx.stroke()
			ctx.closePath();;
		})
	

	}
	addNumbers()
	addLines()
}
export const addDistanceDisplay = (allTrades, ctx,cpp_,testCandles_,dateOfA,dateOfB,dateOfC,dateOfD, canvasLeftCoordinates, canvasYSpacing, expandSize, midPriceInCandleChart) => {

	let a = cpp_[dateOfA]['start'] - canvasLeftCoordinates
	let b = cpp_[dateOfB]['start'] - canvasLeftCoordinates
	let c = cpp_[dateOfC]['start'] - canvasLeftCoordinates
	let d = cpp_[dateOfD]['start'] - canvasLeftCoordinates

	let aLow = (testCandles_[dateOfA]['high'] > testCandles_[dateOfA]['low']) ? testCandles_[dateOfA]['high'] : testCandles_[dateOfA]['low']
	let aHigh = (testCandles_[dateOfA]['high'] > testCandles_[dateOfA]['low']) ? testCandles_[dateOfA]['high'] : testCandles_[dateOfA]['low']

	let bLow = (testCandles_[dateOfB]['high'] < testCandles_[dateOfB]['low']) ? testCandles_[dateOfB]['high'] : testCandles_[dateOfB]['low']
	let bHigh = (testCandles_[dateOfB]['high'] > testCandles_[dateOfB]['low']) ? testCandles_[dateOfB]['high'] : testCandles_[dateOfB]['low']

	let cLow = (testCandles_[dateOfC]['high'] < testCandles_[dateOfC]['low']) ? testCandles_[dateOfC]['high'] : testCandles_[dateOfC]['low']
	let cHigh = (testCandles_[dateOfC]['high'] > testCandles_[dateOfC]['low']) ? testCandles_[dateOfC]['high'] : testCandles_[dateOfC]['low']

	let dLow = (testCandles_[dateOfD]['high'] < testCandles_[dateOfD]['low']) ? testCandles_[dateOfD]['high'] : testCandles_[dateOfD]['low']
	let dHigh = (testCandles_[dateOfD]['high'] > testCandles_[dateOfD]['low']) ? testCandles_[dateOfD]['high'] : testCandles_[dateOfD]['low']

	ctx.beginPath(); 
	ctx.globalAlpha = 1;
	ctx.font = "22px 'Source Sans Pro', sans-serif"
	ctx.fillStyle =  'orange';
	ctx.textAlign = "center";

	let abDiff = (allTrades['pivotInfo']['pivotA']['high'] - allTrades['pivotInfo']['pivotB']['low']).toFixed(2)
	let cdDiff = (allTrades['pivotInfo']['pivotC']['high'] - allTrades['pivotInfo']['pivotD']['low']).toFixed(2)

	ctx.fillText(abDiff, a - 50, canvasYSpacing + (expandSize * (midPriceInCandleChart / 100)) - aLow + ((aHigh - bLow) / 2),50)
	ctx.fillText(cdDiff, c - 50, canvasYSpacing + (expandSize * (midPriceInCandleChart / 100)) - cLow + ((cHigh - dLow) / 2),50)
	ctx.stroke()
	ctx.closePath();

	ctx.beginPath(); 
	ctx.setLineDash([0, 0]);
	ctx.setLineDash([5,25]);
	ctx.lineWidth = 5;  
	ctx.strokeStyle = 'orange';

	ctx.lineJoin = "round";

	ctx.moveTo(a, canvasYSpacing + (expandSize * (midPriceInCandleChart / 100)) - aHigh)
	ctx.lineTo(a, canvasYSpacing + (expandSize * (midPriceInCandleChart / 100)) - bLow)
	
	ctx.moveTo(a, canvasYSpacing + (expandSize * (midPriceInCandleChart / 100)) - bLow)
	ctx.lineTo(b, canvasYSpacing + (expandSize * (midPriceInCandleChart / 100)) - bLow)

	ctx.moveTo(c + 5, canvasYSpacing + (expandSize * (midPriceInCandleChart / 100)) - cHigh)
	ctx.lineTo(c + 5, canvasYSpacing + (expandSize * (midPriceInCandleChart / 100)) - dLow)
	
	ctx.moveTo(c + 5, canvasYSpacing + (expandSize * (midPriceInCandleChart / 100)) - dLow)
	ctx.lineTo(d + 5, canvasYSpacing + (expandSize * (midPriceInCandleChart / 100)) - dLow)

	ctx.stroke()
	ctx.closePath();


}
export const addRetracementPct = (allTrades, ctx,cpp_,testCandles_,dateOfA,dateOfB,dateOfC,dateOfD, canvasLeftCoordinates, canvasYSpacing, expandSize, midPriceInCandleChart) => {

	let a = cpp_[dateOfA]['start'] - canvasLeftCoordinates
	let b = cpp_[dateOfB]['start'] - canvasLeftCoordinates
	let c = cpp_[dateOfC]['start'] - canvasLeftCoordinates
	let d = cpp_[dateOfD]['start'] - canvasLeftCoordinates

	// var grad= ctx.createLinearGradient(100, 0, 100, 0)
	// grad.addColorStop(1, "white");
	// grad.addColorStop(1, "#333366");

	

	// ctx.setLineDash([1,25]);
	// ctx.lineWidth = 3;  
	// ctx.strokeStyle = grad;

	
	let aLow = (testCandles_[dateOfA]['high'] > testCandles_[dateOfA]['low']) ? testCandles_[dateOfA]['high'] : testCandles_[dateOfA]['low']
	let aHigh = (testCandles_[dateOfA]['high'] > testCandles_[dateOfA]['low']) ? testCandles_[dateOfA]['high'] : testCandles_[dateOfA]['low']

	let bLow = (testCandles_[dateOfB]['high'] < testCandles_[dateOfB]['low']) ? testCandles_[dateOfB]['high'] : testCandles_[dateOfB]['low']
	let bHigh = (testCandles_[dateOfB]['high'] > testCandles_[dateOfB]['low']) ? testCandles_[dateOfB]['high'] : testCandles_[dateOfB]['low']

	let cLow = (testCandles_[dateOfC]['high'] > testCandles_[dateOfC]['low']) ? testCandles_[dateOfC]['high'] : testCandles_[dateOfC]['low']
	let cHigh = (testCandles_[dateOfC]['high'] > testCandles_[dateOfC]['low']) ? testCandles_[dateOfC]['high'] : testCandles_[dateOfC]['low']

	let dLow = (testCandles_[dateOfD]['high'] < testCandles_[dateOfD]['low']) ? testCandles_[dateOfD]['high'] : testCandles_[dateOfD]['low']
	let dHigh = (testCandles_[dateOfD]['high'] > testCandles_[dateOfD]['low']) ? testCandles_[dateOfD]['high'] : testCandles_[dateOfD]['low']
	
	
	ctx.beginPath(); 
	ctx.setLineDash([5, 25]);
	ctx.lineJoin = "round";

	ctx.moveTo(a + 5, canvasYSpacing + (expandSize * (midPriceInCandleChart / 100)) - aHigh)
	ctx.lineTo(c + 5, canvasYSpacing + (expandSize * (midPriceInCandleChart / 100)) - cHigh)

	ctx.moveTo(b + 5, canvasYSpacing + (expandSize * (midPriceInCandleChart / 100)) - bLow)
	ctx.lineTo(d + 5, canvasYSpacing + (expandSize * (midPriceInCandleChart / 100)) - dLow)

	ctx.lineWidth = 5;  
	ctx.strokeStyle = 'white';	
	ctx.fill()	
	ctx.lineCap = 'round';
	ctx.stroke()
	ctx.closePath();


}
export const add_entry_line_text = () => {


	return
}