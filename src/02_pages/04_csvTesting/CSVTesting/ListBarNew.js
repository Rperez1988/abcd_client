import '../../css/ListSelection/listselection.css'
import checkmark      from '../../img/xred.png'

const ListBarNew = (props) => {

    const {
        section,    
        item,      
        checkAndUnCheck,
        loadSavedListIntoCurrentViewedList,
        name,          
        list,     
        settings,   
    } = props

    const checkBox = () => {
        return <div className='savedLists-Bar-EditMode-FlexBlock1' >
        <div className='savedLists-Bar-EditMode-FlexBlock1-Image' onClick={() => {checkAndUnCheck(section, item['name'])}}>
            {item['checkMark'] && <img className='settingsImage'src={checkmark} alt='checkmark'/>}

        </div>
    </div>
    }
    
    return (
        <div className='savedLists-Bar-EditMode' onClick={() => {loadSavedListIntoCurrentViewedList(section,name,list, item['name'])}}>
            {settings && checkBox()}
            <div className='savedLists-Bar-EditMode-FlexBlock2'>{item['name']}</div>
        </div>
    );
}

export default ListBarNew;


