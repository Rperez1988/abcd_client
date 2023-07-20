export const getStartingExpandSize = (distance, expandSize, inFullScreen) => {
		
    let scale = 1

    inFullScreen && (scale *= 1.5)
    // (100  / (allTrades['chartData'].length / 10))
    return 10000 / (distance / 4)
}
export const addPercentChangeToCandles = (unAdjustedCandles, pi, pixelPoint) => {

    let adjustCandles = []

    if(unAdjustedCandles){ 


        unAdjustedCandles.forEach((item) => {

            let d = item['date']
            let h = (item['high'] / 1000) * 100
            let c = (item['close'] / 1000) * 100
            let o = (item['open'] / 1000) * 100
            let l = (item['low'] / 1000) * 100

            h = h  * pixelPoint
            c = c  * pixelPoint
            o = o  * pixelPoint
            l = l  * pixelPoint

            h = h  * 10
            c = c  * 10
            o = o  * 10
            l = l  * 10

            let highincrease = (((pi - 100) / 100) * h)
            let openincrease = (((pi - 100) / 100) * o)
            let closeincrease = (((pi - 100) / 100) * c)
            let lowincrease = (((pi - 100) / 100) * l)
            
            let candles = 
                {
                    'date': d,
                    'high': h + highincrease,
                    'open': o + openincrease,
                    'close': c + closeincrease,
                    'low': l + lowincrease,
                }
            
            adjustCandles.push(candles)
        })
    }

    return adjustCandles
}
export const getABCDBarNumbers = (testCandles, aDate) => {

    let date

    testCandles.forEach((item,index)=>{
        if(item['date']===aDate){
            date = index
        }
    })

    return date
}
export const getEachCandlesXCordPixelLocation = (canvasChartDimensions, canvasXSpacing, candleWidth, testCandles, spaceBetweenCandles) =>{

    // Finds at which pixels where each candle is sitting at. 

    let cpp = []
    let i = 0
    let start = (canvasChartDimensions['left'] + canvasXSpacing)
    let end = start + candleWidth
    for (i = 0; i < testCandles.length; i += 1) 
    {
        cpp.push(
            { 
                'index': i,
                'start': start,
                'end': start + candleWidth,
            },
        )	
        start += candleWidth + spaceBetweenCandles

    }
    return cpp

}
export const convertCandlesToChartSize = (h,o,c,l, pixelPoint) => {

    let high = (c / 1000) * 100
    let open = (o / 1000) * 100
    let close = (c / 1000) * 100
    let low = (o / 1000) * 100

    close = close * pixelPoint
    open = open * pixelPoint
    
    high = close * pixelPoint
    low = open * pixelPoint

    close *= 10
    open *= 10
    high  *= 10
    low *= 10

    return [open, close]
}
export const getPercentageChangeOfCanvasHeight = (canvasPriceDimensions, expandSize) => {

    // let graphPercentageIncrease = 0
    // if(expandSize){ 
    // 	graphPercentageIncrease = (expandSize / previousPriceSpacing) * 100 
    // }
    // return graphPercentageIncrease

    if(canvasPriceDimensions['height'] > 0){
        let adjustedHeightInPixels = canvasPriceDimensions['height'] + (expandSize * 10)
        let additionalPixels = adjustedHeightInPixels - canvasPriceDimensions['height']
        let pctIncrease = (additionalPixels / canvasPriceDimensions['height']) * 100
    
        return pctIncrease + 100
    }
}
export const getRiskReward = (allTrades, pi) => {	

    let sl = allTrades['stopLoss']  
    let tp = allTrades['takeProfit'] 


    if(tp < 100 && sl < 100){
    
        sl = sl * 10
        tp = tp * 10
    }

    let stopLoss = parseFloat(sl) + (pi / 100) * parseFloat(sl)
    let takeProfit = parseFloat(tp) + (pi / 100) * parseFloat(tp)


    return [stopLoss, takeProfit]
}	
export const trackChangeInCanvasHieght = (canvasPriceDimensions, expandSize, defaultHeightPCt, priceUnitAmount, priceUntiSizeWithExpandSize) => {

	if(canvasPriceDimensions['height'] > 0){
        
		let adjustedHeightInPixels = canvasPriceDimensions['height'] + priceUntiSizeWithExpandSize
		let additionalPixels = adjustedHeightInPixels - canvasPriceDimensions['height']
		let pctIncrease = (additionalPixels / canvasPriceDimensions['height']) * 100
	
		return pctIncrease + defaultHeightPCt
	}
}


