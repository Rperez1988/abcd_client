import React, { useState, useEffect } from 'react';
import {Pie, Doughnut} from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);


const PieChart = (props) => {

  const {
    data
  } = props

    return (
      <div className='pieContainer'>
        {/* <Pie
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        /> */}

        <Doughnut
          data={data}
          // options={{
          //   title:{
          //     display:true,
          //     text:'Average Rainfall per month',
          //     fontSize:20
          //   },
          //   legend:{
          //     display:true,
          //     position:'right'
          //   }
          // }}
        />
      </div>
    );
}

export default PieChart