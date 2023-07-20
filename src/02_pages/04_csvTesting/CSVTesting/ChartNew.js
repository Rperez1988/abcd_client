
import ChartBarNew from './ChartBarNew';
import { Rings } from  'react-loader-spinner'
const ChartNew = (props) => {

    const {
        chartBarTotalResults,
        chartHeader,
        getStockResultSelected,
        setPerPage,
        perPage,
        currentPage,
        currentPageMax,
        next,
        prev,
        pageSelection,
        loading,
        runningStrategy,
        rsCounter,
    } = props

    const numberOfPages = chartBarTotalResults.length / perPage
    const aboutOfPages = []


    for(var i = 0; i < numberOfPages; i++){
      aboutOfPages.push(i + 1)
    }

    const header = () => {

        return <div className='stocksTestedChartBarHeader'>
                    {chartHeader.map((item, index) => (
            <div className='stocksTestedHeaderLabel' key={index}>{item}</div>
          ))}
        </div> 

    }

    const results = () => {

       
        if(loading){

            return( 
                <div className='noStocksTested'>
                    <Rings height = "80" width = "80" radius = "9" color = 'green' ariaLabel = 'three-dots-loading' wrapperStyle wrapperClass/>
                    {runningStrategy[rsCounter]}
                </div>
            )   
        }
        else{

            return ( 
                chartBarTotalResults.length === 0 ? 

                    <div className='noStocksTested'>NO STOCKS TESTED</div>  
                    
                :
                    chartBarTotalResults.slice((currentPage * perPage),(perPage * currentPageMax)).map((item, index) => (
                        <ChartBarNew getStockResultSelected = {getStockResultSelected} item={item} key={index}/>
                    ))
            )
        }
    }

    const footer = () => {
        return <div className='stocksTestedChartBarFooter'>

        <div className='PerPage'>
            <div className='perPageText'>Per Page</div>
            <div className='amount'>
            <div className={perPage === 10 ? 'chartBarFooterFlex1Active' : 'chartBarFooterFlex1'} onClick={() => {setPerPage(10)}}>10</div>
            <div className={perPage === 20 ? 'chartBarFooterFlex1Active' : 'chartBarFooterFlex1'} onClick={() => {setPerPage(20)}}>20</div>
            <div className={perPage === 50 ? 'chartBarFooterFlex1Active' : 'chartBarFooterFlex1'} onClick={() => {setPerPage(50)}}>50</div>
            <div className={perPage === 100 ? 'chartBarFooterFlex1Active' : 'chartBarFooterFlex1'} onClick={() => {setPerPage(100)}}>100</div>
            <div className={perPage === chartBarTotalResults.length ? 'chartBarFooterFlex1Active' : 'chartBarFooterFlex1'} onClick={() => {setPerPage(chartBarTotalResults.length)}}>All</div>
            </div>
        </div>

        <div className='NumOfPages'>
            <div className='d1'></div>
            <div className='d2'>
            {aboutOfPages.length > 4 ? 
                aboutOfPages.slice((currentPage),(currentPage + 4)).map(item => (
                    <div className={item === currentPageMax ? 'pagesActive' : 'pages' } key={item} onClick={() => {props.pageSelection(item)}}>{item}</div>
            ))                                          
                : 
            aboutOfPages.map(item => (
                <div className={item === currentPageMax ? 'pagesActive' : 'pages' }   key={item}onClick={() => {pageSelection(item)}}>{item}</div>
            )) 
            }
            
            {currentPage + 1 >= aboutOfPages.length? '' : <div className='pages'  onClick={() => {pageSelection(aboutOfPages.length)}}>...Last Page</div>}
            </div>
            <div className='d1'></div>
        </div>

        <div className='PrevNext'>
            <div className='pn1'></div>
            <div className='pn1'></div>
            <div className='pn1'></div>
            <div className='pn1'></div>
            <div className={currentPage === 0 ? 'chartBarFooterPrevMax' : 'chartBarFooterPrev'} onClick={prev}>Prev</div>
            <div className={((perPage * currentPageMax) < chartBarTotalResults.length) ? 'chartBarFooterNext' : 'chartBarFooterNextMax'} onClick={next}>Next</div>
        </div>

    </div>

    }

    return (
         
        <div className='stocksTestedPadding'>
            <div className='stocksTestedBody'>
                <div className='stocksTestedChart'>
                    {header()}
                    {results()}
                    {footer()}
                </div>
            </div>
        </div>
    );
}

export default ChartNew

