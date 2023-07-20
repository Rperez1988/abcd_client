import { useState } from 'react'
import './DropMenu.css'

const DropMenu = (props) => {

    const {
        activeSetting,
        isActive,
        setActiveSetting,
        item,
        value,
        index,
        setSelectedDropMenu,
        get
    } = props


    const [selectedList, setSelectedList] = useState()
   
    const get_style = () =>
    {
        if(isActive){
            return {
                backgroundColor: 'gray',
                border: '1px solid'
            }
        }
    }

    const list = {
        'market': ['Bull', 'Bear'],
        'rrr': ['1','2','3','4','5'],
        'maxAtoBLength': ['Off', ...Array.from({length: 100}, (_, i) => i + 1)],
        'maxCtoDLength':['Off', ...Array.from({length: 100}, (_, i) => i + 1)],
        'abnormalPriceJump': ['Off', ...Array.from({length: 100}, (_, i) => i + 1)],
        'aBelowB': ['On', 'Off'],
        'pivotLength': Array.from({length: 100}, (_, i) => i + 1),
        'sAndr': ['On', 'Off'],
        'maxBtoCLength': ['Off', ...Array.from({length: 100}, (_, i) => i + 1)],
        'entryRSI': Array.from({length: 30}, (_, i) => i + 1),
        'pivotSteepness': ['On', 'Off'],

    }

    const dropmenu = () => {
        return    <div className='display_settings_drop_menu'>

        {list[item].map((listItem, key) => (
            <div key={key} className='drop_down_item' onClick={() => get(listItem,activeSetting)}>
                {listItem}
            </div>
            ))}
                    
            </div>
    }
    
    return(

        <div className='displayed_setting_block' key={index}>
            
            <div className='displayed_setting_key'>{item}</div>

        <div className='displayed_setting_value_wrapper' onClick={()=>{setActiveSetting(item===activeSetting ? null : item)}}>
            <div className='displayed_setting_value' style={get_style()}>
                {value}

                {isActive && dropmenu()}
     
            </div> 
        </div>

    </div>


    )
}

export default DropMenu