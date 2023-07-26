import config from '../../config.json'

const getSingleStockCandles = async (settings) => {

    try {
            await fetch(`http://${config.server}/getSingleStockCandles`, {
            method: 'POST',
            headers: {},
            body: JSON.stringify({
                symbol: settings['symbol'],
                settingsName: settings['settingsName'],
                market: settings['market'],
                pivotLength: settings['pivotLength'],
                rrr: settings['rrr'],
                sAndr: settings['sAndr'],
                maxAtoBLength: settings['maxAtoBLength'],
                maxBtoCLength: settings['maxBtoCLength'],
                maxCtoDLength: settings['maxCtoDLength'],
                entryRSI: settings['entryRSI'],
                abnormalPriceJump: settings['abnormalPriceJump'],
                pivotSteepness: settings['pivotSteepness'],
                aBelowB: settings['aBelowB'],
                inRestrictionArea: "settings['inRestrictionArea']",
                barsFromBack: "settings['barsFromBack']",
                startDate: settings['startDate'],
                endDate: settings['endDate']

            })
            });
        
    } catch (error) {console.log(error)}

    

}

export default getSingleStockCandles

