import { useEffect, useState } from 'react'
import './Row.css'

const Row = (props) => {

    const {
        active,
        setActiveRowIndex,
        item,
        index, 
        setTradeID,
        colorTheme,
    } = props


    function convertDateString(dateString) {
        // Split the date string into an array using the "-" delimiter
        var parts = dateString.split("-");
        
        // Rearrange the parts of the array to get the month/day/year string
        var convertedDateString = parts[1] + "-" + parts[2] + "-" + parts[0];
        
        // Return the converted date string
        return convertedDateString;
    }

    return(

        <div className={active ? 'trade_row_on' : 'trade_row_off'} style={{borderLeft: item['tradeInfo']['tradeResult'] === 'Win' ? '3px solid teal' : '3px solid red'}}
            onClick={() => {setTradeID(index); setActiveRowIndex(index); }}>

            <div className='result-wrapper'>
                <div className={'result-'}>{index}</div>
            </div>

            <div className='result-wrapper'>
                <div className={'result-'} style={{}}>{item['tradeInfo']['tradeResult']}</div>
            </div>

            <div className='symbol-wrapper' >{item['tradeInfo']['symbol']}</div>

            <div className='default-wrapper' style={{}}>${item['pnl']['pnl']}</div>

            <div className='default-wrapper' style={{}}>{item['pnl']['returnPercentage']}%</div>

            <div className='default-wrapper' style={{}}>{convertDateString(item['enterExitInfo']['enterDate'])}</div>

            <div className='duration-wrapper'>
                <div className='duration-border' style={{}}>{item.tradeInfo['tradeDuration']} Days</div>
            </div>

            <div className='default-wrapper' style={{}}>
                <div className={'rowcolor2--typeborder'}>{item.retracement.bcRetracement}</div>
            </div>

            <div className='default-wrapper' style={{}}>
                <div className={'rowcolor2--typeborder'}>{item.retracement.cdRetracement}</div>
            </div>
         
            <div className='default-wrapper' style={{}}>
                <div className={'rowcolor2--typeborder'}>{item.tradeInfo.rsi}</div>
            </div>

        </div>
    )
}

export default Row


