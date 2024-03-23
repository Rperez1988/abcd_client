import React, {useState, useEffect} from 'react'; 
import {mousePressedOnCanvas,mouseReleasedOnCanvas,mousePressedOnPrices,mouseReleasedOnPrices,scrollZoom,checkIfMouseIsOverChart,checkIfMouseIsOverPrices,getWhichCandleMouseIsOver} from './MouseStatus/MouseStatus';
import {addCandles,addWicks,addGrid,addPrices,addDates,addCrossHairs,addCrossHairsPrice,addCrossHairsDate} from './Builder/ChartBuilder';
import {getChartCorners,getPriceBarCorners} from './Dimensions/CanvasDimensions';
import {addRetracementPct, addRetracementPctNums, addAngles, addSupportAndResistanceLine, addEnteredLine, addABCDsymbols, addProfitLine, addABCDborder, addStopLossLine,addStopLossBorder,addProfitBorder,addFibRetracement, addDisplayPivotA, addDisplayPivotB, addDistanceDisplay} from './AddsOns/ChartAddOns';
import {getCanvasXandYSpacing, getPriceBarXandYSpacing, getCanvasYSpacing} from './Spacing/ChartSpacing';
import {getStartingExpandSize, addPercentChangeToCandles ,getABCDBarNumbers ,getEachCandlesXCordPixelLocation, getPercentageChangeOfCanvasHeight, trackChangeInCanvasHieght} from './Utlities/Utilities';
import {create_prices} from '../../../../../canvas_tools';
import { PlotCandles, PlotStartingCandles, Add_Shrink_Expand_To_Candles, Add_Candles_Yspacing} from './plot_candles';
import { MouseEvents } from './mouse_events';

