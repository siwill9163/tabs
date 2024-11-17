import React, { useState } from 'react'
import './Tabs.css'
import { TabsData } from './TabsData'

const Tabs = () => {
    // state to track the active tab
    const [activeTab, setActiveTab] = useState(0);

    // Event handler to set the active tab when a tab is clicked
    const handleClicked = (id) =>{
        setActiveTab(id);
    };

  return (
    <div className='tabs-container'>
        
        <ul>
            {
                TabsData.map((tab,i) => (
                    // Apply "active" class if the active tab
                    <li key={i} className={activeTab === i ? "active" : ""}
                    onClick={() => handleClicked(i)}
                    >
                        {tab.title}
                    </li>
                ))}
        </ul>

        <div className="content">
            {
                TabsData.map((data,i) => (
                    // apply "active class"
                    <div className={`desc ${activeTab === i ? "active" : ""}`} key={i}>
                        {data.desc}
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Tabs
