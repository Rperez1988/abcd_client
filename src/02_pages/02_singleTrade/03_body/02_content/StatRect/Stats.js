import './Stats.css'

export const StatsRect = (props) => {

    const {
        header,
        trade
    } = props
    let color = 'rgb(223, 223, 255);'
    let abcdColor = 'darkorange'
    let white = 'rgb(223, 223, 255)'
    
    return(
    
 
        
        <div className='Stats'>

            {/* <div className="Stats_Header">{header}</div> */}

            <div className="Stats_Body">

                <div className="Stats_Body_Row">
                    <div className='ABCD'  style={{color: white, fontWeight:'bolder', fontWeight:'200%'}}>{header.toUpperCase()}</div>
                    <div className='ABCD' style={{color: white, fontWeight:'bolder'}}>A</div>
                    <div className='ABCD' style={{color: white, fontWeight:'bolder'}}>B</div>
                    <div className='ABCD'style={{color: white, fontWeight:'bolder'}} >C</div>
                    <div className='ABCD' style={{color: white, fontWeight:'bolder'}}>D</div>
                </div>         
                <div className="Stats_Body_Row">
                    <div className='ABCD' style={{color: color, fontWeight:'bolder'}}>Date:</div>
                    <div className='ABCD'>{trade['dateOfA']}</div>
                    <div className='ABCD'>{trade['dateOfB']}</div>
                    <div className='ABCD'>{trade['dateOfC']}</div>
                    <div className='ABCD'>{trade['dateOfD']}</div>
                </div>   
                <div className="Stats_Body_Row">
                    <div className='ABCD' style={{color: color, fontWeight:'bolder'}}>Price:</div>
                    <div className='ABCD'>${trade['priceOfA']}</div>
                    <div className='ABCD'>${trade['priceOfB']}</div>
                    <div className='ABCD'>${trade['priceOfC']}</div>
                    <div className='ABCD'>${trade['priceOfD']}</div>
                </div>     
                <div className="Stats_Body_Row">
                    <div className='ABCD' style={{color: color, fontWeight:'bolder'}}>Length:</div>
                    <div className='ABCD'>20</div>
                    <div className='ABCD'>20</div>
                    <div className='ABCD'>20</div>
                    <div className='ABCD'>20</div>
                </div>     
                <div className="Stats_Body_Row">
                    <div className='ABCD' style={{color: color, fontWeight:'bolder'}}>Type:</div>
                    <div className='ABCD'>-</div>
                    <div className='ABCD'>-</div>
                    <div className='ABCD'>-</div>
                    <div className='ABCD'>-</div>
                </div>  
                <div className="Stats_Body_Row">
                    <div className='ABCD' style={{color: color, fontWeight:'bolder'}}>Angle:</div>
                    <div className='ABCD'>-</div>
                    <div className='ABCD'>-</div>
                    <div className='ABCD'>-</div>
                    <div className='ABCD'>-</div>
                </div>  
                <div className="Stats_Body_Row">
                    <div className='ABCD' style={{color: color, fontWeight:'bolder'}}>RSI:</div>
                    <div className='ABCD'>-</div>
                    <div className='ABCD'>-</div>
                    <div className='ABCD'>-</div>
                    <div className='ABCD'>-</div>
                </div>  
                <div className="Stats_Body_Row">
                    <div className='ABCD' style={{color: color, fontWeight:'bolder'}}>RSI:</div>
                    <div className='ABCD'>-</div>
                    <div className='ABCD'>-</div>
                    <div className='ABCD'>-</div>
                    <div className='ABCD'>-</div>
                </div>

            </div>
        </div>
    )
}