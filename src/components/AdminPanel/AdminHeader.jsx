import { adminPanelHeaderLogo, greetingLogo } from "../../assets/images";

const AdminHeader = (props) => {

    const userName = 'Usman Zafar';

    return (
        <div className="py-[2.75rem] fixed top-0 left-0 w-full z-10">
            <div className="container container--admin">
                <div>
                    <div className="flex 3 gap-[70px]">
                        <img src={adminPanelHeaderLogo} className="w-[50px]" alt="logo" />
                        <div>
                            <div className="flex items-center gap-1">
                                <span className="text-zinc-300 text-sm">Welcome Back,</span>
                                <img src={greetingLogo} alt="greeting-icon" />
                            </div>
                            <div className="text-[1.75rem] font-bold text-white">
                                {userName}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminHeader;