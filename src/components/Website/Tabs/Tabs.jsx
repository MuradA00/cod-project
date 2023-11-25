import { useState } from "react";
import TabsDisplay from "./TabsDisplay";
import TabsPanel from "./TabsPanel";

const Tabs = () => {

    const [tab, setTab] = useState(0);

    const handleTabs  = index => {
        setTab(index);
    }

    return (
        <div >
            <TabsPanel tabOrder={tab} tabHandler={handleTabs}/>
            <TabsDisplay tabOrder={tab}/>
        </div>
    )    
}

export default Tabs;