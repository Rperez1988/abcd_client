import './StatBox.css'

export const StatBox = (props) => {

    const {
        header,
        value
    } = props

   
    return(
        <div className="TradeDetails_Box">
                                    
            <div className="TradeDetails_Stat">
                <div className="TradeDetails_Header">{header}</div>
                
                <div className="TradeDetails_Body">{value}</div>
            </div>
            
       </div> 
    )
}