import React, { useState } from 'react';
import Header from '../01_header/header';
import Body from '../02_body/02_body';
import Footer from '../03_footer/03_footer';
import './App.css'

import '../../05_devices/Multi-Platform.css'

const App = () => {

  const [activePage, setActivePage] = useState('All Trades')

  const [activeTheme, setActiveTheme] = useState(0)

  const [themes,setThemes] = useState([



    { 

      name: 'OG-Purple',
      active: false,
      header: {
        // background_color: '#080915',
        // border_bottom: '3px solid #98a0ba',
        text_color_unactive: '#aaaaca',
        text_color_active: '#58728a'
      },
    
      // primary_color: 'rgb(8, 20, 36)',
      // primary_color: 'black',
      // background: 'red',
      // row_one_color: '#131516',
      // row_two_color: '#131516',
      //
      row_two_color: 'rgb(22, 23, 28)',
      row_one_color: 'rgb(34 36 44)',
      text_color: '#ccc',
      card_header_color: '#040507',
      

      background_color:{
        background: '    background: linear-gradient(to right, rgb(8, 20, 36), rgb(8, 20, 36), rgb(3, 22, 31)rgba(255, 0, 0, 0));',
        background: 'black',
        
    background: 'hsla(230.00000000000003, 12.00%, 9.80%, 1.00)'
       },
      //  rgb(8, 20, 36
      // rgb(17 36 62);
      single_trade: {

        candle_chart: {

          border: {
            // border: '1px solid yellow',
       
          },

          header:{

            // background_color: 'rgb(17 36 62)',
            icons_color: 'invert(99%) sepia(100%) saturate(2%) hue-rotate(250deg) brightness(103%) contrast(100%)',
            icon_hovered_color: '',
            trade_symbol_color: 'ghostwhite',
            trade_symbol_background_color: 'teal',
            border_bewteen_button: '2px solid white',
            button_hovered_background_color: '',
          


            button_neutral_background_color: {
              color: 'white',
            },

            button_hovered_background_color:{
              background: 'teal'
            }


          },

          sidebar:{

            background_color: {
              background: 'rgb(26, 26, 26)'
            },

            icon_color:{
              filter: 'invert(36%) sepia(27%) saturate(2378%) hue-rotate(142deg)'
            },
          },

          chart: {

            info:{

            },

            chart:{

              background_color:{
                background: 'linear-gradient(to right,  rgb(8,20,36),  rgb(3, 22, 31), rgb(8,20,36), #040507)',
                
                candle_red_color: 'orange',
                // border: '1px solid teal'


                // border: '1px solid gray',
              },

              candles:{
                losing_wick:'#f81423',
                losing_candle: 'orange',
                winning_wick:  '#09f0f0',
                winning_candle: '#69ea47',
                grid_line: 'white',
              }

            },

            dates:{
              // background: 'yellow',
              crosshair_price_backround: 'rgb(8, 9, 21)',
              crosshair_price_color: 'ghostwhite'
            },

            prices:{
       
              crosshair_price_backround: 'rgb(8, 9, 21)',
              crosshair_price_color: 'red',
              profit: 'teal',
              entry: 'orange',
              risked: 'red',
            }

          }

        },

        trade_info:{

          main:{
            // border: '3px solid yellow',
            // background:  '#080915',
          },

          single_info_block:{

              border: {
                // border: '1px solid gray',
                // background: 'teal',
                // borderBottom: '1px solid gray'
      
              },

              header:{
                // borderBottom: '1px solid yellow'
              },

              key_color: {
                color: 'gray'
              },

              value_color:{
                color: 'ghostwhite'
              },

          }

        },

        sidebar_background_color: '#131221',
        sidebar_icon_colors: 'invert(73%) sepia(44%) saturate(3305%) hue-rotate(357deg) brightness(97%) contrast(109%)',
        header_background_color:  '#131221',
        footer_background_color:'#131221',
       

      },
     
      bc:{
        
        header: {
          background: 'black',
          color: 'teal'
        },
        row_off:{
          background: 'black',
          color: 'teal',
          border: '1px solid rgb(26, 26, 26)'
        }
     
      },

      chart:{
        settings:  '#080915',
        header:  'black',
        footer:  '#080915',
        row_1:  '#131221',
        row_2:  '#131221',
        row_hover: 'green',
        // border: '7px solid black',
        header_color: 'white', 
        // duration_border: '2px solid #6348c1',
        // duration_color: 'gray'
      },
    },



  ])


  return (

      <div className='App' style={themes[activeTheme].background_color}>

        <Header setActiveTheme={setActiveTheme} themes={themes} theme={themes[activeTheme]} setActivePage={setActivePage} activePage={activePage}/>
        <Body colorTheme={themes[activeTheme]} activePage={activePage}/>
        {/* <Footer theme={themes[activeTheme]} /> */}
        
      </div>

  );
  }

export default App;