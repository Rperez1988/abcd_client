import '../../css/BlackBoxSettingsOptions.css'

const BlackBoxSettingOptionsNew = (props) => {

    const {
        item,
        handleFilterChange,
        activeFilter,
    } = props

    return (
        <div className='settingBoxOptionBox'>
            <div className='settingBoxOption'>
                <div className={activeFilter === item ? 'settingBoxOptionLabelActive' : 'settingBoxOptionLabel'} onClick={() => {handleFilterChange(item)}}>
                    {item}
                </div>
            </div>
        </div>    
    );
}

export default BlackBoxSettingOptionsNew;



