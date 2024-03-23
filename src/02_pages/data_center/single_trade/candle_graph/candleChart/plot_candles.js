import React, {useState, useEffect} from 'react'

export const PlotStartingCandles = (
    canvasPriceDimensions, 
    candles,
    set_candles,
    
    ) => {

    let size_of_one_price_unit = canvasPriceDimensions['height'] / 20

    const convert_bottom_price_into_pixels = (open) =>{

        let bot_price_in_pixels = size_of_one_price_unit * open
       
        let x = canvasPriceDimensions['height'] - bot_price_in_pixels
        return x
    }
    const convert_height_into_pixels = (close, open) => {
        let size_of_one_price_unit = canvasPriceDimensions['height'] / 20
        let height = (close - open) * size_of_one_price_unit
    
        return -height
    }

    // Plot Dynamic Candles
    let startx = 0;
    let new_candles = candles.map((obj) => {
        startx += 15; // Increment startx by 15
        return {
            ...obj,
            static_open: convert_bottom_price_into_pixels(obj.open),
            dynamic_open: convert_bottom_price_into_pixels(obj.open),
            static_close: convert_height_into_pixels(obj.close, obj.open),
            dynamic_close: convert_height_into_pixels(obj.close, obj.open),
            static_wick_high: convert_bottom_price_into_pixels(obj.high),
            dynamic_wick_high: convert_bottom_price_into_pixels(obj.high),
            static_wick_low: convert_bottom_price_into_pixels(obj.low),
            dynamic_wick_low: convert_bottom_price_into_pixels(obj.low),
            pixel_start: startx - 10,
            pixel_end: startx,
            static_a_price:convert_bottom_price_into_pixels(obj.close),
            static_b_price:convert_bottom_price_into_pixels(obj.close),
            static_c_price:convert_bottom_price_into_pixels(obj.close),
            static_d_price:convert_bottom_price_into_pixels(obj.open),
          
        

        };
    });
    set_candles(new_candles)
}

export const Add_Shrink_Expand_To_Candles = (
    canvas_height, 
    mid_price, 
    height_counter,
    candles,
    set_candles,
) => {
    
    let size_of_one_price_unit = canvas_height / 20
    const add_to_candle_top = (candle_close, candle_open, size_of_one_price_unit, static_end) => {

        // let height_of_candle_in_price = candle_close - candle_open
        // let height_of_candle_in_pixels = size_of_one_price_unit * -height_of_candle_in_price
        let top_mid_distance = candle_close - candle_open
        let current_added_height = height_counter * top_mid_distance
        return static_end + current_added_height
    }
    const add_to_candle_bot = (candle_open, mid_price, height_counter, static_start) => {
        let bot_mid_distance = candle_open - mid_price
        let current_added_height =  height_counter * bot_mid_distance
        return static_start + current_added_height
    }
    const add_shrink_expand_to_candle = (open, mid_price, height_counter, static_open) => {
        let bot_mid_distance = open - mid_price
        let current_added_height =  height_counter * bot_mid_distance
        return (static_open + current_added_height)
    }
    const add_shrink_expand_to_candle_top = (candle_close, candle_open, height_counter, static_close) => {
        let height_of_candle_in_price = candle_close - candle_open
        // let height_of_candle_in_pixels = size_of_one_price_unit * -height_of_candle_in_price
        let top_mid_distance = candle_close - candle_open
        let current_added_height = height_counter * top_mid_distance
        return (static_close + current_added_height)
    }
    // let new_top = add_to_candle_top(candle_close, candle_open, size_of_one_price_unit, static_end)
    // let new_bot = add_to_candle_bot(candle_open, mid_price, height_counter, static_start)
    // set_dynamic_end(new_top)
    // set_dynamic_start(new_bot)
  
    // Map through candles array asynchronously
    const new_candles = candles.map( (obj) => ({
        ...obj,
        dynamic_open: add_shrink_expand_to_candle(obj.open, mid_price, height_counter, obj.static_open),
        dynamic_close: add_shrink_expand_to_candle_top(obj.close, obj.open, height_counter, obj.static_close),
        dynamic_wick_high: add_shrink_expand_to_candle(obj.high, mid_price, height_counter, obj.static_wick_high),
        dynamic_wick_low: add_shrink_expand_to_candle(obj.low, mid_price, height_counter, obj.static_wick_low)
    }))

    // Set the state of candles after all asynchronous operations are completed
    set_candles(new_candles)
}
























export const PlotCandles = (candle_open, candle_close, canvasPriceDimensions, mid_price, shrink_expand, set_candle_start, set_candle_height, set_prev_candle_start) => {
    
    useEffect(()=>{

        let size_of_one_price_unit = canvasPriceDimensions['height'] / 20
        const get_starting_candle_open = (price_unit_pixel_size, candle_open) => {

            let scaled_bot_price = price_unit_pixel_size * candle_open
            
            return scaled_bot_price

        }

        const start_point = get_starting_candle_open(size_of_one_price_unit, candle_open)

        set_candle_start(start_point)
        set_prev_candle_start(start_point)

        

        let price_of_bottom_of_candle = get_starting_candle_open(
            candle_open, 
            size_of_one_price_unit, 
            canvasPriceDimensions['height'],
            mid_price,
            shrink_expand)

        set_candle_start(price_of_bottom_of_candle)
        set_candle_height(-size_of_one_price_unit)

        return () => {

        };
        
    },[canvasPriceDimensions['height'], shrink_expand ])

    return
}



const get_candle_height = (set_candle_height, size_of_one_price_unit) => {

    
// Candle Height
// let price_of_scaled_height_of_candle = candle_close
// let height_of_candle = price_of_scaled_height_of_candle - price_of_bottom_of_candle
// let scaled_height_of_candle = size_of_one_price_unit * -height_of_candle
// let top_candle_price_from_mid_price_distance = candle_close - mid_price
// scaled_height_of_candle -= shrink_expand * top_candle_price_from_mid_price_distance
set_candle_height(-size_of_one_price_unit)

}