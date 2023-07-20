import '../../css/ListSelection/listselection.css'
import settingsIcon from '../../img/settingswhite.png'

const ListHeaderNew = (props) => {

    const {
        handleSettingsChange,
        settings,        
        headertextEditMode,
        headertext,        
        section,         
    } = props
    
    const savedList = () => {
        return(
            <div className='savedLists-Header-Edit'>
                <img className='settingsImage'src={settingsIcon} alt='settings' onClick={handleSettingsChange}/> 
            </div> 
        )
    }

    const selectedList = () => {
        return(
            <div className='savedLists-Header-Edit'>
                <img className='settingsImage'src={settingsIcon} alt='settings' onClick={handleSettingsChange}/> 
            </div>     
        )
    }
    return (
        <div className='savedListsHeader'>   
            {settings && <div className='savedLists-Header-Text'>{headertextEditMode}</div>}
            {!settings && <div className='savedLists-Header-Text'>{headertext}</div>}
            {section === 'savedList' && savedList()}  
            {section === 'selectedList' && selectedList()}   
        </div>
    );
}

export default ListHeaderNew;

