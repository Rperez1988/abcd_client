import '../../css/totalresultsstats.css'

const StatisticsBlockNew = (props) => {

    const {
        open,
        label,
    } = props

    return(
        <div className='statBox'>
            <div className='labelstatbox'>
                <div className='label'>{label}</div>
                <div className='stat'>{String(open)}</div>
            </div>
        </div>
    )
}

export default StatisticsBlockNew;



