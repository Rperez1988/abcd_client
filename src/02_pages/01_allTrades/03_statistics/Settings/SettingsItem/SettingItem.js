
import arrow  from '../img/whitearrowDown.png'
import DropdownMenu from '../DropDownMenu/DropdownMenu';
import React, { useState } from 'react';


export const SettingItem = (props) => {
    const {
        saveSettings,
        displayName,
        settingKey,
        settingValue,
        left,
        top,
        setActiveMenu,
        setSettings,
        active,
        list,
        settings,
        allSavedSettings
   
    } = props

    const [isMenu, setIsMenu] = useState(false)
    const [focused, setFocused] = useState(false)
    const onFocus = () => setFocused(true)
    const onBlur = (value) => {

        setSettings(prevState => ({

            ...prevState, 
            ['settingsName']: value  

        }))

        setFocused(false)
    }

    // Key CSS
    let white = 'white'
    let keyColor
    settingValue === 'Off' ? (keyColor = 'gray') : keyColor = 'rgba(255, 255, 255, 0.71)'
    // '#94bde4'
    // Value CSS
    let backgroundColor
    let borderWidth
    let borderStyle
    let borderColor
    let borderRadius
    let valueColor
    isMenu && (active === settingKey) && (backgroundColor = 'darkgray')
    isMenu && (active === settingKey) && (borderWidth = '5px')
    isMenu && (active === settingKey) && (borderStyle = 'solid')
    isMenu && (active === settingKey) && (borderColor = 'lightblue')
    isMenu && (active === settingKey) && (borderRadius = '5px')
    settingValue === 'Off' ? (valueColor = '') : valueColor = 'white'

    // Button CSS
    let buttonColor
    isMenu && (active === settingKey) && (buttonColor = 'rgb(47, 47, 47)')

    // Input CSS
    focused && (backgroundColor = 'darkgray')


    return(
        <div className='Settings_Block' onClick={()=> {setActiveMenu(settingKey); setIsMenu(!isMenu)}}>

            <div className='Settings_Key' style={{color: keyColor}}>{displayName}</div>

            <div className='Settings_Value'>

                {displayName === 'Settings' ? <form>

                        <label>
                            <input type="txt" className='SettingsName' 

                                onChange={(e)=> {

                                    setSettings(prevState => ({

                                        ...prevState, 
                                        [settingKey]: e.target.value
                                    }),

                                
                                )}} 
                                value={settings['settingsName']} 
                                // defaultValue={settings['settingsName']} 
                                onFocus={onFocus} 
                                onBlur={(e)=> onBlur(e.target.value)} 
                                style={{backgroundColor: backgroundColor}}/>

                        </label>
                    </form>
                
                :

                <div className='Value' style={{backgroundColor: backgroundColor, borderWidth: borderWidth, borderStyle: borderStyle,borderColor: borderColor,borderRadius: borderRadius,color: valueColor}}>
                    {settingValue}
                </div> 
                
                }

            </div>

            {isMenu && (active === settingKey) && <DropdownMenu 
                saveSettings={saveSettings}
                settingKey={settingKey} 
                top={top} 
                left={left} 
                list={list} 
                setSettings={setSettings}
                settings={settings}
                allSavedSettings={allSavedSettings}/>}
            
        </div>
    )
}