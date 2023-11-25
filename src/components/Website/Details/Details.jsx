import Box from "../../Box/Box";
import { Link } from "react-router-dom";
import Overlay from "../.../../Overlay/Overlay.jsx";
import varStyle from "../../../style";
import { links, req, rows } from "../../../constants/variables.js";
import { breadcrumbsArrrow, bronzeBadge, crossIcon, fragmentIcon, silverBadge, whiteCheckIcon, lineIcon } from "../../../assets/images";
import CheckBox from "../CheckBox/CheckBox"
import SliderInput from "../../UI/Slider/SliderInput.jsx";

const Details = () => {

    let state = 'completed'; 

    const UserData = {
        order: 3453,
        customerName: 'Usman Zafar'
    }

    return (
        <main className="padding-container">
            <Overlay/>
            <section>
                <div className="container">
                    <h1 className={`${varStyle.heading} !text-left mb-10`}>
                        order details
                    </h1>
                    <Box>
                        <ul className="flex gap-2 mb-4">
                            {
                                links.map((link) => (
                                    <li key={link.id}>
                                        <span key={link.id} className="flex gap-2 items-center">
                                            <Link to={link.url} className={`text-sm font-medium hover:underline ${link.id !== links.length - 1 ? 'text-[#787C87]' : 'text-white'}`}>
                                                {link.name}
                                            </Link>
                                            {
                                                link.id !== links.length - 1 && 
                                                (
                                                    <img src={breadcrumbsArrrow} alt="arrow-icon" />
                                                )
                                            }
                                        </span>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className="flex justify-between items-center mb-5">
                            <div className="flex items-center gap-3">
                                <img src={fragmentIcon} alt="fragment-icon" />
                                <div>
                                    <span className="text-[1.875rem] ms:text-2xl font-bold font-hubot block leading-[100%]">#{UserData.order}</span>
                                    <span className="text-zinc-400 text-base ms:text-sm">{UserData.customerName}</span>
                                </div>
                            </div>
                            <div className={`${state === 'completed' ? 'bg-[#2FB454] ' : 'bg-red-600'} min-h-[2.875rem] px-5 flex justify-center text-center items-center gap-1 rounded-[40px]`}>
                                <img className="w-6 h-6 block" src={state === 'completed' ? whiteCheckIcon : crossIcon} alt="" />
                                <span className="text-sm trackind-[-.28px] font-bold text-white font-mona leading-[100%]">
                                    {state === 'completed' ? 'Completed' : 'Not completed'}
                                </span>
                            </div>
                        </div>
                        <div className="grid grid-cols-[0.53fr,0.47fr] gap-10 lg:flex lg:flex-col">
                            <div>
                                <div></div>
                                <div>
                                    <div className="mb-3 font-bold uppercase font-hubot">
                                        Requirement :
                                    </div>
                                    <ul className="flex flex-col gap-1 pl-[10px]">
                                        {
                                            req.map((item) => (
                                                <li key={item.id}>
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-1 h-1 rounded-full bg-white">
                                                        </div>
                                                        <span className="leading-[150%]">{item.row}</span>
                                                    </div>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                            <CheckBox variant="larger" gap={30}>
                                <div className="flex items-center gap-[30px] ms:gap-2">
                                    <div>
                                        <img className="h-[82px] ms:h-[2.75rem]" src={bronzeBadge} alt="" />
                                    </div>
                                    <div className="flex gap-5 items-center flex-1 justify-center">
                                        <div className="flex-1 h-1 bg-repeat-x bg-center" style={{backgroundImage: `url(${lineIcon})`}}></div>
                                        <span className="text-xl font-bold">TO</span>
                                        <div className="flex-1 h-1 bg-repeat-x bg-center" style={{backgroundImage: `url(${lineIcon})`}}></div>
                                    </div>
                                    <div>
                                        <img className="h-[82px] ms:h-[2.75rem]" src={silverBadge} alt="" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-5 ms:gap-3">
                                <ul className="grid grid-cols-5 gap-8">
                                        {
                                            Array.from(['BRONZE','','', '','SILVER',]).map((item, index) => (
                                                <div key={index} className="flex flex-col-reverse items-center gap-2">
                                                    <span className={`w-0.5 h-2 block ${index !== 0 ? 'bg-[#6A6872]' : 'bg-white'}`}></span>
                                                    <span className={`text-sm font-bold ms:text-[10px] ${index !== 0 ? 'text-[#6A6872]' : 'text-white'}`}>
                                                        {item}
                                                    </span>
                                                </div>
                                            ))
                                        }
                                    </ul>
                                    <SliderInput/>
                                    <ul className="flex gap-[5.625rem] ms:justify-between ms:gap-1 px-[1.75rem] ms:px-4">
                                        {
                                            Array.from([0,300,600,900]).map((item, index) => (
                                                <div key={index} className="flex flex-col items-center gap-2">
                                                    <span className={`w-0.5 h-2 block ${index !== 0 ? 'bg-[#6A6872]' : 'bg-white'}`}></span>
                                                    <span className={`text-sm font-bold ${index !== 0 ? 'text-[#6A6872]' : 'text-white'}`}>
                                                        {item}
                                                    </span>
                                                </div>
                                            ))
                                        }
                                    </ul>
                                </div>
                                <ul>
                                    {
                                        rows.map((row) => (
                                            <li key={row.id} className={`${row.id !== rows.length - 1 ? 'mb-[30px] pb-[30px] border-b-[1px] border-solid border-[rgba(255,2552,255,.1)]' : ''} flex justify-between items-center`}>
                                                <div className="text-[#6A6872] text-sm font-bold">
                                                    {row.header}
                                                </div>
                                                <div className="text-white text-xl font-bold">
                                                    {row.value}
                                                </div>
                                            </li>
                                        ))    
                                    }
                                </ul>
                            </CheckBox>
                        </div>
                    </Box>
                </div>
            </section>
        </main>
    )
}

export default Details;