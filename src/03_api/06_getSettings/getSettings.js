const getSettings = async () => {

    try {
        const resultsJsn  = await fetch('http://192.168.1.189:8000/settings/get');
        const result      = await resultsJsn.json();

        return result

    } catch (e) { console.log(e); }
}

export default getSettings