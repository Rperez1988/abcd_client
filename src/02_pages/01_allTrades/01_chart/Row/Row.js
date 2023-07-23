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


    let status

    let rowOne_style = {
        // background: colorTheme.chart.row_1,
    }
    let rowTwo_style = {
        // background: colorTheme.chart.row_2,
    }
    const background_style = index % 2 === 0 ? rowOne_style : rowTwo_style;
    const [isHovered, setIsHovered] = useState(false)
    // Won, Lost, Live Colors
    if (item['tradeInfo']['tradeResult'] === 'Live'){
    
        status = {
            background: colorTheme.chart.status_live_background_color,
            border: colorTheme.chart.status_live_border,
            color: colorTheme.chart.status_live_color,
        };
    }
    else if (item['tradeInfo']['tradeResult'] === 'Loss'){
        status = {
            background: colorTheme.chart.status_lose_background_color,
            border: colorTheme.chart.status_lose_border,
            color: colorTheme.chart.status_lose_color,
        };
    }
    else if (item['tradeInfo']['tradeResult'] === 'Win'){
        status = {
            background: colorTheme.chart.status_win_background_color,
            border: colorTheme.chart.status_win_border,
            color: colorTheme.chart.status_win_color,
        };
    }
    const symbol = {
        color: 'teal'
    }
    const market = {
		background: colorTheme.chart.market_background_color,
		border: colorTheme.chart.market_border,
        color: colorTheme.chart.market_color,
	};
    const duration = {
        border: colorTheme.chart.duration_border,
        color: colorTheme.chart.duration_color,
    }
    const text_color = {
        // border: colorTheme.chart.duration_border,
        color: colorTheme.chart.duration_color,
    }

    const handleMouseEnter = () => {

        setIsHovered(true);
      }; 
      const handleMouseLeave = () => {
        setIsHovered(false);
      };

    function convertDateString(dateString) {
        // Split the date string into an array using the "-" delimiter
        var parts = dateString.split("-");
        
        // Rearrange the parts of the array to get the month/day/year string
        var convertedDateString = parts[1] + "-" + parts[2] + "-" + parts[0];
        
        // Return the converted date string
        return convertedDateString;
    }

    return(
        <div key={item} className={active ? 'trade_row_on' : 'trade_row_off'} 
        
        style={{ 
            backgroundColor: index % 2 === 0 ?  colorTheme.row_one_color : colorTheme.row_two_color,
            color: colorTheme.text_color
        }}
        
        onClick={() => {setTradeID(index); setActiveRowIndex(index)}} 
            
>

            <div className='result-wrapper'>
                <div className={'result-'}>{index}</div>
            </div>

            <div className='result-wrapper'>
                <div className={'result-'} style={{
                    
                    color: item['tradeInfo']['tradeResult'] === 'Live' ? 'black' : 'white',
            
            
                    border:parseFloat(item['pnl']['returnPercentage']) > 0 ? '1px solid darkgreen' : '1px solid darkred',
                    
                    background: item['tradeInfo']['tradeResult'] === 'Win' ? 'teal' : 
                    item['tradeInfo']['tradeResult'] === 'Loss' ? 'darkred' : 'white' ,
            
            }}>{item['tradeInfo']['tradeResult']}</div>
            </div>

            <div className='symbol-wrapper' >{item['tradeInfo']['symbol']}</div>

            {/* <div className='default-wrapper' style={text_color}>${item['enterExitInfo']['enterPrice']}</div>

            <div className='default-wrapper' style={text_color}>${item['enterExitInfo']['exitPrice']}</div> */}

            {/* <div className='market-wrapper' >
                <div className='rowcolor2--longborder'
                    style={market}>{item['tradeInfo']['completeTradeType']}</div>
            </div> */}

            <div className='default-wrapper' style={{color: parseFloat(item['pnl']['pnl']) > 0 ? 'teal' : '#950000' }}>${item['pnl']['pnl']}</div>

            <div className='default-wrapper' style={{color: parseFloat(item['pnl']['returnPercentage']) > 0 ? 'teal' : '#950000' }}>{item['pnl']['returnPercentage']}%</div>

{/* 
            <div className='default-wrapper' style={text_color}>{convertDateString(item['pivotInfo']['pivotA']['date'])}</div>
            <div className='default-wrapper' style={text_color}>{convertDateString(item['pivotInfo']['pivotB']['date'])}</div>     

            <div className='default-wrapper' style={text_color}>{convertDateString(item['pivotInfo']['pivotC']['date'])}</div>      */}
            <div className='default-wrapper' style={text_color}>{convertDateString(item['enterExitInfo']['enterDate'])}</div>

            {/* <div className='default-wrapper' style={text_color}>{convertDateString(item['enterExitInfo']['exitDate'])}</div> */}

            <div className='duration-wrapper'>
                <div className='duration-border' style={duration}>{item.tradeInfo['tradeDuration']} Days</div>
            </div>

            {/* <div className='default-wrapper' style={text_color}>
                <div className='rowcolor2--typeborder'>{item['settings']['settingsName']}</div>
            </div> */}
{/* 
            <div className='default-wrapper' style={text_color}>
                <div className={'rowcolor2--typeborder'}>{item['tradeInfo']['exchange']}</div>
            </div> */}

            {/* <div className='default-wrapper' style={text_color}>
                <div className={'rowcolor2--typeborder'}>{item.tradeInfo.pivot_number}</div>
            </div> */}

            <div className='default-wrapper' style={text_color}>
                <div className={'rowcolor2--typeborder'}>{item.retracement.bcRetracement}</div>
            </div>

            <div className='default-wrapper' style={text_color}>
                <div className={'rowcolor2--typeborder'}>{item.retracement.cdRetracement}</div>
            </div>

            
            <div className='default-wrapper' style={text_color}>
                <div className={'rowcolor2--typeborder'}>{item.tradeInfo.rsi}</div>
            </div>
        </div>
    )
}

export default Row


