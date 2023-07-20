import React, {} from 'react';
import '../../css/ListSelection/listselection.css'
import ListNew from './ListNew';

const ListBuilderNew = (props) => {

    const {
        allStocksList,
        selectedList,
        clearList,
        selectAll,
        selectItem,
        getInputValueSavedList,
        pushSavedListIntoDB,
        loadSavedLists,
        savedList,
        turnOnAllSelected,
        turnOffAllSelected,
        checkAndUnCheck,
        deletedSelectedList,
        loadSavedListIntoCurrentViewedList,
    } = props

    const header = () => {

        return <div className='listSelectionHeader'>
            <div className='listSelectionH1'>All Stocks</div>
            <div className='listSelectionH2'></div>
            <div className='listSelectionH1'>Stock List</div>
        </div>

    }

    const availableStocks = () => {
        
        return <div className='list-Body'>
                                
        {allStocksList.map(item => (

            (() => {

                switch (selectedList.some(el => el.name === item)) {

                    case true:
                        return null

                    case false:
                        return <div className='list-Body-Bar' onClick={() => {selectItem(item)}} key={item}>{item}</div>
                                            
                    default:
                        return null
                }
            })()



        ))}     
    </div>
    }

    const clearAll = () => {
        return   <div className='clearAll'>
        <div className='clearAllButton' onClick={selectAll}>
            <div className='clearAllButtonText'>Select All</div>
        </div>
    </div>
    }

    const options = () => {
        return        <div className='midSettings1Header'>
                                    
        {/* Saved List Tab */}
        <div className='savedListsH' onClick={loadSavedLists}>
            <div className='savedListsHText'>Select list to delete</div>
        </div>
        {/* Filter All Stocks Tab */}
        <div className='filterStocksHeader'>
            <div className='savedListsHText'>Filtered Stocks</div>
        </div>
    </div>  
    }

    const nameList = () => {
        return       <div className='mSBContent1'>
        <div className='nameListText'>Name List:</div>

        <div className='nameListInput'>
            <form>
                <label>
                    <input autoComplete="off" type="text" name="input" className='input' onChange={getInputValueSavedList}/>
                </label>
            </form>
        </div>

    </div>
    }

    const save = () => {
        return <div className='mSBContent2'>

            
            {
                (() => {

                    switch(selectedList.length !== 0){

                        case true:
                            return <div className='saveButtonBox2' onClick={pushSavedListIntoDB}>Save</div>

                        case false:
                            return 

                        
                        default:
                            return null

                    }


                })()
            }

        </div>
    }

    const savedlist = () => {
        return <div className='mSBContent3'> 

            <ListNew
                section             = {'savedList'}
                headertext          = {'Select List'}
                headertextEditMode  = {'Remove List'}
                list           = {savedList}
                turnOnAllSelected   = {turnOnAllSelected}
                turnOffAllSelected  = {turnOffAllSelected}
                checkAndUnCheck     = {checkAndUnCheck}
                deletedSelectedList = {deletedSelectedList}
                loadSavedListIntoCurrentViewedList = {loadSavedListIntoCurrentViewedList}/>

        </div>
    }

    const selectedlist = () => {
        return <div className='listSelection'>
        <div className='list-Body'>
            <ListNew 
                section             = {'selectedList'}
                list                = {selectedList}
                turnOnAllSelected   = {turnOnAllSelected}
                turnOffAllSelected  = {turnOffAllSelected}
                checkAndUnCheck     = {checkAndUnCheck}
                deletedSelectedList = {deletedSelectedList}
                loadSavedListIntoCurrentViewedList = {loadSavedListIntoCurrentViewedList}
                headertextEditMode  = {'Remove Stock'}
                headertext          ={<div className='clearAllButton'><div className='clearAllButtonText' onClick={clearList}>Clear List</div></div>}/>
        </div>
    </div>
    }
    
    return (
         
        <div className='stocksTestedPadding'>
            <div className='stocksTestedBody'>
                <div className='listSelectionBody'>
                    {header()}
                    <div className='listSelectionContent'>
                        <div className='listSelection' >
                            {clearAll()}
                            {availableStocks()}
                        </div>
                        <div className='midSettings'>
                            <div className='midSettings1'>
                                {options()}
                                <div className='midSettings1Body'>
                                    {nameList()}
                                    {save()}
                                    {savedlist()}
                                </div>
                            </div>
                        </div>
                        {selectedlist()}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListBuilderNew
