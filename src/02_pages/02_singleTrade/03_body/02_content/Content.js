import CandleChart from "../../../03_candleChart/CandleChart"
// import PivotDetails from "./PivotDetails/PivotDetails"
// import TradeAnalytics from "./TradeAnalytics"
// import Peformance from "./Performance/Peformance"

import './Content.css'

import { StatsRect } from "./StatRect/Stats"
import { StatBox } from "./StatBox/StatBox"
import TradeStatus from "./StatRect/TradeStatus/TradeStatus"
import SingleTrade_Details from "./singleTrade_details"


export const Content = (props) => {

    const {
        allTrades, 
        tradeIdInView,
        scaledCandles,
        highAndLowDistanceApart,
        isABCD,
        isRR,
        isSR,
        isCandles,
        inFullScreen,
        midPriceInCandleChart,
        isA,
        setIsA,
        isB,
        setIsB,
        isFibRetracement,
        isPriceAndDayMeasurement,
        retracementMeasurement,
        colorTheme,
    }
    = props



    let rowOne = {
        'Status' : allTrades[tradeIdInView]['tradeClosed'] === 'True' ? 'Closed' : "Open",
        'Result':  'Win',
        'Type': allTrades[tradeIdInView]['completeTradeType'],
        'PNL': allTrades[tradeIdInView]['pnl'],
        'Duration': allTrades[tradeIdInView]['tradeDuration'],
        'Trade ID' : allTrades[tradeIdInView]['tradeID'],
        'Symbol':  allTrades[tradeIdInView]['stockNameSymbol'],
        'Exchange': allTrades[tradeIdInView]['exchange'],
        'Invested': '0',
        'ROI': allTrades[tradeIdInView]['returnPercentage']+'%',
    }
    let rowTwo = {
        'Trade ID' : allTrades[tradeIdInView]['tradeID'],
        'Symbol':  allTrades[tradeIdInView]['stockNameSymbol'],
        'Exchange': allTrades[tradeIdInView]['exchange'],
        'Invested': '0',
        'ROI': allTrades[tradeIdInView]['returnPercentage']+'%',
    }

    let color = 'rgb(223, 223, 255);'
    let abcdColor = 'darkorange'
    let white = 'rgb(223, 223, 255)'

    let duration = {
        'A to B Bars:': allTrades[tradeIdInView]['duration']['bars']['A_to_B'],
        'B to C Bars:': allTrades[tradeIdInView]['duration']['bars']['B_to_C'],
        'C to D Bars:': allTrades[tradeIdInView]['duration']['bars']['C_to_D'],
        'A to B Days:': allTrades[tradeIdInView]['duration']['days']['A_to_B'],
        'B to C Days:': allTrades[tradeIdInView]['duration']['days']['B_to_C'],
        'C to D Days:': allTrades[tradeIdInView]['duration']['days']['C_to_D'],
    }
    let movement = {
        'AB Price Length:': allTrades[tradeIdInView]['movement']['atoBMovement'],
        'BC Price Length:':   allTrades[tradeIdInView]['movement']['btoCMovement'],
        'CD Price Length:':   (allTrades[tradeIdInView]['pivotInfo']['pivotC']['high'] - allTrades[tradeIdInView]['pivotInfo']['pivotD']['low']).toFixed(2),
        'AB Price Length Pct.:':  allTrades[tradeIdInView]['movement']['aToBPct'] + '%',
        'BC Price Length Pct.:':  allTrades[tradeIdInView]['movement']['bToCPct'] + '%',
        'CD Price Length Pct.:':  allTrades[tradeIdInView]['movement']['cToDPct'] + '%',
        'AB Bar Length:': allTrades[tradeIdInView]['duration']['bars']['A_to_B'],
        'BC Bar Length:': allTrades[tradeIdInView]['duration']['bars']['B_to_C'],
        'CD Bar Length:': allTrades[tradeIdInView]['duration']['bars']['C_to_D'],
        'AB Bar Length Pct.:': allTrades[tradeIdInView]['duration']['bars']['ab_pct'],
        'BC Bar Length Pct:': allTrades[tradeIdInView]['duration']['bars']['bc_pct'],
        'CD Bar Length Pct:': allTrades[tradeIdInView]['duration']['bars']['cd_pct'],
    }
    let retracement = {
        'BC Retracement:': allTrades[tradeIdInView]['retracement']['bcRetracement'],
        'CD Retracement:': allTrades[tradeIdInView]['retracement']['cdRetracement'],
    }
    let entryAndExit = {
        'Entry Date:': allTrades[tradeIdInView]['enterExitInfo']['enterDate'],
        'Entry Price:': allTrades[tradeIdInView]['enterExitInfo']['enterPrice'],
        'Exit Date:': allTrades[tradeIdInView]['enterExitInfo']['exitDate'],
        'Exit Price:': allTrades[tradeIdInView]['enterExitInfo']['exitPrice'],
    }
    let pnl = {
        'Take Profit:': allTrades[tradeIdInView]['pnl']['takeProfit'],
        'Stop Lost': allTrades[tradeIdInView]['pnl']['stopLoss'],
        'Risked': allTrades[tradeIdInView]['pnl']['risk'],
        'Reward': allTrades[tradeIdInView]['pnl']['reward'],
        'PNL': allTrades[tradeIdInView]['pnl']['pnl'],
    }
    let extra = {
        'S/R Recency:': '-',
        'S/R Bounces:': '-',
        'S/R Magnitude:': '-',
        'Amount Invested:': '-',
        'Pct. of Cash Invested::': '-',
        'ROI:': '-',
        'SQN:': '-',
        'Total Bars:': '-',
        'Total Days:': '-',
        'Sharp Ratio:': '-',
        'Sortino Ratio:': '-',
        'Calmar Ratio:': '-',
        'Sharp Ratio:': '-',
        'Sharp Ratio:': '-',
        'A-Candle:': '-',
        'B-Candle:': '-',
        'C-Candle:': '-',
        'D-Candle:': '-',

    }
    let status = {
        'Status:': allTrades[tradeIdInView]['tradeInfo']['tradeClosed'] ? 'Closed' : 'Open',
        'Type:': allTrades[tradeIdInView]['tradeInfo']['completeTradeType'],
        'Exchange:': allTrades[tradeIdInView]['tradeInfo']['exchange'],
        'TimeFrame:': 'Day',
        'Symbol:': allTrades[tradeIdInView]['tradeInfo']['symbol'],
        'Result:': allTrades[tradeIdInView]['tradeInfo']['tradeResult'],
        'Trade:': (tradeIdInView + ' of ' + allTrades.length),
        'Settings': allTrades[tradeIdInView]['settings']['settingsName'],
        'PNL': allTrades[tradeIdInView]['pnl']['pnl'],
        'Start': allTrades[tradeIdInView]['tradeInfo']['startDate'],
        'End': allTrades[tradeIdInView]['tradeInfo']['endDate']
    }
    let investement = {
        'ROI': allTrades[tradeIdInView]['roi'],
    }
    let pivot = {
        'A-Date:': allTrades[tradeIdInView]['pivotInfo']['pivotA']['date'],
        'A-High:': allTrades[tradeIdInView]['pivotInfo']['pivotA']['high'],
        'A-Open:': allTrades[tradeIdInView]['pivotInfo']['pivotA']['open'],
        'A-Close:': allTrades[tradeIdInView]['pivotInfo']['pivotA']['close'],
        'A-Low:': allTrades[tradeIdInView]['pivotInfo']['pivotA']['low'],

        'B-Date:': allTrades[tradeIdInView]['pivotInfo']['pivotB']['date'],
        'B-High:': allTrades[tradeIdInView]['pivotInfo']['pivotB']['high'],
        'B-Open:': allTrades[tradeIdInView]['pivotInfo']['pivotB']['open'],
        'B-Close:': allTrades[tradeIdInView]['pivotInfo']['pivotB']['close'],
        'B-Low:': allTrades[tradeIdInView]['pivotInfo']['pivotB']['low'],

        'C-Date:': allTrades[tradeIdInView]['pivotInfo']['pivotC']['date'],
        'C-High:': allTrades[tradeIdInView]['pivotInfo']['pivotC']['high'],
        'C-Open:': allTrades[tradeIdInView]['pivotInfo']['pivotC']['open'],
        'C-Close:': allTrades[tradeIdInView]['pivotInfo']['pivotC']['close'],
        'C-Low:': allTrades[tradeIdInView]['pivotInfo']['pivotC']['low'],

        'D-Date:': allTrades[tradeIdInView]['pivotInfo']['pivotD']['date'],
        'D-High:': allTrades[tradeIdInView]['pivotInfo']['pivotD']['high'],
        'D-Open:': allTrades[tradeIdInView]['pivotInfo']['pivotD']['open'],
        'D-Close:': allTrades[tradeIdInView]['pivotInfo']['pivotD']['close'],
        'D-Low:': allTrades[tradeIdInView]['pivotInfo']['pivotD']['low'],
    }
    let rsi = {
        'A-RSI:': 0,
        'B-RSI:': 0,
        'C-RSI:': 0,
        'D-RSI:': 0,
    }
    let settings = {

    }
        
    return(
        <div className='ChartAndStats'>

            <div className='ChartAndStats_2'>

                <div className='ChartAndStats_Chart'>

                    <div className="Chart">
                        <div className="Chart_2" style={{border: colorTheme.single_trade.chart_border}}>
                            
                        {scaledCandles && (     <CandleChart 
                                scaledCandles={scaledCandles} 
                                highAndLowDistanceApart={highAndLowDistanceApart}
                                isCandles={isCandles}
                                isABCD={isABCD} 
                                isRR={isRR} 
                                isSR={isSR} 
                                allTrades={allTrades[tradeIdInView]} 
                                inFullScreen={inFullScreen} 
                                midPriceInCandleChart={midPriceInCandleChart} 
                                // min={min} 
                                // max={max} 
                             
                                
                                isA={isA}
                                setIsA={setIsA}
                                isB={isB}
                                setIsB={setIsB}
                                isFibRetracement={isFibRetracement}
                                isPriceAndDayMeasurement={isPriceAndDayMeasurement}
                                retracementMeasurement={retracementMeasurement}
                                colorTheme={colorTheme}
                            />  )}
       
                      
                        </div>
           
                    </div>

                    {/* <div className="ChartHeader" >

                        <div className="ChartHeader_2" style={{border: colorTheme.single_trade.chart_border}}>


                        </div>
                        
                    </div>  */}

                </div>
                
                <div className="ChartAndStats_StatsRight">

                    <div className="ChartAndStats_Stats2">
                        

                        <SingleTrade_Details
                            header={'STATUS'}  
                            list={status}
                            flexWrap={'16%'}
                            colorTheme={colorTheme}
                        />

                        <SingleTrade_Details
                            header={'PNL'}  
                            list={pnl}
                            flexWrap={'23%'}
                            colorTheme={colorTheme}
                        />

                        <SingleTrade_Details
                            header={'PIVOT INFO'}  
                            list={pivot}
                            flexWrap={'23%'}
                            colorTheme={colorTheme}
                        />

                    </div>

                    <div className="ChartAndStats_Stats2">

                        <SingleTrade_Details
                            header={'MOVEMENT'}  
                            list={movement}
                            flexWrap={'23%'}
                            colorTheme={colorTheme}
                        />

                        <SingleTrade_Details
                            header={'SETTINGS'}  
                            list={allTrades[tradeIdInView]['settings']}
                            flexWrap={'23%'}
                            colorTheme={colorTheme}
                        />


                        <SingleTrade_Details
                            header={'INFO'}  
                            list={extra}
                            flexWrap={'23%'}
                            colorTheme={colorTheme}
                        />

                        

                        <SingleTrade_Details
                            header={'TREND'}  
                            list={[]}
                            flexWrap={'23%'}
                            colorTheme={colorTheme}
                        />


                    </div>

                    <div className="ChartAndStats_Stats2">

                            <SingleTrade_Details
                                header={'DURATION'}  
                                list={duration}
                                flexWrap={'16%'}
                                colorTheme={colorTheme}
                            />

                            <SingleTrade_Details
                                header={'RETRACEMENT'}  
                                list={retracement}
                                flexWrap={'15%'}
                                colorTheme={colorTheme}
                            />

                            <SingleTrade_Details
                                header={'ENTRY & EXIT'}  
                                list={entryAndExit}
                                flexWrap={'23%'}
                                colorTheme={colorTheme}
                            />

                            <SingleTrade_Details
                                header={'OVERBOUGHT & OVERSOLD'}  
                                list={rsi}
                                flexWrap={'23%'}
                                colorTheme={colorTheme}
                            />


                            <SingleTrade_Details
                                header={'INVESTED'}  
                                list={investement}
                                flexWrap={'23%'}
                                colorTheme={colorTheme}
                            />

                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}

 
