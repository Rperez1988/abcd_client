
import CandleChart from '../../03_candleChart/CandleChart'
import { SideBar } from './01_sidebar/SideBar'
import { Content } from './02_content/Content'
// import CandleChart from "../../../Components/Live_Trading/Components/CandleChart/CandleChart"
import './Body.css'

export const Body = (props) => {

    const {
        setIsABCD,
        isABCD,
        setIsRR,
        setIsSR,
        isRR,
        isSR,
        setIsCandles,
        isCandles,
        inFullScreen,
        mid,
        allTrades, 
        tradeIdInView,
        min,
        max,
        candleChart,
        distance,
        isTradeBeingViewed,
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
        colorTheme

        
        
    }
    = props

    const style_body = {
        background: 'rgb(43, 47, 58)',

    }

    return(
        <div className='Body' style={style_body}>
            <div className='Body_2'>
            
                <SideBar
                    setIsABCD={setIsABCD}
                    isABCD={isABCD}
                    setIsRR={setIsRR}   
                    setIsSR={setIsSR}
                    isRR={isRR}
                    isSR={isSR}
                    setIsCandles={setIsCandles}
                    isCandles={isCandles}
                    isA={isA}
					setIsA={setIsA}
					isB={isB}
					setIsB={setIsB}
                    isFibRetracement={isFibRetracement}
                    setIsFibRetracement={setIsFibRetracement}
                    isPriceAndDayMeasurement={isPriceAndDayMeasurement}
                    setIsPriceAndDayMeasurement={setIsPriceAndDayMeasurement}
                    retracementMeasurement={retracementMeasurement}
                    setIsRetracementMeasurement={setIsRetracementMeasurement}
                />


                {mid && <CandleChart 
                    isCandles={isCandles}
                    isABCD={isABCD} 
                    isRR={isRR} 
                    isSR={isSR} 
                    allTrades={allTrades[tradeIdInView]} 
                    inFullScreen={inFullScreen} 
                    mid={mid} 
                    min={min} 
                    max={max} 
                    testCandles={candleChart} 
                    distance={distance}
                    isA={isA}
                    setIsA={setIsA}
                    isB={isB}
                    setIsB={setIsB}
                    isFibRetracement={isFibRetracement}
                    tradeIdInView={tradeIdInView}
                    isPriceAndDayMeasurement={isPriceAndDayMeasurement}
                    retracementMeasurement={retracementMeasurement}
                /> }
                

                    
            

            </div>


        </div>
    )
}
