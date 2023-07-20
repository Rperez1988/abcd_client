
import '../../css/blackboxheader.css'
import settings from '../../img/settingswhite.png'
import backbutton from '../../img/backbuttonwhite.png'

const BlackBoxHeaderNew = (props) => {
    
    const {
        chartBarTotalResults,
        headerName,
        handleSettings,
        handleBackButton,
        scanTrades,
        stockResultsBeingViewed,
        tradeResultsBeingViewed,
    } = props

    const backArrowButton = () => {

        return  <div className='backButtonHeaderButtonsBox'>
                    <div className='backButtonHeaderButtons'>
                        <img className='settingsImage'src={backbutton} alt='settings' onClick={handleBackButton}/> 
                    </div>
                </div>
    }

    const prevAndNext = () => {
        
        return   <>
        <div className='prevAndNext' onClick={() => {scanTrades('prev');}}>Prev</div>
      <div className='prevAndNext'  onClick={() => {scanTrades('next');}}>Next</div>  </>

    }

    const settingsButton = () => {
        
        return  <div className='stocksHeaderButtonsBox'>
                    <div className='stocksHeaderButtons'>
                        <img className='settingsImage'src={settings} alt='settings' onClick={handleSettings}/> 
                    </div>
                </div>
    }


    return (

        <div className='stocksTestedHeader'>
            <div className='stocksHeaderText'>
                {headerName}
                {(headerName === 'Stocks Tested' && chartBarTotalResults.length === 0) && backArrowButton()}
                {(stockResultsBeingViewed || tradeResultsBeingViewed) && backArrowButton()}
            </div>
                {headerName === 'Trade Chart' && prevAndNext()}
                {headerName === 'Stocks Tested' && settingsButton()}
        </div>
    );
}

export default BlackBoxHeaderNew

// Good: only scan trades rename left.