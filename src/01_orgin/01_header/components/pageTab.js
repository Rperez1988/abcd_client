
// css
import './pageTab.css'

const PageTab = (props) => {

    const {
        page,
        setActivePage,
        activePage,
        theme
    } = props

    let cssBG = 'pageOption-1'
    activePage === page && (cssBG = 'pageButton-Active')
    let cssEl = 'pageOption-text'
    activePage === page && (cssEl = 'pageOption-text-active')

    let border = 'border-unactive'
    activePage === page && (border = 'border-active')

    return(
        <div className={cssBG} onClick={()=>{setActivePage(page)}}>
            <div className={border}>
                <div className='pageOption-2'>
                    <div className={cssEl} style={{
                        color: theme.header.text_color_unactive
                    }}>{page}</div>
                </div>
            </div>
    
        </div>
    )
}

export default PageTab