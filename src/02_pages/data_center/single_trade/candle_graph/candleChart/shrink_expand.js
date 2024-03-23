import React, {useState, useEffect} from 'react'
export const ShrinkExpand = (
    isMousePressedOnPrices,
    xyActiveCoordinates,
    yCoordinatesOnMouseClick,
    prev_shrink_expand,
    mid_price,
    set_shrink_expand,
    set_current_canvas_height,
    prev_canvas_height,
	set_height_counter

) => {

    useEffect(()=>{

		if(isMousePressedOnPrices){
			console.log(mid_price)
			// DRAG UP
			if(xyActiveCoordinates['y'] < yCoordinatesOnMouseClick){
				let amount_moused_moved = xyActiveCoordinates['y'] - yCoordinatesOnMouseClick;
				let shrink_expand = prev_shrink_expand - amount_moused_moved;
				let added_height = mid_price * -amount_moused_moved		
				set_shrink_expand(shrink_expand)
				set_current_canvas_height(prev_canvas_height + added_height);
				set_height_counter(amount_moused_moved)
			}
			// DRAG DOWN
			if(xyActiveCoordinates['y'] > yCoordinatesOnMouseClick){
				let amount_moused_moved = xyActiveCoordinates['y'] - yCoordinatesOnMouseClick;
				let shrink_expand = prev_shrink_expand - amount_moused_moved;
				let added_height = mid_price * amount_moused_moved
				set_shrink_expand(shrink_expand)
				set_current_canvas_height(prev_canvas_height - added_height);
				set_height_counter(amount_moused_moved)
			}
		}

	},[xyActiveCoordinates['y']])

    return
}
	