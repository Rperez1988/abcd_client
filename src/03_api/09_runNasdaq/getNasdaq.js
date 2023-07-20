
const getNasdaqCandles = async (length, stockActive, plBelowPh, PHtoPLLength, pLtoShortLength, marketType, selectedRunStrategy) => {
    
    try {
        await fetch('http://192.168.1.189:8000/getNasdaqCandles', {
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
    
} catch (error) {console.log(error)}}

export default getNasdaqCandles