import BC_Performance_Row from "./bc_peformance_row"
import right  from './img/right.png'
import left  from './img/left.png'
import refresh from './img/refresh.png'
import fullscreen from './img/closefullscreen.png'
import react,{useEffect, useState} from 'react'
import './bc_peformance.css'

const BC_Performance = (props) => {

    const {
        all_peformances,
        fetchData,
        access_trades,
        setAllTrades,
        get_selected_trades,
        setTradeIdInView,
        setSelectedBC,
        colorTheme,
        index
    } = props


    const [bc_tab_open, set_bc_tab] = useState(true)
    const [active_bc_peformance, set_active_bc_peformance] = useState()
    const bc_header = ['BC', 'Trades', 'Wins', 'Lost', 'Win Pct','LPD','APD','RSI WR', 'Vol WR','Vol LR', 'Avg Len W', 'Avg Len L']
    const [columnSelected, setColumnSelected] = useState()
    const [sortedPeformances, setSortedPeformances] = useState()
    const [selectedIndex, setSelectedIndex] = useState(0)

    useEffect(()=>{

        setSortedPeformances(all_peformances)
            

    },[all_peformances])

    const handle_sorting = (item) => {
        if(item === 'Lost'){
            let sortedData = [...all_peformances].sort((a, b) => b.active - a.active)
            setSortedPeformances(sortedData)
        }
        if(item === 'Trades'){
            let sortedData = [...all_peformances].sort((a, b) => b.trades - a.trades)
            setSortedPeformances(sortedData)
        }
        if(item === 'Lost'){
            let sortedData = [...all_peformances].sort((a, b) => b.lost - a.lost)
            setSortedPeformances(sortedData)
        }
        if(item === 'APD'){
            let sortedData = [...all_peformances].sort((a, b) => b.average_price_dropped - a.average_price_dropped)
            setSortedPeformances(sortedData)
        }
        if(item === 'LPD'){
            let sortedData = [...all_peformances].sort((a, b) => b.lowest_price_dropped - a.lowest_price_dropped)
            setSortedPeformances(sortedData)
        }
        if(item === 'RSI WR'){
            let sortedData = [...all_peformances].sort((a, b) => b.rsi_wr - a.rsi_wr)
            setSortedPeformances(sortedData)
        }
        if(item === 'VOL LR'){
            let sortedData = [...all_peformances].sort((a, b) => b.volume_change_lose_pct - a.volume_change_lose_pct)
            setSortedPeformances(sortedData)
        }
        if(item === 'VOL WR'){
            let sortedData = [...all_peformances].sort((a, b) => b.volume_change_win_pct - a.volume_change_win_pct)
            setSortedPeformances(sortedData)
        }
        if(item === 'WIN PCT'){
            let sortedData = [...all_peformances].sort((a, b) => b.win_pct - a.win_pct)
            setSortedPeformances(sortedData)
        }
        if(item === 'WINS'){
            let sortedData = [...all_peformances].sort((a, b) => b.wins - a.wins)
            setSortedPeformances(sortedData)
        }
        if(item === 'BC'){
            let sortedData = [...all_peformances].sort((a, b) => b.retracement - a.retracement)
            setSortedPeformances(sortedData)
        }
        
        
    }
    
    return(

        <div className="cd_selection_container" >

            <div className="cd_settings" 
            
            style={     {background: colorTheme.card_header_color}}
            >
            <div className="cd_icon_wrapper">
                    <img className='cd_img'src={refresh}/>
                </div>
                <div className="cd_icon_wrapper">
                    <img className='cd_img'src={left} onClick={()=>{setSelectedIndex(selectedIndex === 0 ? 0 : (prevIndex => prevIndex - 1))}}/>
                </div>
                <div className="cd_icon_wrapper">
                    <img className='cd_img'src={right} onClick={()=>{setSelectedIndex(selectedIndex === 100 ? 100 :prevIndex => prevIndex + 1)}}/>
                </div>
                <div className="cd_icon_wrapper">
                    <img className='cd_img'src={fullscreen}/>
                </div>
            </div>

            <div className="cd_selection_" style={{background: 'rgb(17 36 62)',color: "white"}}>
                <div className="peformance_row_off">

                    {bc_header.map((item,index) => {

                        return(
                            <div className="peformance_option_header" onClick={()=> {handle_sorting(item)}} key={index}>{item}</div>
                        )
                    })}

                </div>
            </div>

            <div className='cd_selection_on'>

            <div className='no_trades'>No Trades</div> 
                        
                {sortedPeformances && sortedPeformances.map((item,index) => (

                   <BC_Performance_Row
                        key={index}
                        active={index === selectedIndex ? true : false}
                        all_peformances={sortedPeformances}
                        item={item}
                        fetchData={fetchData}
                        access_trades={access_trades}
                        setAllTrades={setAllTrades}
                        get_selected_trades={get_selected_trades}
                        index={index}
                        set_active_bc_peformance={set_active_bc_peformance}
                        setTradeIdInView={setTradeIdInView} 
                        setSelectedBC={setSelectedBC}
                        set_bc_tab={set_bc_tab}
                        colorTheme={colorTheme}
                        setSelectedIndex={setSelectedIndex}
                    />

      


                ))}

            </div>
        
        </div>


    )
}


export default BC_Performance