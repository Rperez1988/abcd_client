import React, { useEffect, useState } from 'react';
import '../../css/runstrategy.css'
import ListNew from './ListNew';

const RunStrategyNew = (props) => {

    const [completedTestedStocks, setCompletedTestedStocks] = useState([])
    const [stocksTestedInterval, setStocksTestedInterval] = useState(null)
    const [listToBottom, setListToBottom] = useState(null)

    const {
        getData,
        currentSelectList,
        currentSelectStrategy,
        selectedRunList,
        loadSavedListIntoCurrentViewedList,
        selectedRunStrategy,
        selectedRunListName,
        loading,
    } = props

    const forceListToBottom = () => {

        const out = document.getElementsByClassName("runStrategyLoadingBox");
        const isScrolledToBottom = out[0].scrollHeight - out[0].clientHeight <= out[0].scrollTop + 1
    
        if (!isScrolledToBottom) {
            out[0].scrollTop = out[0].scrollHeight - out[0].clientHeight
        }
    
    }

    const loadingBox = () => {
        return       <div className='runStrategyLoadingBox'>
        {completedTestedStocks.map((item, index) => (
            <div className='runStrategyLoadingTab'  key={item['stock']}>
                <div className='loadingTabLeft'>{item['stock']}...</div>
                <div className='loadingTabRight'>Complete</div>
            </div>
        ))}

    </div>
    }

    const loadingBar = () => {

        return           <div className='loadingBarBox'>
        <div className='loadingBar' style={loadingBarCSS}>
            <div className='loadingBar2' ></div>
        </div>
    </div>

    }

    const loadningNumber = () => {
        return <div className='loadingNumber'>{completedTestedStocks.length} of {selectedRunList.length}</div>
    }

    const testBuilder = () => {
        return             <div className='runStrategyBoxTime1'>
          
        <div className='runStrategy-Build-Test'>Test Strategy</div>
        <div className='runStrategy-Build-SelectedStrategy'>{selectedRunStrategy}</div>
        <div className='runStrategy-Build-On'>On List</div>
        <div className='runStrategy-Build-SelectedList'>{selectedRunListName}</div>
        <div className='runStrategy-Build-'></div>

    </div>
    }

    const runAbort = () => {

        let text = 'Run'
        if(loading){
            text = 'Abort'
        }
        return <div className='runStrategyBoxTime2'>

        <div className='runStrategyBoxButtonBox'>
            <div className='runStrategyBoxButton' onClick={getData}>{text}</div>
        </div>

    </div>
    }

    const getStocksTested = async () => {

        try {
            const res = await fetch('http://192.168.1.189:8000/api/stocksTested');
            const totalResult = await res.json();
            
            setCompletedTestedStocks(totalResult)
   
        } catch (e) { console.log(e); }
    }

    let loadingBarCSS = {
        paddingRight: (100 - ((completedTestedStocks.length / selectedRunList.length) * 100)).toString() + '%'
    };
  
    useEffect(() => {
        if (loading){
            setStocksTestedInterval(setInterval(() => getStocksTested(), 500))
            setListToBottom(setInterval(() => forceListToBottom(), 500))
        }
        if(!loading){
            setStocksTestedInterval(clearInterval(stocksTestedInterval))
            setListToBottom(clearInterval(listToBottom))
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading])
    
    return (

        <div className='stocksTestedPadding'>
            <div className='stocksTestedBody'>
                <div className='runStrategyBox'>
                    <div className='runStrategyBoxLeft'>
                        {loadingBox()}
                        {loadingBar()}
                        {loadningNumber()}
                    </div>  
                    <div className='runStrategyBoxRight'>
                        <div className='BoxRight1'>
                            <ListNew
                                section={'availableStrategies'}
                                list={currentSelectStrategy}
                                headertext={'Select Strategy'}   
                                loadSavedListIntoCurrentViewedList={loadSavedListIntoCurrentViewedList}
                            />
                        </div>
                        <div className='BoxRight1'>
                            <ListNew 
                                section={'availableList'}
                                list={currentSelectList}
                                headertext={'Select List'}   
                                loadSavedListIntoCurrentViewedList={loadSavedListIntoCurrentViewedList}
                            />
                        </div>
                        <div className='BoxRight3'>
                            {testBuilder()}
                            {runAbort()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RunStrategyNew