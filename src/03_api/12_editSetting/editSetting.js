const editSetting = async (temp,loadSettings,inputValue) => {

    console.log(temp)
    // temp['settingsName'] = inputValue
    
    try{
        await fetch('http://192.168.1.189:8000/settings/updateAndSave', {
            method: 'POST',
            headers: {},
            body: JSON.stringify({
                symbol: temp['symbol'],
                newName: temp['settingsName'],
                id: temp['id'],
                settingsName: temp['settingsName'],
                market: temp['market'],
                pivotLength: temp['pivotLength'],
                rrr: temp['rrr'],
                sAndr: temp['sAndr'],
                maxAtoBLength: temp['maxAtoBLength'],
                maxBtoCLength: temp['maxBtoCLength'],
                maxCtoDLength: temp['maxCtoDLength'],
                entryRSI: temp['entryRSI'],
                abnormalPriceJump: temp['abnormalPriceJump'],
                pivotSteepness: temp['pivotSteepness'],
                entryRSI: temp['entryRSI'],
                abnormalPriceJump: temp['abnormalPriceJump'],
                pivotSteepness: temp['pivotSteepness'],
                aBelowB: temp['aBelowB'],
                startDate: temp['startDate'],
                endDate: temp['endDate'],
                isSelected: 'true',
                isComplete: 'true',

            })
        });


    loadSettings()

    } catch(error){console.log(error)}

}

export default editSetting