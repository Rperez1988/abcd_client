import react, { useEffect, useState } from 'react'
import Row from './01_chart/Row/Row'
import settingsIcon from './img/settingswhite.png'
import './TradesTable.css'
const filter_by_symbol = (allTrades, filterOrder, setAllTrades, setFilterOrder) => {

	switch (filterOrder){

		case 0:
		
			setAllTrades(allTrades.slice().sort((a, b) => a.tradeInfo.symbol - b.tradeInfo.symbol))
			setFilterOrder(1)
			return
		case 1: 
			setAllTrades(allTrades.slice().sort((a, b) => a.tradeInfo.symbol - b.tradeInfo.symbol).reverse())
			setFilterOrder(2)
			return
		case 2:
			setAllTrades(allTrades)
			setFilterOrder(0)
			return
	}
}
const filter_by_pnl = (allTrades, filterOrder, setAllTrades, setFilterOrder) => {

	switch (filterOrder){

		case 0:
	
			setAllTrades(allTrades.slice().sort((a, b) => parseInt(a.pnl.pnl) - parseInt(b.pnl.pnl)))
			setFilterOrder(1)
			return
		case 1: 
			setAllTrades(allTrades.slice().sort((a, b) => parseInt(a.pnl.pnl) - parseInt(b.pnl.pnl)).reverse())
			setFilterOrder(2)
			return
		case 2:
			setAllTrades(allTrades)
			setFilterOrder(0)
			return
	}

		
}
const filter_by_return = (allTrades, filterOrder, setAllTrades, setFilterOrder) => {

	switch (filterOrder){

		case 0:
			setAllTrades(allTrades.slice().sort((a, b) => parseFloat(a.pnl['returnPercentage']) - parseFloat(b.pnl['returnPercentage'])))
			setFilterOrder(1)
			return
		case 1: 
			setAllTrades(allTrades.slice().sort((a, b) => parseFloat(a.pnl['returnPercentage']) - parseFloat(b.pnl['returnPercentage'])).reverse())
			setFilterOrder(2)
			return
		case 2:
			setAllTrades(allTrades)
			setFilterOrder(0)
			return
	}


}
const filter_by_date = (allTrades, filterOrder, setAllTrades, setFilterOrder) => {

	switch (filterOrder){

		case 0:
			setAllTrades(allTrades.slice().sort((a, b) => new Date(a.enterExitInfo.enterDate) - new Date(b.enterExitInfo.enterDate)))
			setFilterOrder(1)
			return
		case 1: 
			setAllTrades(allTrades.slice().sort((a, b) => new Date(a.enterExitInfo.enterDate) - new Date(b.enterExitInfo.enterDate)).reverse())
			setFilterOrder(2)
			return
		case 2:
			setAllTrades(allTrades)
			setFilterOrder(0)
			return
	}
}
const filter_by_duration = (allTrades, filterOrder, setAllTrades, setFilterOrder) => {

	switch (filterOrder){

		case 0:
			setAllTrades(allTrades.slice().sort((a, b) => parseInt(a.tradeInfo.tradeDuration) - parseInt(b.tradeInfo.tradeDuration)))
			setFilterOrder(1)
			return
		case 1: 
			setAllTrades(allTrades.slice().sort((a, b) => parseInt(a.tradeInfo.tradeDuration) - parseInt(b.tradeInfo.tradeDuration)).reverse())
			setFilterOrder(2)
			return
		case 2:
			setAllTrades(allTrades)
			setFilterOrder(0)
			return
	}

}
const filter_by_bc = (allTrades, filterOrder, setAllTrades, setFilterOrder) => {

	switch (filterOrder){

		case 0:
			setAllTrades(allTrades.slice().sort((a, b) => parseInt(a.retracement.bcRetracement) - parseInt(b.retracement.bcRetracement)))
			setFilterOrder(1)
			return
		case 1: 
			setAllTrades(allTrades.slice().sort((a, b) => parseInt(a.retracement.bcRetracement) - parseInt(b.retracement.bcRetracement)).reverse())
			setFilterOrder(2)
			return
		case 2:
			setAllTrades(allTrades)
			setFilterOrder(0)
			return
	}

		
}
const filter_by_cd = (allTrades, filterOrder, setAllTrades, setFilterOrder) => {

	switch (filterOrder){

		case 0:
			setAllTrades(allTrades.slice().sort((a, b) => parseInt(a.retracement.cdRetracement) - parseInt(b.retracement.cdRetracement)))
			setFilterOrder(1)
			return
		case 1: 
			setAllTrades(allTrades.slice().sort((a, b) => parseInt(a.retracement.cdRetracement) - parseInt(b.retracement.cdRetracement)).reverse())
			setFilterOrder(2)
			return
		case 2:
			setAllTrades(allTrades)
			setFilterOrder(0)
			return
	}

		
}
const filter_by_rsi = (allTrades, filterOrder, setAllTrades, setFilterOrder) => {

	switch (filterOrder){

		case 0:
			setAllTrades(allTrades.slice().sort((a, b) => parseInt(a.tradeInfo.rsi) - parseInt(b.tradeInfo.rsi)))
			setFilterOrder(1)
			return
		case 1: 
			setAllTrades(allTrades.slice().sort((a, b) => parseInt(a.tradeInfo.rsi) - parseInt(b.tradeInfo.rsi)).reverse())
			setFilterOrder(2)
			return
		case 2:
			setAllTrades(allTrades)
			setFilterOrder(0)
			return
	}
}


