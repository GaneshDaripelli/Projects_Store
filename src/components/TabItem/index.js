import './index.css'

const Tabitem = (props) => {
    const {eachTab, isActive, changeTabItem} = props 
    const {tabId, displayText} = eachTab
    const chageTab = () => {
        changeTabItem(tabId)
    }
    const changeClassName = isActive? "change":""
    return(
        <div className='tab-div'>
            <h1 className={`tab-h1${changeClassName}`} onClick={chageTab}>{displayText}</h1>
        </div>

    )
}

export default Tabitem