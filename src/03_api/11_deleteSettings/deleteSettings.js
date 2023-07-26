import config from '../../config.json'

const deleteHistory = async (id, loadSettings,allSavedSettings) => {



    let filteredList = allSavedSettings.filter(obj => obj.isSelected === 'false');
    let last_setting_id = filteredList[filteredList.length - 1].id
    
    try{
        await fetch(`${config.server}/settings/delete`, {
            method: 'POST',
            headers: {},
            body: JSON.stringify({
                id: id,
                last_id: last_setting_id

            })
        });

    loadSettings()
    console.log('delete',id)
    } catch(error){console.log(error)}

}

export default deleteHistory