const TradesTable = (props) => {

    const {
        allTrades, 
        setTradeID,
        colorTheme,
		tradeIdInView,
		setAllTrades

    } = props



	const [symbol_filter_order, set_symbol_filter_order] = useState(0)
	const [pnl_filter_order, set_pnl_filter_order] = useState(0)
	const [return_filter_order, set_return_filter_order] = useState(0)
	const [date_filter_order, set_date_filter_order] = useState(0)
	const [duration_filter_order, set_duration, filter_order] = useState(0)
	const [bc_filter_order, set_bc_filter_order] = useState(0)
	const [cd_filter_order, set_cd_filter_order] = useState(0)
	const [rsi_filter_order, set_rsi_filter_order] = useState(0)
    const [currentFilter, setCurrentFilter] = useState('All')
	const [activeRowIndex, setActiveRowIndex] = useState(tradeIdInView)
	
    const style_header = {
		background: colorTheme.chart.header,
		color: colorTheme.chart.header_color,
	};
    const header = [
		'#',
		'STATUS',
		'SYMBOL',
		// 'ENTRY',
		// 'EXIT',
		// 'MARKET',
		'PNL',
		'RETURN %',
		// 'A DATE',
		// 'B DATE',
		// 'C DATE',
		'D DATE',
		'DURATION',
		// 'TYPE',

		// 'EXCHANGE',
		

		// 'PIVOT NUMBER',
		// 'VOLUME'
		'BC',
		'CD',
		'RSI'

	]
    const filter_options = ['All', 'Win', 'Loss', 'Live', 'Aborted']
	// const [filteredTrades, setAllTrades] = useState([])
	
	useEffect(()=>{
		setAllTrades(allTrades)


	},[])
	useEffect(()=>{

		
		setActiveRowIndex(tradeIdInView)
		
	}, [tradeIdInView])

	const [inputValue, setInputValue] = useState('');

  // Function to handle input changes
	const handleInputChange = (event) => {
		setInputValue(event.target.value);
	};

    return(

        <>

  

        	<div className='Chart_Header' 
			        
					style={{background: 'rgb(17 36 62)',
					color: "white"
				
				}}
					
			
			
			>
				{header.map((item,index) => {
					return(	

						<div key={index} className='rowcolor1--header' onClick={()=>{

							item === 'SYMBOL' && filter_by_symbol(allTrades, symbol_filter_order, setAllTrades, set_symbol_filter_order)
							item === 'PNL' && filter_by_pnl(allTrades, pnl_filter_order, setAllTrades, set_pnl_filter_order)
							item === 'RETURN %' && filter_by_return(allTrades, return_filter_order, setAllTrades, set_return_filter_order)
							item === 'D DATE' && filter_by_date(allTrades, date_filter_order, setAllTrades, set_date_filter_order)
							item === 'DURATION' && filter_by_duration(allTrades, duration_filter_order, setAllTrades, set_duration, filter_order)
							item === 'BC' && filter_by_bc(allTrades, bc_filter_order, setAllTrades, set_bc_filter_order)
							item === 'CD' && filter_by_cd(allTrades, cd_filter_order, setAllTrades, set_cd_filter_order)
							item === 'RSI' && filter_by_rsi(allTrades, rsi_filter_order, setAllTrades, set_rsi_filter_order)

						}} >{item}</div>
					)
				})}
			
			</div>

            <div className='Chart_Trades_Expanded'>

                {allTrades[0]['tradeInfo']['id'] !== '-' ? 

				allTrades?.map((item,index) => {

					if(item.tradeInfo.tradeResult === currentFilter || currentFilter === 'All'){
						
						return(<Row
							key={item.id} // Assuming "id" is a unique identifier for each trad
							active={activeRowIndex === index ? true : false}
							setActiveRowIndex={setActiveRowIndex}
							item={item} 
							index={index} 
							setTradeID={setTradeID}
							colorTheme={colorTheme}

						/>)}
                  
                })
			
			
			:
			
			<div className='no_trades'>No Trades</div> 
			}

				


            </div>
        
        </>

     
    )
}

export default TradesTable