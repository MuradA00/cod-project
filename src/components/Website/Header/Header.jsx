import { headerLogo, textFrame, topRect, bottomRect, busketIcon, adminProfileIcon, userImage, burgerIcon } from "../../../assets/images";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Search from "../../UI/Search/Search";

const Header = (props) => {

    const handleDisplay = () => {
        props.handleMenu();
    }

    const headerButtonStyle = 'w-[46px] h-[46px] rounded-full flex items-center justify-center lg-small:w-8 lg-small:h-8'

    const [scrollState, setScrollState] = useState(false);
    let initialScrollPosition = window.scrollY;

    console.log(initialScrollPosition)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            console.log('xleb')
            
        })
    })

    return (
        <header className={`trans-300 fixed top-[2.5rem] lg:top-[1rem] left-0 w-full z-10 ${scrollState ? '-translate-y-[calc(100%+2.75rem)]' : 'translate-y-0'}`}>
            <div className="relative container m-[0.375rem]">
                <div className="absolute w-[calc(100%-1.125rem)] pointer-events-none -top-[5px] h-5 left-1/2 -translate-x-1/2">
                    <img src={topRect} className="w-full" alt="" />
                </div>
                <div className="absolute w-[calc(100%-1.125rem)] pointer-events-none -bottom-[5px] h-5 left-1/2 -translate-x-1/2">
                    <img src={bottomRect} className="w-full" alt="" />
                </div>
                <div className="bg-[rgba(255,255,255,.08)] border-[rgba(255,191,132,.15)] border-[1px] border-solid backdrop-blur-[.5rem] rounded w-full home-text">
                    <div className="p-1 flex justify-between items-center">
                        <a href="/" className="w-[90px] h-[5rem] ms:w-[60px] ms:h-[48px]">
                            <img src={headerLogo} className="ms:h-12" alt="headerLogo" />
                        </a>
                        <Navbar/>
                        <div className="flex items-center gap-4 lg-small:gap-3">
                            <Search/>
                            <Link className={`${headerButtonStyle} border-gradient`} style={{'--cl-border': 'rgba(255,255,255,.5)', '--bg': '#383838'}}>
                                <img src={busketIcon} className="lg-small:w-4 lg-small:h-4" alt="button-icon" />
                            </Link>
                            <button className={`${headerButtonStyle}`}>
                                <img className="rounded-full h-full object-cover" src={userImage} alt="" />
                            </button>
                            <button className="w-6 h-6 items-center justify-center mr-3 hidden lg-small:flex" onClick={() => handleDisplay()}>
                                <img src={burgerIcon} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;