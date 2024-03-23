
const BC_Performance_Row = (props) => {


    const {
        item,
        fetchData,
        set_active_bc_peformance,
        active,
        setTradeIdInView,
        setSelectedBC,
        setAllTrades,
        set_bc_tab,
        colorTheme,
        setcds,
        create_cd_objects,
		    get_cd_ojbects,
        
    } = props
    
    return(
        
      <div className={active ? 'peformance_row_on' : 'peformance_row_off'} key={item} 
          onClick={async () => {
          setTradeIdInView(0); 
          fetchData(item.retracement, item.retracement, setAllTrades); 
          set_active_bc_peformance(item.retracement);
          setSelectedBC(item.retracement);
          set_bc_tab(false);
          await create_cd_objects(item.retracement);
          get_cd_ojbects(setcds);
          }}
      >

        <div className='result-wrapper'>
          <div className={'table_trade_number'}>{item.retracement}</div>
        </div>
        {/* <div className="peformance_option">{item.retracement}</div> */}
        <div className="peformance_option">{item.trades}</div>
        <div className="peformance_option">{item.wins}</div>
        <div className="peformance_option">{item.lost}</div>
        <div className="peformance_option">{item.win_pct}</div>
        <div className="peformance_option">{item.lowest_price_dropped}</div>
        <div className="peformance_option">{item.average_price_dropped}</div>
        <div className="peformance_option">{item.rsi_wr}</div>
        <div className="peformance_option">{item.volume_change_win_pct}</div>
        <div className="peformance_option">{item.volume_change_lose_pct}</div>
        <div className="peformance_option">{item.average_length_win}</div>
        <div className="peformance_option">{item.average_length}</div>
                
              
      </div>

    )
}


export default BC_Performance_Row