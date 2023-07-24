import react, {useState} from 'react'
import TradeObjectSingleInfo from './trade_object_single_info'
import './trade_object_info.css'

const TradeObjectInfo = (props) => {

    const {
        allTrades,
        colorTheme,
        tradeIdInView
    } = props

    return(

        <div className='single_trade_information' style={colorTheme.single_trade.trade_info.main}>
            
            <TradeObjectSingleInfo 
                colorTheme={colorTheme} 
                mappingObject={allTrades !== undefined ? allTrades[tradeIdInView]['tradeInfo'] : []}
                filter={'abcd_volumes'}
                header={'General'}
            />
             {/* <TradeObjectSingleInfo 
                colorTheme={colorTheme} 
                mappingObject={allTrades[tradeIdInView]['enterExitInfo']}
                filter={'abcd_volumes'}
                header={'Enter & Exit'}
            /> 
              <TradeObjectSingleInfo 
                colorTheme={colorTheme} 
                mappingObject={allTrades[tradeIdInView]['pnl']}
                filter={'abcd_volumes'}
                header={'PNL'}
            />       */}


{/* 
            
          

          <TradeObjectSingleInfo 
                colorTheme={colorTheme} 
             mappingObject={allTrades[tradeIdInView]['settings']}
                 filter={'abcd_volumes'}
                 header={'Settings'}
             />  

            <TradeObjectSingleInfo 
                colorTheme={colorTheme} 
                mappingObject={allTrades[tradeIdInView]['retracement']}
                filter={'abcd_volumes'}
                header={'Retracement'}
            /> 

             <TradeObjectSingleInfo 
                colorTheme={colorTheme} 
                mappingObject={allTrades[tradeIdInView]['tradeInfo']}
                filter={'abcd_volumes'}
                header={'General'}
            />  

            <TradeObjectSingleInfo 
                colorTheme={colorTheme} 
                mappingObject={allTrades[tradeIdInView]['pivotInfo']['pivotB']}
                filter={'abcd_volumes'}
                header={'Pivot D'}
            />  
      
             <TradeObjectSingleInfo 
                colorTheme={colorTheme} 
                mappingObject={allTrades[tradeIdInView]['duration']['bars']}
                filter={'abcd_volumes'}
                header={'Duration'}
            /> 

            
            
             <TradeObjectSingleInfo 
                colorTheme={colorTheme} 
                mappingObject={allTrades[tradeIdInView]['pivotInfo']['pivotA']}
                filter={'abcd_volumes'}
                header={'Pivot A'}
            />

            <TradeObjectSingleInfo 
                colorTheme={colorTheme} 
                mappingObject={allTrades[tradeIdInView]['pivotInfo']['pivotB']}
                filter={'abcd_volumes'}
                header={'Pivot B'}
            />

             <TradeObjectSingleInfo 
                colorTheme={colorTheme} 
                mappingObject={allTrades[tradeIdInView]['pivotInfo']['pivotB']}
                filter={'abcd_volumes'}
                header={'Pivot C'}
            /> 

            
          */}
       
          

    

        </div>

    )
}

export default TradeObjectInfo