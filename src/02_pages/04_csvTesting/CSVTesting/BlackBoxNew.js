import React, { useState } from 'react';
import StatisticsNew  from './StatisticsNew';
import ChartNew    from './ChartNew';
import '../../css/blackbox.css'
import ListBuilderNew from './ListBuilderNew';
import BlackBoxHeaderNew from './BlackBoxHeaderNew';
import BlackBoxSettingsNew from './BlackBoxSettingsNew';
import RunStrategyNew from './RunStrategyNew';

const BlackBoxNew = (props) => {

    const [settingsActive, setSetttings] = useState(false)
    const [activeFilterOne, setActiveFilterOne] = useState('All Stocks Tested')
    const [activeFilterTwo, setActiveFilterTwo] = useState('Trades')

    const {
        box,
        headerName,
        chartImage, 
        chartBarTotalResults, 
        setChartData,
        chartHeader, 
        getStockResultSelected, 
        handleBackButton, 
        filterOptionsOne,
        filterOptionsTwo,
        handleFilterChange,
        // activeFilterOne,
        // activeFilterTwo,
        // setActiveFilterOne,
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

    const handleSettings = () => {
        setSetttings(!settingsActive)
    }

    const blackBoxHeader = () => {
        return <BlackBoxHeaderNew
            chartBarTotalResults={chartBarTotalResults}
            headerName={headerName}
            handleSettings={handleSettings}
            handleBackButton={handleBackButton}
            scanTrades={scanTrades}
            stockResultsBeingViewed={stockResultsBeingViewed}
            tradeResultsBeingViewed={tradeResultsBeingViewed}
            />
    }

    const blackBoxSettingsOne = () => {


        return <BlackBoxSettingsNew
            filterOptions={filterOptionsOne}
            handleFilterChange={handleFilterChange}
            setChartData={setChartData}
            activeFilter={activeFilterOne}
            chartData={chartBarTotalResults}
            setActiveFilterOne={setActiveFilterOne}
            setActiveFilterTwo={setActiveFilterTwo}
            stockResults={stockResults}
            loading={loading}/>
    }

    const blackBoxSettingsTwo = () => {


        return  <BlackBoxSettingsNew
            filterOptions={filterOptionsTwo}
            handleFilterChange={handleFilterChange}
            setChartData={setChartData}
            activeFilter={activeFilterTwo}
            chartData={chartBarTotalResults}
            setActiveFilterTwo={setActiveFilterTwo}/>
    }

    const listBuilderBox  = () => {
        return <ListBuilderNew
            allStocksList={allStocksList}
            selectedList={selectedList}
            clearList={clearList}
            selectAll={selectAll}
            selectItem={selectItem}
            getInputValueSavedList={getInputValueSavedList}
            pushSavedListIntoDB={pushSavedListIntoDB}
            loadSavedLists={loadSavedLists}
            savedList={savedList}
            turnOnAllSelected={turnOnAllSelected}
            turnOffAllSelected={turnOffAllSelected}
            checkAndUnCheck={checkAndUnCheck}
            deletedSelectedList={deletedSelectedList}
            loadSavedListIntoCurrentViewedList={loadSavedListIntoCurrentViewedList}
            loading={loading}/>
    }

    const runStrategyBox  = () => {
        return <RunStrategyNew
            testedList={testedList}
            selectedList={selectedList}
            getData={getData}     
            currentSelectList={currentSelectList}
            currentSelectStrategy={currentSelectStrategy}
            selectedRunList={selectedRunList}
            loadSavedListIntoCurrentViewedList={loadSavedListIntoCurrentViewedList}
            selectedRunStrategy={selectedRunStrategy}
            selectedRunListName={selectedRunListName}
            loading={loading}/>
    }

    const statisticsBox = () => {
        return <StatisticsNew 
            statistics={statistics}
            currentTradeStats={currentTradeStats}
            loading={loading}
            // listType={listType}
            />
    }

    const chartBox  = () => {
        return <ChartNew 
            chartBarTotalResults={chartBarTotalResults}  
            chartHeader={chartHeader}  
            getStockResultSelected={getStockResultSelected}
            setPerPage={setPerPage}
            perPage={perPage} 
            currentPage={currentPage} 
            currentPageMax={currentPageMax}
            next={next}
            prev={prev}
            pageSelection={pageSelection}
            loading={loading}
            runningStrategy={runningStrategy}
            rsCounter={rsCounter}
            />
    }

    const tradeImageBox  = () => {
        return <div className='buildingChart'>
            {chartImage.map((item, index) => (
                <img className='chartImage' key={index} src={item['image']} alt="new" />
            ))} </div>
    }
    
    let css = ''
    box === 'Statistics' && (css = 'strategyresults')
    box === 'ChartBar' && (css = 'ChartBarBox')
    box === 'totalResultsLefty' && (css = 'totalResultsLefty')
    box === 'loading' && (css = 'loading')
    return (
   
        <div className={css}>
            {blackBoxHeader()}

            <div className='sb'>
            {settingsActive && blackBoxSettingsOne()}
            {settingsActive && blackBoxSettingsTwo()}
            </div>

            {/* {box === 'totalResultsLefty' && listBuilderBox()} */}
            {box === 'loading' && runStrategyBox()} 
            {box === 'Statistics' && statisticsBox()}
            {!tradeResultsBeingViewed && box === 'ChartBar' && chartBox()}
            {tradeResultsBeingViewed && box === 'ChartBar' && tradeImageBox()}
        </div>
    );
}

export default BlackBoxNew

