import React, { useState } from "react"
import './trade_journal.css'


const Trade_Journal = () => {

    return(

        <div className="trade_journal_container">

            <div className="row_one">
                <div className="number_of_trades__">
                    <div className="box_wrapper">
                        <div className="box_header">Number Of Trades Taken</div>
                        <div className="box_body">105</div>
                    </div>
                </div>
                <div className="number_of_trades__">
                    <div className="box_wrapper">
                        <div className="box_header">Symbols Of Trades Taken</div>
                        <div className="box_body_">

                            <div className="trade_symbol">1. BKEP</div>
                
                            <div className="trade_symbol">1. BKEP</div>
                            
                            <div className="trade_symbol">1. BKEP</div>
                            
                            <div className="trade_symbol">1. BKEP</div>

                        </div>
                    </div>
                </div>
                <div className="number_of_trades__">
                    <div className="box_wrapper"></div>
                </div>
                <div className="number_of_trades__">
                    <div className="box_wrapper"></div>
                </div>
                <div className="number_of_trades__">
                    <div className="box_wrapper"></div>
                </div>
            </div>

            <div className="row_two"></div>
            <div className="row_three"></div>
            <div className="row_four"></div>


        </div>
    )
}

export default Trade_Journal