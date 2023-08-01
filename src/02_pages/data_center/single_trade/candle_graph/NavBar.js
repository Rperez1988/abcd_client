
// img
import arrowright  from '../img/arrow_right_black.png'
import backbuttonwhite  from '../img/arrow_left_black.png'
import closewhite  from '../img/close_black.png'
import closefullscreen  from '../img/close_fullscreen_black.png'
import refresh  from '../img/refresh_black.png'
import candle  from './img/candle_black.png'
import abcd  from './img/abcd_black.png'
import pivot  from './img/pivot_black.png'
import React, {useState} from 'react'
import NavBarButton from './NavBarButton'
import retracement from './img/pct.png'

export const NavBar = (props) => {

    const {
        allTrades,
        tradeIdInView,
        browseChartsLeft,
        setIsAtEndOfTrades,
        setIsAtStartOfTrades,
        browseChartsRight,
        isAtStartOfTrades,
        isAtEndOfTrades,
        colorTheme,
        setIsABCD,
        isABCD,
        setIsRetracementMeasurement,
        retracementMeasurement,
        isCandles,
        setIsCandles
    } = props

    // console.log(retracementMeasurement)

    const [leftButton, setLeftButton] = useState(false)
    
    const [rightButton, setRightButton] = useState(false)

    const left_button_hover = () => {

        setLeftButton(true)
    }
    const left_button_exit = () => {

        setLeftButton(false)
    }
    const right_button_hover = () => {

        setRightButton(true)
    }
    const right_button_exit = () => {

        setRightButton(false)
    }


    const style_header = {
        background: colorTheme.single_trade.candle_chart.header.background_color
    }
    const style_border_right = {
        borderRight: colorTheme.single_trade.candle_chart.header.border_bewteen_button
    }
    const style_border_left = {
        borderLeft: colorTheme.single_trade.candle_chart.header.border_bewteen_button
    }
    const style_symbol = {
        background: colorTheme.single_trade.candle_chart.header.trade_symbol_background_color,
        color: colorTheme.single_trade.candle_chart.header.trade_symbol_color
    }
    const style_button_background = {
        background: colorTheme.single_trade.candle_chart.header.trade_symbol_background_color,
    }



    return(
        <div className='header_container' style={{background: colorTheme.card_header_color}}>

            <div className='header_wrapper'>		

                <div className='header_two_wrapper' >

                    <div className='header_icon_wrapper' style={leftButton ? {background: colorTheme.single_trade.candle_chart.header.trade_symbol_background_color}: {background: ''}} 
                        onMouseEnter={left_button_hover}
                        onMouseLeave={left_button_exit}
                        onClick={()=> 
                            {if(tradeIdInView >= 1){
                                browseChartsLeft()
                                setIsAtEndOfTrades(false)
                            
                            }
                            if(tradeIdInView === 0){
                    
                                setIsAtStartOfTrades(true)
                            }
                        }}
                    >
                        <img style={{filter: colorTheme.single_trade.candle_chart.header.icons_color }} className='header_icon_image' src={backbuttonwhite}/>			
                    </div>  

                    <div className='header_icon_wrapper'
                    style={rightButton ? {background: colorTheme.single_trade.candle_chart.header.trade_symbol_background_color}: {background: ''}} 
                    onMouseEnter={right_button_hover}
                    onMouseLeave={right_button_exit}
                        onClick={()=> 
                            {
                        
                                if(tradeIdInView < allTrades.length - 1){
                                
                                    browseChartsRight()
                                    setIsAtStartOfTrades(false)
                            
                                }
                                if(tradeIdInView === allTrades.length - 1){
                    
                                    setIsAtEndOfTrades(true)
                        }}}>	
                    <img style={{filter: colorTheme.single_trade.candle_chart.header.icons_color }} className='header_icon_image' src={arrowright}/>		
                </div> 
                    
                </div>

                <div className='header_three_wrapper' >

                    <NavBarButton setActive={setIsABCD} isActive={isABCD} colorTheme={colorTheme} isAtStartOfTrades={isAtStartOfTrades} image={abcd}/>

                    <NavBarButton setActive={setIsRetracementMeasurement} isActive={retracementMeasurement} colorTheme={colorTheme} isAtStartOfTrades={isAtStartOfTrades} image={retracement}/>

                    <NavBarButton setActive={setIsCandles} isActive={isCandles}colorTheme={colorTheme} isAtStartOfTrades={isAtStartOfTrades} image={candle}/>

                    <div className='header_icon_wrapper' 



    
             >
            <img 
                // style={isHovered ? style_icon_hovered_color : style_icon_color} 
                className={'header_icon_image'} 
                src={closefullscreen}/>			
         </div> 

                </div>
                                
            </div>       
        </div>
    )
}

export default NavBar