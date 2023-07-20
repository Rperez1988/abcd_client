import React, {} from 'react';
import '../../css/pagesection.css'
import BlackBoxNew from './BlackBoxNew';

const PageSectionNew = (props) => {

    const {
        box,
        chartImage, 
        chartBarTotalResults, 
        setChartData,
        chartHeader, 
        getStockResultSelected, 
        handleBackButton, 
        filterOptionsOne,
        filterOptionsTwo,
        handleFilterChange,
        activeFilterOne,
        activeFilterTwo,
        setActiveFilterOne,
        scanTrades,
        statistics,
        currentTradeStats,
        allStocksList,
        selectedList,
        savedList,
        getData,
        testedList,
        loading,
        currentSelectList,
        currentSelectStrategy,
        selectedRunList,
        selectedRunStrategy,
        selectedRunListName,
        getInputValueSavedList,
        pushSavedListIntoDB,
        loadSavedLists,
        clearList,
        selectAll,
        selectItem,
        turnOnAllSelected,
        turnOffAllSelected,
        checkAndUnCheck,
        deletedSelectedList,
        loadSavedListIntoCurrentViewedList,
        next,
        prev,
        setPerPage,
        perPage,
        currentPage,
        currentPageMax,
        pageSelection,
        stockResultsBeingViewed,
        tradeResultsBeingViewed,
        stockResults,
        runningStrategy,
        rsCounter,
    } = props

    const runStrategyBox = () => {
        return  <BlackBoxNew          
            box={'loading'}
            headerName={'Loading'}
            // chartBarTotalResults={chartBarTotalResults} 
            allStocksList={allStocksList}
            selectedList={selectedList}
            clearList={clearList}
            selectAll={selectAll}
            selectItem={selectItem}
            testedList={testedList}
            getData={getData}     
            currentSelectList={currentSelectList}
            currentSelectStrategy={currentSelectStrategy}
            loadSavedListIntoCurrentViewedList={loadSavedListIntoCurrentViewedList}
            selectedRunList={selectedRunList}     
            selectedRunStrategy={selectedRunStrategy}
            selectedRunListName={selectedRunListName}    
            settings={false}     
            loading={loading}/>
    }
    
    const listBuilderBox = () => {
    
        return      <BlackBoxNew 
        box     = {'totalResultsLefty'}
        headerName    = {'List Builder'}
        // chartBarTotalResults       = {chartBarTotalResults} 
        allStocksList = {allStocksList}
        selectedList  = {selectedList}
        clearList     = {clearList}
        selectAll     = {selectAll}
        selectItem    = {selectItem}
        getInputValueSavedList = {getInputValueSavedList}   
        pushSavedListIntoDB = {pushSavedListIntoDB}
        loadSavedLists  = {loadSavedLists}
        savedList = {savedList}
        loadSavedListIntoCurrentViewedList = {loadSavedListIntoCurrentViewedList}
        // removeItemFromSelectedList = {removeItemFromSelectedList}
        // headerNameOfListAndCheckMarkStatus = {headerNameOfListAndCheckMarkStatus}
        turnOnAllSelected = {turnOnAllSelected}
        turnOffAllSelected = {turnOffAllSelected}
        checkAndUnCheck = {checkAndUnCheck}
        deletedSelectedList = {deletedSelectedList}
        // userSavedList = {userSavedList}  
        settings      = {false}
        loading={loading}
    />
    }
    
    const chartBarBox = () => {

        if(box === 'ChartBar'){
            return     <BlackBoxNew
            box                             = {box}
            headerName                      = {'Stocks Tested'}
            chartBarTotalResults            = {chartBarTotalResults}
            loading={loading}
            setChartData={setChartData}
            chartHeader                     = {chartHeader}  
            getStockResultSelected          = {getStockResultSelected}
            settings                        = {true}
            handleBackButton                = {handleBackButton}
            chartImage                      = {chartImage}
            filterOptionsOne                = {filterOptionsOne}
            filterOptionsTwo                = {filterOptionsTwo}
            handleFilterChange              = {handleFilterChange}
            activeFilterOne                 = {activeFilterOne}
            activeFilterTwo                 = {activeFilterTwo}
            setActiveFilterOne={setActiveFilterOne}
            setPerPage                      = {setPerPage}
            perPage                         = {perPage} 
            currentPage                     = {currentPage} 
            currentPageMax                  = {currentPageMax}
            next                            = {next}
            prev                            = {prev}
            pageSelection                   = {pageSelection}
            scanTrades                      = {scanTrades}
            stockResultsBeingViewed={stockResultsBeingViewed}
            tradeResultsBeingViewed={tradeResultsBeingViewed}
            runningStrategy={runningStrategy}
            rsCounter={rsCounter}
            
            stockResults={stockResults}/>
        }
    }
    
    const statisticsBox = () => {
        if(box === 'Statistics'){
            return <BlackBoxNew 
            box={'Statistics'}
            headerName={'Strategy Results'}
            statistics={statistics}
            currentTradeStats={currentTradeStats}
            loading={loading}/>
        }
    }
    
    const tradeImageBox = () => {
    
        return <BlackBoxNew
            box={'ChartBar'}
            headerName={'Trade Chart'}
            chartBarTotalResults={chartBarTotalResults}  
            loading={loading}
            chartHeader={chartHeader}  
            getStockResultSelected={getStockResultSelected}
            settings={true}
            handleBackButton={handleBackButton}
            chartImage={chartImage}
            setPerPage={setPerPage}
            perPage={perPage} 
            currentPage={currentPage} 
            currentPageMax={currentPageMax}
            scanTrades={scanTrades}
            stockResultsBeingViewed={stockResultsBeingViewed}
            tradeResultsBeingViewed={tradeResultsBeingViewed}
            
        />
    }
    
    const tradeStatsBox = () => {
    
        return <BlackBoxNew
            box                 = {'Statistics'}
            headerName                = {'Trade Results'}
            statistics          = {currentTradeStats}
            loading={loading}
            
            // currentTradeStats   = {currentTradeStats}
            // listType            = {listType}
        
        />
    }


    return(
        <div className='totalResults'>
            <div className='totalResultsContainer'>
                {box === 'loadingandselect' && runStrategyBox()}
                {/* {box === 'loadingandselect' && <div className='totalResultsMid'></div>}
                {box === 'loadingandselect' && listBuilderBox()} */}
                {box === 'Statistics' && statisticsBox()}
                {box === 'ChartBar' && chartBarBox()}
                {box === 'tradesPage' && tradeImageBox()}
                {box === 'tradesPage' && <div className='totalResultsMid'></div>}
                {box === 'tradesPage' && tradeStatsBox()}
            </div>
        </div>
    )
}

export default PageSectionNew
