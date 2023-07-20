const tradesList = {
    'Trades': [
        {
            name: 'Total',
            number: result[0]['totalTradesCount'],
        },
        {
            name: 'Active',
            number: result[0]['activeTradesCount'],
            percent: (((result[0]['activeTradesCount'] / result[0]['totalTradesCount'])) * 100).toFixed(0),
        },
        {
            name: 'Closed',
            number: result[0]['closedTradesCount'],
            percent: (((result[0]['closedTradesCount'] / result[0]['totalTradesCount'])) * 100).toFixed(0),
        },
    ],
    'Exchanges (Total)':  [
        {
            name: 'Nasdaq',
            number: result[0]['nasdaqTotalCount'],
            percent:(((result[0]['nasdaqTotalCount'] / result[0]['totalTradesCount'])) * 100).toFixed(0),
        },
        {
            name: 'Crypto',
            number: result[0]['cryptoTotalCount'],
            percent:(((result[0]['cryptoTotalCount'] / result[0]['totalTradesCount'])) * 100).toFixed(0),
        },
        {
            name: 'Options',
            number: result[0]['optionsTotalCount'],
            percent:(((result[0]['optionsTotalCount'] / result[0]['totalTradesCount'])) * 100).toFixed(0),
        },
        {
            name: 'Forex',
            number: result[0]['forexTotalCount'],
            percent:(((result[0]['forexTotalCount'] / result[0]['totalTradesCount'])) * 100).toFixed(0),
        }
    ],
    'Exchanges (Closed)':  [
        {
            name: 'Nasdaq',
            number: result[0]['nasdaqClosedCount'],
            percent:(((result[0]['nasdaqClosedCount'] / result[0]['closedTradesCount'])) * 100).toFixed(0),
        },
        {
            name: 'Crypto',
            number: result[0]['cryptoClosedCount'],
            percent:(((result[0]['cryptoClosedCount'] / result[0]['closedTradesCount'])) * 100).toFixed(0),
        },
        {
            name: 'Options',
            number: result[0]['optionsClosedCount'],
            percent:(((result[0]['optionsClosedCount'] / result[0]['closedTradesCount'])) * 100).toFixed(0),
        },
        {
            name: 'Forex',
            number: result[0]['forexClosedCount'],
            percent:(((result[0]['forexClosedCount'] / result[0]['closedTradesCount'])) * 100).toFixed(0),
        }
    ],
    'Exchanges (Active)':  [
        {
            name: 'Nasdaq',
            number: result[0]['nasdaqActiveCount'],
            percent: result[0]['nasdaqActiveCount'] === 0 ? (((result[0]['nasdaqActiveCount'] / result[0]['totalTradesCount'])) * 100).toFixed(0) : '0',
        },
        {
            name: 'Crypto',
            number: result[0]['cryptoActiveCount'],
            percent: result[0]['cryptoActiveCount'] === 0 ? (((result[0]['cryptoActiveCount'] / result[0]['totalTradesCount'])) * 100).toFixed(0) : '0',
        },
        {
            name: 'Options',
            number: result[0]['optionsActiveCount'],
            percent: result[0]['optionsActiveCount'] === 0 ? (((result[0]['optionsActiveCount'] / result[0]['totalTradesCount'])) * 100).toFixed(0) : '0',
        },
        {
            name: 'Forex',
            number: result[0]['forexActiveCount'],
            percent: result[0]['forexActiveCount'] === 0 ? (((result[0]['forexActiveCount'] / result[0]['totalTradesCount'])) * 100).toFixed(0) : '0',
        }
    ],
    'Trade Types (Total)': [
        {
            name: 'Short To Long',
            number: result[0]['shortToLongCountTotal'],
            percent:(((result[0]['shortToLongCountTotal'] / result[0]['totalTradesCount'])) * 100).toFixed(0),
        },
        {
            name: 'Short To Short',
            number: result[0]['shortToShortCountTotal'],
            percent:(((result[0]['shortToShortCountTotal'] / result[0]['totalTradesCount'])) * 100).toFixed(0),
        },
        {
            name: 'Long To Long',
            number: result[0]['longToLongCountTotal'],
            percent:(((result[0]['longToLongCountTotal'] / result[0]['totalTradesCount'])) * 100).toFixed(0),
        },
        {
            name: 'Long To Short',
            number: result[0]['longToShortCountTotal'],
            percent: (((result[0]['longToShortCountTotal'] / result[0]['totalTradesCount'])) * 100).toFixed(0),
        }
    ],
    'Trade Types (Closed)': [
        {
            name: 'Short To Long',
            number: result[0]['shortToLongCountClosed'],
            percent:(((result[0]['shortToLongCountClosed'] / result[0]['closedTradesCount'])) * 100).toFixed(0),
        },
        {
            name: 'Short To Short',
            number: result[0]['shortToShortCountClosed'],
            percent:(((result[0]['shortToShortCountClosed'] / result[0]['closedTradesCount'])) * 100).toFixed(0),
        },
        {
            name: 'Long To Long',
            number: result[0]['longToLongCountClosed'],
            percent:(((result[0]['longToLongCountClosed'] / result[0]['closedTradesCount'])) * 100).toFixed(0),
        },
        {
            name: 'Long To Short',
            number: result[0]['longToShortCountClosed'],
            percent: (((result[0]['longToShortCountClosed'] / result[0]['closedTradesCount'])) * 100).toFixed(0),
        }
    ],
    'Trade Types (Active)': [
        {
            name: 'Short To Long',
            number: result[0]['shortToLongCountActive'],

            percent: result[0]['activeTradesCount'] === 0 ? (((result[0]['shortToLongCountActive'] / result[0]['activeTradesCount'])) * 100).toFixed(0) : '0',
        },
        {
            name: 'Short To Short',
            number: result[0]['shortToShortCountActive'],
            percent: result[0]['activeTradesCount'] === 0 ? (((result[0]['shortToShortCountActive'] / result[0]['activeTradesCount'])) * 100).toFixed(0) : '0',
        },
        {
            name: 'Long To Long',
            number: result[0]['longToLongCountActive'],
            percent: result[0]['activeTradesCount'] === 0 ? (((result[0]['longToLongCountActive'] / result[0]['activeTradesCount'])) * 100).toFixed(0) : '0',
        },
        {
            name: 'Long To Short',
            number: result[0]['longToShortCountActive'],
            percent: result[0]['activeTradesCount'] === 0 ? (((result[0]['longToShortCountActive'] / result[0]['activeTradesCount'])) * 100).toFixed(0) : '0',

        }
    ],
    'Starts (Total)': [
        {
            name: 'Long Starts',
            number: result[0]['longStartCountTotal'],
            percent: (result[0]['longStartCountTotal'] / (parseFloat(result[0]['totalTradesCount'])) * 100).toFixed(0),
        },
        {
            name: 'Short Starts',
            number: result[0]['shortStartCountTotal'],
            percent: (result[0]['shortStartCountTotal'] / (parseFloat(result[0]['totalTradesCount'])) * 100).toFixed(0),
        },

    ],
    'Ends (Total)': [
        {
            name: 'Long Ends',
            number: result[0]['longEndCountTotal'],
            percent: (result[0]['longEndCountTotal'] / (parseFloat(result[0]['totalTradesCount'])) * 100).toFixed(0),
        },
        {
            name: 'Short Ends',
            number: result[0]['shortEndCountTotal'],
            percent: (result[0]['shortEndCountTotal'] / (parseFloat(result[0]['totalTradesCount'])) * 100).toFixed(0),
        },

    ],
    'Starts (Closed)': [
        {
            name: 'Long Starts',
            number: result[0]['longStartCountTotal'],
            percent: result[0]['activeTradesCount'] === 0 ? (((result[0]['longStartCountTotal'] / result[0]['totalTradesCount'])) * 100).toFixed(0) : '0',
        },
        {
            name: 'Short Starts',
            number: result[0]['shortStartCountTotal'],
            percent: result[0]['activeTradesCount'] === 0 ? (((result[0]['shortStartCountTotal'] / result[0]['totalTradesCount'])) * 100).toFixed(0) : '0',
        },

    ],
    'Ends (Closed)': [
        {
            name: 'Long Ends',
            number: result[0]['longEndCountClosed'],
            percent: (result[0]['longEndCountClosed'] / (parseFloat(result[0]['closedTradesCount'])) * 100).toFixed(0),
        },
        {
            name: 'Short Ends',
            number: result[0]['shortEndCountClosed'],
            percent: (result[0]['shortEndCountClosed'] / (parseFloat(result[0]['closedTradesCount'])) * 100).toFixed(0),
        },

    ],
    'Starts (Active)': [
        {
            name: 'Long Starts',
            number: result[0]['longStartCountActive'],
            percent: result[0]['activeTradesCount'] === 0 ? (((result[0]['longStartCountActive'] / result[0]['totalTradesCount'])) * 100).toFixed(0) : '0',

        },
        {
            name: 'Short Starts',
            number: result[0]['shortStartCountActive'],
            percent: result[0]['activeTradesCount'] === 0 ? (((result[0]['shortStartCountActive'] / result[0]['totalTradesCount'])) * 100).toFixed(0) : '0',

        },

    ],
    'Ends (Active)': [
        {
            name: 'Long Ends',
            number: result[0]['longEndCountActive'],
            percent: result[0]['activeTradesCount'] === 0 ? (((result[0]['longEndCountActive'] / result[0]['totalTradesCount'])) * 100).toFixed(0) : '0',

        },
        {
            name: 'Short Ends',
            number: result[0]['shortEndCountActive'],
            percent: result[0]['activeTradesCount'] === 0 ? (((result[0]['shortEndCountActive'] / result[0]['totalTradesCount'])) * 100).toFixed(0) : '0',
        },

    ],
}

