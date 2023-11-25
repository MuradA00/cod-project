import AdminBox from "../AdminPanel/AdminBox/AdminBox";
import AdminCards from "../AdminPanel/AdminCards/AdminCards";
import AdminLayout from "../AdminPanel/AdminLayout/AdminLayout";
import AdminPagination from "../AdminPanel/AdminPagination/AdminPagination";
import AdminPanel from "../AdminPanel/AdminOptions/AdminOptions";
import AdminUser from "../AdminPanel/AdminUser/AdminUser";
import Sidebar from "../AdminPanel/Sidebar/Sidebar";
import Details from "../Website/Details/Details";
import Box from "../Box/Box";
import { links, req, rows } from "../../constants/variables";
import { breadcrumbsArrrow, bronzeBadge, crossIcon, fragmentIcon, silverBadge, whiteCheckIcon, lineIcon } from "../../assets/images";
import CheckBox from "../../components/Website/CheckBox/CheckBox";
import { Link } from "react-router-dom";

const AdminDetails = () => {

    let state = 'completed'; 

    return (
        <div className="flex-1 flex flex-col">
            <AdminLayout>
                <Sidebar/>
                <div className="flex flex-col gap-8 pl-[140px] lg:pl-[70px] flex-1">
                    <AdminBox>
                        <AdminPanel profile state={true}/>
                    </AdminBox>
                </div>
            </AdminLayout>
        </div>
    )
}

export default AdminDetails;