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
        allTrades,
        setSelectedIndex,
        selectedIndex,
        sortedPeformances,
        setSortedPeformances,
        setcds,
        create_cd_objects,
		get_cd_ojbects,
    } = props


    const [bc_tab_open, set_bc_tab] = useState(true)
    const [active_bc_peformance, set_active_bc_peformance] = useState()
    const bc_header = ['BC', 'Trades', 'Wins', 'Lost', 'Win Pct','LPD','APD','RSI WR', 'Vol WR','Vol LR', 'Avg Len W', 'Avg Len L']
    const [columnSelected, setColumnSelected] = useState()




    const handle_sorting = (item) => {
        if(item === 'Lost'){
            let sortedData = [...all_peformances].sort((a, b) => b.lost - a.lost)
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
            // let sortedData = [...all_peformances].sort((a, b) => b.average_price_dropped - a.average_price_dropped)

            let sortedData = [...all_peformances].sort((a, b) => {
                const aValue = parseFloat(a.average_price_dropped);
                const bValue = parseFloat(b.average_price_dropped);
                return bValue - aValue;
              });
            setSortedPeformances(sortedData)
        }
        if(item === 'LPD'){
            // let sortedData = [...all_peformances].sort((a, b) => b.lowest_price_dropped - a.lowest_price_dropped)
            let sortedData = [...all_peformances].sort((a, b) => {
                const aValue = parseFloat(a.lowest_price_dropped);
                const bValue = parseFloat(b.lowest_price_dropped);
                return bValue - aValue;
              });
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
        if(item === 'Win Pct'){
            // let sortedData = [...all_peformances].sort((a, b) => b.win_pct - a.win_pct)

            let sortedData = [...all_peformances].sort((a, b) => {
                const aValue = parseFloat(a.win_pct);
                const bValue = parseFloat(b.win_pct);
                return bValue - aValue;
              });
            setSortedPeformances(sortedData)
        }
        if(item === 'Wins'){
            let sortedData = [...all_peformances].sort((a, b) => b.wins - a.wins)
            setSortedPeformances(sortedData)
        }
        if(item === 'BC'){
            let sortedData = [...all_peformances].sort((a, b) => b.retracement - a.retracement)
            setSortedPeformances(sortedData)
        }
        if(item === 'Avg Len L'){
            let sortedData = [...all_peformances].sort((a, b) => b.average_length - a.average_length)
            setSortedPeformances(sortedData)
        }
        
        
    }
    
    return(

        <div className="cd_selection_container" >

            <div className="cd_selection_" style={{background: '#040507',color: "white"}}>
                <div className="peformance_row_off">

                    {bc_header.map((item,index) => {

                        return(
                            <div className="peformance_option_header" onClick={()=> {handle_sorting(item)}} key={index}>{item}</div>
                        )
                    })}

                </div>
            </div>

            <div className='cd_selection_on'>

                {allTrades === undefined && <div className='no_trades'>No Trades</div>} 

                {allTrades !== undefined && 
                
                sortedPeformances && sortedPeformances?.map((item,index) => (

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
                   
                         setcds={setcds}
                         create_cd_objects={create_cd_objects}
					    get_cd_ojbects={get_cd_ojbects}
                     />
 
       
 
 
                 ))
                
                
                }    
            

            </div>

            <div className="cd_selection_footer"></div>
       
        
        </div>


    )
}


export default BC_Performance