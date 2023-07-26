import config from '../../config.json'

const getSettings = async () => {

    try {
        const resultsJsn  = await fetch(`http://${config.server}/settings/get`);
        const result      = await resultsJsn.json();

        return result

    } catch (e) { console.log(e); }
}

export default getSettings