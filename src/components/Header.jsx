import { headerLogo, textFrame, topRect, bottomRect } from "../assets/images";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="fixed lg:top-[1rem] top-[2.5rem] left-0 w-full z-10">
            <div className="relative container m-[0.375rem]">
                <div className="absolute w-[calc(100%-1.125rem)] pointer-events-none -top-[5px] h-5 left-1/2 -translate-x-1/2">
                    <img src={topRect} className="w-full" alt="" />
                </div>
                <div className="absolute w-[calc(100%-1.125rem)] pointer-events-none -bottom-[5px] h-5 left-1/2 -translate-x-1/2">
                    <img src={bottomRect} className="w-full" alt="" />
                </div>
                <div className="bg-[rgba(255,255,255,.08)] border-[rgba(255,191,132,.15)] border-[1px] border-solid backdrop-blur-[.5rem] rounded w-full home-text">
                    <div className="p-1 grid grid-cols-[5.625rem_1fr_auto]">
                        <a href="/" className="width-[90px] h-[5rem]">
                            <img src={headerLogo} alt="headerLogo" />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;