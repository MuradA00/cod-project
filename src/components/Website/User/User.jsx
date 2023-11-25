import { useState } from "react";
import { largeFb, largeInst, largeTwitter, userImage, editIcon, whiteCheckIcon } from "../../../assets/images";

const User = () => {

    const [edit, setEdit] = useState(false);
    const [input, setInput] = useState('James Bond');

    const handleInputName = value => {
        setInput(value);

        edit && input === null ? 'No Name' : '';
    }

    const userStyle = 'text-[1.75rem] ms:text-2xl font-extrabold tracking-[-.56px] leading-[120%]';

    const userData = {
        name: input,
        email: 'Jamesbond733@gmail.com',
        icon: userImage,
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        links: [
            {
                id: 0,
                icon: largeFb,
                url: '#'
            },
            {
                id: 1,
                icon: largeTwitter,
                url: '#'
            },
            {
                id: 2,
                icon: largeInst,
                url: '#'
            }
        ]
    }

    return (
        <div>
            <div className="pb-10 mb-10 ms:pb-6 ms:mb-6 border-b-[1px] border-solid border-[#4B5563]">
                <div className="flex flex-col gap-8 ss:gap-5">
                    <div className="relative flex justify-center items-center w-[180px] h-[180px] m-auto ss:w-[130px] ss:h-[130px]">
                            <div className="w-[170px] h-[170px] ss:w-[120px] ss:h-[120px] rounded-full overflow-hidden">
                                <img src={userData.icon} alt="user-icon" />
                            </div>
                            <button onClick={() => {setEdit(prev => !prev)}} className="w-[3rem] h-[3rem] flex justify-center items-center absolute -bottom-[0px] right-2 bg-[#2C2B31] rounded-[10px] ss:w-[2.5rem] ss:h-[2.5rem] ss:right-0 ss:bottom-0">
                                <img src={edit ? whiteCheckIcon : editIcon} className="w-6 h-6 ss:w-4 ss:h-4 block" alt="edit-icon" />
                            </button>
                    </div>
                    <div className="text-center flex flex-col gap-1">
                        {
                            edit ? (
                                <input onInput={(e) => handleInputName(e.target.value)} placeholder="Enter name" className={`${userStyle} bg-transparent text-center focus-visible:border-none outline-none`} />
                            ) : (
                                <div className={`${userStyle} m-auto max-w-[260px] overflow-hidden whitespace-nowrap overflow-ellipsis`}>
                                    {userData.name}
                                </div>
                            )
                        }
                        <a href={`emailto: ${userData.email}`} className="text-[#C3C3C3] text-[13px]">
                            {userData.email}
                        </a>
                    </div>
                    <div className="flex justify-center items-center">
                        <ul className="flex gap-7 ss:gap-3">
                            {userData.links.map((link, _) => (
                                <li key={link.id}>
                                    <a href={link.url} rel="noreferrer" target="_blank">
                                        <img className="w-[60px] h-[60px] ss:w-10 ss:h-10" src={link.icon} alt="icon" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                    <div className="text-base font-extrabold mb-4">
                        About 
                    </div>
                    <div>
                        <p className="text-base ss:text-sm leading-[168%] text-[#EFEFEF]">
                            {userData.info}
                        </p>
                    </div>
                </div>
        </div>
    )
}

export default User;