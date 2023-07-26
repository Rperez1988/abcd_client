import config from '../../config.json'

const saveSettings = async (settings, loadSettings) => {


    try{
        await fetch(`http://${config.server}/settings/save`, {
        method: 'POST',
        headers: {},
        body: JSON.stringify({
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
            entryRSI: settings['entryRSI'],
            abnormalPriceJump: settings['abnormalPriceJump'],
            pivotSteepness: settings['pivotSteepness'],
            aBelowB: settings['aBelowB'],
            startDate: settings['startDate'],
            endDate: settings['endDate']
        })
        });


        loadSettings()

    } catch(error){
        console.log(error)
    }
}

export default saveSettings