const AdminLayout = (props) => {
    return (
        <div className="container container--admin relative flex-1 !pt-[150px] !pb-7 flex flex-col">
            {props.children}
        </div>
    )
}

export default AdminLayout;