const deleteHistory = async (reloadData) => {
    try{
        await fetch('http://192.168.1.189:8000/deleteHistory', {
            method: 'POST',
            headers: {},
            body: JSON.stringify({
            })
        });
        
    } catch(error){console.log(error)}

    reloadData()
}

export default deleteHistory