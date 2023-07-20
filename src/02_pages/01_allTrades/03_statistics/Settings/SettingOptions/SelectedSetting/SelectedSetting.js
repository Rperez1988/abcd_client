import './SelectedSetting.css'
import up from './img/uparrowwhite.png'
import down from './img/downarrowwhite.png'
import error from './img/error.png'

const SelectedSetting = (props) => {

    const {
        selectedSetting,
        allSavedSettings
    }  = props

 
    
    return(
    <div className='selected_setting_container'>

        <div className='error_icon_container'>
            <div className='error_icon_wrapper'>
                {(selectedSetting.id !== 0 && selectedSetting.isComplete === 'false') && <img className='error_icon_red' src={error}/>}
            </div>
        </div>
    
        <div className='selected_setting_wrap'>
            
            <div className='selected_setting'>  
                {selectedSetting && selectedSetting.settingsName}
         
            </div>
          
            <div className='up_and_down_arrow_container'>

                <div className='up_and_down_arrow_wrapper'>
                    <img className='up_and_down_arrow' src={up}/>
                </div>
                <div className='up_and_down_arrow_wrapper'>
                    <img className='up_and_down_arrow' src={down}/>
                </div>
        
            </div> 

        </div>
        
    </div>
                            

    


  

    )
}

export default SelectedSetting