// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTab = () => {
    clickTabItem(tabId)
  }

  const activeTab = isActive ? 'active-tab' : ''

  return (
    <li className="tab-item">
      <button
        type="button"
        className={`tab-btn ${activeTab}`}
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
