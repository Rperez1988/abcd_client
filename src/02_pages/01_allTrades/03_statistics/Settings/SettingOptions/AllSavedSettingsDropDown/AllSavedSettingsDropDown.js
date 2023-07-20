import checkmark from './images/checkmarkwhite.png'
import './AllSavedSettingsDropDown.css'

function AllSavedSettingsDropDown(props) {

    const {
      allSavedSettings,
      setAllSavedSettings,
      loadSettings,
      updateSelectedSetting,
      selectedSetting
    } = props

    return (
      <div className="settingsDropDown" >

          {allSavedSettings.map((item, index)=>{

              return (

                <div className='saved_setting_wrapper' key={index} onClick={()=> {updateSelectedSetting(index, allSavedSettings, loadSettings, setAllSavedSettings, selectedSetting)}}>
        
                  
                  <div className='saved_settings_name'>
                    {item['settingsName']}
                  </div>
                  <div className='saved_settings_icon'>
                    {(item.isSelected === 'true' && index !== 0) && <img className={'checkmarkwhite'} src={checkmark}/>}
                    {index === 0 && <div className='addPlusSign'>+</div>}
                  </div>
      
                
                </div>
         
              )
          })}
 
      </div>
    )
  }


export default AllSavedSettingsDropDown