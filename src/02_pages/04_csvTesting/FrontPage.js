import React, { useState, useEffect } from 'react';
import '../css/body.css'
import LiveTradingPage from './Live_Trading/_LiveTrading';
// import RunStrategyNew from './RunStrategyNew';
import SideBarNew from '../../Components/CSVTesting/SideBarNew';
import StragtegyTestingNew from '../../Components/CSVTesting/StrategyTestingNew';

const gatherListOfStocksToTest = (selectedList) => {
  let namesOfStocksToTest = []
  selectedList.forEach(item => {
    namesOfStocksToTest.push(item['name'])
  })

  return namesOfStocksToTest
}
const testStrategy = async (namesOfStocksToTest, length, stockActive, plBelowPh, PHtoPLLength, pLtoShortLength, marketType, selectedRunStrategy, selectedRunList) => {

    try {
        const response = await fetch('http://192.168.1.189:8000/singleStockEngine', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                length          : String(1),
                // stock           : String(stockActive),
                // plBelowPh       : String(plBelowPh),
                // PHtoPLLength    : String(PHtoPLLength),
                // pLtoShortLength : String(pLtoShortLength),
                // marketType      : String(marketType),
                // selectedList    : String(namesOfStocksToTest),
                // selectedRunStrategy  : String(selectedRunStrategy),
                // selectedRunList      : String(selectedRunList),
            })
    });
    const data = await response.json();
    console.log('data: ' + data);
    } catch (error) {console.log(error)}
}
const getStrategyResults = async () => {

    try {
      const resultsJsn  = await fetch('http://192.168.1.189:8000/api/totalresults');
      const results     = await resultsJsn.json();

      let loadedStrategyStatistics = {
        'Tested'             : results[0]['tested'],
        'Trade Type'         : 'Short',
        'Trades Open'        : results[0]['totalOpen'], 
        'Trades Closed'      : results[0]['totalClosed'], 
        'Trades Won'         : results[0]['totalWon'],
        'Trades Lost'        : results[0]['totalLost'], 
        'PNL'         : results[0]['totalPnl'], 
        'WinRate'     : results[0]['totalWr'],
        'Largest Win' : results[0]['largestWin'], 
        'Largest Lost': results[0]['largestLost'], 
        'Average Win' : results[0]['avgWin'], 
        'Average Lost': results[0]['avgLost'], 
        'Shortest One2Two': results[0]['shortestOneToTwo'], 
        'Longest One-Two': results[0]['longestOneToTwo'], 
        'Average One2Two': results[0]['avgOneToTwo'], 
        'Shortest Two2Short': results[0]['shortestTwoToShort'], 
        'Longest Two2Short': results[0]['longestTwoToShort'], 
        'Average Two2Short': results[0]['avgTwoToShort'], 
        'Shortest Trade' : results[0]['shortestTrade'], 
        'Longest Trade': results[0]['longestTrade'], 
        'Average Trade': results[0]['avgTrade'], 

      }

      return loadedStrategyStatistics

    } catch (e) { console.log(e); }
}
const getStockResults = async () => {

    try {
        const resultsJsn  = await fetch('http://192.168.1.189:8000');
        const result      = await resultsJsn.json();

        return result

    } catch (e) { console.log(e); }

}
const formatStockResultsForChart = (stockResults) => {

    let formattedStockResults = []
    stockResults.forEach(item => {
        let eachStockResult = {
            'Stock': item['stock'], 
            'Trades': parseInt(item['total_close']),
            'PNL': item['pnl'],
            'WinRate': String((parseInt(item['strike_rate'])) + '%'), 
            'Won': item['largestWin'],
            'Lost': item['largestLost'], }
            formattedStockResults.push(eachStockResult)
    })

    formattedStockResults.forEach(item => {
        if(item['Trades'] === 0){
            item['PNL'] = '-'
            item['WinRate'] = '-'
            item['Lost'] = '-'
            item['Won'] = '-'        
        }
    })

    return formattedStockResults
}
const getTradeResults = async () => {

    try {
      const res = await fetch('http://192.168.1.189:8000/api/traderesults');
      const trade = await res.json();

      return trade

    } catch (e) { console.log(e); }

}
const sendSelectedStockToBackEnd = async (stock) => {

    try {
      const response = await fetch('http://192.168.1.189:8000/getStockStatistics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          stock : String(stock),
        })
      });
      await response.json();
    } catch (error) {console.log(error)}
}
const getStockStatistics = async (stock) => {

    try {
      const resultsJsn  = await fetch('http://192.168.1.189:8000/api/stockStatistics');
      const results     = await resultsJsn.json();

      return results

    } catch (e) { console.log(e); }
}
const formatStockStatistic = (results) => {

    let stockStatistics
    if (results.length === 0) {
        stockStatistics = {
            'Stock': results[0]['stock'],
            'Total PNL'     : 0,
            'Avg PNL:'      : 0,
            'Largest Win'   : 0,
            'Largest Lost'  : 0,
            'Average Win'   : 0,
            'Average Lost'  : 0,
            'Longest Trade' : 0,
            'Shortest Trade': 0,
            'Average Trade' : 0,
        }
    }

    else{
        stockStatistics = {
            'Stock'         : results[0]['stock'],
            'Total PNL'     : results[0]['totalPnl'],
            'Avg PNL:'      : results[0]['avgPnl'],
            'Largest Win'   : results[0]['largestWin'],
            'Largest Lost'  : results[0]['largestLost'],
            'Average Win'   : results[0]['avgWin'], 
            'Average Lost'  : results[0]['avgLost'],
            'Longest Trade' : results[0]['longestTrade'],
            'Shortest Trade': results[0]['shortestTrade'],
            'Average Trade' : results[0]['avgTrade'],
        }
    }

    return stockStatistics

}
const getAllTradesOfSelectedStock = (tradeResults, object) => {

    const trades = [] 
    tradeResults.forEach(item => {
        if(item['stock'] === object['Stock'] || item['stock'] === object['stock']  ){
            trades.push(item)
        }
    })   

    return trades
}
const getTradeStatistics = (allTradesOfSelectedStock) => {

    let newStats = {
        'Result'          : allTradesOfSelectedStock['trade_result'],
        'Risk/Reward'     : '1:' + allTradesOfSelectedStock['riskRewardRatio'],
        'PNL'             : allTradesOfSelectedStock['pnl'],
        'RSI'             : allTradesOfSelectedStock['rsi'],
        'Risk'            : allTradesOfSelectedStock['risk'],
        'Reward'          : allTradesOfSelectedStock['reward'],
        'Type'            : 'Bear',
        'Stop Loss'       : allTradesOfSelectedStock['low_close_mark'],
        'Take Profit'     : allTradesOfSelectedStock['high_close_mark'],
        'Pivot One Date'  : allTradesOfSelectedStock['date_of_pivot_high'],
        'Pivot Two Date'  : allTradesOfSelectedStock['date_of_pivot_low'],
        'S&R Tested Date' : allTradesOfSelectedStock['date_pivot_high_snr_tested'],
        'Enter Date'      : allTradesOfSelectedStock['date_entered_short'],
        'Exit Date'       : allTradesOfSelectedStock['date_closed_short'],
        'Pivot One Price' : allTradesOfSelectedStock['price_of_pivot_high'],
        'Pivot Two Price' : allTradesOfSelectedStock['price_of_pivot_low'],
        'S&R Tested Price': allTradesOfSelectedStock['price_pivot_high_snr_tested'],
        'Enter Price'     : allTradesOfSelectedStock['price_entered_short'],
        'Exit Price'      : allTradesOfSelectedStock['price_closed_short'],
    
        'Empty2'          : 0,
        'Empty3'          : 0,
        'Empty4'          : 0,
        'Empty5'          : 0,
        'Empty6'          : 0,
        'Empty7'          : 0,
    }

    return newStats
}
const generateChartImage = async (tradeID, object) => {
    try {
      await fetch('http://192.168.1.189:8000/getTradeID', {
        method: 'POST',
        headers: {},
        body: JSON.stringify({
          tradeID          : String(tradeID),
          stock            : String(object['stock'])
        })
      });

    } catch (error) {console.log(error)}

}
const liveTrading = async (length, stockActive, plBelowPh, PHtoPLLength, pLtoShortLength, marketType, selectedRunStrategy) => {
  try {
    await fetch('http://192.168.1.189:8000/getLiveData', {
      method: 'POST',
      headers: {},
      body: JSON.stringify({
        length          : String(length),
        stock           : String(stockActive),
        plBelowPh       : String(plBelowPh),
        PHtoPLLength    : String(PHtoPLLength),
        pLtoShortLength : String(pLtoShortLength),
        marketType      : String(marketType),
        // selectedList    : String(namesOfStocksToTest),
        selectedRunStrategy  : String(selectedRunStrategy),
      })
    });

  } catch (error) {console.log(error)}

}
const retrieveChartImage = async () => {
    try {
      const res = await fetch('http://192.168.1.189:8000/api/chartImage');
      const result = await res.json();
    
        return result
    } catch (e) { console.log(e); }

}
const deleteChartImage  = async () => {

    try {
     const response = await fetch('http://192.168.1.189:8000/deleteChartImage', {
       method: 'POST',
       headers: {

         'Content-Type': 'application/json'
       },
       body: JSON.stringify({

       })
     });
     const data = await response.json();

     console.log('data: ' + data);
   } catch (error) {console.log(error)}

}
const getAllSavedLists = async () => {

    // try {
    //   const res = await fetch('http://192.168.1.189:8000/api/savedLists');
    //   let result = await res.json();
    //   return result

    // } catch (e) { console.log(e); }
}
const getFormatSavedLists = (backEndlist, listNames) => {
  let updatedList
  updatedList = listNames.map(x=> ({'name': x, 'list': [], 'checkMark': false}));

  updatedList.forEach(item1 => {
    backEndlist.forEach(item2 => {
      if (item1['name'] === item2['name']){
        item1['list'].push(item2['stock'])
      }
    }) 
  })

  return updatedList
}
const deleteSavedList = async (namesOfCheckedStocks) => {
      
  try {
    const response = await fetch('http://192.168.1.189:8000/deleteSavedList', {
      method: 'POST',
      headers: {

        'Content-Type': 'application/json'
      },
      body: JSON.stringify({

        listName  : String(namesOfCheckedStocks),

      })
    });
    const data = await response.json();

    console.log('data: ' + data);
   } catch (error) {console.log(error)}

}
const deleteItemsInList = async (namesOfCheckedStocks,selectedList) => {
  try {
    const response = await fetch('http://192.168.1.189:8000/deleteItemsInList', {
      method: 'POST',
      headers: {

        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        
        listName  : String(selectedList[0]['inList']),
        names     : String(namesOfCheckedStocks),

      })
    });
    const data = await response.json();

    console.log('data: ' + data);
   } catch (error) {console.log(error)}

}
const BodyNew = () =>{  

    const [chartImage, setChartImage] = useState([]);
    const [stockBeingSearched, setStockBeingSearched] = useState('')
    const [length, setLength] = useState(20)
    const [plBelowPh, setPlBelowPh] = useState('true')
    const [pHtoPLLength, setPHtoPLLength] = useState('300')
    const [pLtoShortLength, setPLtoShortLength] = useState('300')
    const [marketType, setMarketType] = useState('Bull')
    const [chartData, setChartData] = useState([])
    const [mostRecentChartData, setMostRecentChartData] = useState([])
    const [chartBackButtonActive, setChartBackButtonActive] = useState(false)
    const [currentChartBarHeader, setCurrentChartBarHeader] = useState(['Stock','Trades','PNL','WinRate','Largest Win', 'Largest Lost'])
    const [currentTradeName, setCurrentTradeName] = useState(null)
    const [currentTradeId, setCurrentTradeId] = useState(null)
    const [strategyResults, setStrategyResults] = useState(null)
    const [stockResults, setStockResults] = useState(null)
    const [tradeResults, setTradeResults] = useState(null)
    const [currentStatistics, setCurrentStatistics] = useState( {'Tested': 0,'Open': 0, 'Closed': 0, 'Won': 0,'Lost': 0, 'PNL': 0, 'WinRate': 0,'Largest Win': 0, 'Largest Lost': 0, 'Average Win': 0, 'Average Lost': 0, })
    const [tradeStatistics, setTradeStatistics] = useState({'Result': 0,'PNL': 0,'Low Close': 0,'High Close': 0,'Pivot One Date': 0,'Pivot Two Date': 0,'S&R Tested Date' : 0,'Enter Date': 0,'Exit Date': 0,'Pivot One Price' : 0,'Pivot Two Price' : 0,'S&R Tested Price': 0,'Enter Price': 0,'Exit Price': 0},)
    const [savedList, setSavedList] = useState([])
    const [selectedList, setSelectedList] = useState([])
    const [currentSelectList, setCurrentSelectList] = useState( [])
    const [selectedRunStrategy, setSelectedRunStrategy] = useState('')
    const [selectedRunList, setSelectedRunList] = useState([])
    const [selectedRunListName, setSelectedRunListName] = useState('')
    const [loading, setLoading] = useState(false)
    const [userSavedList, setUserSavedList] = useState('') 
    const [stockResultsBeingViewed, setStockResultsBeingViewed] = useState(false)
    const [tradeResultsBeingViewed, setTradeResultsBeingViewed] = useState(false)
    const [allTradesOfSelectedStock, setAllTradesOfSelectedStock] = useState(false)
    const [liveTradingPage, setLiveTradingPage] = useState(true)
    const [strategyTestingPage, setStrategyTestingPage] = useState(false)
    // const [rsDisplayText, setRsDisplayTest] = useState('')
    const [rsCounter, setRsCounter] = useState(1)
    const stocksBeingShown  = ['']
    const stockActive = ['AAL']
    const currentSelectStrategy = [{'name': 'Trend Folow'},{'name': 'AB=CD'}]
    const filterOptionsOne = ['All Stocks Tested','Only Stocks With Trades Made']
    const filterOptionsTwo = ['Trades','PNL','WR','Largest Win','Largest Lost']
    const strategyChartDataHeader = ['Stock','Trades','PNL','WinRate','Largest Win', 'Largest Lost']
    const stocksChartDataHeader = ['Stock','Result', 'PNL', 'PO Date','PT Date','S&R Date', 'Shorted Date','Date Exited','PO Price', 'PT Price','S&R Price','Shorted Price','Price Exited', 'Stop Loss', 'Profit', 'Rsi', 'RR', 'PO Close','PT Close']
    const allStockNames = [ 
      'ALT', 'AACG', 'AAL', 'AAME', 'AAOI', 'AAON', 'AAPL', 'AATC', 'AAWW', 'ABCB', 'ABEO', 'ABIO','ABST', 'ABTX', 'ABUS','ACB', 'ACBI', 'ACER', 'ACGL', 'ACGLO', 'ACHC', 'ACHV', 'ACIU', 'ACIW',
      'ACLS', 'ACMR', 'ACNB', 'ACOR', 'ACRS', 'ACRX', 'ACST', 'ACTG', 'ADAP', 'ADBE', 'ADES', 'ADI', 'ADMA', 'ADMP', 'ADP', 'ADSK', 'ADTN', 'ADUS', 'ADVM', 'ADXS', 'AEHL', 'AEHR', 'AEIS', 'AEMD', 'AEP', 
      'AERI', 'AESE', 'AEYE', 'AEZS', 'AFBI', 'AFMD', 'AGFS', 'AGIO', 'AGRX', 'AGTC', 'AGYS', 'AHPI', 'AIKI', 'AIMC', 'AINV', 'AIRG', 'AIRT', 'AKAM', 'AKBA', 'AKTS', 'AKTX', 'ALGN', 'ALGT', 'ALJJ', 'ALKS', 
      'ALLT', 'ALNY', 'ALOT', 'ALPN', 'ALPP', 'ALRM', 'ALRN', 'ALRS', 'ALTO', 'ALTR', 'ALYA', 'AMAT', 'AMBA', 'AMCX', 'AMD', 'AMED','AMEH', 'AMGN', 'AMKR', 'AMNB', 'AMOT', 'AMPH', 'AMRK', 'AMRN', 'AMRS', 
      'AMSC', 'AMSF', 'AMWD', 'AMZN', 'ANAB', 'ANAT', 'ANDE', 'ANGI', 'ANSS', 'ANTE', 'ANY', 'AOSL', 'APA', 'APDN', 'APEI', 'APEN', 'APLS', 'APOG', 'APPF', 'APPN', 'APPS', 'APTO', 'APVO',
      'APWC', 'AQB', 'AQMS', 'ARAV', 'ARAY', 'ARCB', 'ARCC', 'ARCT', 'AREC', 'ARGX', 'ARTNA', 'ASND', 'ASPU', 'ASTC', 'ASUR', 'ATEX', 'ATHE', 'ATLC', 
      'ATNI', 'ATOS', 'ATRC', 'ATRO', 'ATVI', 'ATXI', 'ATXS','AUB', 'AUBN', 'AUDC', 'AUPH', 'AUTO', 'AVAV', 'AVCT', 'AVDL', 'AVEO',
      'AVGO', 'AVGR', 'AVID', 'AVNW', 'AVT', 'AVTX', 'AVXL', 'AWH', 'AWRE', 'AXDX', 'AXGN', 'AXON', 'AXSM', 'AXTI', 'AY', 'AYRO', 'AYTU', 'AZN', 'AZPN', 'BAND',
      'BANF', 'BANFP', 'BANR', 'BANX', 'BATRK', 'BBBY', 'BBCP', 'BBGI', 'BBI', 'BBQ', 'BBSI', 'BCBP', 'BCDA', 'BCLI', 'BCML', 'BCOR', 'BCOV', 'BCPC', 'BCRX',
      'BCTX', 'BDSI', 'BECN', 'BEEM', 'BELFA', 'BELFB', 'BFC', 'BFIN', 'BGCP', 'BGFV', 'BGNE', 'BHF', 'BIDU', 'BIIB', 'BIMI', 'BIOC', 'BIOL', 'BJRI', 'BKCC',
      'BKEP', 'BKEPP', 'BKNG', 'BKSC', 'BKYI', 'BL', 'BLBD', 'BLCM', 'BLDP', 'BLFS', 'BLIN', 'BLKB', 'BLMN', 'BLNK', 'BLPH', 'BLRX', 'BLU', 'BLUE', 'BMRA',
      'BMRC', 'BMRN', 'BNFT', 'BNSO', 'BNTC', 'BOKF', 'BOMN', 'BOOM', 'BOSC', 'BOTJ', 'BOXL', 'BPMC', 'BPOP', 'BPOPM', 'BPRN', 'BPTH', 'BRCN', 'BRID', 'BRKL',
      'BRKR', 'BRQS', 'BSCM', 'BSCN', 'BSCO', 'BSCP', 'BSCQ', 'BSCR', 'BSET', 'BSGM', 'BSJM',
      'BSJN', 'BSJO', 'BSJP', 'BSQR', 'BSRR', 'BTB', 'BTCS', 'BTEC', 'BTX', 'BUSE', 'BVXV', 'BWEN', 'BWFG', 'BYFC', 'BYRN', 'BYSI', 'BZUN', 'CAAS', 'CAC', 'CACC',
      'CACG', 'CAKE', 'CALA', 'CALM', 'CAMP', 'CAMT', 'CAPR', 'CAR', 'CARA', 'CARE', 'CARG', 'CARV', 'CARZ', 'CASA', 'CASH', 'CASI', 'CASS', 'CASY', 'CATC', 'CATH',
      'CATY', 'CBAN', 'CBAT', 'CBAY', 'CBFV', 'CBIO', 'CBRL', 'CBSH', 'CBTX', 'CCBG', 'CCD', 'CCEP', 'CCLP', 'CCMP', 'CCNE', 'CCOI', 'CCRN', 'CCXI', 'CDC',
      'CDEV', 'CDK', 'CDL', 'CDMO', 'CDNA', 'CDNS', 'CDTX', 'CDW', 'CDXC', 'CDXS', 'CDZI', 'CECE', 'CELC', 'CELH', 'CEMI', 'CENT', 'CENTA', 'CENX', 'CERN', 'CERS',
      'CETX', 'CETXP', 'CEVA', 'CEY', 'CFA', 'CFBK', 'CFFI', 'CFFN', 'CFMS', 'CFO', 'CFRX', 'CG', 'CGBD', 'CGC', 'CGEN', 'CGNX', 'CGO', 'CGRN', 'CHCI', 'CHCO', 'CHDN',
      'CHEF', 'CHEK', 'CHKP', 'CHMG', 'CHNR', 'CHRS', 'CHRW', 'CHSCL', 'CHSCM', 'CHSCN', 'CHSCO', 'CHSCP', 'CHTR', 'CHUY', 'CHW', 'CHY', 'CIBR', 'CID', 'CIDM', 'CIGI',
      'CIL', 'CINF', 'CIVB', 'CIZ', 'CLBS', 'CLDX', 'CLIR', 'CLLS', 'CLPT', 'CLRB', 'CLRG', 'CLRO', 'CLSD', 'CLSK', 'CLSN', 'CLXT', 'CMCO', 'CMCSA', 'CMCT', 'CME',
      'CMPR', 'CMRX', 'CNCE', 'CNCR', 'CNDT', 'CNET', 'CNFR', 'CNOB', 'CNSL', 'CNTY', 'CNXN', 'COCP', 'CODA', 'CODX', 'COFS', 'COHR', 'COHU', 'COKE', 'COLB', 'COLL',
      'COLM', 'COMM', 'COMS', 'COMT', 'CONE', 'CONN', 'COOP', 'CORT', 'COST', 'COUP', 'COWN', 'CPHC', 'CPIX', 'CPLP', 'CPRT', 'CPRX', 'CPSH', 'CPSI', 'CPSS', 'CPTAG',
      'CPTAL', 'CRAI', 'CRBP', 'CRDF', 'CREG', 'CRESY', 'CREX', 'CRIS', 'CRMD', 'CRMT', 'CROX', 'CRSP', 'CRTO', 'CRUS', 'CRVL', 'CRVS', 'CRWS',
      'DBVT', 'DCOM', 'DCPH', 'DGICA', 'DGII', 'DGLY', 'DGRE', 'DGRS', 'DGRW', 'DHCNI', 'DIOD', 'DISCA', 'DISCB', 'DISCK', 'DISH', 'DJCO', 'DLHC', 'DLPN',
      'DLTH', 'DLTR', 'DMAC', 'DMLP', 'DMRC', 'DMTK', 'DNLI', 'DOGZ', 'DOOO', 'DORM', 'DOX', 'DRIO', 'DRRX', 'DRTT', 'DSGX', 'DSKE', 'DSWL', 'DTEA', 'DTST', 'DUOT',
      'DVY', 'DWAS', 'DWAT', 'DWPP', 'DWSN', 'DXCM', 'DYNT', 'DZSI', 'EA', 'EAST', 'EBAY', 'EBIX', 'EBMT', 'ECPG', 'EDAP', 'EDIT', 'EDSA', 'EDUC', 'EEFT', 'EEMA', 'EFAS',
      'EFOI', 'EGAN', 'EGBN', 'EGLE', 'EGRX', 'EMIF', 'EMKR', 'EML', 'EMXC', 'ENDP', 'ENG', 'ENLV', 'ENVB', 'ENZL', 'EPAY', 'EPIX', 'EPSN', 'EPZM', 'EQBK', 'EQIX',
      'EQRR', 'ERIC', 'ERIE', 'ERII', 'ERYP', 'ESBK', 'ESCA', 'ESEA', 'ESGD', 'ESGE', 'ESGR', 'ESGU', 'ESLT', 'ESPR', 'ESQ', 'ESSA', 'ETSY', 'EUFN', 'EVBG', 'EVFM',
      'EVO', 'EVOK', 'EVOL', 'EWBC', 'EWZS', 'EXAS', 'EXC', 'EXEL', 'EXLS', 'EXPD', 'EXPE', 'EXPO', 'EXTR', 'EYE', 'EYES', 'EYPT', 'EZPW', 'FAAR', 'FAB', 'FAD', 'FALN',
      'FANG', 'FANH', 'FARM', 'FARO', 'FAST', 'FAT', 'FATE', 'FB', 'FBIO', 'FBIOP', 'FBIZ', 'FBMS', 'FBNC', 'FBRX', 'FBZ', 'FCA', 'FCAL', 'FCAP', 'FCBC', 'FCCO', 'FCCY',
      'FCEF', 'FCEL', 'FCFS', 'FCNCA', 'FCRD', 'FCVT', 'FDBC', 'FDIV', 'FDT', 'FDTS', 'FDUS', 'FEIM', 'FELE', 'FEM', 'FEMB', 'FEMS', 'FENC', 'FEP', 'FEUZ', 'FEX',
      'FFBC', 'FFBW', 'FFHL', 'FFIC', 'FFIN', 'FFIV', 'FFNW', 'FFWM', 'FGBI', 'FGEN', 'FGF', 'FID', 'FINX', 'FISI', 'FISV', 'FITB', 'FITBI', 'FIVE', 'FIVN', 'FIXD',
      'FIZZ', 'FJP', 'FKU', 'FKWL', 'FLDM', 'FLEX', 'FLGT', 'FLIC', 'FLL', 'FLMN', 'FLNT', 'FLXS', 'FMAO', 'FMB', 'FMBH',
      'FMBI', 'FMHI', 'FMNB', 'FNCB', 'FNHC', 'FNK', 'FNKO', 'FNLC', 'FNWB', 'FNWD', 'FNX', 'FNY', 'FOLD', 'FONR', 'FORD', 'FORM', 'FORR', 'FORTY', 'FOSL', 'FOXF',
      'FPA', 'FPAY', 'FPXI', 'FRAF', 'FRBA', 'FRBK', 'FRGI', 'FRME', 'FRPH', 'FRPT', 'FRSX', 'FRTA', 'FSBW', 'FSFG', 'FSLR', 'FSTR', 'FSTX', 'FSV', 'FSZ', 'FTA',
      'FTAG', 'FTC', 'FTCS', 'FTEK', 'FTFT', 'FTGC', 'FTHI', 'FTLB', 'FTNT', 'FTSL', 'FTSM', 'FTXD', 'FTXG', 'FTXH', 'FTXL', 'FTXN', 'FTXO', 'FTXR', 'FULT',
      'FUNC', 'FUND', 'FUSB', 'FUV', 'FV', 'FVC', 'FVCB', 'FVE', 'FWBI', 'FWONA', 'FWP', 'FWRD', 'FXNC',
      'FYC', 'FYT', 'FYX', 'GAIA', 'GAIN', 'GALT', 'GASS', 'GBCI', 'GBDC', 'GBLI', 'GBOX', 'GBT', 'GCBC', 'GDEN', 'GDS', 'GECC', 'GEG', 'GENC', 'GENE',
      'GENY', 'GEOS', 'GERN', 'GGAL', 'GIFI', 'GIGM', 'GIII', 'GILD', 'GILT', 'GLAD', 'GLBS', 'GLBZ', 'GLDD', 'GLDI', 'GLG', 'GLMD', 'GLNG', 'GLPG',
      'GRBK', 'GREE', 'GRFS', 'GRID', 'GRMN', 'GROM', 'GROW', 'GRPN', 'GRVY', 'GSBC', 'GSIT', 'GSM', 'GT', 'GTHX', 'GTIM', 'GTYH', 'GURE', 'GVP', 'GWGH',
      'GWRS', 'GYRO', 'HA', 'HAFC', 'HAIN', 'HALL', 'HALO', 'HAS', 'HAYN', 'HBAN', 'HBCP', 'HBIO', 'HBMD', 'HBNC', 'HBP', 'HCCI', 'HCKT', 'HCM', 'HCSG',
      'HDSN', 'HEAR', 'HEES', 'HELE', 'HEPA', 'HEWG', 'HFBL', 'HFFG', 'HFWA', 'HGBL', 'HGEN', 'HGSH', 'HIBB', 'HIFS', 'HIHO', 'HIMX', 'HLNE', 'HMHC',
      'HMNF', 'HMST', 'HMTV', 'HNNA', 'HNRG', 'HOFT', 'HOLI', 'HOLX', 'HOMB', 'HON', 'HONE', 'HOPE', 'HOVNP', 'HQY', 'HROW', 'HRTX', 'HRZN', 'HSDT',
      'HTBK', 'HTBX', 'HTGM', 'HTHT', 'HTLD', 'HTLF', 'HUBG', 'HURC', 'HURN', 'HUSN', 'HVBC', 'HWBK', 'HWC', 'HWKN', 'HYXF', 'HYZD', 'HZNP', 'IAC', 'IART',
      'IBB', 'IBKR', 'IBOC', 'IBRX', 'IBTX', 'ICAD', 'ICCC', 'ICFI', 'ICHR', 'ICLK', 'ICLN', 'ICLR', 'ICMB', 'ICPT', 'ICUI', 'IDCC', 'IDEX', 'IDLB', 'IDRA',
      'IDXX', 'IEA', 'IEF', 'IEI', 'IEP', 'IESC', 'IGF', 'IGIB', 'IGOV', 'IGSB', 'III', 'IIN', 'IIVI', 'IJT', 'ILMN', 'IMBI', 'IMCV', 'IMGN', 'IMKTA',
      'IMMP', 'IMMR', 'IMOS', 'IMRN', 'IMTE', 'IMUX', 'IMV', 'IMXI', 'INBK', 'INCY', 'INDB', 'INDP', 'INDT', 'INDY', 'INFI', 'INFN', 'INFR', 'INGN', 'INM',
      'INO', 'INOD', 'INPX', 'INSE', 'INSG', 'INSM', 'INTC', 'INTG', 'INTU', 'INTZ', 'INVA', 'INVE', 'IONS', 'IOSP', 'IOVA', 'IPA', 'IPAR', 'IPDN', 'IPGP',
      'IPKW', 'IPWR', 'IRBT', 'IRCP', 'IRDM', 'IRIX', 'IRMD', 'IROQ', 'IRTC', 'IRWD', 'ISBC', 'ISEE', 'ISRG', 'ISSC', 'ISTB', 'ISTR', 'ISUN', 'ITCI',
      'ITI', 'ITIC', 'ITRI', 'ITRN', 'IUSB', 'IUSG', 'IUSV', 'IVAC', 'JAZZ', 'JBHT', 'JBLU', 'JBSS', 'JCS', 'JCTCF', 'JD', 'JJSF', 'JKHY', 'JNCE', 'JOUT',
      'JRJC', 'JRVR', 'JSM', 'JSMD', 'JSML', 'JVA', 'JYNT', 'KALA', 'KALU', 'KALV', 'KBWB', 'KBWD', 'KBWP', 'KBWR', 'KBWY', 'KDNY', 'KDP', 'KE', 'KELYA',
        'KEQU', 'KFFB', 'KFRC', 'KHC', 'KIDS', 'KINS', 'KIRK', 'KLAC', 'KLIC', 'KMDA', 'KMPH', 'KNDI', 'KNSL', 'KOPN', 'KOR', 'KOSS', 'KPTI', 'KRMA',
      'KRMD', 'KRNT', 'KRNY', 'KRYS', 'KSPN', 'KTCC', 'KTOS', 'KTRA', 'KURA', 'KVHI', 'KXIN', 'KZIA', 'LAKE', 'LAMR', 'LANC', 'LAND', 'LARK', 'LAUR', 'LAWS',
      'LBAI', 'LBC', 'LBRDA', 'LBRDK', 'LBTYA', 'LBTYB', 'LBTYK', 'LCNB', 'LCUT', 'LE', 'LECO', 'LEDS', 'LEE', 'LFMD', 'LFUS', 'LFVN', 'LGIH', 'LGND', 'LGO',
      'LHCG', 'LIFE', 'LILA', 'LILAK', 'LINC', 'LIND', 'LINK', 'LIQT', 'LITE', 'LIVE', 'LIVN', 'LIXT', 'LJPC', 'LKFN', 'LKQ', 'LLL', 'LLNW', 'LMAT', 'LMB',
      'LMBS', 'LMFA', 'LMNL', 'LMNR', 'LMST', 'LNDC', 'LNT', 'LNTH', 'LOAN', 'LOB', 'LOCO', 'LOGI', 'LOOP', 'LOPE', 'LPCN', 'LPLA', 'LPSN', 'LPTH', 'LPTX',
      'LQDT', 'LRCX', 'LRFC', 'LRGE', 'LRMR', 'LSBK', 'LSCC', 'LSTR', 'LSXMA', 'LSXMB', 'LSXMK', 'LTBR', 'LTRPA','LTRX', 'LULU', 'LUMO', 'LUNA',
      'LVHD', 'LVO', 'LWAY', 'LWLG', 'LX', 'LXRX', 'LYL', 'LYTS', 'MACK', 'MANH', 'MANT', 'MARA', 'MARK','MASI', 'MAT', 'MATW', 'MAYS', 'MBB',
      'MBCN', 'MBII', 'MBIN', 'MBIO', 'MBOT', 'MBRX', 'MBUU', 'MBWM', 'MCBC', 'MCEF', 'MCFT', 'MCHI', 'MCHP', 'MCHX', 'MCRB', 'MCRI', 'MDB', 'MDGL', 'MDGS',
      'MDIV', 'MDLZ', 'MDRX', 'MDVL', 'MDWD', 'MDXG', 'MEDP', 'MEDS', 'MEIP', 'MELI', 'MEOH', 'MERC', 'MESO', 'MFH', 'MFIN', 'MGI', 'MGIC', 'MGNI', 'MGPI',
      'MGRC', 'MGYR', 'MHLD', 'MICT', 'MIDD', 'MILN', 'MIME', 'MIND', 'MINDP', 'MITK', 'MKSI', 'MKTX', 'MLAB', 'MLCO', 'MLKN', 'MLVF', 'MMAT',
      'MMSI', 'MMYT', 'MNDO', 'MNDT', 'MNKD', 'MNMD', 'MNOV', 'MNRO', 'MNSB', 'MNST', 'MNTX', 'MODV', 'MOFG', 'MOMO', 'MORN', 'MOXC', 'MPAA', 'MRAM', 'MRBK',
      'MRCC', 'MRCY', 'MRIN', 'MRKR', 'MRLN', 'MRNS', 'MRSN', 'MRTX', 'MRUS', 'MRVL', 'MSEX', 'MSFT', 'MSTR', 'MSVB', 'MTBC', 'MTBCP', 'MTCH', 'MTEM', 'MTEX',
      'MTLS', 'MTP', 'MTRX', 'MTSI', 'MU', 'MULN', 'MVBF', 'MVIS', 'MYGN', 'MYMD', 'MYRG', 'MYSZ', 'NAII', 'NAKD', 'NAOV', 'NATH', 'NATI', 'NATR', 'NAVI', 'NBEV',
      'NBIX', 'NBN', 'NBRV', 'NBSE', 'NCBS', 'NCMI', 'NCNA', 'NCTY', 'NDAQ', 'NDLS', 'NDRA', 'NDSN', 'NEGG', 'NEO', 'NEOG', 'NEON', 'NEPH', 'NEPT', 'NERV', 'NESR',
      'NEWT', 'NEXT', 'NFBK', 'NFLX', 'NFTY', 'NH', 'NHTC', 'NICE', 'NICK', 'NISN', 'NKSH', 'NKTR', 'NLOK', 'NLTX', 'NMFC', 'NMIH', 'NMRK', 'NMTR', 'NNDM', 'NODK',
      'NOTV', 'NOVN', 'NRBO', 'NRC', 'NRIM', 'NSEC', 'NSIT', 'NSPR', 'NSSC', 'NSTG', 'NSYS', 'NTAP', 'NTCT', 'NTES', 'NTGR', 'NTIC', 'NTLA', 'NTNX', 'NTRA', 'NTRS',
      'NTWK', 'NUAN', 'NURO', 'NUVA', 'NUWE', 'NVAX', 'NVCN', 'NVCR', 'NVDA', 'NVEC', 'NVEE', 'NVFY', 'NVIV', 'NVMI', 'NWBI', 'NWE', 'NWFL', 'NWL', 'NWLI', 'NWPX',
      'NWS', 'NWSA', 'NXGN', 'NXPI', 'NXST', 'NXTD', 'NXTG', 'NXTP', 'NYMT', 'NYMTN', 'NYMX', 'OAS', 'OBAS', 'OBCI', 'OBLG', 'OBSV','OCC', 'OCFC', 'OCGN',
      'OCUL', 'OCUP', 'OCX', 'GLPI', 'GLRE', 'GLYC', 'GMAB', 'GMBL', 'GNCA', 'GNSS', 'GNTX', 'GNTY', 'GNUS', 'GOGL', 'GOGO', 'GOOD', 'GOOG', 'GOOGL', 'GPP', 'GPRE', 'GPRO',
      'ODFL', 'ODP', 'ODT', 'OEG', 'OESX', 'OFED', 'OFIX', 'OFLX', 'OFS', 'OIIM', 'OKTA', 'OLB', 'OLED', 'OLLI', 'OMAB', 'OMCL', 'OMER', 'OMEX', 'OMP',
      'OMQS', 'ON', 'ONB', 'ONCS', 'ONCT', 'ONCY', 'ONEQ', 'ONTX', 'ONVO', 'OPBK', 'OPCH', 'OPGN', 'OPHC', 'OPK', 'OPNT', 'OPOF', 'OPRX', 'OPTN',
      'ORGO', 'ORGS', 'ORLY', 'ORMP', 'ORRF', 'OSAT', 'OSBC', 'OSIS', 'OSPN', 'OSTK', 'OSUR', 'OSW', 'OTEX', 'OTIC', 'OTLK', 'OTRK', 'OTTR', 'OVBC',
      'OVID', 'OVLY', 'OXBR', 'OXLC', 'OXLCM', 'OXSQ', 'OZK', 'PAA', 'PAAS', 'PACB', 'PACW', 'PAGP', 'PAHC', 'PALI', 'PALT', 'PANL', 'PANW', 'PATI',
      'PATK', 'PAVM', 'PAYS', 'PAYX', 'PBCT', 'PBCTP', 'PBHC', 'PBIP', 'PBLA', 'PBPB', 'PBYI', 'PCAR', 'PCH', 'PCOM', 'PCRX', 'PCSB',
      'PCTI', 'PCTY', 'PCYG', 'PCYO', 'PDBC', 'PDCE', 'PDCO', 'PDEX', 'PDFS', 'PDLB', 'PDP', 'PDSB', 'PEBK', 'PEBO', 'PEGA', 'PENN', 'PEP', 'PERI',
      'PESI', 'PETQ', 'PETS', 'PETV', 'PETZ', 'PEY', 'PEZ', 'PFBC', 'PFC', 'PFF', 'PFG', 'PFI', 'PFIE', 'PFIN', 'PFIS', 'PFLT', 'PFM', 'PFMT', 'PFSW',
      'PFX', 'PGC', 'PGEN', 'PGJ', 'PHIO', 'PHO', 'PHUN', 'PI', 'PID', 'PIE', 'PINC', 'PIO', 'PIRS', 'PIXY', 'PIZ', 'PKBK', 'PKOH', 'PKW', 'PLAB', 'PLAY',
      'PLBC', 'PLCE', 'PLPC', 'PLSE', 'PLUG', 'PLUS', 'PLW', 'PLXP', 'PLXS', 'PLYA', 'PMCB', 'PMD', 'PME', 'PMTS', 'PNBK', 'PNFP', 'PNNT', 'PNQI', 'PNRG',
      'POAI', 'PODD', 'POLA', 'POOL', 'POWI', 'POWL', 'POWW', 'PPBI', 'PPBT', 'PPC', 'PPH', 'PPSI', 'PRAA', 'PRDO', 'PRFT', 'PRFZ', 'PRGS', 'PRIM', 'PROV',
      'PRPH', 'PRPO', 'PRQR', 'PRTA', 'PRTG',  'PRTK', 'PRTS', 'PSC', 'PSCC', 'PSCD', 'PSCE', 'PSCF', 'PSCH', 'PSCI', 'PSCM', 'PSCT', 'PSCU',
      'PSEC', 'PSET', 'PSHG', 'PSL', 'PSMT', 'PSTI', 'PSTV', 'PTC', 'PTCT', 'PTE', 'PTEN', 'PTF', 'PTGX', 'PTH', 'PTMN', 'PTNR', 'PTRS', 'PTSI', 'PUI', 'PVBC',
      'PWFL', 'PWOD', 'PXI', 'PXLW', 'PXS', 'PY', 'PYPL', 'PYR', 'PYZ', 'PZZA', 'QABA', 'QAT', 'QCLN', 'QCOM', 'QCRH', 'QDEL', 'QIPT', 'QIWI', 'QLGN', 'QLYS',
      'QMCO', 'QNRX', 'QNST', 'QQEW', 'QQQ', 'QQQX', 'QQXT', 'QRHC', 'QRTEA', 'QRTEB', 'QRVO', 'QTEC', 'QTNT', 'QTRX', 'QUBT', 'QUIK', 'QUMU', 'QURE', 'QYLD',
      'RADA', 'RAIL', 'RAND', 'RARE', 'RAVE', 'RBB', 'RBBN', 'RBCAA', 'RBCN', 'RCEL', 'RCII', 'RCKT', 'RCKY', 'RCM', 'RCMT', 'RCON', 'RCRT', 'RDCM',
      'RDFN', 'RDHL', 'RDI', 'RDIB', 'RDNT', 'RDUS', 'RDWR', 'REDU', 'REED', 'REFR', 'REG', 'REGI', 'REGN', 'REKR', 'RELL', 'REPH', 'RESN', 'RETA', 'RETO',
      'RFDI', 'RFEM', 'RFEU', 'RFIL', 'RGCO', 'RGEN', 'RGLD', 'RGLS', 'RGNX', 'RGP', 'RIBT', 'RICK', 'RIGL', 'RILY', 'RING', 'RIOT', 'RKDA', 'RLMD',
      'RMBS', 'RMCF', 'RMNI', 'RMR', 'RMTI', 'RNDB', 'RNDM', 'RNDV', 'RNEM', 'RNLC', 'RNMC', 'RNRG', 'RNSC', 'RNST', 'RNWK', 'ROCC', 'ROCK', 'ROIC', 'ROKU',
      'ROLL', 'ROST', 'RPD', 'RRGB', 'RRR', 'RSLS', 'RSSS', 'RTH', 'RUN', 'RUSHA', 'RUSHB', 'RUTH', 'RVNC', 'RVSB', 'RWLK', 'RYAAY', 'RYTM', 'RZLT', 'SABR',
      'SAFM', 'SAFT', 'SAGE', 'SAIA', 'SAL', 'SALM', 'SAMG', 'SANM', 'SANW', 'SASR', 'SATS', 'SAVA', 'SBAC', 'SBCF', 'SBET', 'SBFG', 'SBGI', 'SBLK',
      'SBNY', 'SBRA', 'SBSI', 'SBT', 'SBUX', 'SCHL', 'SCHN', 'SCKT', 'SCOR', 'SCPH', 'SCSC', 'SCVL', 'SCWX', 'SCYX', 'SCZ', 'SDG', 'SDVY', 'SECO', 'SEDG',
      'SEED', 'SEEL', 'SEIC', 'SELB', 'SELF', 'SENEA', 'SESN', 'SEVN', 'SFBC', 'SFIX', 'SFM', 'SFNC', 'SFST', 'SGA', 'SGBX', 'SGC', 'SGEN',
      'SGH', 'SGLB', 'SGMA', 'SGMO', 'SGMS', 'SGRP', 'SGRY', 'SHBI', 'SHEN', 'SHIP', 'SHOO', 'SHV', 'SHY', 'SHYF', 'SIEB', 'SIEN', 'SIFY', 'SIGA', 'SIGI',
      'SILC', 'SIMO', 'SINO', 'SINT', 'SIOX', 'SISI', 'SIVB', 'SKOR', 'SKYW', 'SKYY', 'SLAB', 'SLGN', 'SLM', 'SLMBP', 'SLNG', 'SLNH', 'SLNO', 'SLP', 'SLQD',
      'SLRC', 'SLRX', 'SLS', 'SLVO', 'SMBC', 'SMBK', 'SMCI', 'SMCP', 'SMED', 'SMH', 'SMID', 'SMIT', 'SMLR', 'SMMF', 'SMMT', 'SMPL', 'SMSI', 'SMTC', 'SMTI', 'SNBR', 'SNCR',
      'SND', 'SNDX', 'SNES', 'SNEX', 'SNFCA', 'SNGX', 'SNLN', 'SNOA', 'SNPS', 'SNSR', 'SNT', 'SNY', 'SOCL', 'SOHO', 'SOHOB', 'SOHOO', 'SOHU', 'SONN', 'SOTK',
      'SOXX', 'SP', 'SPCB', 'SPI', 'SPLK', 'SPNE', 'SPNS', 'SPOK', 'SPPI', 'SPRO', 'SPSC', 'SPTN', 'SPWH', 'SPWR', 'SQLV', 'SQQQ', 'SRAX', 'SRCE', 'SRCL', 'SRDX',
      'SRET', 'SREV', 'SRGA', 'SRNE', 'SRPT', 'SRRA', 'SRTS', 'SSB', 'SSBI', 'SSKN', 'SSNC', 'SSNT', 'SSP', 'SSSS', 'SSTI', 'SSYS', 'STAA', 'STAB', 'STAF', 'STBA',
      'STCN', 'STFC', 'STGW', 'STKL', 'STKS', 'STLD', 'STRA', 'STRL', 'STRS', 'STRT', 'STX', 'SUMR', 'SUNS', 'SUNW', 'SUPN', 'SUSB', 'SUSC', 'SVC', 'SVRA',
      'SVVC', 'SWBI', 'SWIR','SWKS', 'SYBT', 'SYBX', 'SYNA', 'SYNH', 'SYNL', 'SYPR', 'SYRS', 'TA', 'TACO', 'TACT', 'TAIT', 'TANH', 'TANNI', 'TANNL', 'TANNZ',
      'TAOP', 'TARA', 'TAST', 'TATT', 'TAYD', 'TBBK', 'TBK', 'TBNK', 'TBPH', 'TCBI', 'TCBK', 'TCFC', 'TCMD', 'TCOM', 'TCON', 'TCPC', 'TCX', 'TDIV', 'TEAM', 'TECH',
      'TEDU', 'TENX', 'TER', 'TESS', 'TFSL', 'TGA', 'TGLS', 'TGTX', 'THFF', 'THMO', 'THRM', 'THTX', 'TILE', 'TIPT', 'TITN', 'TLT', 'TMDI', 'TMUS', 'TNDM', 'TNXP',
      'TOMZ', 'TOUR', 'TOWN', 'TPIC', 'TPST', 'TQQQ', 'TREE', 'TRHC', 'TRIB', 'TRIP', 'TRMB', 'TRMK', 'TRNS', 'TROW', 'TRS', 'TRST', 'TRUE', 'TRUP', 'TRVG', 'TRVN',
      'TSBK', 'TSC', 'TSCO', 'TSEM', 'TSLA', 'TSRI', 'TTD', 'TTEC', 'TTEK', 'TTGT', 'TTMI', 'TTNP', 'TTOO', 'TTSH', 'TTWO', 'TUR', 'TURN', 'TUSA', 'TUSK', 'TVTX',
      'TVTY', 'TWIN', 'TWNK', 'TWOU', 'TXMD', 'TXN', 'TXRH', 'TYME', 'TZOO', 'UAL', 'UBCP', 'UBFO', 'UBOH', 'UBSI', 'UCBI', 'UCTT', 'UEIC', 'UEPS', 'UFCS', 'UFPI',
      'UFPT', 'UG', 'UHAL', 'UIHC', 'ULBI', 'ULH', 'ULTA', 'UMBF', 'UMPQ', 'UNAM', 'UNB', 'UNIT', 'UNTY', 'UONE', 'UONEK', 'UPLD', 'URBN', 'URGN',
      'USAK', 'USAP', 'USAU', 'USEG', 'USIG', 'USIO', 'USLB', 'USLM', 'USMC', 'UTHR', 'UTMD', 'UTSI', 'UVSP', 'VABK', 'VALU','VBIV', 'VBLT', 'VBTX',
      'VC', 'VCEL', 'VCIT', 'VCLT', 'VCSH', 'VCYT', 'VECO', 'VEON', 'VERB', 'VERI', 'VERO', 'VERU', 'VEV', 'VG', 'VGIT', 'VGLT', 'VGSH', 'VIA', 'VIAC', 'VIASP', 'VIAV',
      'VICR', 'VIGI', 'VIRC', 'VIRT', 'VIRX', 'VISL', 'VIVE', 'VIVO', 'VJET', 'VKTX', 'VQS', 'VREX', 'VRME', 'VRNA', 'VRNS', 'VRNT', 'VRRM', 'VSAT', 'VSEC',
      'VSMV', 'VSTM', 'VTC', 'VTGN', 'VTHR', 'VTNR', 'VTSI', 'VTWG', 'VTWV', 'VUZI', 'VWOB', 'VWTR', 'VXRT', 'VXUS',
      'WATT', 'WBA', 'WDAY', 'WDC', 'WEN', 'WERN', 'WETF', 'WFCF', 'WHF', 'WHLM', 'WHLR', 'WHLRD', 'WINT', 'WIRE', 'WKHS', 'WLDN', 'WNEB', 'WPRT', 'WSBC',
      'WSBF', 'WSC', 'WSFS', 'WTBA', 'WTER', 'WTFC', 'WTRH', 'WVE', 'WVFC', 'WVVI', 'WVVIP', 'WWD', 'WYNN', 'XEL', 'XELB', 'XENT', 'XFOR', 'XLNX', 'XNCR',
      'XOMA', 'XRAY', 'XTLB', 'YLDE', 'YMTX', 'YNDX', 'YTRA', 'YVR', 'YY', 'Z', 'ZBRA', 'ZEAL', 'ZION', 'ZIONO', 'ZKIN', 'ZNGA', 'ZSAN', 'ZUMZ', 'ZYNE', 'ZYXI']
    // const pageOptions = ['Live Trading', 'Strategy Builder', 'Option3', 'Option3', 'Option3', 'Option3', 'Option3']

    const runningStrategy = [
      'R',
      'RU',
      'RUN',
      'RUNN',
      'RUNNI',
      'RUNNIN',
      'RUNNING',
      'RUNNING S',
      'RUNNING ST',
      'RUNNING STR',
      'RUNNING STRA',
      'RUNNING STRAT',
      'RUNNING STRATE',
      'RUNNING STRATEG',
      'RUNNING STRATEGY',
      'RUNNING STRATEGY.',
      'RUNNING STRATEGY..',
      'RUNNING STRATEGY...',
    ]

    // const changePage = (page) => {
    //   if(page === 'Live Trading'){
    //     setLiveTradingPage(true)
    //     setStrategyTestingPage(false)
    //   }
    //   if(page === 'Strategy Builder'){
    //     setStrategyTestingPage(true)
    //     setLiveTradingPage(false)
    //   }
    // }

    useEffect(() => {

      const loadSavedLists = async () => {
        let allSavedList = await getAllSavedLists()
        let namesOfSavedLists = getNamesOfSavedList(allSavedList)
        let formattedList = getFormatSavedLists(allSavedList,namesOfSavedLists)
  
        setSavedList(formattedList)
        setCurrentSelectList(formattedList)
    }

    loadSavedLists();
    }, []); 

    const counter = () => {
      setRsCounter((rsCounter) => rsCounter + 1);
    }

    const runEngine = async () => {

      const interval = setInterval(() => {
          counter()
    
      }, 500);

 
        try {
          
            setLoading(true)
            setCurrentChartBarHeader(strategyChartDataHeader)
            setChartBackButtonActive(false)
            setStockResultsBeingViewed(false)
            setTradeResultsBeingViewed(false)

            let namesOfStocksToTest = gatherListOfStocksToTest(selectedList)
            await testStrategy(namesOfStocksToTest, length, stockActive, plBelowPh, pHtoPLLength, pLtoShortLength, marketType, selectedRunStrategy, selectedRunList)
        
            let strategyStatistics = await getStrategyResults()
            setStrategyResults(strategyStatistics)
            setCurrentStatistics(strategyStatistics)
            

            let stockResults = await getStockResults()
            let formattedStockResults = formatStockResultsForChart(stockResults)
            setStockResults(formattedStockResults)
            setChartData(formattedStockResults)

        
            let tradeResults = await getTradeResults()
            setTradeResults(tradeResults)

            setLoading(false)
            
        
        } catch (e) { console.log(e); }

        clearInterval(interval);
    }

    const loadChartDataAndStatistics = async (object, tradeID) => {

      if(stockResultsBeingViewed === false){
        loadSingleStockInfo(object)
      }
  
      else if (stockResultsBeingViewed === true){
        loadSingleTradeInfo(object, tradeID)
      }
    }

    const loadSingleStockInfo = async (object,tradeID) => {

        await sendSelectedStockToBackEnd(object['Stock'])
        const allTrades = getAllTradesOfSelectedStock(tradeResults, object)
        
        setChartData(allTrades)
        setAllTradesOfSelectedStock(allTrades)

        const stockStatistics = await getStockStatistics(object['Stock'])
        let formattedStockStatistics = formatStockStatistic(stockStatistics)
        setCurrentStatistics(formattedStockStatistics)

        setStockResultsBeingViewed(true)
        setChartBackButtonActive(true)
        setCurrentChartBarHeader(stocksChartDataHeader)
        setMostRecentChartData(chartData)
    
    }

    const loadSingleTradeInfo = async (object, tradeID) => {
      setTradeResultsBeingViewed(true)
      setCurrentTradeName(object['stock'])
      setCurrentTradeId(tradeID)
      const tradeStatistics = getTradeStatistics(object)
      setTradeStatistics(tradeStatistics)
      await generateChartImage(tradeID, object)
      let chartImage = await retrieveChartImage()
      setChartImage(chartImage)
    }

    const browseTrades = (val) => {

      let currentTradeIndex = null
      tradeResults.forEach((item, index) => {
        if(currentTradeName === item['stock'] && currentTradeId === item['tradeid'])
        currentTradeIndex = index
      })
      val === 'prev' && parseInt(currentTradeIndex) > 0 && loadSingleTradeInfo(tradeResults[parseInt(currentTradeIndex) - 1],tradeResults[parseInt(currentTradeIndex) -  1]['tradeid'] )
      val === 'next' && parseInt(currentTradeIndex) < tradeResults.length && loadSingleTradeInfo(tradeResults[parseInt(currentTradeIndex) + 1],tradeResults[parseInt(currentTradeIndex) +  1]['tradeid'] )
  
    }

    const handleBackButton = () => {

        if(stockResultsBeingViewed === true){
            setChartBackButtonActive(false)
            setStockResultsBeingViewed(false)
            setChartData(mostRecentChartData)
            setCurrentChartBarHeader(strategyChartDataHeader)
            setCurrentStatistics(strategyResults)
        }

        if(tradeResultsBeingViewed === true){
            setTradeResultsBeingViewed(false)
            setStockResultsBeingViewed(true)
            setChartData(allTradesOfSelectedStock)
            deleteChartImage()
            setCurrentStatistics(currentStatistics)
            setCurrentChartBarHeader(stocksChartDataHeader)
        }
    }
     
    // SideBar
    const handleLengthChange = event => {
      setLength(event.target.value)
    }

    const handlePHtoPLLength = event => {
      setPHtoPLLength(event.target.value)
    }

    const handlePLtoShortLength = event => {
      setPLtoShortLength(event.target.value)
    }

    const handlePlBelowPhChange = event => {
      setPlBelowPh(event.target.value)
    }

    const handleMarketChange = value => {

      if (value === 'Bullish'){
        setMarketType('Bull')
      }
      else if (value === 'Bearish'){
        setMarketType('Bear')
      }
      
    }

    const handleStockChange = event => {
      setStockBeingSearched(event.target.value.toUpperCase())

    }

    const startsWith = (array, key) => {
      const matcher = new RegExp(`^${key}`, 'g');
      
      return(array.filter(word => word.match(matcher)));
    }
                  
    const setStock = (value) => {

      // ({
      //   stockActive: value
      // })

    }


    //  ListBuilder Methods
    const saveList = async () => {  
  
      let stocksInList = []

      selectedList.forEach(item => {
        stocksInList.push(item['name'])
      })

      try {
       const response = await fetch('http://192.168.1.189:8000/newSavedList', {
         method: 'POST',
         headers: {
  
           'Content-Type': 'application/json'
         },
         body: JSON.stringify({
  
           listName  : String(userSavedList),
           list      : String(stocksInList),
  
         })
       });
       const data = await response.json();
  
       console.log('data: ' + data);
     } catch (error) {console.log(error)}
  
  
     loadSavedLists()
  
    }

    const getNamesOfSavedList = (backEndlist) => {
      let listNames = []
      // backEndlist.forEach(item => {
    
      //   if(listNames.includes(item['name']) === false){
      //     listNames.push(item['name'])
      //   }
      // })
      return listNames
    }

    const loadSavedLists = async () => {
      let allSavedList = await getAllSavedLists()
      let namesOfSavedLists = getNamesOfSavedList(allSavedList)
      let formattedList = getFormatSavedLists(allSavedList,namesOfSavedLists)

      setSavedList(formattedList)
      setCurrentSelectList(formattedList)
    }

    const checkAndUnCheck = (section, stockName) => {

      if(section === 'savedList'){
        let savedListCopy = JSON.parse(JSON.stringify(savedList));
        savedListCopy.forEach(item => {
          if(item['name'] === stockName){
            item['checkMark'] = !item['checkMark']
          }
        })

        setSavedList(savedListCopy)
      }
        
      if(section === 'selectedList'){
        let savedListCopy = JSON.parse(JSON.stringify(selectedList));
        savedListCopy.forEach(item => {
          if(item['name'] === stockName){
            item['checkMark'] = !item['checkMark']
          }
        })
      
        setSelectedList(savedListCopy)

      }
    }

    const turnOnAllSelected = (section) => {

      if (section === 'savedList'){
        let savedListCopy = JSON.parse(JSON.stringify(savedList));
        savedListCopy.forEach(item => {
            item['checkMark'] = true
        })

        setSavedList(savedListCopy)
      }

      if (section === 'selectedList'){
          let savedListCopy = JSON.parse(JSON.stringify(selectedList));
          savedListCopy.forEach(item => {
            item['checkMark'] = true
        })
        
        setSelectedList(savedListCopy)
      }
    }
  
    const turnOffAllSelected = (section) => {
      
      if (section === 'savedList'){
        let savedListCopy = JSON.parse(JSON.stringify(savedList));
        savedListCopy.forEach(item => {
          item['checkMark'] = false
        })

        setSavedList(savedListCopy)
      }
    
      if (section === 'selectedList'){
        let savedListCopy = JSON.parse(JSON.stringify(selectedList));
        savedListCopy.forEach(item => {
          item['checkMark'] = false
        })
        
        setSelectedList(savedListCopy)
      }
    }

    const getNamesCheckedStocks = (list) => {
      let names = []
      list.forEach(item => {
        if(item['checkMark'] === true){
          names.push(item['name'])
        }
  
      })
      return names

    }
  
    const deleteCheckedItems = async (section) => {
  
      if(section === 'savedList'){
        let namesOfCheckedStocks = getNamesCheckedStocks(savedList)
        await deleteSavedList(namesOfCheckedStocks)
        await loadSavedLists()
      }
  
      if (section === 'selectedList'){
        let namesOfCheckedStocks = getNamesCheckedStocks(selectedList)
        let remainingItems = selectedList.filter(item => item['checkMark'] === false)
        setSelectedList(remainingItems)
        await deleteItemsInList(namesOfCheckedStocks,selectedList)
        await loadSavedLists()
      }
    }

    const clearList = () => {
      setSelectedList([])
    }
  
    const selectAll = () => {
      let updatedList = allStockNames.map(x=> ({'name': x, 'checkMark': false}));
      setSelectedList(updatedList)
    }
  
    const selectStockForListBuilder = (val) => {
        
        if(selectedList.length === 0){
            setSelectedList([...selectedList, {'name':val, 'checkMark':false}])
        }else if (selectedList.length > 0) {
          if(selectedList.some(el => el.name === val)){
            return
          }
          else{
            setSelectedList([...selectedList, {'name':val, 'checkMark':false}])
          }
          
        }
    }
    
    const getInputValueSavedList = (event)=>{

      setUserSavedList(event.target.value)
 
    }
  
    const loadSavedListIntoCurrentViewedList = (section, listName, list, ln)=>{
  
  
      if(section === 'availableStrategies'){
        setSelectedRunStrategy(listName)
      }
  
      if(section === 'availableList'){
        setSelectedRunList(list)
        setSelectedRunListName(ln)
      }
  
      if(section === 'savedList'){
        let updatedList = list.map(x=> ({'inList': listName, 'name': x, 'checkMark': false}));
        setSelectedList(updatedList)
      }
  
    }

    let stockSearched = (stockBeingSearched)
    let filteredList  = startsWith(allStockNames,stockBeingSearched)

    if(rsCounter >= runningStrategy.length){
      setRsCounter(0)
    }


    return(

      <div className='Body'>
        
        {/* {strategyTestingPage && <SideBarNew
          stockSearched={stockSearched}         
          filteredList={filteredList}         
          updateLength={handleLengthChange}     
          setPlBelowPh={handlePlBelowPhChange}       
          updateStock={handleStockChange}       
          startsWith={startsWith}         
          setStock={setStock}           
          updatepLtoShort={handlePLtoShortLength}   
          updatePHtoPL={handlePHtoPLLength}     
          setMarketType={handleMarketChange}
          runEngine={runEngine}         
          length={length}       
          PHtoPLLength={pHtoPLLength} 
          allStockNames={allStockNames} 
          stockActive={stockActive}
          plBelowPh={plBelowPh} 
          stocksBeingShown={stocksBeingShown}
          stockBeingSearched={stockBeingSearched} 
          pLtoShortLength={pLtoShortLength}
        />} */}

        <div className='mainContentContainer'>
{/* 
          <div className='mainContentContainerHeader'>
 
              <div className='pageOptions'>
                <div className='pageOptions2'>
                    {pageOptions.map((item, index) => {
                      return <div key={index} className='optionTab' onClick={() => {changePage(item); }}>{item} </div>
       
                    })}
                </div>
              </div>
          </div> */}

          <div className='mainContentContainerBody'>
            
            {liveTradingPage && <LiveTradingPage 
              liveTradingMethod={liveTrading} 
              settings={[length, stockActive, plBelowPh, pHtoPLLength, pLtoShortLength, marketType, selectedRunStrategy]}/>}

            {/* {strategyTestingPage && <StragtegyTestingNew            
              stockResultsBeingViewed={stockResultsBeingViewed}
              tradeResultsBeingViewed={tradeResultsBeingViewed}
        

              // Chart
              stockResults={stockResults}
              chartImage={chartImage}
              chartBarTotalResults={chartData}
              setChartData={setChartData}
              chartHeader={currentChartBarHeader}
              chartShowingTrades={chartBackButtonActive}
              getStockResultSelected={loadChartDataAndStatistics}
              handleBackButton={handleBackButton}
              filterOptionsOne={filterOptionsOne}
              filterOptionsTwo={filterOptionsTwo}
              scanTrades={browseTrades}
              statistics={currentStatistics}
              currentTradeStats={tradeStatistics}
              runningStrategy={runningStrategy}
              rsCounter={rsCounter}

              // List Builder
              allStocksList={allStockNames}
              selectedList={selectedList}
              savedList={savedList}
      
              // Run Build
              getData={runEngine}  
              // testedList={completedTestedStocks}
              loading={loading}
              currentSelectList={currentSelectList}
              currentSelectStrategy={currentSelectStrategy}
              selectedRunList={selectedRunList}
              selectedRunStrategy={selectedRunStrategy}
              selectedRunListName={selectedRunListName}
              length={length} 

              // List Methods
              getInputValueSavedList={getInputValueSavedList}      
              pushSavedListIntoDB={saveList}
              loadSavedLists={loadSavedLists}
              clearList={clearList}
              selectAll={selectAll}
              selectItem={selectStockForListBuilder}
              turnOnAllSelected={turnOnAllSelected}
              turnOffAllSelected={turnOffAllSelected}
              checkAndUnCheck={checkAndUnCheck}
              deletedSelectedList={deleteCheckedItems}
              loadSavedListIntoCurrentViewedList={loadSavedListIntoCurrentViewedList}
            />  }
     */}

          </div>
        </div>
      </div>
    )
}

export default BodyNew;

