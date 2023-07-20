import React, { useEffect, useState } from 'react';
import './TabDetails.css'

const TabDetails = (props) => {



    const {returnInfo, bottomFooterStats, line,colorTheme} = props

    const divStyle = {
        background: colorTheme.tab.background_color,
        // border: colorTheme.tab.border,
        color: colorTheme.tab.color,
      };
    



    return(
        <div className='tradeDetails-Container'>

            {returnInfo.map((item,index) => {
                return (<div className='tradeDetails-tab-Container' key={index}>
                         <div className='trade-info' style={divStyle}>
                             <div className='tradeDetails-tab1'>
                                 <div className='returnEmpty'></div>
                                 <div className='returnText'>{item.name} $</div>
                                 <div className={item.return > 0 ? 'returnNumber-green' : 'returnNumber-red'}>${item.return}</div>
                             </div>
                             <div className='tradeDetails-tab2'>
                                 <img className='line'src={item.image} alt='Length'/>
                             </div>
                 
                         </div>
                     </div>)
            })}
    </div>
    )
}

export default TabDetails