const performanceList = {
    'Total': [
        {
            'name': 'Total',
            'number': parseFloat(result[0]['totalLostCount']) + parseFloat(result[0]['totalWinCount'])
        },
        {
            'name': 'Winning/Won',
            'number': result[0]['totalWinCount'],
        },	{
            'name': 'Losing/Lost',
            'number': result[0]['totalLostCount'],
        }
        ,	{
            'name': 'Win Pct.',
            'number': result[0]['totalWr'] + '%',
        }
        ,	{
            'name': 'PNL',
            'number': '$' + result[0]['totalPnl'],
        }
    ],
    'Active': [
        {
            'name': 'Total',
            'number': parseFloat(result[0]['activeLosingCount']) + parseFloat(result[0]['activeWinningCount'])
        },
        {
            'name': 'Winning',
            'number': result[0]['activeWinningCount'],
        },	{
            'name': 'Losing',
            'number': result[0]['activeLosingCount'],
        }
        ,	{
            'name': 'Win Pct.',
            'number': result[0]['activeWr'] + '%',
        }
        ,	{
            'name': 'PNL',
            'number': '$' + result[0]['activePnl'],
        }
    ],
    'Closed': [
        {
            'name': 'Total',
            'number': parseFloat(result[0]['closedLostCount']) + parseFloat(result[0]['closedWinCount'])
        },
        {
            'name': 'Winning',
            'number': result[0]['closedWinCount'],
        },	{
            'name': 'Losing',
            'number': result[0]['closedLostCount'],
        }
        ,	{
            'name': 'Win Pct.',
            'number': result[0]['closedWr'] + '%',
        }
        ,	{
            'name': 'PNL',
            'number': '$' + result[0]['closedPnl'],
        }
    ],
    'Short To Long (Total)': [
        {
            'name': 'Total',
            'number': result[0]['shortToLongCountTotal'],
        },
        {
            'name': 'Winning',
            'number': result[0]['shortToLongWinCountTotal'],
        },	{
            'name': 'Losing',
            'number': result[0]['shortToLongLostCountTotal'],
        }
        ,	{
            'name': 'Win Pct.',
            'number': result[0]['shortToShortWrTotal'],
        }
        ,	{
            'name': 'PNL',
            'number': result[0]['shortToLongPnlTotal'],
        }
    ],
    'Short To Long (Closed)': [
        {
            'name': 'Total',
            'number': result[0]['shortToLongCountClosed'],
        },
        {
            'name': 'Winning',
            'number': result[0]['shortToLongWinCountClosed'],
        },	{
            'name': 'Losing',
            'number': result[0]['shortToLongLostCountClosed'],
        }
        ,	{
            'name': 'Win Pct.',
            'number': result[0]['shortToShortWrClosed'],
        }
        ,	{
            'name': 'PNL',
            'number': result[0]['shortToLongPnlClosed'],
        }
    ],
    'Short To Long (Active)': [
        {
            'name': 'Total',
            'number': result[0]['shortToLongCountActive'],
        },
        {
            'name': 'Winning',
            'number': result[0]['shortToLongWinCountActive'],
        },	{
            'name': 'Losing',
            'number': result[0]['shortToLongLostCountActive'],
        }
        ,	{
            'name': 'Win Pct.',
            'number': result[0]['shortToShortWrActive'],
        }
        ,	{
            'name': 'PNL',
            'number': result[0]['shortToLongPnlActive'],
        }
    ],
    'Short To Short (Total)': [
        {
            'name': 'Total',
            'number': result[0]['shortToShortCountTotal'],
        },
        {
            'name': 'Winning',
            'number': result[0]['shortToShortWinCountTotal'],
        },	{
            'name': 'Losing',
            'number': result[0]['shortToShortLostCountTotal'],
        }
        ,	{
            'name': 'Win Pct.',
            'number': result[0]['shortToShortWrTotal'],
        }
        ,	{
            'name': 'PNL',
            'number': result[0]['shortToShortPnlTotal'],
        }
    ],
    'Short To Short (Closed)': [
        {
            'name': 'Total',
            'number': result[0]['shortToShortCountTotal'],
        },
        {
            'name': 'Winning',
            'number': result[0]['shortToShortWinCountTotal'],
        },	{
            'name': 'Losing',
            'number': result[0]['shortToShortLostCountTotal'],
        }
        ,	{
            'name': 'Win Pct.',
            'number': result[0]['shortToShortWrTotal'],
        }
        ,	{
            'name': 'PNL',
            'number': result[0]['shortToShortPnlTotal'],
        }
    ],
    'Short To Short (Active)': [
        {
            'name': 'Total',
            'number': result[0]['shortToShortCountTotal'],
        },
        {
            'name': 'Winning',
            'number': result[0]['shortToShortWinCountTotal'],
        },	{
            'name': 'Losing',
            'number': result[0]['shortToShortLostCountTotal'],
        }
        ,	{
            'name': 'Win Pct.',
            'number': result[0]['shortToShortWrTotal'],
        }
        ,	{
            'name': 'PNL',
            'number': result[0]['shortToShortPnlTotal'],
        }
    ],
    'Long To Short (Total)': [
        {
            'name': 'Total',
            'number': result[0]['longToShortCountTotal'], 
        },
        {
            'name': 'Winning',
            'number':result[0]['longToShortWinCountTotal'], 
        },	{
            'name': 'Losing',
            'number': result[0]['longToShortLostCountTotal'], 
        }
        ,	{
            'name': 'Win Pct.',
            'number': result[0]['longToShortWrTotal'], 
        }
        ,	{
            'name': 'PNL',
            'number': result[0]['longToShortPnlTotal'], 
        }
    ],
    'Long To Short (Closed)': [
        {
            'name': 'Total',
            'number': result[0]['longToShortCountClosed'], 
        },
        {
            'name': 'Winning',
            'number':result[0]['longToShortWinCountClosed'], 
        },	{
            'name': 'Losing',
            'number': result[0]['longToShortLostCountClosed'], 
        }
        ,	{
            'name': 'Win Pct.',
            'number': result[0]['longToShortWrClosed'], 
        }
        ,	{
            'name': 'PNL',
            'number': result[0]['longToShortPnlClosed'], 
        }
    ],
    'Long To Short (Active)': [
        {
            'name': 'Total',
            'number': result[0]['longToShortCountActive'], 
        },
        {
            'name': 'Winning',
            'number':result[0]['longToShortWinCountActive'], 
        },	{
            'name': 'Losing',
            'number': result[0]['longToShortLostCountActive'], 
        }
        ,	{
            'name': 'Win Pct.',
            'number': result[0]['longToShortWrActive'], 
        }
        ,	{
            'name': 'PNL',
            'number': result[0]['longToShortPnlActive'], 
        }
    ],
    'Long To Long (Total)': [
        {
            'name': 'Total',
            'number': result[0]['longToLongCountTotal'],
        },
        {
            'name': 'Winning',
            'number': result[0]['longToLongWinCountTotal'],
        },	{
            'name': 'Losing',
            'number': result[0]['longToLongLostCountTotal'],
        }
        ,	{
            'name': 'Win Pct.',
            'number': result[0]['longToLongWrTotal'],
        }
        ,	{
            'name': 'PNL',
            'number': result[0]['longToLongPnlTotal'],
        }
    ],
    'Long To Long (Closed)': [
        {
            'name': 'Total',
            'number': result[0]['longToLongCountClosed'],
        },
        {
            'name': 'Winning',
            'number': result[0]['longToLongWinCountClosed'],
        },	{
            'name': 'Losing',
            'number': result[0]['longToLongLostCountClosed'],
        }
        ,	{
            'name': 'Win Pct.',
            'number': result[0]['longToLongWrClosed'],
        }
        ,	{
            'name': 'PNL',
            'number': result[0]['longToLongPnlClosed'],
        }
    ],
    'Long To Long (Active)': [
        {
            'name': 'Total',
            'number': result[0]['longToLongCountActive'],
        },
        {
            'name': 'Winning',
            'number': result[0]['longToLongWinCountActive'],
        },	{
            'name': 'Losing',
            'number': result[0]['longToLongLostCountActive'],
        }
        ,	{
            'name': 'Win Pct.',
            'number': result[0]['longToLongWrActive'],
        }
        ,	{
            'name': 'PNL',
            'number': result[0]['longToLongPnlActive'],
        }
    ],
    'Short Starts (Total)': [
        {
            'name': 'Total',
            'number': result[0]['shortStartCountTotal'],
        },
        {
            'number': result[0]['shortStartWinsCountTotal'],
        },	{
            'name': 'Losing',
            'number': result[0]['shortStartLostCountTotal'],
        }
        ,	{
            'name': 'Win Pct.',
            'number': result[0]['shortStartWrTotal'],
        }
        ,	{
            'name': 'PNL',
            'number': result[0]['shortStartPnlTotal'],
        }
    ],
    'Short Starts (Closed)': [
        {
            'name': 'Total',
            'number': result[0]['shortStartCountClosed'],
        },
        {
            'number': result[0]['shortStartWinsCountClosed'],
        },	{
            'name': 'Losing',
            'number': result[0]['shortStartLostCountClosed'],
        }
        ,	{
            'name': 'Win Pct.',
            'number': result[0]['shortStartWrClosed'],
        }
        ,	{
            'name': 'PNL',
            'number': result[0]['shortStartPnlClosed'],
        }
    ],
    'Short Starts (Active)': [
        {
            'name': 'Total',
            'number': result[0]['shortStartCountActive'],
        },
        {
            'number': result[0]['shortStartWinsCountActive'],
        },	{
            'name': 'Losing',
            'number': result[0]['shortStartLostCountActive'],
        }
        ,	{
            'name': 'Win Pct.',
            'number': result[0]['shortStartWrActive'],
        }
        ,	{
            'name': 'PNL',
            'number': result[0]['shortStartPnlActive'],
        }
    ],
    'Short Ends (Total)': [
        {
            'name': 'Total',
            'number': result[0]['shortEndCountTotal'],
        },
        {
            'name': 'Winning',
            'number': result[0]['shortEndWinsCountTotal'],
        },	{
            'name': 'Losing',
            'number': result[0]['shortEndLostCountTotal'],
        }
        ,	{
            'name': 'Win Pct.',
            'number': result[0]['shortEndWrTotal'],
        }
        ,	{
            'name': 'PNL',
            'number': result[0]['shortEndPnlTotal'],
        }
    ],
    'Short Ends (Closed)': [
        {
            'name': 'Total',
            'number': result[0]['shortEndCountClosed'],
        },
        {
            'name': 'Winning',
            'number': result[0]['shortEndWinsCountClosed'],
        },	{
            'name': 'Losing',
            'number': result[0]['shortEndLostCountClosed'],
        }
        ,	{
            'name': 'Win Pct.',
            'number': result[0]['shortEndWrClosed'],
        }
        ,	{
            'name': 'PNL',
            'number': result[0]['shortEndPnlClosed'],
        }
    ],
    'Short Ends (Active)': [
        {
            'name': 'Total',
            'number': result[0]['shortEndCountActive'],
        },
        {
            'name': 'Winning',
            'number': result[0]['shortEndWinsCountActive'],
        },	{
            'name': 'Losing',
            'number': result[0]['shortEndLostCountActive'],
        }
        ,	{
            'name': 'Win Pct.',
            'number': result[0]['shortEndWrActive'],
        }
        ,	{
            'name': 'PNL',
            'number': result[0]['shortEndPnlActive'],
        }
    ],
    'Long Starts (Total)': [
        {
            'name': 'Total',
            'number': result[0]['longStartCountTotal'],
        },
        {
            'name': 'Winning',
            'number': result[0]['longStartWinsCountTotal'],
        },	{
            'name': 'Losing',
            'number': result[0]['longStartLostCountTotal'],
        }
        ,	{
            'name': 'Win Pct.',
            'number': result[0]['longStartWrTotal'],
        }
        ,	{
            'name': 'PNL',
            'number': result[0]['longStartPnlTotal'],
        }
    ],
    'Long Starts (Closed)': [
        {
            'name': 'Total',
            'number': result[0]['longStartCountClosed'],
        },
        {
            'name': 'Winning',
            'number': result[0]['longStartWinsCountClosed'],
        },	{
            'name': 'Losing',
            'number': result[0]['longStartLostCountClosed'],
        }
        ,	{
            'name': 'Win Pct.',
            'number': result[0]['longStartWrClosed'],
        }
        ,	{
            'name': 'PNL',
            'number': result[0]['longStartPnlClosed'],
        }
    ],
    'Long Starts (Active)': [
        {
            'name': 'Total',
            'number': result[0]['longStartCountActive'],
        },
        {
            'name': 'Winning',
            'number': result[0]['longStartWinsCountActive'],
        },	{
            'name': 'Losing',
            'number': result[0]['longStartLostCountActive'],
        }
        ,	{
            'name': 'Win Pct.',
            'number': result[0]['longStartWrActive'],
        }
        ,	{
            'name': 'PNL',
            'number': result[0]['longStartPnlActive'],
        }
    ],
    'Long Ends (Total)': [
        {
            'name': 'Total',
            'number': result[0]['longEndCountTotal'],
        },
        {
            'name': 'Winning',
            'number': result[0]['longEndWinsTotal'],
        },	{
            'name': 'Losing',
            'number': result[0]['longEndLostTotal'],
        }
        ,	{
            'name': 'Win Pct.',
            'number': result[0]['longEndWrTotal'],
        }
        ,	{
            'name': 'PNL',
            'number': result[0]['longEndPnlTotal'],
        }
    ],
    'Long Ends (Closed)': [
        {
            'name': 'Total',
            'number': result[0]['longEndCountClosed'],
        },
        {
            'name': 'Winning',
            'number': result[0]['longEndWinsClosed'],
        },	{
            'name': 'Losing',
            'number': result[0]['longEndLostClosed'],
        }
        ,	{
            'name': 'Win Pct.',
            'number': result[0]['longEndWrClosed'],
        }
        ,	{
            'name': 'PNL',
            'number': result[0]['longEndPnlClosed'],
        }
    ],
    'Long Ends (Active)': [
        {
            'name': 'Total',
            'number': result[0]['longEndCountActive'],
        },
        {
            'name': 'Winning',
            'number': result[0]['longEndWinsActive'],
        },	{
            'name': 'Losing',
            'number': result[0]['longEndLostActive'],
        }
        ,	{
            'name': 'Win Pct.',
            'number': result[0]['longEndWrActive'],
        }
        ,	{
            'name': 'PNL',
            'number': result[0]['longEndPnlActive'],
        }
    ],
}

