import config from '../../../config.json'

const updateSelectedSetting = async (previousID, newID, loadSettings) => {


    try{
        await fetch(`${config.server}/settings/updateSelectedSetting`, {
            method: 'POST',
            headers: {},
            body: JSON.stringify({

                previousID: previousID,
                newID: newID,

            })
        });


    loadSettings()

    } catch(error){console.log(error)}

}

export default updateSelectedSetting