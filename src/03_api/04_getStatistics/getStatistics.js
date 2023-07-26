import config from '../../config.json'

const getStatistics = async () => {
    try {
        const resultsJsn  = await fetch(`${config.server}/stats/access_all_statistics_models`);
        const result      = await resultsJsn.json();
        return result
    } catch (e) { console.log(e); }
}

export default getStatistics