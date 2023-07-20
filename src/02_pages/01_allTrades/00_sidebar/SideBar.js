import React, { useState, useEffect } from 'react'


// api
import getActiveTrades from '../../../03_api/02_getAllTrades/getAllTrades.js'
import getStatistics from '../../../03_api/04_getStatistics/getStatistics.js'
import saveSettings from '../../../03_api/05_saveSettings/saveSettings.js'
import getSingleStockCandles from '../../../03_api/07_runSingle/getSingleStockCandle.js'
import deleteHistory from '../../../03_api/08_delete/deleteHistory.js'
import getNasdaqCandles from '../../../03_api/09_runNasdaq/getNasdaq.js'
import getCryptoCandles from '../../../03_api/10_runCrypto/getCrypto.js'

// img
import bull  from './img/bull.png'
import bear  from './img/bear.png'
import nasdaq  from './img/nasdaq.png'
import forex  from './img/forex.png'
import options  from './img/options.png'
import tune  from './img/tune.png'


import './SideBar.css'



const SideBar = (props) => {
    
    const {
        reloadData,
        settings,
        setAllTrades,
        setIsSettings,
        isSettings,
        colorTheme,
    } = props

    const divStyle = {
        background: colorTheme.sidebar.background_color,
        borderRight: colorTheme.sidebar.border_right,
		// transition: colorTheme.transition   
	};
	
    return(
        <div className='sidebar' style={divStyle}>

            <div className='tab'>
        
                <div className='run' onClick={() => {setIsSettings(!isSettings)}}>
                    <img className={'bullicon'} src={tune}/>
                </div>
            </div>

        </div>
    )
}

export default SideBar