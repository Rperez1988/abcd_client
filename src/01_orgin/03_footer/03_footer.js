import './footer.css'

const Footer = (props) => {

    const {
        theme,
    } = props

    const divStyle = {
        background: theme.footer.background_color,
        borderTop: theme.footer.border_top,
    	// transition: theme.transition 
      };
    
    return(
        <div className='footer'
            style={divStyle}>Version 1.0</div>
    )
}

export default Footer