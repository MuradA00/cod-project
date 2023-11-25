import { adminCalendarIcon, adminSortIcon, fragmentIcon, plusIcon } from "../../../assets/images";
import AdminButton from "../../UI/AdminButton";
import AdminUser from "../AdminUser/AdminUser";

const AdminPanel = (props) => {

    console.log(props.state)

    const totalItems = 3.456;

    return (
        <div className="flex items-center justify-between px-6 ms:px-4 lg-small:flex-col lg-small:items-start lg-small:gap-4">
            <div className="flex items-center gap-3">
                <img src={fragmentIcon} alt="fragment-icon" />
                <div className="flex flex-col">
                    <span className="text-[30px] ms:text-2xl font-hubot font-bold">Items</span>
                    <span className="text-zinc-400 text-base">
                        You have {totalItems} items
                    </span>
                </div>
            </div>
            {
                props.panel && (
                    <ul className="flex items-center gap-[1.125rem] flex-wrap lg-small:grid lg-small:grid-cols-3 lg-small:w-full ms:!grid-cols-1 ms:gap-3">
                    <AdminButton icon={adminCalendarIcon} text={'Aug23, 2023'} />
                    <AdminButton icon={adminSortIcon} text={'Sort by Price'} />
                    <AdminButton icon={plusIcon} active text={'Sort by Price'} />
                </ul>
                )
            }
            {
                props.profile && (
                    <AdminUser state={props.state} />
                )
            }
        </div>
    )
}

export default AdminPanel;