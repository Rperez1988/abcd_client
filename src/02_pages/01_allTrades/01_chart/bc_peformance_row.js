import { useEffect, useState } from "react"

const BC_Performance_Row = (props) => {


    const {
        all_peformances,
        item,
        fetchData,
        set_active_bc_peformance,
        active,
        setTradeIdInView,
        setSelectedBC,
        access_trades,
        get_selected_trades,
        setAllTrades,
        set_bc_tab,
        setSelectedIndex,
        index,
        colorTheme,
    } = props

    return(
        

        

		<div className={active ? 'peformance_row_on' : 'peformance_row_off'} 
        style={{
            backgroundColor: index % 2 === 0 ? colorTheme.row_one_color : colorTheme.row_two_color,
            color: colorTheme.text_color
        }}
        
        key={item} onClick={()=>{
            setTradeIdInView(0); 
            fetchData(item.retracement, '1-500',access_trades,get_selected_trades,setAllTrades); 
            set_active_bc_peformance(item.retracement);
            setSelectedBC(item.retracement);
            set_bc_tab(false);
            setSelectedIndex(index)
            
            }}>

            <div className="peformance_option">{item.retracement}</div>
            <div className="peformance_option">{item.trades}</div>
            <div className="peformance_option">{item.wins}</div>
            <div className="peformance_option">{item.lost}</div>
            <div className="peformance_option">{item.active}</div>
            <div className="peformance_option">{item.win_pct}</div>
            <div className="peformance_option">{item.lowest_price_dropped}</div>
            <div className="peformance_option">{item.average_price_dropped}</div>
            <div className="peformance_option">{item.volume_change_win_pct}</div>
            <div className="peformance_option">{item.volume_change_lose_pct}</div>
            <div className="peformance_option">{item.volume_change_win_pct}</div>
            <div className="peformance_option">{item.volume_change_lose_pct}</div>
            
             </div>

    )
}


export default BC_Performance_Row