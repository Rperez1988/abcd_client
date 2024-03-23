
export const getCanvasXandYSpacing = (isMouseOverCanvas, isMousePressedOnCanvas, xyActiveCoordinates, xCoordinatesOnMouseClick,setCanvasXSpacing, prevCanvasXSpacing, yCoordinatesOnMouseClick, setCanvasYSpacing,
	prevCanvasYSpacing,setIsMousePressedOnCanvas, setPrevCanvasXSpacing, setPrevCanvasYSpacing, canvasYSpacing, canvasXSpacing,mouseReleasedOnCanvas) => {

	// 	In the function 'mousePressedOnCanvas' the location of the lateset mouse click is saved into 'setXCoordinatesOnMouseClick' & setYCoordinatesOnMouseClick.  
	
	/**
		* Once the mouse is being pressed on the canvas, its location is checked on every motion.
		* The current mouse x and y location is compared to the 'xCoordinatesOnMouseClick' & yCoordinatesOnMouseClick.  
		* The difference of the x and y current location of the mouse and the x and y location when the mouse was clicked is then given to 'setCanvasXSpacing  and setCanvasYSpacing'
	*/

	
		if(isMouseOverCanvas && isMousePressedOnCanvas){

			if(xyActiveCoordinates['x'] > xCoordinatesOnMouseClick){
				let diff = xyActiveCoordinates['x'] - xCoordinatesOnMouseClick
				setCanvasXSpacing(prevCanvasXSpacing + diff)
			}			
			if(xyActiveCoordinates['x'] < xCoordinatesOnMouseClick){
				let diff = xCoordinatesOnMouseClick - xyActiveCoordinates['x']
				setCanvasXSpacing(prevCanvasXSpacing - diff)
			}
			if(xyActiveCoordinates['y'] < yCoordinatesOnMouseClick){
				let diff = xyActiveCoordinates['y'] - yCoordinatesOnMouseClick
				setCanvasYSpacing(prevCanvasYSpacing + diff)
			}
			if(xyActiveCoordinates['y'] > yCoordinatesOnMouseClick){
				let diff = yCoordinatesOnMouseClick -xyActiveCoordinates['y']
				setCanvasYSpacing(prevCanvasYSpacing - diff)
			}
		}

		if(!isMouseOverCanvas){
			mouseReleasedOnCanvas(setIsMousePressedOnCanvas,setPrevCanvasXSpacing,setPrevCanvasYSpacing,canvasXSpacing,canvasYSpacing)
		}
}
export const getPriceBarXandYSpacing = (isMouseOverCanvasPrices, isMousePressedOnPrices, xyActiveCoordinates, yCoordinatesOnMouseClick, setExpandSize, previousExpandSize,mouseReleasedOnPrices) => {

	if(isMouseOverCanvasPrices && isMousePressedOnPrices){

		/**
			* Once the mouse is being pressed on the price bar, its location is checked on every motion.
			* The current mouse y location is compared to the yCoordinatesOnMouseClick.  
			* The difference of the current y location of the mouse and the y location when the mouse was clicked is then given to 'setExpandSize'
		*/

		if(xyActiveCoordinates['y'] < yCoordinatesOnMouseClick){
			let priceDiff = xyActiveCoordinates['y'] - yCoordinatesOnMouseClick
			setExpandSize(previousExpandSize +  Math.abs((priceDiff)) )
		}	

		if(xyActiveCoordinates['y'] > yCoordinatesOnMouseClick){
			let priceDiff = xyActiveCoordinates['y'] - yCoordinatesOnMouseClick
			setExpandSize(previousExpandSize -  Math.abs((priceDiff)) )
		}	
	}

	if(!isMouseOverCanvasPrices){
		mouseReleasedOnPrices()
	}






}
export const getCanvasYSpacing = (mid, height, pixelPoint) => {

	let x 
	mid = -1000
	if(500 > mid){
		x = (height - ((500 - mid) * pixelPoint))
	}
	else if(500 < mid){
		x = (height + ((500 - mid) * pixelPoint))
	}
	return x
	// return height
}