const investmentList = {
    'PNL': 	[
        {
            name: 'PNL',
            number: ('$' + result[0]['totalPnl']),
        }
    ],
    'Investment': [
        {
            name: 'Largest Investment',
            number: ('$' + result[0]['largestInvestment']),
        },
        {
            name: 'Smallest Investment',
            number: ('$' + result[0]['smallestInvestment']),
        },
        {
            name: 'Average Investment',
            number: ('$' + result[0]['averageInvestment']),
        },
    ],
    'Return': [
        {
            name: 'Largest Return',
            number: ('$' + result[0]['largestWin']),
        },
        {
            name: 'Smallest Return',
            number: ('$' + result[0]['largestLost']),
        },

    ],
    'Risk': [
        {
            name: 'Largest Potential Risk',
            number: ('$' + result[0]['largestRisk']),
        },
        {
            name: 'Smallest Potential Risk',
            number: ('$' + result[0]['smallestRisk']),
        },
        {
            name: 'Average Potential Risk',
            number: ('$' + result[0]['averageRisk']),
        },
    ],
    'Reward': [
        {
            name: 'Largest Potential Reward',
            number: ('$' + result[0]['largestReward']),
        },
        {
            name: 'Smallest Potential Reward',
            number: ('$' + result[0]['smallestReward']),
        },
        {
            name: 'Average Potential Reward',
            number: ('$' + result[0]['averageReward']),
        },
    ],
    'Return On Investment (Total)': [
        {
            name: 'Average Return Pct.',
            number: (result[0]['roiPctTotal'] + '%'),
        },
        {
            name: 'Largest Return Pct.',
            number: (result[0]['roiPctHighTotal'] + '%'),
        },
        {
            name: 'Smallest Return Pct.',
            number: (result[0]['roiPctLowTotal'] + '%'),
        },
    ],
    'Return On Investment: Trades Won': [
        {
            name: 'Average Return Pct.',
            number: (result[0]['winsTotalRoiPct'] + '%'),
        },
        {
            name: 'Largest Return Pct.',
            number: (result[0]['winsHighestRoiPct'] + '%'),
        },
        {
            name: 'Smallest Return Pct.',
            number: (result[0]['winslowestRoiPct'] + '%'),
        },
    ],
    'Return On Investment: Trades Lost': [
        {
            name: 'Average Return Pct.',
            number: (result[0]['lossesTotalRoiPct'] + '%'),
        },
        {
            name: 'Largest Return Pct.',
            number: (result[0]['lossesHighestRoiPct'] + '%'),
        },
        {
            name: 'Smallest Return Pct.',
            number: (result[0]['lossesLowestRoiPct'] + '%'),
        },
    ],



}

