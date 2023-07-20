import edit from './img/editwhite.png'
import save from './img/savewhite.png'
import trash from './img/trashwhite.png'
import './SettingOptions.css'
// import edit_setting from 'C:\\Users\\rpere\\Desktop\\Projects\\ABCD\\App\\frontend\\src\\03_api\\12_editSetting\\editSetting.js'


import deleteSetting from '../../../../../03_api/11_deleteSettings/deleteSettings'

import React, {useState, useRef, useEffect} from 'react';

import Form from './Form/Form'
import SelectedSetting from './SelectedSetting/SelectedSetting'
import AllSavedSettingsDropDown from './AllSavedSettingsDropDown/AllSavedSettingsDropDown'



const SettingOptions = (props) => {

    const {
        allSavedSettings,
        setAllSavedSettings,
        loadSettings,
        selectedSetting,
        setSelectedSetting,
        updateSelectedSetting,
        temp,
        assign_new_value_to_temp_setting
       

    } = props

    

    const [isAddNewSettings, setIsAddNewSettings] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    const [hasChanged, setHasChanged] = useState(false)
    const [inputValue, setInputValue] = useState()

    const get_div_style = (selectedSetting) => {
        if(selectedSetting.id == 0){
            let div_style
            return div_style = { 
                pointerEvents: 'none',
                filter: 'invert(56%) sepia(0%) saturate(1%) hue-rotate(187deg) brightness(89%) contrast(88%)'
            }
        }
        else{
            let div_style
            return div_style = { 
                // pointerEvents: 'pointer' 
            }
        }

    }

    return(

        <div className='setting_options_container'>   
            <div className='setting_options_wrapper'>

                <div className='edit_icon_wrapper'
                    style={get_div_style(selectedSetting)}  onClick={()=>{setIsEdit(!isEdit)}}>
                    <img className='edit_icon' src={edit}/>
                </div>

                <div className='selected_setting_wrapper'>
                    <div className={(isAddNewSettings && !isEdit) ? 'selected_setting_active' : 'selected_setting_unactive'} onClick={()=>{setIsAddNewSettings(!isAddNewSettings)}}>
                        
                        {isEdit && 
                            <Form
                                inputValue={inputValue} 
                                setInputValue={setInputValue}
                                allSavedSettings={allSavedSettings}
                                temp={temp}
                                assign_new_value_to_temp_setting={assign_new_value_to_temp_setting}
                            />
                        }

                        {!isEdit && 
                            <SelectedSetting 
                                selectedSetting={selectedSetting} 
                                allSavedSettings={allSavedSettings}
                            />
                        }

                        {(isAddNewSettings && !isEdit) &&         
                            <AllSavedSettingsDropDown
                                allSavedSettings={allSavedSettings}
                                setAllSavedSettings={setAllSavedSettings}
                                loadSettings={loadSettings}
                                updateSelectedSetting={updateSelectedSetting}
                                selectedSetting={selectedSetting}
                            />}
                    </div>
                </div>

                <div className='save_and_delete_container'>

                    <div className='delete_and_save_wrapper'>
                        <div className='edit_icon_wrapper' >
                            <img className='save_icon' src={save} 
                                style={get_div_style(selectedSetting)}
                                onClick={()=>{
                                    // edit_setting(temp, loadSettings,inputValue);
                                    setIsEdit(false)
                                    setInputValue('')
                                }}
                            />
                        </div>
                    
                    </div>

                    <div className='delete_and_save_wrapper'>

                        <div className='edit_icon_wrapper' >
                            <img className='edit_icon' src={trash} 

                                style={get_div_style(selectedSetting)}
                     
                                onClick={()=>{
                                    selectedSetting !=='Add New Setting' && 
                                        deleteSetting(selectedSetting.id,loadSettings,allSavedSettings); 
                                        setSelectedSetting(allSavedSettings[0]['settingsName'])
                                        setIsEdit(false)
                                }}
                            />
                        </div>
                 
                    </div>

                </div>
            
            </div>
        </div>
    
    )
}

export default SettingOptions

