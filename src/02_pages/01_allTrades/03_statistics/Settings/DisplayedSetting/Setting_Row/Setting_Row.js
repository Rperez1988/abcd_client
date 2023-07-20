import './Setting_Row.css'
import { useEffect, useState } from 'react'
import downArrow from '../../img/whitearrowDown.png'
import DropMenu from './DropMenu/DropMenu'
import DatePicker from "react-datepicker"

import "react-datepicker/dist/react-datepicker.css";

const Setting_Row = (props) => {

    const {
        nameOfActiveSetting,
        optionOne,
        optionTwo,
        type, 
        setActiveDropMenu, 
        dropMenuActive,
        currentActive,
        assign_new_value_to_temp_setting,
        tempSetting,
        keyName
    } = props

    
 
    const [isActive, setIsActive] = useState(false)
    const [selectedDate, setSelectedDate] = useState(null);

    useEffect(()=>{

        if(tempSetting){

            if(keyName === 'startDate'){
                if(tempSetting['startDate'] !== ""){
                    setSelectedDate(new Date(tempSetting['startDate']))
                }

            }
            if(keyName === 'endDate'){
                if(tempSetting['endDate'] !== ""){
                    setSelectedDate(new Date(tempSetting['endDate']))
                }
            }
        }
        
    }, [tempSetting])

    const unactive_style = {
        backgroundColor: 'rgb(10, 30, 48)',
    }
    const active_style = {
        backgroundColor: 'rgb(173 194 213)',
        color: 'black',
    }
    const handleClick = (value) => {
        setIsActive(value)
    }
    const dropStyle = isActive ? active_style : unactive_style
    const list = {
        'Symbol': ['AAPL', 'GOOG',
        'ACBI','BDSI',  'BKEP',  'BKEPP', 'ALT', 'AACG', 'AAL', 'AAME', 'AAOI', 'AAON', 'AAPL', 'AATC', 'AAWW', 'ABCB', 'ABEO', 'ABIO','ABST', 'ABTX', 'ABUS','ACB', 'ACER', 'ACGL', 'ACGLO', 'ACHC', 'ACHV', 'ACIU', 'ACIW'],
        'Market': ['Bull', 'Bear'],
        'Risk Reward Ratio': ['1','2','3','4','5'],
        'Max A to B Length': ['Off', ...Array.from({length: 100}, (_, i) => i + 1)],
        'Max B to C Length': ['Off', ...Array.from({length: 100}, (_, i) => i + 1)],
        'Abnormal Price Jump': ['Off', ...Array.from({length: 100}, (_, i) => i + 1)],
        'A below B': ['On', 'Off'],
        'Pivot Length': Array.from({length: 100}, (_, i) => i + 1),
        'Support & Resistance': ['On', 'Off'],
        'Max C to D Length': ['Off', ...Array.from({length: 100}, (_, i) => i + 1)],
        'RSI Entry': Array.from({length: 30}, (_, i) => i + 1),
        'Pivot Steepness': ['On', 'Off'],

    }
    const dropmenu = () => {
        return    <div className='display_settings_drop_menu'>

        {list[nameOfActiveSetting].map((listItem, key) => (
            <div key={key} className='drop_down_item' 
            onClick={() => assign_new_value_to_temp_setting(listItem,keyName)}
            >
                {listItem}
            </div>
            ))}
                
            </div>
    }

    let bull
    let bear
    const styleMap = {
        market: {
          '': { bull: unactive_style, bear: unactive_style },
          Bear: { bull: unactive_style, bear: active_style },
          Bull: { bull: active_style, bear: unactive_style },
        },
        aBelowB: {
          '': { bull: unactive_style, bear: unactive_style },
          Off: { bull: unactive_style, bear: active_style },
          On: { bull: active_style, bear: unactive_style },
        },
        abnormalPriceJump: {
          '': { bull: unactive_style, bear: unactive_style },
          Off: { bull: unactive_style, bear: active_style },
          On: { bull: active_style, bear: unactive_style },
        },
        pivotSteepness: {
          '': { bull: unactive_style, bear: unactive_style },
          Off: { bull: unactive_style, bear: active_style },
          On: { bull: active_style, bear: unactive_style },
        },
      };
      
    if (tempSetting) {
    if (styleMap[keyName]) {
        const styles = styleMap[keyName][tempSetting[keyName]] || {};
        bull = styles.bull || unactive_style;
        bear = styles.bear || unactive_style;
    }
    }


    return(

        <div className='market_selection_wrapper'> 
            <div className='market_selection_key'>{nameOfActiveSetting}</div>
            
            {type === 1 && 

            <div className='market_selection_options_wrapper'>
                <div className='market_selection_option'>
                    <div className='market_selection_active' style={bull} onClick={() => {handleClick(!isActive); assign_new_value_to_temp_setting(optionOne,keyName)}}>{optionOne} </div>
                </div>

                <div className='market_selection_option'>
                    <div className='market_selection_'  style={bear} onClick={() => {handleClick(!isActive) ; assign_new_value_to_temp_setting(optionTwo,keyName)}}>{optionTwo} </div>
                </div>
            </div>}

            {type === 2 &&   
                <div className='market_selection_options_wrapper'>
                    <div className='drop_selection_option'>

                        {(String(nameOfActiveSetting) === 'Start Date' || String(nameOfActiveSetting) === 'End Date') ? (
                            <div className="date-picker-container">
                                <DatePicker

                                selected={selectedDate}
                                onChange={(date) => {setSelectedDate(date);
                                
                                    // const dateString = date.toLocaleDateString();
                                    assign_new_value_to_temp_setting(date,keyName);
                                }}
                                dateFormat="yyyy-MM-dd"
                                />
                            </div>
                        )
                    :
                    
                        <div className='drop_selection_' 
                            style={dropStyle} 
                            onClick={()=>{setActiveDropMenu(nameOfActiveSetting===currentActive ? null : nameOfActiveSetting); handleClick(!isActive)}}>

                                {tempSetting && tempSetting[keyName]}
                    
                            {dropMenuActive && dropmenu()} 
                        </div>
        
                    }               
                       

                    <div className='drop_selection_arrow_wrapper' style={unactive_style}>
                        <img src={downArrow} className='drop_selection_arrow'/>
                    </div>            
                </div>
            </div>}
        
        </div>
    )
}

export default Setting_Row