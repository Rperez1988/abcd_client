
import './singleTrade_details.css'

const SingleTrade_Details = (props) => {

    const {
        header,
        list,
        flexWrap,
        colorTheme,
    } = props
    let white = 'rgb(223, 223, 255)'
    let gray = ' rgb(149, 152, 153)'

    const stats_outer_style = {
        border: colorTheme.single_trade.stats_outer_border
    }

    const stats_inner_style = {
        border: colorTheme.single_trade.stats_inner_border,
        backgroundColor: colorTheme.single_trade.stats_background_color,
    }

    const stats_header = {
        color: colorTheme.single_trade.stats_header_color, 
        fontWeight:'bolder'
    }


    return(
        

        <div className='Stats' style={stats_outer_style}>

            <div className='StatsBorder' style={stats_inner_style}>
                <div className="Stats_Body">

                    <div className="SingleTrade_Details_Header">
                        <div className='SingleTrade_Details_HeaderText' style={stats_header}>{header}</div>
                    </div>    
{/* 
                    <div className="Stats_Body_Row">
                        {Object.keys(list).map((key,index)=>{
                            if(list[key]==='Closed'){

                            }
                            return(
                                <>
                                    <div className='ABCD' key={key} style={{width: flexWrap, color: white, fontWeight:'light'}}>{key}</div>
                                    <div className='ABCD' style={{width: flexWrap, color: list[key]==='Closed' ? 'red' : gray, fontWeight:'light'}}>{list[key]}</div>
                                </>
                            )
                        })}
                    </div>     */}
                    
                </div>
            </div>

        </div>

    )
}

export default SingleTrade_Details