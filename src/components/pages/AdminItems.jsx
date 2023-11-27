import AdminBox from "../AdminPanel/AdminBox/AdminBox";
import AdminCards from "../AdminPanel/AdminCards/AdminCards";
import AdminLayout from "../AdminPanel/AdminLayout/AdminLayout";
import AdminPagination from "../AdminPanel/AdminPagination/AdminPagination";
import AdminPanel from "../AdminPanel/AdminOptions/AdminOptions";
import AdminUser from "../AdminPanel/AdminUser/AdminUser";
import CardState from "../Website/Services/CardState";
import style from '../Website/Services/Services.module.css';
import Sidebar from "../AdminPanel/Sidebar/Sidebar";
import { cardHotIcon, servCardImageGreenSkull } from "../../assets/images";

const AdminItems = () => {

    const cardsElems = Array.from({ length: 8 }, (_, index) => index + 1);

    return (
        <div className="flex-1 flex flex-col">
            <AdminLayout>
                <Sidebar/>
                <div className="flex flex-col gap-8 pl-[140px] lg:pl-[70px] flex-1">
                    <AdminBox>
                        <AdminPanel profile state={true}/>
                        <AdminCards/>
                        <ul className="px-6 grid grid-cols-[repeat(auto-fill,minmax(274px,1fr))] gap-5 ss:flex ss:flex-col ss:px-3">
                            {cardsElems.map((item, index) => (
                                <div key={index} className={`group flex relative flex-col gap-[22px] min-h-[370px] pt-[6px] pb-4 px-[6px] ${style.bgCard}`}>
                                <CardState state={'red'} stateIcon={cardHotIcon} stateText={'Top'} />
                                <a href="#" className={`h-[240px] block overflow-hidden rounded-[14px] w-full object-cover ${style.cardShape}`}>
                                    <img src={servCardImageGreenSkull} className='trans-200 group-hover:scale-105 h-[inherit] w-full object-cover' alt="" />
                                </a>
                                <div className='flex flex-col px-[7px] flex-grow'>
                                    <div className='text-lg font-bold text-white font-hubot flex-grow'>
                                        WZ2 Rank Boosting
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <div>
                                            <span className='text-[#C3C3C3] text-sm font-mona font-normal'>From</span>
                                            <div className='text-[#D9D9D9] text-2xl sm:text-xl font-mona font-bold'>
                                                $23.65
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ))}
                        </ul>
                        <AdminPagination spaced={true} />
                    </AdminBox>
                </div>
            </AdminLayout>
        </div>
    )
}

export default AdminItems;