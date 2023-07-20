import './StatisticsListRow.css'

const StatisticListRow = (props) => {

    const {

        section,
        name,
        number,
        percent
        
    } = props



    return(
        
        <div className='row-height10px'>
            <div className='row-text'>{name}</div>
            <div className='row-number'>

                {section === 'Settings' ? <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider round"></span>
                </label> 
                
                :
                <>
                    {number} {percent && '(' + percent + '%)'}
                
                </>
            
                
                }
               
                
                
       
            </div>
        </div>
    )
}

export default StatisticListRow