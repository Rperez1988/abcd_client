import './StatisticsList.css'
import StatisticsListSection from "../Other/StatisticsListSection"

const StatisticsList = (props) => {

    const {
        list,

    } = props

    return(
        <div className="statistics-stats-2">
            
            {Object.keys(list).map((key,index)=>{
                return(
             
                    <StatisticsListSection key={index} list={list[key]} name={key}/>
                )
            })}
      

        </div>
    )
}

export default StatisticsList