// css
import './CandleChart.css'
import { AddXSpacing, AddYSpacing } from './y_spacing';
import { ShrinkExpand } from './shrink_expand';
import { Create_Canvas_Prices, Create_Canvas_Chart } from './canvas';

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
		selected_candles,
		selected_pattern,
		middle_price,
		abcd_bar_locations
		
	} = props
	/**
	 * 
	 * 
	 * Canvas X,Y starts at top, left corner. So, Canvas works top to bottom. We need graph to work bottom to top. Chart zero wills start a zero.
	 * - Find height of div
	 * - set canvas pixel dimension
	 * - set to 1000
	 * - So what ever the height of the div is, example: Element div height is 357. We divide that by  
	 * 
	 * 
	 * If screen pixel height is 357 should I make one pixel per cent? one pixel per dollar? one pixel per 10? 
	 * I need to identify what a screen pixel height equals in a canvas pixel height. if 1000, take height / pixels in canvas
	 * now canvas pixel point is set. so if I pust 
	 */

	// SCREEN PIXEL HEIGHT.
	const [canvasDisplayHeight, setCanvasDisplayHeight] = useState({
		'height': null,
		'width': null,
		'left': null, 
		'top': null,
		'right': null,
		'bot': null, 
	})
	const [spaceBetweenCandles, setSpaceBetweenCandles] = useState(inFullScreen ? 5 : 5)		// Space Between Candles: Starting pixel distance between each candle.
	const [candleWidth, setCandleWidth] = useState(inFullScreen ? 5 : 1)						// Candle Width: Starting pixel width of a candle.
	const [spaceBetweenWicks, setSpaceBetweenWicks] = useState(7.5)							    // Space Between Wicks: Starting pixel distance between each wick.
	const [canvasPriceDimensions, setCanvasPriceDimensions] = useState({
		'height': null,
		'width': null,
		'left': null, 
		'top': null,
		'right': null,
		'bot': null, 
	})
	const [mousePosition, setMousePosition] = useState({});										// Mouse Position: Holds the current x and y coordinate location of the mouse.
	let xyActiveCoordinates = JSON.parse(JSON.stringify(mousePosition))	
	const [yCoordinatesOnMouseClick, setYCoordinatesOnMouseClick] = useState()					// Y-Coordintate On Mouse Click: Holds the y-coordinate location of the latest mouse click.
	const [xCoordinatesOnMouseClick, setXCoordinatesOnMouseClick] = useState()	
	const [isMousePressedOnPrices, setIsMousePressedOnPrices] = useState(false)
	const main_ = React.createRef(null)
	const canvasPriceBar = React.createRef(null)
	const canvasChart = React.createRef(null);
	const canvasDates = React.createRef(null)
	const [mousePressedOnCanvas, setMousePressedOnCanvas] = useState(false)
	const [mousePressedOnDates, setMousePressedOnDates] = useState(false)
	const [shrink_expand, set_shrink_expand] = useState(0)
	const [prev_shrink_expand, set_prev_shrink_expand] = useState(0)
	const [static_x_spacing, set_static_x_spacing] = useState(0)
	const [x_spacing, set_x_spacing] = useState(0)
	const [starting_canvas_height, set_starting_canvas_height] = useState()
	const [current_prices_moved, set_current_prices_moved] = useState(0)
	const [total_prices_moved, set_total_prices_moved] = useState(0)
	const [count, setcount] = useState(1)
	let price_and_grid_size = 20
	const [static_mid_price, set_static_mid_price] = useState()
	const [dynamic_mid_price, set_dynamic_mid_price] = useState()
	const [static_canvas_height, set_static_canvas_height] = useState()
	const [dynamic_canvas_height, set_dynamic_canvas_height] = useState()
	const [static_y_spacing, set_static_y_spacing] = useState(0)
	const [y_spacing, set_y_spacing] = useState(0)
	const [height_counter, set_height_counter] = useState(0)
	const [candles, set_candles] = useState([])
	const [starting_X_point, set_starting_X_point] = useState(0)
	const [static_candle_width, set_static_candle_width] = useState(10)
	const [candle_width, set_candle_width] = useState(10)
	const [pixels_between, set_pixels_between] = useState(5)
	const [pixels_between_wicks, set_pixels_between_wicks] = useState(candle_width+pixels_between)
	let default_number_of_prices = 20

	
	const handleKeyDown = (event) => {
		
		if (event.key === 'ArrowUp') {
			
			let added_height = dynamic_mid_price * 1		

			set_shrink_expand(prev=>prev + 1)
			set_dynamic_canvas_height(prev=>prev + added_height);

		} else if (event.key === 'ArrowDown') {
		
			let added_height = dynamic_mid_price * 1		

			set_shrink_expand(prev=>prev - 1)
			set_dynamic_canvas_height(prev=>prev - added_height);
		}
	};
	const find_starting_mid_price = () => {
		let single_price_height_in_pixels = starting_canvas_height / price_and_grid_size
		let mid = single_price_height_in_pixels * (middle_price - 10)

		set_static_y_spacing(mid)
		set_y_spacing(mid)
		set_static_mid_price(middle_price)
		set_dynamic_mid_price(middle_price)
	}
	const find_dynamic_mid_price = () => {
		
		let amount_moused_moved = xyActiveCoordinates['y'] - yCoordinatesOnMouseClick;

		// PRICE HEIGHT
		let start_price_height = starting_canvas_height / price_and_grid_size
		let total_price_height = start_price_height + shrink_expand


		
		let prices_moved = amount_moused_moved / total_price_height

	

		let mid = static_mid_price + prices_moved
		
		set_current_prices_moved(amount_moused_moved / total_price_height)
		set_dynamic_mid_price(mid)


	}
	// X, Y MOUSE COORDINATES
	useEffect(() => {
		
		// Get canvas dimensions.
		canvasChart.current && getChartCorners(canvasChart,setCanvasDisplayHeight)
		// canvasPriceBar.current && getPriceBarCorners(canvasPriceBar, setCanvasPriceDimensions)

		// locate mouse position.
		const handleMouseMove = (event) => {
			setMousePosition({ x: event.clientX, y: event.clientY });
		};
		window.addEventListener('mousemove', handleMouseMove);
		return () => {window.removeEventListener('mousemove',handleMouseMove);};

	},[]); 
	// ON MOUNTS
	useEffect(()=>{
		// set_static_y_spacing(0)
		set_prev_shrink_expand(0)
		find_dynamic_mid_price()
		find_starting_mid_price()
	},[canvasDisplayHeight, selected_candles])
	ShrinkExpand(
		isMousePressedOnPrices,
		xyActiveCoordinates,
		yCoordinatesOnMouseClick,
		prev_shrink_expand,
		dynamic_mid_price,
		set_shrink_expand,
		set_dynamic_canvas_height,
		static_canvas_height,
		set_height_counter
	)
	AddYSpacing(
		mousePressedOnCanvas,
		find_dynamic_mid_price,
		xyActiveCoordinates,
		yCoordinatesOnMouseClick,
		static_y_spacing,
		set_y_spacing,
		static_canvas_height,
	
	)
	AddXSpacing(
		xyActiveCoordinates,
		mousePressedOnCanvas,
		xCoordinatesOnMouseClick,
		set_x_spacing,
		static_x_spacing,
		x_spacing,
    candles,
    set_candles
	)
	Create_Canvas_Prices(
		canvasPriceBar,
		shrink_expand,
		price_and_grid_size,
		dynamic_canvas_height,
		count,
		setcount,
		default_number_of_prices,
		y_spacing,
		xyActiveCoordinates
	)
	Create_Canvas_Chart(
		xyActiveCoordinates,
		canvasChart,
		x_spacing,
		y_spacing,
		shrink_expand,
		dynamic_canvas_height,
		default_number_of_prices,
		candles,
		canvasDisplayHeight,
		starting_X_point,
		candle_width,
		pixels_between,
		abcd_bar_locations,
		pixels_between_wicks,
		canvasDates,

	
	)
	
	// Mount canvas price dimensions
	useEffect(()=>{
		const graph = canvasPriceBar.current;

		// setCanvas
		
		setCanvasPriceDimensions({
			'height': graph.getBoundingClientRect()['height'],
			'width': graph.getBoundingClientRect()['width'],
			'left': graph.getBoundingClientRect()['left'], 
			'top': graph.getBoundingClientRect()['top'],
			'right': graph.getBoundingClientRect()['right'],
			'bottom': graph.getBoundingClientRect()['bottom'], 

		})
		set_static_canvas_height(graph.height + y_spacing)
		set_dynamic_canvas_height(graph.height + y_spacing)
		set_starting_canvas_height(graph.height)
		
	},[canvasPriceBar.current, canvasChart.current])
	// ARROW DOWN EVENT LISTENER
	useEffect(() => {
		document.addEventListener('keydown', handleKeyDown);

		// Cleanup the event listener on component unmount
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, []); 
	useEffect(()=>{
		
		Add_Shrink_Expand_To_Candles(
			canvasPriceDimensions['height'], 
			dynamic_mid_price, 
			height_counter,
			candles,
    		set_candles,
		)
	},[shrink_expand])
	MouseEvents(
		set_static_y_spacing, 
		y_spacing, 
		set_prev_shrink_expand, 
		shrink_expand,
		setMousePressedOnCanvas, 
		setIsMousePressedOnPrices,
		set_static_canvas_height,
		dynamic_canvas_height,
		set_total_prices_moved,
		total_prices_moved,
		set_static_mid_price,
		dynamic_mid_price,
		current_prices_moved,
		set_height_counter,
		set_static_x_spacing,
		x_spacing,
		setMousePressedOnDates,
		set_static_candle_width,
		candle_width,

	)
	useEffect(()=>{

		let new_candles = selected_candles.map((item)=> ({
				...item,
				date: item.candle_date,
				high: item.candle_high,
				open: item.candle_open,
				close: item.candle_close,
				low: item.candle_low,
				static_wick_high : 0,
				dynamic_wick_high : 0,
				static_open : 0,
				dynamic_open : 0,
				static_close : 0,
				dynamic_close : 0,
				static_wick_low : 0,
				dynamic_wick_low : 0,
				pixel_start: 0,
				pixel_end: 0,
				static_a_price: 0,
				static_b_price: 0,
				static_c_price: 0,
		}))
	
		PlotStartingCandles(
			canvasPriceDimensions, 
			new_candles,
			set_candles,
		)

	}, [selected_candles])

	useEffect(()=>{
		const shrink_expand_X = () => {
		
			if(mousePressedOnDates){
	
				let current_x_mouse_loc =  xyActiveCoordinates['x'] - canvasDisplayHeight['left']
				let diff = xCoordinatesOnMouseClick - xyActiveCoordinates['x']
				let new_candle_width = static_candle_width - (diff/8)
				set_candle_width(new_candle_width)
				set_pixels_between_wicks((new_candle_width + pixels_between))
	
	
			}
	
		}
		shrink_expand_X()
	}, [xyActiveCoordinates['x']])

	
	
	
    return(
		<div onKeyDown={handleKeyDown} onMouseUp={()=>{
			let new_candles = candles.map((obj)=>({
				...obj,
				static_open: obj.dynamic_open,
				static_close: obj.dynamic_close,
				static_wick_high : obj.dynamic_wick_high,
				static_wick_low: obj.dynamic_wick_low

			}))
			set_candles(new_candles)
		}} className='candle_chart_container'>
			<div className='candle_chart_container_2' onMouseDown={()=>{
				setYCoordinatesOnMouseClick(xyActiveCoordinates['y'])
				setXCoordinatesOnMouseClick(xyActiveCoordinates['x'])
				
				}}>
				<div className='candle_chart_wrapper' ref={main_}>

					<div className='canvas' 
					onMouseUp={()=>{
						const graph = canvasPriceBar.current;
						const canvasHeight = graph.getBoundingClientRect()['height']
						const total_height = canvasHeight + y_spacing + (5 * shrink_expand)
						

						let grid_line_amount = price_and_grid_size
						let grid_line_height = graph.getBoundingClientRect()['height'] / grid_line_amount
						let grid_line_plus_expanded_size = grid_line_height + shrink_expand


						const top_price = total_height / grid_line_plus_expanded_size

						const x = (canvasHeight / grid_line_plus_expanded_size) / 2

						const dynamic_mid_price = top_price - x

						
					}}

					style={colorTheme.single_trade.candle_chart.chart.chart.background_color}>
						<canvas id='canvas' 
							onMouseDown={()=>{
					
								setMousePressedOnCanvas(true)
							}}
							onMouseUp={()=>{
								setMousePressedOnDates(false)
							}}
							
							ref={canvasChart} 
							// style={{backgroundColor: '#041420'}}
							// style={{backgroundColor: '#080915'}}
							// onMouseUp={() => {mouseReleasedOnCanvas(setIsMousePressedOnCanvas,setPrevCanvasXSpacing,setPrevCanvasYSpacing,canvasXSpacing,canvasYSpacing)}} 
						
							onWheel = {(event) => {scrollZoom(event, candleWidth, setSpaceBetweenCandles, spaceBetweenCandles, setCandleWidth, setSpaceBetweenWicks, spaceBetweenWicks)}}>
						</canvas>
					</div>

					<div className='canvas_dates' 
						onMouseDown={()=>{
							setMousePressedOnDates(true)
						}}
						>
						<canvas id='canvasDatesBar' 
							ref={canvasDates}></canvas>

					</div>

				</div>	
				
				<div className='canvas_prices' 
	
					style={colorTheme.single_trade.candle_chart.chart.prices} 
					onMouseDown={() => {
						setIsMousePressedOnPrices(true)
		
						
					}}
					onWheel={(event) => {
				
					}}>
						<div className='pricesb'>
							<canvas ref={canvasPriceBar}></canvas>
						</div>
				</div>
				
				
			</div>
	    </div>
    )
}

export default CandleChart 






// JUST FIXED STARTING CANDLE TO BE SET IN MID WITH YSPACING AND SHRINK EXPAND WORKING ALONG SIDE WITH IT!