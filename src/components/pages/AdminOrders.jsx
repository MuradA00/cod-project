import AdminBox from "../AdminPanel/AdminBox/AdminBox";
import AdminLayout from "../AdminPanel/AdminLayout/AdminLayout";
import AdminPagination from "../AdminPanel/AdminPagination/AdminPagination";
import AdminPanel from "../AdminPanel/AdminOptions/AdminOptions";
import AdminTable from "../AdminPanel/AdminTable/AdminTable";
import Sidebar from "../AdminPanel/Sidebar/Sidebar";

const AdminOrders = () => {
    return (
        <div className="flex-1 flex flex-col">
            <AdminLayout>
                <Sidebar/>
                <div className="flex flex-col gap-8 pl-[140px] lg:pl-[70px] flex-1">
                    <AdminBox>
                        <AdminPanel/>
                        <AdminTable/>
                        <AdminPagination bg={'#47464C'} />
                    </AdminBox>
                </div>
            </AdminLayout>
        </div>
    )
}

export default AdminOrders;