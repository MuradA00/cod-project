import { progressIcon } from "../../../assets/images";
import { adminStatData } from "../../../constants/variables";

const AdminStat = () => {
    return (
        <div>
            <ul className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-[30px] lg:gap-3">
                {adminStatData.map((item, _) => (
                    <li key={item.id} className="border-gradient min-h-[152px] p-[1.125rem] rounded-[10px] flex flex-col justify-between" style={{'--bg': '#1F1E25', '--cl-border': 'rgba(255,255,255,.5)'}}>
                        <div className="flex items-center justify-between">
                            <div className={`w-[46px] h-[46px] rounded-xl flex justify-center items-center`} style={{backgroundColor: `${item.bgIcon}`}}>
                                <img className="w-[1.75rem] h-[1.75rem]" src={item.icon} alt="" />
                            </div>
                            <div className=" bg-emerald-100 rounded flex justify-center items-center px-1 gap-1 min-h-[26px]">
                                <img src={progressIcon} className="w-[1.125rem] h-[1.125rem]" alt="" />
                                <span className=" text-emerald-600 text-xs font-bold tracking-[-.48px]">
                                    {item.progress}%
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-[30px] font-bold leading-[100%]">
                                {item.amount}
                            </span>
                            <span className=" text-zinc-400 text-sm font-medium leading-[100%]">
                                {item.subHeading}
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AdminStat;