
import { useState } from "react"


const NavBarButton = (props) => {

    const {
        colorTheme,
        isAtStartOfTrades,
        image,
        setActive,
        isActive,
    } = props

    const [isHovered, setIsHovered] = useState(false);

    const [is_active, set_is_active] = useState(true)

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const style_icon_color = {
        filter: 'invert(99%) sepia(100%) saturate(2%) hue-rotate(250deg) brightness(103%) contrast(100%)'
    }
    const style_icon_hovered_color = {
        filter: ''
    }

    return(
        
        
  
        <div className='header_icon_wrapper' 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={()=>{set_is_active(!is_active); setActive(!isActive)}}


        
        // style={
        //     isHovered ? colorTheme.single_trade.candle_chart.header.button_hovered_background_color:  colorTheme.single_trade.candle_chart.header.button_neutral_background_color
            
        //     }
             >
            <img 
                // style={isHovered ? style_icon_hovered_color : style_icon_color} 
                className={is_active ? 'header_icon_image_active' : 'header_icon_image'} 
                src={image}/>			
         </div> 

    )
}

export default NavBarButton