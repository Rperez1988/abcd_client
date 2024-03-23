import { useEffect } from "react"


export const Create_Canvas_Prices = (

    canvasPriceBar,
    shrink_expand,
    price_and_grid_size,
    current_canvas_height,
    count,
    setcount,
    default_number_of_prices,
	y_spacing,
	xyActiveCoordinates
	
) => {

    useEffect(()=>{

        if (canvasPriceBar.current) {
			const canvas = canvasPriceBar.current;
			const ctx = canvas.getContext('2d');
			if (ctx) {
			
				// HEIGHT AND WIDTH OF CANVAS TO ITS PARENT ELEMENT
				canvas.style.width ='100%';
				canvas.style.height = '100%';
	
				// PIXEL DIMENSION SIZE OF CANVAS
				canvas.height = canvas.offsetHeight;
				canvas.width = canvas.offsetWidth;
				let pixel_of_top_of_canvas = canvas.getBoundingClientRect()['top']
				let x_mouse_location = xyActiveCoordinates['y']
			
				let x_mouse_location_adjusted = canvas.height - (x_mouse_location - pixel_of_top_of_canvas)
				let width =  17		
				let price_unit = canvas.height / 20
				let single_price = price_unit / 100
				let y = y_spacing / price_unit
			
				let x = ((x_mouse_location_adjusted / single_price) /100)
				let adjusted_price = x + y
			
				let boxx = x_mouse_location - pixel_of_top_of_canvas
				canvas.width = canvas.offsetWidth;
			
				plot_prices(
					canvas, 
					ctx, 
					shrink_expand, 
					current_canvas_height,
					y_spacing
				)
				const plot_y_price_tag = () => {

					
					ctx.beginPath(); 
					ctx.fillStyle = "#383838";
					// ctx.fillRect(x_spacing + (pixelStart - 50), 0 , textHeight + 20, canvas_height);
					ctx.beginPath(); 
					ctx.fillStyle = "white";
					ctx.font = '' + (canvas.width / 5) + 'px Source Sans Pro';
					ctx.fillText(adjusted_price.toFixed(2), canvas.width / 4 , boxx + 7);
					ctx.stroke();
					

				}
				const plot_y_price_box = () => {
					let x = 0
					let y = -200
					let width = canvas.width
					let height = 25
					ctx.beginPath(); 
					ctx.fillStyle = "teal";
					ctx.fillRect(x, boxx - (height/2), width, height);
					ctx.stroke();
				
				}
				plot_y_price_box()
				plot_y_price_tag()
				
				
			}
		
		}
        return(()=>{

        })
    })

    return 
}
export const Create_Canvas_Chart = (
	xyActiveCoordinates,
	canvasChart,
	x_spacing,
	y_spacing,
	shrink_expand,
	current_canvas_height,
	default_number_of_prices,
	candles,
	canvasDisplayHeight,
	starting_X_point,
	candle_width,
	pixels_between,
	abcd_bar_locations,
	pixels_between_wicks,
	canvasDates,
	
	
) => {

    useEffect(()=>{
		if (canvasChart.current) {
			const canvas = canvasChart.current;
			const ctx = canvas.getContext('2d');
			if (ctx) {
			
				// HEIGHT AND WIDTH OF CANVAS TO ITS PARENT ELEMENT
				canvas.style.width ='100%';
				canvas.style.height = '100%';
	
				// PIXEL DIMENSION SIZE OF CANVAS
				canvas.height = canvas.offsetHeight;
				canvas.width = canvas.offsetWidth;
				let c_x = (candle_width + pixels_between) * (abcd_bar_locations[0][2]) 
				
				// plot_take_profit_line(
				// 	ctx,
				// 	c_x,
				// 	x_spacing,
				// 	y_spacing,
				// 	candles
				// )
				// plot_grid(
				// 	canvas, 
				// 	ctx, 
				// 	shrink_expand, 
				// 	current_canvas_height,
				// 	default_number_of_prices,
				// 	y_spacing
				// )
				plot_candles(
					starting_X_point,
					candles,
					ctx,
					x_spacing,
					y_spacing,
					candle_width,
					pixels_between,
				)
				plot_wicks(
					candles,
					ctx,
					x_spacing,
					y_spacing,
					candle_width,
					pixels_between,
					pixels_between_wicks
				)
				plot_abcd_lines(
					candle_width,
					pixels_between,
					abcd_bar_locations,
					ctx,
					x_spacing,
					y_spacing,
					candles
				)
				plot_mouse_grid(
					canvasDisplayHeight,
					xyActiveCoordinates,
					x_spacing,
					ctx,
					canvas.getBoundingClientRect()['height'],
					candle_width,
					pixels_between
				)
				plot_mouse_date(
					canvasDates,
					canvasDisplayHeight,
					xyActiveCoordinates,
					x_spacing,
					candles,
					candle_width,
					pixels_between
				)

				const plot_y_mouse_grid = () => {

					let pixel_of_top_of_canvas = canvas.getBoundingClientRect()['top']
					let x_mouse_location = xyActiveCoordinates['y']
					let x_mouse_location_adjusted = x_mouse_location - pixel_of_top_of_canvas

					ctx.beginPath(); 
					ctx.lineWidth = 1
					ctx.strokeStyle = 'gray'
					ctx.setLineDash([5, 5]); // [dash length, gap length]
					ctx.moveTo(0,x_mouse_location_adjusted);    // Move to the starting point
					ctx.lineTo(canvas.width,x_mouse_location_adjusted);   // Draw a line to the ending point
					ctx.stroke();


		
					
				}
				
				plot_y_mouse_grid()
		
			}
		}
	
	}, [xyActiveCoordinates, x_spacing, canvasDates])
}
const plot_grid = (
	canvas, 
	ctx, 
	shrink_expand_amount,
	current_canvas_height,
	default_number_of_prices,
	y_spacing
	) => {


			/*
				GRID LINES:
			
				Grid lines are dynamically drawn based on the pixel height of the canvas, which is set to the height of the element, 
				allowing it to adapt to changes in element height.

				Algorithm:
				1. Obtain the height of the canvas.
				2. Divide the canvas height by the number of set grid lines.
				3. Set the starting pixel to 0 and the ending pixel to the canvas height.
				4. Iterate through the canvas height, drawing a line at each grid line interval.

				This process ensures that the grid lines adapt to changes in the element's height, providing a responsive representation 
				on the canvas.

				Price Expansion Size: The pixels added or removed in a grid_line_height to give the shrink and expand effect.
				
				Y-Spacing: Additional pixels added to the starting pixel of a Y cord.
				
				Grid Line Height: Pixels in between each line, or price line. 
			*/
			// Number of the default grid lines on the chart
		
			let default_price_pixel_height = canvas.height / default_number_of_prices
			let current_price_pixel_height = default_price_pixel_height + shrink_expand_amount

			let c = 1
			const get_price_height = () => {
				let price_height = 1
				// if(shrink_expand_amount>0){
				// 	if(shrink_expand_amount>20){
				// 		default_number_of_prices = 40
				// 		c = 2
		
				// 	}
					
				// 	return current_price_pixel_height/c
				// }
				
				// if(shrink_expand_amount<0){
				// 	// price_height = 10		
				// 	return current_price_pixel_height*price_height
				// }
		
				// else{
					return current_price_pixel_height*price_height
				// }
			}

			// The starting and ending pixels will be equal to the height of the canvas.
			let end_pixel = 0  
			let start_pixel = current_canvas_height + y_spacing
			ctx.beginPath(); 
            for(let i = start_pixel; i > end_pixel; i -= get_price_height()){
                // ctx.beginPath(); 
                // ctx.strokeStyle = '	#202020'
				ctx.strokeStyle = '#404040'
				ctx.lineWidth = .5
                ctx.moveTo(0, i);    // Move to the starting point
                ctx.lineTo(canvas.width, i);   // Draw a line to the ending point
                
            }
			ctx.stroke();
		
		
        // }
    // }
}
const plot_candles = (
	starting_X_point,
	candles,
	ctx,
	x_spacing,
	y_spacing,
	candle_width,
	pixels_between,
) => {
	// Plot Candles
	let x = starting_X_point
	candles.forEach((item)=>{
		ctx.beginPath(); 
		let colorRed = "#f81423"
		let colorGreen = '#09f0f0'
		if(item.open > item.close){
			ctx.fillStyle = colorRed
		}
		else if(item.open < item.close){
			ctx.fillStyle = colorGreen
		}
		ctx.fillRect(x + x_spacing, item.dynamic_open + y_spacing, candle_width, item.dynamic_close);
		ctx.stroke();
		x+= (candle_width + pixels_between)
	})
	ctx.stroke();
}
const plot_wicks = (
	candles,
	ctx,
	x_spacing,
	y_spacing,
	candle_width,
	pixels_between,
	pixels_between_wicks

) => {
	// Plot Wicks
	let x_= candle_width / 2
	candles.forEach((item)=>{
		ctx.beginPath(); 
		let colorRed = "#f81423"
		let colorGreen = '#09f0f0'
		if(item.open > item.close){
			ctx.strokeStyle = colorRed
		}
		else if(item.open < item.close){
			ctx.strokeStyle = colorGreen
		}
		ctx.lineWidth = 2
		ctx.moveTo(x_ + x_spacing, item.dynamic_wick_high + y_spacing);    // Move to the starting point
		ctx.lineTo(x_ + x_spacing, item.dynamic_wick_low + y_spacing);   // Draw a line to the ending point
		ctx.stroke();
		x_ += (pixels_between_wicks)
	})
}
const plot_mouse_grid = (
	canvasDisplayHeight,
	xyActiveCoordinates,
	x_spacing,
	ctx,
	graph_height,
	candle_width,
	pixels_between
) => {
	let canvasLeftPixel = canvasDisplayHeight['left']
	
	// Subtract 'canvasLeftPixel' from current x-mouse location to make start of canvas pixel zero.
	let xMousePixelLoc = (xyActiveCoordinates['x'] - canvasLeftPixel)

	// Negate x_spacing 
	let pos_with_xspacing = (xMousePixelLoc - x_spacing) - (candle_width / 2)


	// Pixel space a single candle takes
	let pixel_space_of_single_candle = candle_width + pixels_between

	let p = (pos_with_xspacing / pixel_space_of_single_candle).toFixed(0)

	let pixelStart = (p * pixel_space_of_single_candle) + (candle_width / 2)
	ctx.beginPath(); 
	ctx.lineWidth = 1
	ctx.strokeStyle = 'gray'
	ctx.setLineDash([5, 5]); // [dash length, gap length]
	ctx.moveTo(pixelStart + x_spacing,graph_height);    // Move to the starting point
	ctx.lineTo(pixelStart + x_spacing, 0);   // Draw a line to the ending point
	ctx.stroke();
}
const plot_prices = (
	canvas, 
	ctx, 
	shrink_expand_amount, 
	current_canvas_height,
	y_spacing
	) => {

	/*
			How Shrinking and Expanding Effect Works:

			The pixel height of the canvas is set to match the height of the parent element. 
			The number of prices or grid lines on the chart is determined by dividing the 
			canvas height by the specified number. The default is set to 10. The pixel space 
			between each grid price and line is calculated as the canvas height divided by 
			the number of grid lines. 

			For example, with zero shrinking or expanded size and a canvas height of 500, the 
			grid line price height would be set to 50. We then iterate over the height of the canvas, 
			drawing a grid line at every interval defined by the grid price line height.

			The shrink and expand value is used to adjust the grid line spacing by adding or 
			subtracting from the default grid line spacing. It does not modify the set number 
			of grid lines but directly affects the height itself.

			This approach allows for dynamic adaptation of grid lines based on the canvas height 
			and the specified number of grid lines, providing flexibility for responsive chart 
			displays.

			Example:

			Assuming the canvas height is 500 and the grid line amount is set to 2, a line would be 
			drawn at every 250 pixels. 

			Scenario 1:
			If 1 pixel is added by shrink and expand, there won't be a last line drawn because the 
			height of both lines would exceed the height of the canvas.

			Scenario 2:
			If the shrink and expand size is set to -90, reducing the grid line height to 160, this 
			not only shrinks each grid line but also draws an additional line. This happens because 
			the draw line is called three times within the height of the canvas.

			*/
	const off_set_price_text = () => {
		let text = 'O'
		let fontSize = 25; 
		ctx.font = `${fontSize}px Arial`;
		// IF A TEXT AND A LINE WERE GIVEN THE SAME X,Y CORDS THE LINE WOULD SIT UNDER THE THE TEXT.
		// SO THE PRICE WOULD APPEAR UN-ALIGNED. TO SOLVE THIS. CAN TAKE THE HEIGHT OF THE TEXT AND THEN LOWER IT BE HALF ITS HEIGHT.
		// SO THAT THE MID OF THE TEXT IS EQAUL TO THE LINE.
		let textMetrics = ctx.measureText(text);
		let textHeight = textMetrics.actualBoundingBoxAscent + textMetrics.actualBoundingBoxDescent;
		let yOffset = textHeight / 2

		return yOffset
	}
	const get_increment_size = () =>{
		if(current_price_pixel_height<37){

			return 2
		}
		if(current_price_pixel_height<20){

			return 4
		}
		else{
			return 1
		}
	}
	const get_price_height = () => {


		if(current_price_pixel_height<37){

			return current_price_pixel_height*2
		}
		if(current_price_pixel_height<20){

			return current_price_pixel_height*2
		}
		else{
			return current_price_pixel_height*1
		}
	}

	let starting_price_amount = 20
	let grid_line_height = canvas.height / starting_price_amount
	let current_price_pixel_height = grid_line_height + shrink_expand_amount
	let starting_price_text = 0;
	let yOffset = off_set_price_text()
	let start_pixel = current_canvas_height + y_spacing
	let end_pixel = 0
	
	for(let i = start_pixel; i >= end_pixel; i -= current_price_pixel_height){
		ctx.font = '' + (canvas.width / 6) + 'px Source Sans Pro';
		ctx.fillStyle = 'white'
		ctx.fillText(starting_price_text.toFixed(2), canvas.width / 4, i + 8);
		starting_price_text += 1
	}
}
const plot_take_profit_line = (
	ctx,
	c_x,
	x_spacing,
	y_spacing,
	candles
) => {
	ctx.beginPath(); 
	ctx.lineWidth = 2
	ctx.moveTo(c_x + x_spacing, candles[17]?.dynamic_wick_high + y_spacing);    // Move to the starting point
	ctx.lineTo(3000, candles[17]?.dynamic_wick_high + y_spacing); 
	ctx.strokeStyle = '#088F8F'
	ctx.stroke();
	

}
const plot_abcd_lines = (
	candle_width,
	pixels_between,
	abcd_bar_locations,
	ctx,
	x_spacing,
	y_spacing,
	candles
) => {

	let candle_a_index = abcd_bar_locations[0][0]
	let candle_b_index = abcd_bar_locations[0][1]
	let candle_c_index = abcd_bar_locations[0][2]
	let candle_d_index = abcd_bar_locations[0][3]

	let single_candle_width = candle_width + pixels_between

	let candle_A_xLocation = ((single_candle_width * candle_a_index) + x_spacing) + (single_candle_width / 4)
	let candle_B_xLocation = (single_candle_width * candle_b_index) + x_spacing + (single_candle_width / 4)
	let candle_C_xLocation = (single_candle_width * candle_c_index) + x_spacing + (single_candle_width / 4)
	let candle_D_xLocation = (single_candle_width * candle_d_index) + x_spacing + (single_candle_width / 4)

	let d_index = abcd_bar_locations[0][3]

	let A_y_location = (candles[1]?.static_a_price + y_spacing)
	let B_y_location = (candles[11]?.static_b_price + y_spacing)
	let C_y_location = (candles[17]?.static_c_price + y_spacing)
	let D_y_location = (candles[26]?.static_d_price  + y_spacing)

	ctx.beginPath();  
	ctx.strokeStyle = 'orange'
	ctx.lineWidth = 3
	ctx.lineCap = "round"; 

	ctx.moveTo(candle_A_xLocation, A_y_location);    // Move to the starting point
	ctx.lineTo(candle_B_xLocation, B_y_location); 
	
	ctx.moveTo(candle_B_xLocation, B_y_location);    // Move to the starting point
	ctx.lineTo(candle_C_xLocation, C_y_location);  
	
	ctx.moveTo(candle_C_xLocation, C_y_location);    // Move to the starting point
	ctx.lineTo(candle_D_xLocation, D_y_location); 



	ctx.stroke(); 
}
const plot_mouse_date = (
	canvasDates,
	canvasDisplayHeight,
	xyActiveCoordinates,
	x_spacing,
	candles,
	candle_width,
	pixels_between

) => {

		if (canvasDates.current) {
			const canvas = canvasDates.current;
			const ctx = canvas.getContext('2d');
			if (ctx) {

				// HEIGHT AND WIDTH OF CANVAS TO ITS PARENT ELEMENT
				canvas.style.width ='100%';
				canvas.style.height = '100%';

				// PIXEL DIMENSION SIZE OF CANVAS
				canvas.height = canvas.offsetHeight;
				canvas.width = canvas.offsetWidth;

				let canvasLeftPixel = canvasDisplayHeight['left']

				// Subtract 'canvasLeftPixel' from current x-mouse location to make start of canvas pixel zero.
				let xMousePixelLoc = (xyActiveCoordinates['x'] - canvasLeftPixel)

				// Negate x_spacing 
				let xMousePixelLoc_adjusted = (xMousePixelLoc - x_spacing) - (candle_width / 2)

				// Pixel space a single candle takes
				let pixel_space_of_single_candle = candle_width + pixels_between

				// Find which candle the mouse is over
				let hovered_candled_index = (xMousePixelLoc_adjusted / pixel_space_of_single_candle).toFixed(0)

				// Placement of x-grid line
				let pixelStart = (hovered_candled_index * pixel_space_of_single_candle) + (candle_width / 2)

				let canvas_height = canvasDates.current.getBoundingClientRect()['height']

				var dynamicFontSize = canvas_height / 2.5;
				var text = candles[hovered_candled_index]?.date;
				var textMetrics = ctx.measureText(text);
				var textHeight = textMetrics.width;
				let mid_height = canvasDates.current.getBoundingClientRect()['height'] / 2
			
				ctx.font = '' + dynamicFontSize + 'px Source Sans Pro';
				
				// let text = 0
				let x_text = x_spacing + (pixelStart - 40)
				let y_text = (mid_height + 8)

				let x_rect = x_spacing + (pixelStart - 50)
				let y_rect = 0
				let width_rect = textHeight + 60
				let height_rect = canvasDates.current.getBoundingClientRect()['height']
			
				ctx.beginPath(); 
				ctx.fillStyle = "teal";
				ctx.fillRect(x_rect, y_rect , width_rect, height_rect);

				ctx.beginPath(); 
				ctx.fillStyle = "white";
				ctx.fillText(text, x_text, y_text);
				ctx.stroke();
				
			
			}
		}

}