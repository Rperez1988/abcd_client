import React, {useState, useEffect} from 'react'

export const MouseEvents = async (
    set_prev_y_spacing,
    y_spacing,
    set_prev_shrink_expand,
    shrink_expand,
    setMousePressedOnCanvas,
    setIsMousePressedOnPrices,
    set_prev_canvas_height,
    current_canvas_height,
    set_total_prices_moved,
    total_prices_moved,
    set_prev_mid,
    mid_price,
    current_prices_moved,
    set_height_counter,
    set_static_x_spacing,
    x_spacing,
    setMousePressedOnDates,
    set_static_candle_width,
    candleWidth,
) => {
    useEffect(() => {
        const handleMouseDown = () => {
            // Handle mouse down event
        };

        const handleMouseUp = async () => {
            set_static_candle_width(candleWidth)
            set_prev_y_spacing(y_spacing);
            set_prev_shrink_expand(shrink_expand);
            setIsMousePressedOnPrices(false);
            setMousePressedOnCanvas(false);
            set_prev_canvas_height(current_canvas_height);
            set_total_prices_moved(current_prices_moved + total_prices_moved);
            set_prev_mid(mid_price);
            set_height_counter(0);
            // set_static_start(dynamic_start);
            // set_static_end(dynamic_end);
            set_static_x_spacing(x_spacing);
            setMousePressedOnDates(false)

   
        };

        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [y_spacing, shrink_expand]);

    return;
};