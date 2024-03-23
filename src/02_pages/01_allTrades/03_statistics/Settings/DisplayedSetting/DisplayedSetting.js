import { useState } from 'react'
import './DisplayedSetting.css'
// import DropMenu from './DropMenu/DropMenu'
import downArrow from '../img/whitearrowDown.png'
import getSingleStockCandles from '../../../../../03_api/07_runSingle/getSingleStockCandle'
import Setting_Row from './Setting_Row/Setting_Row'


const DisplayedSetting = (props) => {

    const {
        temp,
        assign_new_value_to_temp_setting
    } = props

    const [activeDropMenu, setActiveDropMenu] = useState()

    return(

        <div className='display_selected_setting'>
            
            <Setting_Row keyName={'symbol'} tempSetting={temp} assign_new_value_to_temp_setting={assign_new_value_to_temp_setting} nameOfActiveSetting={'Symbol'} optionOne={'Bull'} optionTwo={'Bear'} type={2} setActiveDropMenu={setActiveDropMenu} dropMenuActive={'Symbol' === activeDropMenu} currentActive={activeDropMenu}/>
            <Setting_Row keyName={'market'} tempSetting={temp} assign_new_value_to_temp_setting={assign_new_value_to_temp_setting} nameOfActiveSetting={'Market'} optionOne={'Bull'} optionTwo={'Bear'} type={1} setActiveDropMenu={setActiveDropMenu} dropMenuActive={'Market' === activeDropMenu} currentActive={activeDropMenu}/>
            <Setting_Row keyName={'pivotLength'} tempSetting={temp} assign_new_value_to_temp_setting={assign_new_value_to_temp_setting} nameOfActiveSetting={'Pivot Length'} optionOne={'On'} optionTwo={'Off'} type={2}  setActiveDropMenu={setActiveDropMenu} dropMenuActive={'Pivot Length' === activeDropMenu} currentActive={activeDropMenu}/> 
            <Setting_Row keyName={'abnormalPriceJump'} tempSetting={temp} assign_new_value_to_temp_setting={assign_new_value_to_temp_setting} nameOfActiveSetting={'Abnormal Price Jump'} optionOne={'On'} optionTwo={'Off'} type={2}  setActiveDropMenu={setActiveDropMenu} dropMenuActive={'Abnormal Price Jump' === activeDropMenu} currentActive={activeDropMenu}/> 
            <Setting_Row keyName={'aBelowB'} tempSetting={temp} assign_new_value_to_temp_setting={assign_new_value_to_temp_setting} nameOfActiveSetting={'A below B'} optionOne={'On'} optionTwo={'Off'} type={1}  setActiveDropMenu={setActiveDropMenu} dropMenuActive={'Market' === activeDropMenu} currentActive={activeDropMenu}/> 
            <Setting_Row keyName={'pivotSteepness'} tempSetting={temp} assign_new_value_to_temp_setting={assign_new_value_to_temp_setting} nameOfActiveSetting={'Pivot Steepness'}  optionOne={'On'} optionTwo={'Off'} type={1}  setActiveDropMenu={setActiveDropMenu} dropMenuActive={'Market' === activeDropMenu} currentActive={activeDropMenu}/> 
            <Setting_Row keyName={'rrr'} tempSetting={temp} assign_new_value_to_temp_setting={assign_new_value_to_temp_setting} nameOfActiveSetting={'Risk Reward Ratio'} optionOne={'Bull'} optionTwo={'Bear'} type={2}  setActiveDropMenu={setActiveDropMenu} dropMenuActive={'Risk Reward Ratio' === activeDropMenu} currentActive={activeDropMenu}/> 
            <Setting_Row keyName={'sAndr'} tempSetting={temp} assign_new_value_to_temp_setting={assign_new_value_to_temp_setting} nameOfActiveSetting={'Support & Resistance'} optionOne={'Bull'} optionTwo={'Bear'} type={2}  setActiveDropMenu={setActiveDropMenu} dropMenuActive={'Support & Resistance' === activeDropMenu} currentActive={activeDropMenu}/> 
            <Setting_Row keyName={'maxAtoBLength'} tempSetting={temp} assign_new_value_to_temp_setting={assign_new_value_to_temp_setting} nameOfActiveSetting={'Max A to B Length'} optionOne={'Bull'} optionTwo={'Bear'} type={2}  setActiveDropMenu={setActiveDropMenu} dropMenuActive={'Max A to B Length' === activeDropMenu} currentActive={activeDropMenu}/> 
            <Setting_Row keyName={'maxBtoCLength'} tempSetting={temp} assign_new_value_to_temp_setting={assign_new_value_to_temp_setting} nameOfActiveSetting={'Max B to C Length'} optionOne={'Bull'} optionTwo={'Bear'} type={2}  setActiveDropMenu={setActiveDropMenu} dropMenuActive={'Max B to C Length' === activeDropMenu} currentActive={activeDropMenu}/> 
            <Setting_Row keyName={'maxCtoDLength'} tempSetting={temp} assign_new_value_to_temp_setting={assign_new_value_to_temp_setting} nameOfActiveSetting={'Max C to D Length'} optionOne={'Bull'} optionTwo={'Bear'} type={2}  setActiveDropMenu={setActiveDropMenu} dropMenuActive={'Max C to D Length' === activeDropMenu} currentActive={activeDropMenu}/> 
            <Setting_Row keyName={'entryRSI'} tempSetting={temp} assign_new_value_to_temp_setting={assign_new_value_to_temp_setting} nameOfActiveSetting={'RSI Entry'} optionOne={'Bull'} optionTwo={'Bear'} type={2}  setActiveDropMenu={setActiveDropMenu} dropMenuActive={'RSI Entry' === activeDropMenu} currentActive={activeDropMenu}/> 
            <Setting_Row keyName={'startDate'} tempSetting={temp} assign_new_value_to_temp_setting={assign_new_value_to_temp_setting} nameOfActiveSetting={'Start Date'} optionOne={'Bull'} optionTwo={'Bear'} type={2}  setActiveDropMenu={setActiveDropMenu} dropMenuActive={'Start Date' === activeDropMenu} currentActive={activeDropMenu}/> 
            <Setting_Row keyName={'endDate'} tempSetting={temp} assign_new_value_to_temp_setting={assign_new_value_to_temp_setting} nameOfActiveSetting={'End Date'} optionOne={'Bull'} optionTwo={'Bear'} type={2}  setActiveDropMenu={setActiveDropMenu} dropMenuActive={'End Date' === activeDropMenu} currentActive={activeDropMenu}/> 
            

            <div className='clear_and_start_trading'> 
                <div className='market_selection_key'>
                    <div className='clear_trades_'     
                        // onClick={()=> {deleteHistory(reloadData); }}
                    >Clear Trades</div>
                </div>
                <div className='market_selection_options_wrapper'>    
                <div className='start_trading_' onClick={()=> {getSingleStockCandles(temp);}}>Start Trading</div>
              
                </div>
            </div>




        </div>

    )
}

export default DisplayedSetting