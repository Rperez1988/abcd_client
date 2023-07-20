import React, { useState } from 'react';
import Bearish  from '../../img/bearishwhite.png'
import Bullish  from '../../img/bullishwhite.png'
import Length   from '../../img/lengthwhite.png'
import Abnormal from '../../img/abnormalwhite.png'
import Height   from '../../img/heightwhite.png'
import supportRes     from '../../img/snrwhite.png'
// import stock    from '../img/stock.png'
import piggy    from '../../img/piggywhite.png'
import stop     from '../../img/stopwhite.png'
import sharing  from '../../img/sharingwhite.png'
import engine   from '../../img/engine.png'
import single   from '../../img/single.png'

// CSS
import '../../css/sidebaroption.css'


const SideBarOptionsNew = (props) => {

    const {
        // key,
        currentSetting,  
        bull,            
        bear,           
        setMarket,          
        userInputSetting,   
        updateLength,       
        length,             
        setStock,        
        stockActive,      
        // plBelowPh,        
        // setPlBelowPh,      
        updatePHtoPL,      
        updateStock,       
        // startsWith,        
        // stocksBeingShown,   
        // stockBeingSearched, 
        filteredList,     
        PHtoPLLength,       
        pLtoShortLength,    
        updatepLtoShort,    
        setMarketType,     
    } = props

    const [optionActive, setOptionActive] = useState(false)
    // const [true, setTrue] = useState('return true')
    // const [false, setFalse] = useState('return false')
    const [multipleStocksSelections] = useState(['all stocks', 'select stocks'])
    const [marketType] = useState(['Bullish', 'Bearish'])
    // const [snrSelctions, setSnrSelctions] = useState([''])
    const [plBelowPh, setPlBelowPh] = useState(['True'])
    const [snr] = useState(['Pivot Average', 'Pivot Low', 'Pivot High'])
    const [snrSelected] = useState('Avg')
    
    const handleChange = () => {
        setOptionActive(!optionActive)
    }

    const setSelectedSNR = (type) => {
        if (type === 'Pivot Low')
            setSelectedSNR("Low")
        if (type === 'Pivot Average')
            setSelectedSNR("Avg")
        if (type === 'Pivot High')
            setSelectedSNR("High")
 
    }

    const icons = () => {
        return(
            <div className='icon'>
            <div className='icon2'>
                {currentSetting === 'Single Stock' && <img className='bearish'src={single} alt='single'/>}
                {currentSetting === 'Multiple Stocks' && <img className='bearish'src={engine} alt='engine'/>}
                {currentSetting === 'Market' && bear === true && <img className='bearish'src={Bearish} alt='Bearish'/>}
                {currentSetting === 'Market' && bull === true && <img className='bearish'src={Bullish} alt='single'/>}
                {currentSetting === 'Pivot Size' && <img className='bearish'src={Length} alt='Length'/>}
                {currentSetting === 'Pivot Occurrence' && <img className='bearish'src={Length} alt='Length'/>}
                {currentSetting === 'PH to PL Length' && <img className='bearish'src={Length} alt='Length'/>}
                {currentSetting === 'PL below PH' && <img className='bearish'src={Height} alt='single'/>}
                {currentSetting === 'Abnormal Price' && <img className='bearish'src={Abnormal} alt='single'/>}
                {currentSetting === 'Support Resistance' && <img className='bearish'src={supportRes} alt='single'/>}
                {currentSetting === 'Profit Marker' && <img className='bearish'src={piggy} alt='single'/>}
                {currentSetting === 'Stop Loss Marker' && <img className='bearish'src={stop} alt='single'/>}
                {currentSetting === 'Pivot Sharing' && <img className='bearish'src={sharing} alt='single'/>}  
                {currentSetting === 'PL to Short Length' && <img className='bearish'src={Length} alt='single'/>}  
                {currentSetting === 'Pivot Steepness' && <img className='bearish'src={Length} alt='single'/>}  
            </div>
        </div>
        )
    }

    const label = () => {
        return(
            <div className='name'>
            <div className='name2'>{currentSetting}</div>
        </div>

        )
    }

    const currentSettin = () => {
        return(
            <div className='number'>
                  <div className='number2'>
                    {(currentSetting === 'Market' && bear === true) && 'Bear'}
                    {(currentSetting === 'Market' && bull === true) && 'Bull'} 
                    {currentSetting === 'Single Stock' && stockActive}
                    {currentSetting === 'PL below PH' && String(plBelowPh)}
                    {currentSetting === 'Pivot Size' && length}
                    {currentSetting === 'PH to PL Length' && PHtoPLLength}
                    {currentSetting === 'PL to Short Length' && pLtoShortLength}
                    {currentSetting === 'Support Resistance' && snrSelected}     
                  </div>
            </div>
        )
    }

    const singleStock = () => {
        return(
            <>
            {currentSetting === 'Single Stock' ? 
   
            <div className=''>
                
                <form>
                    <label>
                        <div className='searchstock'>                        
                            <input placeholder="Search Stock" className='searchstock2' type="text" onChange={updateStock}></input>
                        </div>
                        
                    </label>
                </form>
                
                {filteredList.map(item => (
                    
                    <div className='stockoptions' onClick={() => setStock(item)} key={item}>
                        {item}</div>
                ))}

            </div>
    
            : ''} 
            </>

        )
    }

    const multipleStocks = () => {
        return(<>
        
        {currentSetting === 'Multiple Stocks' ? 
            <div className=''>

                {multipleStocksSelections.map(item => (
                    
                    <div className='stockoptions' key={item}>
                        {item}</div>
                ))}

            </div>
    
            : ''} </>
   

        )
    }

    const pivotSize = () => {
        return(
            <>
       
                  {currentSetting === 'Pivot Size' ? 
                            <form>
                                <label>
                                    <div className='searchstock'>
                                        {/* <div className='searchstocktext'>Enter Length</div> */}

                                        <input className='searchstock2'placeholder="Enter Length" type="text" onChange={updateLength}></input>
                                    </div>
                                    
                                </label>
                            </form> 
                    
                            : ''}  

            
            
            </>
        )
    }

    const plph = () => {
        return(<>
        
        
                        {/* PL Below PH */}
                        {currentSetting === 'PL below PH' ? 
                            <div className=''>
                                
                                {plBelowPh.map(item => (
                                    
                                    <div className='stockoptions' key={item}>
                                        {item}
                                    </div>
                                ))}

                                {/* <div className='' onClick={() => setPlBelowPh('true')}>True</div>
                                <div className='' onClick={() => setPlBelowPh('false')}>False</div> */}
                            </div>
                            
                            : ''}  
</>)

    }

    const bearOrBull = () => {
        return(
            <>
                 {/* Market type*/}
                 {currentSetting === 'Market' ? 
                            <div className=''>
                    
                                {marketType.map(item => (
                                    
                                    <div className='stockoptions' onClick={() => {setMarket(item); setMarketType(item);}} key={item}>
                                        {item}</div>
                                ))}

                            </div>
                    
                            : ''} </>
        )
    }

    const supportResistance = () => {
        return(<>
        

                        {/* Support and Resistance */}
                        {currentSetting === 'Support Resistance' ? 
                            <div className=''>

                                {snr.map(item => (
                                    
                                    <div className='stockoptions' onClick={() => {setSelectedSNR(item)}} key={item}>
                                        {item}</div>
                                ))}

                            </div>
                    
                            : ''} </>)
    }

    const phpl = () => {
        return(<>
              

                        {/* PH to PL Length */}
                        {currentSetting === 'PH to PL Length' ? 
                            <form>
                                <label>
                                    <div className='searchstock'>


                                        <input className='searchstock2'placeholder="Enter Length" type="text" onChange={updatePHtoPL}></input>
                                    </div>
                                    
                                </label>
                            </form> 
                    
                            : ''}  

        </>)
    }

    const plShort = () => {
        return(<>
           
                        {/* PL to Short Length */}
                        {currentSetting === 'PL to Short Length' ? 
                            <form>
                                <label>
                                    <div className='searchstock'>


                                        <input className='searchstock2'placeholder="Enter Length" type="text" onChange={updatepLtoShort}></input>
                                    </div>
                                    
                                </label>
                            </form> 
                    
                            : ''}  </>)
    }

    const expanded = () => {
        return(
        
               <div className={optionActive ? 'optionActive' : "optionUnActive" }><div>
                   <div className='optionActive2'>{userInputSetting[currentSetting]}
                        {singleStock()}
                        {multipleStocks()}
                        {pivotSize()}
                        {plph()}
                        {bearOrBull()}
                        {supportResistance()}
                        {phpl()}
                        {plShort()}
                    </div>
                </div>
            </div>

        )
    }

    return (
        <>
            <div className='menuOptions3' onClick={handleChange}>
                <div className='menuOptions4'>
                    {icons()}
                    {label()}
                    {currentSettin()}
                </div>     
            </div>
            {expanded()}
        </>

    );

}

export default SideBarOptionsNew;

