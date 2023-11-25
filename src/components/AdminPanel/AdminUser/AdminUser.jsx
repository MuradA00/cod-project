import { adminProfileIcon, userImage } from "../../../assets/images";

const AdminUser = (props) => {
    
    const isLogged = props.state;
    const userIcon = props.userIcon;
    const userName = props.userName;
    const containerStyle = 'border-dashed border-[#3F3E44] border-[1px] rounded-[3rem] min-h-[52px] flex justify-center items-center gap-[10px] pl-[10px] pr-5'

    return (
        <div>
           {isLogged ? (
                <div className="flex items-center gap-4">
                    <span className="text-zinc-300 text-[13px]">Assigned to</span>
                    <div className={containerStyle}>
                        <div>
                            <img className="w-[2.375rem] h-[2.375rem] rounded-full" src={userIcon != null ? userIcon : userImage} alt="user-icon" />
                        </div>
                        <span className="text-sm tracking-[-0.28px] font-bold max-w-[4rem] block overflow-hidden text-ellipsis whitespace-nowrap">
                            {userName != null ? userName : 'Asfandy...'}
                        </span>
                    </div>
                </div>
           ) : (
            <div className={`${containerStyle} !px-[14px] !min-h-[44px]`}>
                <img src={adminProfileIcon} alt="user-icon" />
                <span className="text-[13px] text-zinc-300 leading-[100%]">No assignee</span>
            </div>
           )}
        </div>
    )
}

export default AdminUser;