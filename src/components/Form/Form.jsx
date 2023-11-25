import { useRef, useState } from "react";
import { formData } from "../../constants/variables";
import Input from "../Input/Input";
import Button from "../UI/Button";
import { barSvg } from "../../assets/images";
import { Link } from "react-router-dom";

const Form = () => {

    const container = useRef(null);

    const [order, setOrder] = useState(0);

    const scrollToTop = () => {
        window.scrollTo({
            behavior: 'smooth',
            top: container.current.offsetTop,
        })
    }

    const handleOrder = () => {
        scrollToTop();
        setOrder(prev => {
            if (prev < formData.length - 1) {
                return prev + 1;
              } else {
                return prev;
              }
        });
    }

    let barFill = '#fff';

    const stepsOrder = [
        {
            id: 0,
            name: 'Information',
        },
        {
            id: 1,
            name: 'Payment',
        },
        {
            id: 2,
            name: 'Confirmation',
        }
    ]

    const barSvg = <svg width="172" height="4" viewBox="0 0 172 4" fill={barFill} xmlns="http://www.w3.org/2000/svg">
    <rect width="126" height="4" rx="2" fill={barFill}/>
    <rect x="129" width="18" height="4" rx="2" fill={barFill}/>
    <rect x="150" width="12" height="4" rx="2" fill={barFill}/>
    <rect x="165" width="7" height="4" rx="2" fill={barFill}/>
    </svg>

    const borderStyle = 'border-b-[2px] border-solid border-gray-600 mb-[1.875rem] pb-[1.875rem]';

    return (
        <div ref={container}>
            <div>
                <div className="mb-5 text-[1.875rem] ms:text-base font-bold">
                    Checkout
                </div>
                <div className={borderStyle}>
                    <ul className="flex gap-[7px]">
                        {stepsOrder.map((step, index) => (
                            <li key={step.id}>
                                <div className="flex items-center mb-2">
                                    <div className={`w-7 h-7 rounded-full flex justify-center items-center ${index === order ? 'bg-[#FF6A49]' : 'bg-zinc-300'}`}>
                                        <span className={`text-sm font-bold ${index === order ? 'text-white' : 'text-black'}`}>
                                            {step.id + 1}
                                        </span>
                                    </div>
                                {
                                    step.id !== stepsOrder.length - 1 && (
                                        <div className=" -translate-x-[3px]">
                                            <svg className={index === order ? 'fill-[#FF6A49]' : 'fill-[#fff]'} width="172" height="4" viewBox="0 0 172 4" fill="" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="126" height="4" rx="2" fill=""/>
                                            <rect x="129" width="18" height="4" rx="2" fill=""/>
                                            <rect x="150" width="12" height="4" rx="2" fill=""/>
                                            <rect x="165" width="7" height="4" rx="2" fill=""/>
                                            </svg>
                                        </div>
                                    )
                                }
                                </div>
                                <div className={`text-sm font-bold tracking-[-0.0175rem] text-[#D4D4D8] ${index === order ? 'text-[#FF6A49]' : ''}`}>
                                    {step.name}
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div>
                    </div>
                </div>
                <div>
                    {
                        formData.map((data, index) => (
                            <div key={data.id} className="mb-10">
                                <div>
                                    {
                                        order === index ? 
                                        data.cells && data.cells.map((cell, index) => (
                                            <div key={cell.id} className={`${index !== data.cells.length - 1 ? borderStyle : ''}`}>
                                                <div className="">
                                                    <span className="text-[1.375rem] font-extrabold mb-5 block">{cell.heading}</span>
                                                    {cell.cards && (
                                                        <ul className="grid grid-cols-[repeat(auto-fill,minmax(110px,1fr))] items-center gap-3">
                                                            {cell.cards.map((card, _) => (
                                                                <li className="bg-[#F7F7F7] border-solid border-[1px] border-[#F2DBAE] rounded-lg min-h-[3.75rem] flex justify-center items-center" key={card.id}>
                                                                    <img className="h-6 max-w-[4rem] object-contain block w-full" src={card.icon} alt="" />
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </div>
                                                <ul>
                                                    {
                                                        cell.labels && cell.labels.map((label, _) => (
                                                            <li key={label.id}>
                                                                {
                                                                    <div className={`${label.headers.length > 1 ? 'grid grid-cols-2 items-end gap-5' : 'block'} ${label.id !== cell.labels.length - 1 ? 'mb-6' : 'mb-0'}`}>
                                                                        {label.headers.map((header, index) => (
                                                                            <div key={index}>
                                                                                <span className="block mb-3 text-sm font-medium">{header}</span>
                                                                                <Input/>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                }
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        )) : null
                                    }
                                    {
                                        data.title && index === order &&  (
                                            <div className="min-h-[470px] flex flex-col justify-center items-center text-center">
                                                <div className="mb-[4.375rem] max-w-[348px] flex flex-col gap-[0.625rem]">
                                                    <div className="flex justify-center items-center">
                                                        <img src={data.icon} alt="" />
                                                    </div>
                                                    <div className="text-[1.875rem] font-bold leading-[100%]">
                                                        {data.title}
                                                    </div>
                                                    <div className="text-[#EFEFEF]">
                                                        {data.text}
                                                    </div>
                                                </div>
                                                <div>
                                                <Button text={'back to home'} to={data.url} />
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
                {
                    order !== formData.length - 1 && (
                        <button className="trans-200 hover:translate-x-2 button-primary min-h-[3.75rem] flex justify-center items-center px-[1.625rem] ms:min-h-[3.25rem] ms:px-3 ms:m-auto ms:min-w-[200px]" onClick={ handleOrder }>
                        <span className="uppercase text-base text-white font-integral font-bold translate-y-[2px] ms:text-sm">
                            Continue
                        </span>
                        </button>
                    ) 
                }
            </div>
        </div>
    )    
}

export default Form;