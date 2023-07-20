import React, { useState } from 'react';
import '../../css/sidebar.css'
import SideBarOptionsNew from './SideBarOptionsNew';

const SideBarNew = (props) => {

    const [engineSettings, setEngineSettings] = useState(false)
    const [pivotSettings, setPivotSettings] = useState(true)
    const [bull, setBull] = useState(true)
    const [bear, setBear] = useState(false)

    const settingSelection = ['Market', 'Pivot Size', 'PH to PL Length', 'PL to Short Length', 'PL below PH', 'Support Resistance', 'Stop Loss Marker', 'Profit Marker', 'Abnormal Price',  'Pivot Sharing', 'Pivot Steepness']
    const userInputSetting = {'Bearish': "Bear",'Stock': "",'Pivot Size': "", 'Pivot Occurrence': "",'Support Resistance': "",'Stop Loss Marker': "",'Profit Marker': "",'Abnormal Price': ""}
    const engineSelection = ['Single Stock', 'Multiple Stocks']

    const {
        stockSearched,    
        filteredList,    
        updateLength,  
        setPlBelowPh,     
        updateStock,  
        startsWith,  
        setStock,          
        updatepLtoShort,   
        fiveYear,
        updatePHtoPL,  
        setMarketType,
        runEngine,        
        length,      
        PHtoPLLength,
        allStockNames,
        stockActive,
        plBelowPh,
        stocksBeingShown,
        stockBeingSearched,
        pLtoShortLength,
    } = props

    const handlePivotChange  = () => {
        setPivotSettings(true)
        setEngineSettings(false)
    }

    const handleEngineChange = () => {
        setPivotSettings(false)
        setEngineSettings(true)
    }

    const setMarket = (type) => {
        
        if (type === 'Bearish')
            setBull(false)
            setBear(true)

        if (type === 'Bullish')
            setBull(true)
            setBear(false)
    }

    const pivotEngineTutorialHistory = () => {
        return(
            <div className='settings'>
            <div className='settingstop'>
            <div className={pivotSettings === true ? 'pivotActive' : 'settingleft'} onClick={handlePivotChange}>
                <div className='text' >Pivot</div>
            </div>
            <div className={engineSettings === true ? 'engineActive' : 'settings3'} onClick={handleEngineChange}>
                <div className='text'>Engine</div>
            </div>
            </div>
            <div className='settingsbot'>
            <div className='settingleft'>
            <div className='settings3' onClick={handleEngineChange}>
                <div className='text'>Tutorial</div>
            </div>
            </div>
            <div className='settings3'>
                <div className='settings3' onClick={handleEngineChange}>
                <div className='text'>History</div>
                </div>
            </div>
            </div>
        </div>

        )
    }

    const menuOne = () => {
        return(
            <div className='menuOptions2'>
                {settingSelection.map(item => (
  
                  <SideBarOptionsNew 
                    key                 ={item} 
                    currentSetting      ={item} 
                    bull                ={bull}
                    bear                ={bear}
                    setMarket           ={setMarket}
                    userInputSetting    ={userInputSetting}  
                    updateLength        ={updateLength} 
                    length              ={length} 
                    setStock            ={setStock}
                    stockActive         ={stockActive} 
                    plBelowPh           ={plBelowPh} 
                    setPlBelowPh        ={setPlBelowPh} 
                    updatePHtoPL        ={updatePHtoPL}
                    updateStock         ={updateStock}
                    startsWith          ={startsWith} 
                    stocksBeingShown    ={stocksBeingShown} 
                    stockBeingSearched  ={stockBeingSearched} 
                    filteredList        ={filteredList}
                    PHtoPLLength        ={PHtoPLLength}
                    pLtoShortLength     ={pLtoShortLength}
                    updatepLtoShort     ={updatepLtoShort}
                    setMarketType       ={setMarketType}
                    
                    />
                  
                ))}
          </div>
        )
    }

    const menuTwo = () => {
        return(
            <div className='menuOptions2'>
                {engineSelection.map(item => (
  
                <SideBarOptionsNew 
                  key                 ={item} 
                  currentSetting      ={item} 
                  bull                ={bull}
                  bear                ={bear}
                  setMarket           ={setMarket}
                  userInputSetting    ={userInputSetting}  
                  updateLength        ={updateLength} 
                  length              ={length} 
                  fiveYear            ={fiveYear} 
                  setStock            ={setStock}
                  stockActive         ={stockActive} 
                  plBelowPh           ={plBelowPh} 
                  setPlBelowPh        ={setPlBelowPh} 
                  updatePHtoPL        ={updatePHtoPL}
                  updateStock         ={updateStock}
                  startsWith          ={startsWith} 
                  stocksBeingShown    ={stocksBeingShown} 
                  stockBeingSearched  ={stockBeingSearched} 
                  filteredList        ={filteredList}
                  PHtoPLLength        ={PHtoPLLength}
                  pLtoShortLength     ={pLtoShortLength}
                  updatepLtoShort     ={updatepLtoShort}
                  setMarketType       ={setMarketType}
                />
                                
                ))}
          </div>

        )
    }

    return (

        <div className='menuOptions'>
            {pivotEngineTutorialHistory()}
            {pivotSettings === true && menuOne()}
            {engineSettings === true && menuTwo()}
        </div>
      );
}

export default SideBarNew;