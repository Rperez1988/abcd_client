import LiveTradingPage from '../../02_pages/01_allTrades/allTrades'
import Trade_Journal from '../../02_pages/07_trade_journal/trade_journal'
import './body.css'
import config from '../../config.json'
const Body = (props) => {

    const {
        activePage,
        colorTheme
    } = props

    
    const check_symbols_ran = async () => {


        try {
            const res = await fetch(`${config.server}/patterns/check_symbols_ran/`);
    
            const result = await res.json();
    
        } catch (e) {console.log('getActiveTrades', e); }
    }
    

    const run_single = async () => {

        try {
            const res = await fetch(`${config.server}/run_strategy/scan_single_symbols`);
    
            const result = await res.json();
    
        } catch (e) {console.log('getActiveTrades', e); }

    }

    const scan_all_symbols = async () => {

        try {
            const res = await fetch(`${config.server}/run_strategy/scan_all_symbols`);
    
            const result = await res.json();
    
        } catch (e) {console.log('getActiveTrades', e); }

    }
    const create_all_info = async () => {

        try {
            const res = await fetch(`${config.server}/all_patterns_info/create_all_info/`);
    
            const result = await res.json();
    
        } catch (e) {console.log('getActiveTrades', e); }

    }


    return(
        <div className='Body'>
            <div className='mainContentContainer'>
                <div className='mainContentContainerBody'>
                 
                    {activePage === 'All Trades' && <LiveTradingPage colorTheme={colorTheme}/>}
                    {activePage === 'Single Trade' && <Trade_Journal/>}
                    {activePage === 'Candle Chart' && ''}
                    {activePage === 'Admin' && 
                    
                    
                    <div className='admin_'>

                        <div className='button_admin'>

                            <div className='admin_two'>
                                <div className='buttonadmin' onClick={()=>{run_single()}}>Run Single</div>
                                <div className='buttonadmin' onClick={()=>{scan_all_symbols()}}>Run All</div>
                                <div className='buttonadmin'>Delete Patterns</div>
                                <div className='buttonadmin'>Delete Symbol Total</div>
                                <div className='buttonadmin' onClick={()=>{check_symbols_ran()}}>Get Index</div>
                                <div className='buttonadmin'></div>
                    
                            </div>
                            <div className='admin_two'>
                                <div className='buttonadmin' onClick={()=>{create_all_info()}}>Total Symbol Info</div>
                                <div className='buttonadmin'>Run All</div>
                                <div className='buttonadmin'>Delete Patterns</div>
                                <div className='buttonadmin'>Delete Symbol Total</div>
                                <div className='buttonadmin'></div>
                                <div className='buttonadmin'></div>
                    
                            </div>
                        
                        </div>
                        
                    </div>
                    
                    
                    
                    }

                </div>
            </div>
        </div>
    )
}

export default Body