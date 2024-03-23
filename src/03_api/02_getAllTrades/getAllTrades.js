import config from '../../config.json'

const getActiveTrades = async (setAllTrades, set_all_symbols) => {
    try {
        const res = await fetch(`${config.server}/trade/access_all_trade_models`);

        const result = await res.json();

		console.log(result)
        setAllTrades(result)

        const uniqueSymbols = []

		

		for (const trade of result){
			
			const symbol = trade.tradeInfo.symbol

			if(!uniqueSymbols.includes(symbol)){
				uniqueSymbols.push(symbol)
			}
		}

		const us = ['All Symbols', ...uniqueSymbols]
	
		set_all_symbols(us)
    
        // return result

    } catch (e) {console.log('getActiveTrades', e); }
}

export default getActiveTrades