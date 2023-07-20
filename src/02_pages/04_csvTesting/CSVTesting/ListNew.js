import React, { useState } from 'react';
import '../../css/ListSelection/listselection.css'
import ListBarNew from './ListBarNew';
import ListHeaderNew from './ListHeaderNew';

const ListNew = (props) => {

    const [settings, setSettings] = useState(false)

    const {
        section,
        list,          
        turnOnAllSelected,   
        turnOffAllSelected,  
        checkAndUnCheck,   
        deletedSelectedList, 
        loadSavedListIntoCurrentViewedList, 
        headertextEditMode, 
        headertext,        
    } = props

    const handleSettingsChange = () => {
        setSettings(!settings)
      }

    const header = () => {
        return (
            <ListHeaderNew 
                handleSettingsChange= {handleSettingsChange}
                settings            = {settings} 
                headertextEditMode  = {headertextEditMode} 
                headertext          = {headertext}
                section             = {section}
            />
        )
    }

    const editOptions = () => {
        return           <div className='savedLists-EditSection'>
        <div className='savedLists-EditSection-Select' onClick={() => turnOnAllSelected(section)}>Select All</div>
        <div className='savedLists-EditSection-UnSelect' onClick={() => turnOffAllSelected(section)}>UnSelect All</div>
        <div className='savedLists-EditSection-Delete' onClick={() => deletedSelectedList(section)}>Delete</div>
    </div>
    }
    
    const bar = () => {
        return            <div className='savedListsBody'>
        {list.map(item => ( 
            <ListBarNew
                section         = {section} 
                key             = {item['name']} 
                item            = {item} 
                checkAndUnCheck = {checkAndUnCheck} 
                loadSavedListIntoCurrentViewedList = {loadSavedListIntoCurrentViewedList}
                name            = {item['name']}
                list            = {item['list']}
                settings        = {settings}
            />
        ))}
    </div>
    }

    return (
        <div className='savedLists'>
            {header()}
            {settings && editOptions()}
            {bar()}
        </div>
    );
}

export default ListNew;



