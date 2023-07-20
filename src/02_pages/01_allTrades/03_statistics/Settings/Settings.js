import getActiveTrades from '../../../../03_api/02_getAllTrades/getAllTrades.js'
import getStatistics from '../../../../03_api/04_getStatistics/getStatistics.js'
import saveSetting from '../../../../03_api/05_saveSettings/saveSettings.js'
import deleteHistory from '../../../../03_api/08_delete/deleteHistory.js'
import getNasdaqCandles from '../../../../03_api/09_runNasdaq/getNasdaq.js'
import getCryptoCandles from '../../../../03_api/10_runCrypto/getCrypto.js'
import deleteSettings from '../../../../03_api/11_deleteSettings/deleteSettings.js'
import './Settings.css'

import React, {useEffect, useState} from 'react';

import SettingHeader from './01_SettingHeader/SettingHeader.js'
import SettingOptions from './SettingOptions/SettingOptions.js'
import DisplayedSetting from './DisplayedSetting/DisplayedSetting.js'
import getSingleStockCandles from '../../../../03_api/07_runSingle/getSingleStockCandle.js'


const Settings = (props) => {

    const {
        allSavedSettings, 
        setAllSavedSettings,
        colorTheme,
        updateSelectedSetting,
        loadSettings
    } = props

    const [selectedSetting, setSelectedSetting] = useState('')
    
    // Sort list before display.
    allSavedSettings?.sort(function(a, b) {
        return a.id - b.id;
      });

    const [temp, setTemp] = useState()
   
    const assign_new_value_to_temp_setting = (newValue, setting) => {
        
        
        temp[setting] = newValue
        
    }

	useEffect(() => {

        if(allSavedSettings){
            let tempObj = allSavedSettings?.filter(obj => obj.isSelected === 'true')
            setTemp(tempObj[0])
        }
   

        const set_selected_setting = () => {
       
            if(allSavedSettings?.length === 1){
                setSelectedSetting(allSavedSettings[0])
            }

            else if(allSavedSettings?.length > 1){
                let selectedSetting;

                const selectedItem = allSavedSettings?.find(item => item.isSelected === 'true');
                
                if (selectedItem) {
                    setSelectedSetting(selectedItem)
            
                } else {
                    setSelectedSetting(allSavedSettings[allSavedSettings.length - 1])
                    
                }
                


            }
        }
        set_selected_setting()
   
	},[allSavedSettings]);
   
    const settings_style = {
		// backgroundColor: colorTheme.settings.background_color,
        // border: colorTheme.settings.border
	}
    


    return( 
        
        <div className='settings_container' style={settings_style}>
            <div className='settings_wrapper'>

                <SettingHeader/>
        
                <SettingOptions 
                    allSavedSettings={allSavedSettings}
                    setAllSavedSettings={setAllSavedSettings}
                    selectedSetting={selectedSetting}
                    loadSettings={loadSettings}
                    setSelectedSetting={setSelectedSetting}
                    updateSelectedSetting={updateSelectedSetting}
                    temp={temp}
                    assign_new_value_to_temp_setting={assign_new_value_to_temp_setting}
                />

                <DisplayedSetting
                    allSavedSettings={allSavedSettings}
                    temp={temp}
                    assign_new_value_to_temp_setting={assign_new_value_to_temp_setting}
                />
           
        
            
            </div>
        </div>
    )
}

export default Settings