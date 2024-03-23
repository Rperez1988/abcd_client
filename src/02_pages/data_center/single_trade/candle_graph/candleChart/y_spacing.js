import { useEffect } from 'react'
export const AddYSpacing = (
    mousePressedOnCanvas,
    find_mid_price,
    xyActiveCoordinates,
    yCoordinatesOnMouseClick,
    static_y_spacing,
    set_y_spacing,
    static_canvas_height,
) => {
    useEffect(()=>{
        if(mousePressedOnCanvas){
            find_mid_price()
            let pixels_mouse_moved = xyActiveCoordinates['y'] - yCoordinatesOnMouseClick;
            let total_y_spacing = static_y_spacing + pixels_mouse_moved;
            let new_canvas_height =  static_canvas_height + pixels_mouse_moved
            set_y_spacing(total_y_spacing);
            // set_current_canvas_height(new_canvas_height);
        }
        return () => {

        };
    }, [xyActiveCoordinates['y']])
    return 
}
export const AddXSpacing = (
    xyActiveCoordinates,
    mousePressedOnCanvas,
    xCoordinatesOnMouseClick,
    set_x_spacing,
    static_x_spacing,
    x_spacing,
    candles,
    set_candles
) => {
    useEffect(()=>{
        if(mousePressedOnCanvas){
            let pixels_mouse_moved = xyActiveCoordinates['x'] - xCoordinatesOnMouseClick;
            set_x_spacing(static_x_spacing + pixels_mouse_moved)
            let new_candles = candles.map((item)=>{

                return{
                    ...item,
                    pixel_start: 5 + x_spacing,
                    pixel_end: 15 + x_spacing

                }
            })
            set_candles(new_candles)
        }

        return () => {

        };
    }, [xyActiveCoordinates['x']])
}