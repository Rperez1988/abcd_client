import './StatisticsTabs.css'

const StatisticsTab = (props) => {

    const {
        tab,
        handle_info_page_selected, 
        tabText, 
        tabIcon,
        colorTheme
    } = props

	const divStyle = {
		// background: colorTheme.statistics.tab_background_color,/
        // border: colorTheme.statistics.tab_border
        
    };
    
    return(

        <div className=''>
            <div className={tab ? 'statistics-tab-active' : 'statistics-tab-unactive' } onClick={() => {handle_info_page_selected(tabText)}} style={divStyle}>
                <div className={tab ? 'statistics-tab-icon-active' : 'statistics-tab-icon-unactive'}>
                    <img className='tabIcon' src={tabIcon}/>
                </div>
            </div>
        </div>

    )
}

export default StatisticsTab