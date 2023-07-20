import React, { useState } from 'react';
import '../../css/Strategy Testing/strategyTesting.css'
import PageSectionNew from './PageSectionNew';

const StragtegyTestingNew = (props) => {

    const [perPage, setPerPage] = useState(10)
    const [currentPage, setCurrentPage] = useState(0)
    const [currentPageMax, setCurrentPageMax] = useState(1)
    const [pageSelected, setPageSelected] = useState(1)

    const { 
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
        stockResultsBeingViewed,
        tradeResultsBeingViewed,
        stockResults,
        runningStrategy,
        rsCounter,
    } = props;
    
    const handlePerPageChange = (val) => {

        if ((perPage * currentPageMax) > chartBarTotalResults.length){
            setCurrentPage(0)
            setCurrentPageMax(1)
            setPerPage(1)
        }
    
        else
            setPerPage(val)
    }

    const next = () => {
        if((perPage * currentPageMax) < chartBarTotalResults.length) {
            setCurrentPage(currentPage + 1)
            setCurrentPageMax(currentPageMax + 1)
        }
    }
 
    const prev = () => {
        if (currentPage > 0){
            setCurrentPage(currentPage - 1)
            setCurrentPageMax(currentPageMax - 1)
        }
    }

    const handlePageSelection = (val) => {
        setCurrentPage(val - 1)
        setCurrentPageMax(val)
        setPageSelected(val)
    }

    const runStrategyAndListBuilderSection = () => {
        return <PageSectionNew
            box={'loadingandselect'}
            allStocksList={allStocksList} 
            selectedList={selectedList}
            clearList={clearList}
            selectAll={selectAll}
            selectItem={selectItem}
            testedList={testedList}
            getData={getData}      
            getInputValueSavedList={getInputValueSavedList}         
            pushSavedListIntoDB={pushSavedListIntoDB}
            loadSavedLists={loadSavedLists}
            savedList={savedList}
            loadSavedListIntoCurrentViewedList={loadSavedListIntoCurrentViewedList}
            turnOnAllSelected={turnOnAllSelected}
            turnOffAllSelected={turnOffAllSelected}
            checkAndUnCheck={checkAndUnCheck}
            deletedSelectedList={deletedSelectedList}
            currentSelectList={currentSelectList}
            currentSelectStrategy={currentSelectStrategy}
            selectedRunList={selectedRunList}
            selectedRunStrategy={selectedRunStrategy}
            selectedRunListName={selectedRunListName}
            loading={loading}
            
        />  
    }

    const statisticsSection = () => {
        return <PageSectionNew
            box={'Statistics'}
            statistics={statistics}
            loading={loading}
        />
    }

    const chartBarSection = () => {
    
            return <PageSectionNew
            box={'ChartBar'}
            chartBarTotalResults={chartBarTotalResults} 
            chartHeader={chartHeader}
            perPage={perPage} 
            currentPage={currentPage} 
            currentPageMax={currentPageMax}
            pageSelected={pageSelected}
            getStockResultSelected={getStockResultSelected}
            handleBackButton={handleBackButton}
            chartImage={chartImage}
            filterOptionsOne={filterOptionsOne}
            filterOptionsTwo={filterOptionsTwo}
            handleFilterChange={handleFilterChange}
            activeFilterOne={activeFilterOne}
            activeFilterTwo={activeFilterTwo}
            setActiveFilterOne={setActiveFilterOne}
            setPerPage={handlePerPageChange}
            next={next}
            prev={prev}
            pageSelection={handlePageSelection}
            scanTrades={scanTrades}
            stockResultsBeingViewed={stockResultsBeingViewed}
            tradeResultsBeingViewed={tradeResultsBeingViewed}
            stockResults={stockResults}
            setChartData={setChartData}
            loading={loading}
            runningStrategy={runningStrategy}
            rsCounter={rsCounter}
        />


    }

    const tradeImageAndStatsSection = () => {
      
            return <PageSectionNew
            box={'tradesPage'}
            chartBarTotalResults={chartBarTotalResults}
            loading={loading}
            chartHeader={chartHeader}        
            perPage={perPage} 
            currentPage={currentPage} 
            currentPageMax={currentPageMax}
            getStockResultSelected={getStockResultSelected}
            handleBackButton={handleBackButton}
            chartImage={chartImage}
            statistics={statistics}
            currentTradeStats={currentTradeStats}
            listType={'singleTradeStats'}
            scanTrades={scanTrades}
            stockResultsBeingViewed={stockResultsBeingViewed}
            tradeResultsBeingViewed={tradeResultsBeingViewed}
            
        /> 
   
    }

      

    return (

        <div className='MainContent'>
          <div className='MainContent2'>
            <div className='space'></div>
            {runStrategyAndListBuilderSection()}
            <div className='space'></div>
            {statisticsSection()}
            <div className='space'></div>
            {!tradeResultsBeingViewed && chartBarSection()}
            {tradeResultsBeingViewed && tradeImageAndStatsSection()}
            <div className='space'></div>
          </div>
        </div>
    );
}

export default StragtegyTestingNew;