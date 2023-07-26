import config from '../../config.json'

const deleteHistory = async (reloadData) => {
    try{
        await fetch(`${config.server}/deleteHistory`, {
            method: 'POST',
            headers: {},
            body: JSON.stringify({
            })
        });
        
    } catch(error){console.log(error)}

    reloadData()
}

export default deleteHistory