import { useEffect, useState } from "react"


const Form = (props) => {
    const {
        inputValue,
        setInputValue,
        assign_new_value_to_temp_setting,

    } = props


    // useEffect(()=>{
    //     let selectedSettingName 
    //     for(let i = 0; i < allSavedSettings.length; i++){
     
    //         if(allSavedSettings[i].isSelected === 'true'){
    //             console.log(allSavedSettings[i].settingsName,allSavedSettings[i].isSelected)
    //             selectedSettingName = allSavedSettings[i].settingsName
    //         }
    //     }

    //     setInputValue(selectedSettingName)
    // })




    
    return(
        <form>
            <label>
                <input autoFocus type="txt" className='addSettingsNameEditMode' onChange={(e)=>{setInputValue(e.target.value); assign_new_value_to_temp_setting(e.target.value, 'settingsName')}} value={inputValue} />
            </label>
        </form>
    )
}

export default Form