import React, { useEffect, useState } from 'react';
import './/header.css'
import PageTab from './components/pageTab';
import Setting from './img/settings.png'

import chart from './img/chart.png'
import journal from './img/notes.png'

const Header = (props) => {

  const {
    theme,
    setActivePage,
    activePage,
    themes,
    setActiveTheme
  } = props

  const pages = [
    'Home',
    'Testing',
    'All Trades',
    'Single Trade',
    'Candle Chart',
    'About',
    'Journal'
  ]

  const [isSettings, setIsSettings] = useState(false)

  const divStyle = {
    background: theme.primary_color,
    borderBottom: theme.header.border_bottom,
    color: theme.header.color
  
  };

  return(
    <div className='header-container' style={divStyle}>


      <div className='header-page-options'>
        {/* <div className='header_abcd_logo'>ABCD</div> */}

        <div className='chart_icon'></div>
        <img className='chart_icon' src={chart}/>
        <img className='chart_icon' src={journal}/>
      </div>
      
      {/* <div className='header-page-options'>
        <div className='option_wrapper'></div>
        <div className='option_wrapper'></div>
        <div className='option_wrapper'></div>
        <div className='option_wrapper'></div>


        <div className='option_wrapper'>
          {isSettings && 
              <div className='header_settings_menu'>

              {themes.map((item, index) => {
                return(
                  <div className='header_settings_menu_row' onClick={()=>{setActiveTheme(index)}}>
                    <div className='color_theme_name'>{item.name}</div>
                    <div className='color_theme_colors'>Blue</div>
                  </div>
                )
              })}
  
     
  
            </div>
          }
      

        </div>

        
        <div className='option_wrapper'>
          <img src={Setting} className='header_image' onClick={()=> setIsSettings(!isSettings)}/>
          
        </div>
      </div> */}


    </div>
  )
}
export default Header;