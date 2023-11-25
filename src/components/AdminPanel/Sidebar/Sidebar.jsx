import { Link } from "react-router-dom";
import { sidebarData } from "../../../constants/variables";
import { useState, useEffect } from "react";
import { sidebarLeaveIcon } from "../../../assets/images";

const Sidebar = () => {

    const [activeLink, setActiveLink] = useState(0);

    return (
        <aside className="fixed" style={{ height: '-webkit-fill-available'}}>
            <div className="w-24 lg:w-12 flex h-[97.5%] justify-center items-center rounded-[3rem] pt-8 pb-6 flex-col border-gradient" style={{'--cl-border': 'rgba(255,255,255,.5)', '--bg': '#1F1E25'}}>
                <div className=" flex-grow">
                    <ul className="flex flex-col gap-[1.125rem] ">
                        {sidebarData.map((item, index) => (
                            <li key={item.id}>
                                <Link className={`w-[50px] h-[50px] trans-300 rounded-[1.25rem] flex justify-center items-center lg:w-8 lg:h-8 lg:rounded-[10px] ${index === activeLink ? 'bg-y' : 'bg-[rgba(255,255,255,.2)] hover:bg-[rgba(255,255,255,.35)]'}`} to={item.url}>
                                    <img src={item.icon} className="lg:w-4 lg:h-4" alt="" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <button className="w-[50px] h-[50px] rounded-[1.25rem] lg:w-8 lg:h-8 lg:rounded-[10px] trans-300 hover:bg-[rgba(255,255,255,.3)] flex justify-center items-center bg-[rgba(255,255,255,.2)]">
                    <img src={sidebarLeaveIcon} className="w-4 h-4" alt="" />
                </button>
                <div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar;