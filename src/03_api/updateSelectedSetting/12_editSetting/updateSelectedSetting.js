const updateSelectedSetting = async (previousID, newID, loadSettings) => {


    try{
        await fetch('http://192.168.1.189:8000/settings/updateSelectedSetting', {
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