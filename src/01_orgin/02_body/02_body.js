import LiveTradingPage from '../../02_pages/01_allTrades/allTrades'
import Trade_Journal from '../../02_pages/07_trade_journal/trade_journal'
import './body.css'

const Body = (props) => {

    const {
        activePage,
        colorTheme
    } = props

    

    return(
        <div className='Body'>
            <div className='mainContentContainer'>
                <div className='mainContentContainerBody'>
                 
                    {activePage === 'All Trades' && <LiveTradingPage colorTheme={colorTheme}/>}
                    {activePage === 'Single Trade' && <Trade_Journal/>}
                    {activePage === 'Candle Chart' && ''}

                </div>
            </div>
        </div>
    )
}

export default Body