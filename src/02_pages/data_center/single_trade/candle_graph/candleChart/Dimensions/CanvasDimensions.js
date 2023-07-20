export const getChartCorners = (canvasChart, setCanvasChartDimensions) => {
	if (canvasChart.current) {
		const graph = canvasChart.current;

		setCanvasChartDimensions({
			'height': graph.getBoundingClientRect()['height'],
			'width': graph.getBoundingClientRect()['width'],
			'left': graph.getBoundingClientRect()['left'], 
			'top': graph.getBoundingClientRect()['top'],
			'right': graph.getBoundingClientRect()['right'],
			'bottom': graph.getBoundingClientRect()['bottom'], 
		})

	}
}
export const getPriceBarCorners = (canvasPriceBar,setCanvasPriceDimensions) => {

		const graph = canvasPriceBar.current;
		setCanvasPriceDimensions({
			'height': graph.getBoundingClientRect()['height'],
			'width': graph.getBoundingClientRect()['width'],
			'left': graph.getBoundingClientRect()['left'], 
			'top': graph.getBoundingClientRect()['top'],
			'right': graph.getBoundingClientRect()['right'],
			'bottom': graph.getBoundingClientRect()['bottom'], 

		})
}