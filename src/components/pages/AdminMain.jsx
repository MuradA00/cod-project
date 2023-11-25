import AdminBox from "../AdminPanel/AdminBox/AdminBox";
import AdminLayout from "../AdminPanel/AdminLayout/AdminLayout";
import AdminPanel from "../AdminPanel/AdminOptions/AdminOptions";
import AdminStat from "../AdminPanel/AdminStat/AdminStat";
import AdminTable from "../AdminPanel/AdminTable/AdminTable";
import Sidebar from "../AdminPanel/Sidebar/Sidebar";

const AdminMain = () => {
    return (
        <div className="flex-1 flex flex-col">
            <AdminLayout>
                <Sidebar/>
                <div className="flex flex-col gap-8 pl-[140px] lg:pl-[70px]">
                    <AdminStat/>
                    <AdminBox>
                        <AdminPanel/>
                        <AdminTable/>
                    </AdminBox>
                </div>
            </AdminLayout>
        </div>
    )
}

export default AdminMain;