const pivotList = {
    'Average': [
        {
            name: 'Average A to B',
            number: result[0]['avgAToB'],
        },
        {
            name: 'Average B to C',
            number: result[0]['avgBtoC'],
        },
        {
            name: 'Average C to D',
            number: result[0]['avgCtoD'],
        },
        {
            name: 'Average A to D',
            number: result[0]['avgAtoD'],
        },
    ],
    'Shortest': [
        {
            name: 'Shortest A to B',
            number: result[0]['shortestAtoB'],
        },
        {
            name: 'Shortest B to C',
            number: result[0]['shortestBtoC'],
        },
        {
            name: 'Shortest C to D',
            number: result[0]['shortestCtoD'],
        },
        {
            name: 'Shortest A to D',
            number: result[0]['shortestAtoD'],
        },
    ],
    'Longest':  [
        {
            name: 'Longest A to B',
            number: result[0]['longestAtoB'],
        },
        {
            name: 'Longest B to C',
            number: result[0]['longestBtoC'],
        },
        {
            name: 'Longest C to D',
            number: result[0]['longestCtoD'],
        },
        {
            name: 'Longest A to D',
            number: result[0]['longestAtoD'],
        },
    ],
    'Retracment': [
        {
            name: 'Highest',
            number: '-',
        },
        {
            name: 'Lowesst',
            number: '-',
        },
        {
            name: 'Average',
            number: '-',
        },
    ],
    'CD Retracement': [
        {
            name: 'Highest',
            number:  '-',
        },
        {
            name: 'Lowesst',
            number: '-',
        },
        {
            name: 'Average',
            number:  '-',
        },
    ],
    'Angle': [
        {
            name: 'Largest Angle',
            number: '-',
        },
        {
            name: 'Smallest Angle',
            number: '-',
        },
        {
            name: 'Average Angle',
            number: '-',
        },
    ],
    'Candle Reversal': [
        {
            name: 'The Hammer',
            number: '-',
        },
        {
            name: 'Shooting Star',
            number: '-',
        },
        {
            name: 'Bullish Engulfing',
            number: '-',
        },
        {
            name: 'Bearish Engulfing',
            number: '-',
        },
        {
            name: 'Morning Doji Star',
            number: '-',
        },
        {
            name: 'Three White Soliders',
            number: '-',
        },
        {
            name: 'The Black Crows',
            number: '-',
        },
        {
            name: 'Evening Star',
            number: '-',
        },
        {
            name: 'Morning Star',
            number: '-',
        },
        {
            name: 'Three Line Strike',
            number: '-',
        },
        {
            name: 'Evening Doji Star',
            number: '-',
        },
        {
            name: 'Three Outside Up',
            number: '-',
        },
        {
            name: 'Three Outside Down',
            number: '-',
        },
        {
            name: 'Abandoned Baby',
            number: '-',
        },
        {
            name: 'Three Inside Up',
            number: '-',
        },
        {
            name: 'Three Inside Down',
            number: '-',
        },
        {
            name: 'Piercing Line',
            number: '-',
        },
        {
            name: 'Dark Cloud Cover',
            number: '-',
        },
        {
            name: 'Down Gap Three Methods',
            number: '-',
        },
        {
            name: 'Up Gap Three Methods',
            number: '-',
        },
    ]
}

