import Reaect, { useState, useEffect } from 'react'
import './TradeStatus.css'


const TradeStatus = (props) => {

    const {
        allTrades,
        tradeIdInView
    } = props

    const [statusDetails, setStatusDetails] = useState()

    // useEffect(()=>{

    //     allTrades && setStatusDetails(
    //         {
    //             'Status': allTrades[tradeIdInView]['tradeClosed'] === 'True' ? 'Closed' : 'Open',
    //             'TimeFrame': 'Day',
    //             'Trade': tradeIdInView + ' of ' + allTrades.length,
    //             'Side': 'Short',
    //             'Result':allTrades[tradeIdInView]['tradeResult'],
    //             'Exchange':allTrades[tradeIdInView]['exchange'],
    //             'Symbol':allTrades[tradeIdInView]['stockNameSymbol'],
    //             'Bar #': 205,
    //             'Entered Price': allTrades[tradeIdInView]['enterExitInfo']['enterPrice'],
    //             'Exited Price': allTrades[tradeIdInView]['enterExitInfo']['exitPrice'],
    //             'Entered Date': allTrades[tradeIdInView]['enterExitInfo']['enterDate'],
    //             'Exited Date': allTrades[tradeIdInView]['enterExitInfo']['exitDate'],
    //             'Take-Profit': allTrades[tradeIdInView]['takeProfit'],
    //             'Stop-Loss': allTrades[tradeIdInView]['stopLoss'],
    //             'Reward': allTrades[tradeIdInView]['reward'],
    //             'Risked': allTrades[tradeIdInView]['risk'],
    //             'RRR': '1:'+allTrades[tradeIdInView]['riskRewardRatio'],
    //             'PNL': allTrades[tradeIdInView]['pnl'],
    //             'Type': allTrades[tradeIdInView]['completeTradeType'],
    //             'C-RSI': allTrades[tradeIdInView]['rsiOnEnter'],
    //             'Trade Duration': allTrades[tradeIdInView]['tradeDuration'] + ' Bars',
    //             'C-Retracement': '-',
    //             'D-Retracement': '-',
    //             'Settings': allTrades[tradeIdInView]['settingsName'],
    //             'Unrealized-Return': '-',
    //             'Bar-Length': allTrades[tradeIdInView]['chartData'].length,
    //             'Days-Length': '-',
    //             'D-SR_Level': 'Low',
    //             'ROI': allTrades[tradeIdInView]['returnPercentage'] + '%',
    //             'Reversal-Candle': 'Shooting-Star',
    //             'Trend': 'Bear',
    //             'C-Retracement': allTrades[tradeIdInView]['bcRetracement']


    //         }
    //     )

    // },[allTrades,tradeIdInView])


    return(
        <div className="ChartHeader_2">


        </div>

    )
}

export default TradeStatus