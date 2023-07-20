import pivotline  from './img/pivot_black.png'
import abcdicon  from './img/abcd_black.png'
import riskreward  from './img/riskreward_black.png'
import candle  from './img/candle_black.png'
import fib  from './img/fib.png'
import ruler  from './img/length.png'
import './SideBar.css'

export const SideBar = (props) => {

    const {
        setIsABCD,
        isABCD,
        setIsRR,
        setIsSR,
        isRR,
        isSR,
        setIsCandles,
        isCandles,
        isA,
        setIsA,
        isB,
        setIsB,
        isFibRetracement,
        setIsFibRetracement,
        isPriceAndDayMeasurement,
        setIsPriceAndDayMeasurement,
        retracementMeasurement,
        setIsRetracementMeasurement,
        colorTheme,

    }
    = props
    
    return(

        <div className='candle_graph_sidebar' style={colorTheme.single_trade.candle_chart.sidebar.background_color}>
            <div className="sidebaricon" onClick={()=> {setIsABCD(!isABCD)}}>
                <img style={colorTheme.single_trade.candle_chart.sidebar.icon_color} className={!isABCD ? 'sidebarimg-active' : 'sidebarimg'} src={abcdicon}/>
            </div>
            <div className="sidebaricon" onClick={()=> {setIsRR(!isRR)}}>
                <img style={colorTheme.single_trade.candle_chart.sidebar.icon_color} className={!isRR ? 'sidebarimg-active' : 'sidebarimg'}  src={riskreward}/>
            </div>

            <div className="sidebaricon" onClick={()=> {setIsSR(!isSR)}}>
                <img style={colorTheme.single_trade.candle_chart.sidebar.icon_color} className={!isSR ? 'sidebarimg-active' : 'sidebarimg'} src={pivotline}/>
            </div>

            <div className="sidebaricon" onClick={()=> {setIsCandles(!isCandles)}}>
                <img style={colorTheme.single_trade.candle_chart.sidebar.icon_color} className={!isCandles ? 'sidebarimg-active' : 'sidebarimg'} src={candle}/>
            </div>
            <div className="sidebaricon" onClick={()=> {setIsA(!isA)}}>
                <div style={colorTheme.single_trade.candle_chart.sidebar.icon_color}  className={!isCandles ? 'sidebarimg-active' : 'sidebarimg'}>A</div>
            </div>
            <div className="sidebaricon" onClick={()=> {setIsB(!isB)}}>
                <div style={colorTheme.single_trade.candle_chart.sidebar.icon_color}  className={!isCandles ? 'sidebarimg-active' : 'sidebarimg'}>B</div>
            </div>
            <div className="sidebaricon" onClick={()=> {setIsFibRetracement(!isFibRetracement)}}>
                <img style={colorTheme.single_trade.candle_chart.sidebar.icon_color} className={!isCandles ? 'sidebarimg-active' : 'sidebarimg'} src={fib}/>
            </div>

            <div className="sidebaricon" onClick={()=> {setIsPriceAndDayMeasurement(!isPriceAndDayMeasurement)}}>
                <img style={colorTheme.single_trade.candle_chart.sidebar.icon_color} className={!isCandles ? 'sidebarimg-active' : 'sidebarimg'} src={ruler}/>
            </div>

            <div className="sidebaricon" onClick={()=> {setIsRetracementMeasurement(!retracementMeasurement)}}>
                <img style={colorTheme.single_trade.candle_chart.sidebar.icon_color} className={!isCandles ? 'sidebarimg-active' : 'sidebarimg'} src={ruler}/>
            </div>

        </div>
    )
}