const unRealizedReturnList = {
    'Average': [
        {
            name: 'UnRealized Return',
            number: result[0]['avgAToB'],
        },
    ],

}

let bottomFooterStats = {
    'Trades' : result[0]['totalTradesCount'],
    'PNL': result[0]['totalPnl'],
    'Average Return': result[0]['totalAvgReturn'],
    'Win Pct.': result[0]['totalWr'],
}

const settingsList = {
    'Settings': [
        {
            name: 'Strategy',
            number: '-',
        },
        {
            name: 'Stock',
            number: '-',
        },
        {
            name: 'Market',
            number: '-',
        },
        {
            name: 'Pivot Length',
            number: '-',
        },
        {
            name: 'Risk Reward Ratio',
            number: '-',
        },
        {
            name: 'RSI',
            number: '-',
        },
        {
            name: 'Max A to B Length',
            number: '-',
        },
        {
            name: 'Max B to S Length:',
            number: '-',
        },
        {
            name: 'Max Trade Length',
            number: '-',
        },
        {
            name: 'Single Pivot',
            number: '-',
        },
        {
            name: 'Pivot Steepness',
            number: '-',
        },
        {
            name: 'Abnormal Price Jump',
            number: '-',
        },
        {
            name: 'A to B Length',
            number: '-',
        },
        {
            name: 'B below A',
            number: '-',
        },
    ]
}	

