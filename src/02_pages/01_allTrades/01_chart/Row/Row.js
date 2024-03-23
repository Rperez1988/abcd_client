import { useEffect, useState } from 'react'
import './Row.css'
import config from '../../../../config.json';
const Row = (props) => {

    const {
        data,
        active,
        setActiveRowIndex,
        index,
        send_selected_symbol,
        symbol_info,
        retrieve_patterns,
        set_selected_patterns,
        set_selected_pattern,
        tableDataName,
        item
    
    } = props

    const get_style = (index, ) => {

        if(tableDataName === "Single Trade" && index === 1){
            return {
                color: item.trade_result === 'Win' ? 'white' : 
                item.trade_result === 'Lost' ? 'white' : 'white',
                // width: '60%',
                borderRadius: '0px',
                borderBottom: item.trade_result === 'Win' ? '3px inset teal' : 
                item.trade_result === 'Lost' ? '3px inset darkorange' : '3px inset gray',
                backgroundColor: 'black',
                fontWeight: 900,
            }
        }

        // if(index === 0){
        //     return{
        //         backgroundColor: 'black',
        //         border: '1px solid gray',
        //         // fontFamily: 'Staatliches, cursive',
        //         color: 'gray',
        //         fontWeight: '1000',
        //         // fontSize: '100%',
        //         // maxWidth: '40px'
        //         // color: 'gray'
                
        //     }
        // }
        // if(tableDataName === "BC Peformance" && index === 1){
        //     return {
                
        //         // backgroundColor: item.trade_result === 'Win' ? 'teal' : 
        //         // item.trade_result === 'Loss' ? '#fd5a5a' : 'white',
                
        //         color: 'lightblue',
    
        //         width: '35%',
        //         fontWeight: 900,
        //         borderBottom: '1px solid #51969a',
        //         borderRadius: '0px'
                

        //         // border: item.trade_result === 'Win' ? '1.6px solid teal' : 
        //         // item.trade_result === 'Loss' ? '1.6px solid #fd5a5a' : '1.6px solid white',
                
                
        //     }
        // }
        // if(tableDataName === "BC Peformance" && index === 2){
        //     return {
                
        //         // backgroundColor: item.trade_result === 'Win' ? 'teal' : 
        //         // item.trade_result === 'Loss' ? '#fd5a5a' : 'white',
                
        //         color: 'lightblue',
        //         width: '40%',
        //         fontWeight: 900,
        //         border: '1.5px inset teal',
        //         borderRadius: '5px',
                
        //         // border: item.trade_result === 'Win' ? '1.6px solid teal' : 
        //         // item.trade_result === 'Loss' ? '1.6px solid #fd5a5a' : '1.6px solid white',
                
                
        //     }
        // }
        // if(tableDataName === "BC Peformance" && index === 3){
        //     return {
        //         color: 'lightblue',
        //         width: '40%',
        //         fontWeight: 900,
        //         border: '1.5px inset darkorange',
        //         borderRadius: '5px',
        //         // backgroundColor: 'black'
                
        //     }
        // }
        // if(index === 0){
        //     return {
                
        //         color: 'lightblue',
        //         width: '75%',
        //         border: '3px solid #238aa7',
         
        //     }
        // }
        // if(index === 2){
        //     return {
                
        //         color: 'lightblue',
        //         width: '100%',
      
        //         fontWeight: 'lighter'
            
        //     }
        // }
    }




    return(

        <div className={active? 'trade_row_on' : 'trade_row_off'}
            onClick={async() => {
                setActiveRowIndex(index)
                await set_selected_pattern(item)
                await send_selected_symbol(symbol_info)
                // await retrieve_patterns(set_selected_patterns)
                
            }} >
            
            {/* DISPLAY EACH GIVEN VALUE FOR CURRENT ROW */}
            {data?.map((item,index)=>{
          
                return(
                    <div className='result-wrapper' key={index} style={get_style(index)}>
                        <div className='table_trade_number'> 
                            {item}
                        </div>
                    </div>
                )
            })}
            
    
        </div>
    )
}

export default Row


