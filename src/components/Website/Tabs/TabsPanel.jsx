import { useEffect } from "react";

const TabsPanel = (props) => {

    console.log(props.tabOrder)

    const panelHandler = order => {
        props.tabHandler(order);
    }

    const panelData = [
        {
            id: 0,
            panelName: 'DESCRIPTION' 
        },
        {
            id: 1, 
            panelName: 'HOW IT WORKS'
        },
        {
            id: 2,
            panelName: 'WHY US'
        }
    ]

    return (
        <ul className="flex gap-10 items-center mb-14 ss:gap-3 ms:mb-6 ms:overflow-x-scroll ms:pb-3">
            {
                panelData.map((data, index) => (
                    <li key={data.id} className={`trans-300 cursor-pointer font-extrabold relative before:absolute before:-bottom-5 before:bg-[#7668CB] before:w-full before:h-[3px] before:opacity-0 before:transition-all ms:text-sm ms:before:-bottom-3 ms:whitespace-nowrap ${index === props.tabOrder ? 'text-zinc-white before:opacity-100' : 'text-zinc-500'}`} onClick={() => panelHandler(index)}>
                        {data.panelName}
                    </li>
                ))
            }
        </ul>
    )    
}

export default TabsPanel;