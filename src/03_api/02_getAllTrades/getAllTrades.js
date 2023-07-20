const getActiveTrades = async (setAllTrades) => {
    try {
        const res = await fetch('http://192.168.1.189:8000/trade/access_all_trade_models');
        const result = await res.json();
        setAllTrades(result)
        
        console.log(result)
        return result

    } catch (e) { console.log(e); }
}

export default getActiveTrades