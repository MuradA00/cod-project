import Overlay from "../Website/Overlay/Overlay.jsx";
import Check from "../Check/Check";
import Box from "../Box/Box";
import varStyle from "../../style";
import style from '../Website/Services/Services.module.css';
import { boostData, serviceCards } from "../../constants/variables";
import ServiceCard from "../Website/Services/ServiceCard";
import CheckBox from "../Website/CheckBox/CheckBox";
import { useState } from "react";
import Section from "../Website/Section/Section";
import Options from "../Options/Options";
import Tabs from "../Website/Tabs/Tabs";
import Input from "../Input/Input.jsx";
import SliderInput from "../UI/Slider/SliderInput.jsx";
import DropdownComponent from "../UI/Dropdown/DropdownComponent.jsx";

const Page2 = () => {

    const tableRowStyle = 'py-4 px-5 text-[#EFEFEF] text-sm ms:text-xs ms:px-2';

    const [activeButtons, setActiveButtons] = useState(Array(boostData.length));

    const handleButtons = (blockIndex, buttonIndex) => {
        const updatedActiveButtons = [...activeButtons];
        updatedActiveButtons[blockIndex] = buttonIndex;

        buttonIndex === 0 ? updatedActiveButtons[blockIndex] = 0 : ''
        setActiveButtons(updatedActiveButtons); 
    };

    return (
        <main className="padding-container padding-container--smaller">
            <Overlay/>
            <section className="mb-20">
                <div className="container relative">
                    <Section/>
                    <Box>
                        <div className="grid grid-cols-[0.325fr_0.675fr] gap-6 lg-small:flex lg-small:flex-col">
                            <CheckBox variant="default" className="!mt-0">
                                <div className="flex flex-col gap-[30px]">
                                    {
                                        boostData.map((data, blockIndex) => (
                                            <div key={data.id}>
                                                <div className="text-sm uppercase font-bold mb-[14px]">
                                                    {data.header && data.header}
                                                </div>
                                                <div>
                                                    {data.dropdown && <DropdownComponent className={'border-solid !border-gray-600 border-[1px]'} defaultOption={'1-30'} />}
                                                </div>
                                                <div className={`flex flex-wrap gap-3 ${data.direction === 'col' ? 'flex-col items-start' : 'flex-row'}`}>
                                                    {
                                                        data.buttons && data.buttons.map((btn, buttonIndex) => (
                                                            <button key={btn.id} className={`trans-200 min-h-[38px] flex justify-center text-center items-center px-5 rounded-[2.75rem] ${buttonIndex === activeButtons[blockIndex] ? 'bg-y' : 'bg-black'}`} onClick={() => handleButtons(blockIndex, buttonIndex)}>
                                                                <span className="text-sm text-[#EFEFEF] font-bold">
                                                                    {btn.inner}
                                                                </span>
                                                            </button>
                                                        ))
                                                    }
                                                    {
                                                        data.options && data.options.map((option, index) => (
                                                            <div key={option.id} className="flex gap-3 items-center">
                                                                <img className="w-5 h-5" src={option.icon} alt="option-icon" />
                                                                <span className="text-sm font-bold">{option.text}</span>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </CheckBox>
                            <div className="flex flex-col pt-[1.75rem]">
                                <div className="flex items-end gap-[18px] mb-10">
                                    <div className="flex-1">
                                        <Input label={'Your SR'} placeholder={'0'} />
                                    </div>
                                    <span className="block mb-4 h-fit">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <g clipPath="url(#clip0_303_7327)">
                                                <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M13 18L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M13 6L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_303_7327">
                                                <rect width="24" height="24" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>
                                    <div className="flex-1">
                                        <Input label={'Desired SR'} placeholder={'900'} />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-5 ms:gap-3 lg-small:mb-10">
                                <ul className="flex justify-between">
                                        {
                                            Array.from(['BRONZE','SILVER','GOLD', 'PLATINUM','DIAMOND','IRIDESCENT','GUARANTEED_TOP_250']).map((item, index) => (
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
                                    <ul className="flex justify-between ms:justify-between ms:gap-1 px-[1.75rem] ms:px-4">
                                        {
                                            Array.from([0,900,2100,3600,7500,10000,14000]).map((item, index) => (
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
                                <div className="mt-auto flex justify-start">
                                    <Options/>
                                </div>
                            </div>
                        </div>
                    </Box>
                </div>
            </section>
            <section className="mb-20">
                <div className="container">
                    <Tabs/>
                    <div className="mt-9">
                        <div className="flex flex-col gap-9">
                            <div>
                            <div className="text-base font-sans font-extrabold text-white mb-4">
                                ETA WITH EXECUTION OPTIONS:
                            </div>
                            <div className="rounded-2xl overflow-hidden w-fit">
                                <table>
                                    <thead>
                                        <tr className="bg-dark">
                                            {['Boost Method', 'Normal', 'Express', 'Super Express'].map((head, index) => (
                                                <td key={index} className={`text-[15px] font-bold zinc-100 py-4 px-5 ms:text-xs ms:px-2 ${index === 0 ? 'text-center' : ''}`}>
                                                    {head}
                                                </td>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-[#18181D]">
                                            {['Piloted', '1 hour 20 minutes per 100 SR', '1 hour 20 minutes per 100 SR', '1 hour per 100 SR'].map((row, index) => (
                                                <td key={index} className={`${tableRowStyle} ${index === 0 ? 'text-center' : ''}`}>
                                                    {row}
                                                </td>
                                            ))}
                                        </tr>
                                        <tr className="bg-dark">
                                            {['Sole Play', '1 hour 20 minutes per 100 SR', '1 hour 20 minutes per 100 SR', '1 hour per 100 SR'].map((row, index) => (
                                                <td key={index} className={`${tableRowStyle} ${index === 0 ? 'text-center' : ''}`}>
                                                    {row}
                                                </td>
                                            ))}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            </div>
                            <div className="">
                                <div className="text-base font-sans font-extrabold text-white mb-4">
                                    ETA WITH EXECUTION OPTIONS:
                                </div>
                                <div className="rounded-2xl overflow-hidden w-fit">
                                    <table>
                                        <thead>
                                            <tr className="bg-dark">
                                                {['Rank', 'Reward'].map((head, index) => (
                                                    <td key={index} className={`text-[15px] font-bold zinc-100 py-4 px-5 ms:text-xs ms:px-2`}>
                                                        {head}
                                                    </td>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="bg-[#18181D]">
                                                {['5', '“Ranked Competitor” Operator Skin Pack, one “Home” version and one “Away” version awarded for both the Male and Female CDL Operator'].map((row, index) => (
                                                    <td key={index} className={`${tableRowStyle} ${index === 0 ? 'text-center' : ''}`}>
                                                        {row}
                                                    </td>
                                                ))}
                                            </tr>
                                            <tr className="bg-[#18181D]">
                                                {['15', '“Ranked Competitor” Operator Skin Pack, one “Home” version and one “Away” version awarded for both the Male and Female CDL Operator'].map((row, index) => (
                                                    <td key={index} className={`${tableRowStyle} ${index === 0 ? 'text-center' : ''}`}>
                                                        {row}
                                                    </td>
                                                ))}
                                            </tr>
                                            <tr className="bg-[#18181D]">
                                                {['30', '“Ranked Competitor” Operator Skin Pack, one “Home” version and one “Away” version awarded for both the Male and Female CDL Operator'].map((row, index) => (
                                                    <td key={index} className={`${tableRowStyle} ${index === 0 ? 'text-center' : ''}`}>
                                                        {row}
                                                    </td>
                                                ))}
                                            </tr>
                                            <tr className="bg-[#18181D]">
                                                {['40', '“Ranked Competitor” Operator Skin Pack, one “Home” version and one “Away” version awarded for both the Male and Female CDL Operator'].map((row, index) => (
                                                    <td key={index} className={`${tableRowStyle} ${index === 0 ? 'text-center' : ''}`}>
                                                        {row}
                                                    </td>
                                                ))}
                                            </tr>
                                            <tr className="bg-[#18181D]">
                                                {['50', '“Ranked Competitor” Operator Skin Pack, one “Home” version and one “Away” version awarded for both the Male and Female CDL Operator'].map((row, index) => (
                                                    <td key={index} className={`${tableRowStyle} ${index === 0 ? 'text-center' : ''}`}>
                                                        {row}
                                                    </td>
                                                ))}
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <h2 className={`${varStyle.heading} !text-left mb-10`}>
                        POPULAR PRODUCTS
                    </h2>
                    <ul className="grid grid-cols-[repeat(auto-fill,minmax(290px,1fr))] gap-4">
                        {serviceCards.map((card) => (
                            <li key={card.id} className={`${style.bgCard}`}>
                                <ServiceCard icon={card.icon} name={card.name} price={card.price} />
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </main>
    )
}

export default Page2;
