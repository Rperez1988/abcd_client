

const TradeObjectSingleInfo = (props) => {

    const {
        colorTheme,
        mappingObject,
        filter,
        header
    } = props
        
   
    return(

        <div className='trade_info_container'>

            <div className="trade_info_wrapper" style={colorTheme.single_trade.trade_info.single_info_block.border}>

                <div className='trade_info_header_wrapper' style={
                    {background: colorTheme.card_header_color}
                    
                    
                    }>{header}</div>
                
                <div className='trade_info_body_wrapper'>

                        {Object.keys(mappingObject)?.map((item,index)=>{

                            
                            
                                {if(item !== filter){
                                    return(
                                        <div className='single_trade_single_stat'
                                        style={index % 0 === 0 ? {background: 'rgb(59 82 93)'} : {background: 'rgba(255,0,0,0)'}}
                                        
                                        key={index}>
                                            <div className='single_stat_header'>{item}</div>
                                            <div className='single_stat_body'
                                            style={colorTheme.single_trade.trade_info.single_info_block.value_color}>
                                                {mappingObject[item]}
                                            </div>
                                        </div>
                                    )
                                }}
                            })}
                </div>

             </div>
        </div>

    )
}

export default TradeObjectSingleInfo