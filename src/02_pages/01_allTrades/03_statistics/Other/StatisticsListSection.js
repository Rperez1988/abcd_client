import StatisticListRow from "./StatisticsListRow"
import './StatisticsListSection.css'


const StatisticsListSection = (props) => {
    
    const {
        list,
        name
    } = props
    return(
        <>
            <div className='row-label'>
                <div className='row-text'>{name}</div>
            </div>
    
            {Object.keys(list).map((key, index) => {		
                return( 
        
                    <StatisticListRow key={index} section={name} name={list[index]['name']} number={list[index]['number']} percent={list[index]['percent']}/>
                )
            })} 

            <div className='row-label'></div>
        </>
    )
    
}

export default StatisticsListSection

