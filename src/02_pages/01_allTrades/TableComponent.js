 import Chart from './01_chart/Chart';
import TradesTable from './TradesTable';
import './allTrades.css'

import config from '../../config.json';

import React, { useState, useEffect } from 'react';

const filter_greater_than_less_than = async (set_selected_patterns) => {
	
	try {
        await fetch(`${config.server}/patterns/gtlt/`, {
        method: 'POST',
        headers: {},
        body: JSON.stringify({
            symbol: 'hello'

        })
        });
    
	} catch (error) {console.log(error)}
	
}


const filter_settings = async (dgt, dlt, egt, elt, status, abLgt,abLlt) => {

    try {
        await fetch(`${config.server}/patterns/gtlt/`, {
        method: 'POST',
        headers: {},
        body: JSON.stringify({
            duration_gt: dgt,
            duration_lt: dlt,
            enter_gt: egt,
            enter_lt: elt,
            status: status,
            abLgt: abLgt,
            abLlt: abLlt


        })
        });
    
	} catch (error) {console.log(error)}
    return
}


const TableComponent = (props) => {

    const {
        tableData,
        tableDataName,
        send_selected_symbol,
        retrieve_total_patterns_info,
        get_updated_count_patterns,
        
        setTradeID,
        setAllTrades,
        setTradeIdInView,
        tradeIdInView,
        setSelectedBC,
        sortedPeformances,
        settingOptions,
        header,
		selectedIndex,
		fetchData,
		access_trades,
		get_selected_trades,
		set_active_bc_peformance,
		set_bc_tab,
		setSelectedIndex,
		setcds,
		create_cd_objects,
		get_cd_ojbects,
        setSortedPeformances,
        set_by_symbols,
        get_peformance,
        set_all_peformances,
        allPatterns,
        set_selected_pattern,
        retrieve_patterns,
        set_selected_patterns,
        
    } = props

    
    const [currentFilter, setCurrentFilter] = useState('All')

    const [duration_gt_value, set_duration_gt_value] = useState('');
    const [duration_lt_value, set_duration_lt_value] = useState('');
    const [enter_gt_value, set_enter_gt_value] = useState('');
    const [enter_lt_value, set_enter_lt_value] = useState('');
    const [abLength_gt_value, set_abLength_gt_value] = useState('');
    const [abLength_lt_value, set_abLength_lt_value] = useState('');

  // Event handler to update the input value
    const handle_duration_gt_input = (e) => {
        set_duration_gt_value(e.target.value);
    };
    const handle_duration_lt_input = (e) => {
        set_duration_lt_value(e.target.value);
    };
    const handle_enter_gt_input = (e) => {
        set_enter_gt_value(e.target.value);
    };
    const handle_enter_lt_input = (e) => {
        set_enter_lt_value(e.target.value);
    };
    const handle_abLength_gt_input = (e) => {
        set_abLength_gt_value(e.target.value);
    };
    const handle_abLength_lt_input = (e) => {
        set_abLength_lt_value(e.target.value);
    };

    return(
        <div className='trades_table_container_'>

            {/* Header */}
            {/* <div className="cd_settings"></div> */}

            {/* Settings */}
            {tableDataName === 'Single Trade' &&  <div className='table_settings_container'>

                <div className="chart_filter_options_2">

                    <div className='chart_filter_options_2a'>
                  
                        <div className='filter_row_container'>
                            <div className='status_container'>Status</div>
                            <div className='status_container2'>
                              
                                {settingOptions?.map((item,index)=>{
                                    return(
                                        <div className={currentFilter === item ? "filter_option_button_on" : 
                                        'filter_option_button_off'} onClick={()=>{setCurrentFilter(item)}} key={index}>{item}</div>
                                    )})
                                }

                            </div>
                        </div>
                        <div className='filter_row_container'>
                            
                            <div className='filter_row_1'>Duration</div>
                            <div className='filter_row_1'>
                                <div className='filter_row_1Key'>Greater Than</div>
                                <div className='filter_row_1Val'>
                                <input className='filter_row_1Val2'
                                        type="text"
                                        value={duration_gt_value}
                                        onChange={handle_duration_gt_input}
                                        placeholder= 'Enter Value'
                                    />
                                </div>
                            </div>
                            <div className='filter_row_1'>
                                <div className='filter_row_1Key'>Less Than</div>
                                <div className='filter_row_1Val'>
                                <input className='filter_row_1Val2'
                                        type="text"
                                        value={duration_lt_value}
                                        onChange={handle_duration_lt_input}
                                        // placeholder= 'Enter Value'
                                    />
                                </div>
                            </div>
                            
                        </div>
                        <div className='filter_row_container'>
                            
                            <div className='filter_row_1'>Enter</div>
                            <div className='filter_row_1'>
                                <div className='filter_row_1Key'>Greater Than</div>
                                <div className='filter_row_1Val'>
                                <input className='filter_row_1Val2'
                                        type="text"
                                        value={enter_gt_value}
                                        onChange={handle_enter_gt_input}
                                        // placeholder= 'Enter Value'
                                    />
                                </div>
                            </div>
                            <div className='filter_row_1'>
                                <div className='filter_row_1Key'>Less Than</div>
                                <div className='filter_row_1Val'>
                                    {/* <div className='filter_row_1Val2'> */}
                                    <input className='filter_row_1Val2'
                                        type="text"
                                        value={enter_lt_value}
                                        onChange={handle_enter_lt_input}
                                        // placeholder= 'Enter Value'
                                    />
                                    {/* </div> */}
                                </div>
                            </div>
                            
                        </div>
                        <div className='filter_row_container'>
                            
                            <div className='filter_row_1'>AB Length</div>
                            <div className='filter_row_1'>
                                <div className='filter_row_1Key'>Greater Than</div>
                                <div className='filter_row_1Val'>
                                <input className='filter_row_1Val2'
                                        type="text"
                                        value={abLength_gt_value}
                                        onChange={handle_abLength_gt_input}
                                        // placeholder= 'Enter Value'
                                    />
                                </div>
                            </div>
                            <div className='filter_row_1'>
                                <div className='filter_row_1Key'>Less Than</div>
                                <div className='filter_row_1Val'>
                                    {/* <div className='filter_row_1Val2'> */}
                                    <input className='filter_row_1Val2'
                                        type="text"
                                        value={abLength_lt_value}
                                        onChange={handle_abLength_lt_input}
                                        // placeholder= 'Enter Value'
                                    />
                                    {/* </div> */}
                                </div>
                            </div>
                            
                        </div>
                        <div className='filter_row_container'>
                            
                            <div className='filter_row_1'></div>
                            <div className='filter_row_1'></div>
                            <div className='filter_row_1'>
                                <div className='apply_box'>
                                    <div className='apply_box1'>default</div>
                                </div>
                                <div className='apply_box'>
                                    <div className='apply_box1'
                                    
                                        onClick={async()=>{
                                            await filter_settings(
                                            duration_gt_value,
                                            duration_lt_value,
                                            enter_gt_value,
                                            enter_lt_value,
                                            currentFilter,
                                            abLength_gt_value,
                                            abLength_lt_value
                                            )
                                        
                                            await retrieve_patterns(set_selected_patterns)
                                        }}
                                    >Apply</div>
                                </div>
                            </div>
                            
                        </div>
                       

                    </div>

                </div>

            </div>}
                        
            {/* Table */}
            <TradesTable 
                tableDataName={tableDataName}
                tableData={tableData}
                header={header}
                send_selected_symbol={send_selected_symbol}
                retrieve_patterns={retrieve_patterns}
                set_selected_patterns={set_selected_patterns}
                setTradeID={setTradeID} 
                setAllTrades={setAllTrades}
                setTradeIdInView={setTradeIdInView} 
                tradeIdInView={tradeIdInView}
                sortedPeformances={sortedPeformances}
                settingOptions={settingOptions}
                currentFilter={currentFilter}
                selectedIndex={selectedIndex}
                fetchData={fetchData}
              
                
                // API Calls
                access_trades={access_trades}
                get_selected_trades={get_selected_trades}


                set_active_bc_peformance={set_active_bc_peformance}
                setSelectedBC={setSelectedBC}
                set_bc_tab={set_bc_tab}
                setSelectedIndex={setSelectedIndex}
                setcds={setcds}
                create_cd_objects={create_cd_objects}
                get_cd_ojbects={get_cd_ojbects}
                setSortedPeformances={setSortedPeformances}
                set_by_symbols={set_by_symbols}
                get_peformance={get_peformance}
                set_all_peformances={set_all_peformances} 
                allPatterns={allPatterns}
                set_selected_pattern={set_selected_pattern}
                get_updated_count_patterns={get_updated_count_patterns}
                
			/>

            {/* Footer */}
            <div className="cd_settings" style={{backgroundColor: 'black'}}></div>

        </div>
    )
}

export default TableComponent