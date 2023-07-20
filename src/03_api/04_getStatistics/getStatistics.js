const getStatistics = async () => {
    try {
        const resultsJsn  = await fetch('http://192.168.1.189:8000/stats/access_all_statistics_models');
        const result      = await resultsJsn.json();
        return result
    } catch (e) { console.log(e); }
}

export default getStatistics