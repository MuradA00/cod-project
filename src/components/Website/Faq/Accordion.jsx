import React from "react";

const Accordion = (props) => {

    return (
        <ul className="flex flex-col gap-5">
            {
                props.data.map((acc, index) => (
                    <li key={acc.id}>
                        <div className="flex justify-between items-center bg-[#1D1E1E] min-h-[70px] border-solid border-[1px] cursor-pointer trans-200 hover:border-[rgba(255,255,255,.1)] border-[rgba(0,0,0,0.08)] rounded-xl px-8 ms:px-4" onClick={() => props.handleClick(index)}>
                            <div className="text-lg font-semibold text-white ms:text-base">
                                {acc.heading}
                            </div>
                            <div className="flex w-5 h-5 rounded-full border-solid border-[2px] border-white relative flex-shrink-0">
                                <span className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-white w-[10px] h-[2px] block rounded-md absolute"></span>
                                <span className={`top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 trans-300 bg-white w-[2px] h-[10px] block rounded-md absolute ${index === props.data ? 'scale-75 opacity-0' : 'scale-100 opacity-100'}`}></span>
                            </div>
                        </div>
                        {/* eslint-disable-next-line react/prop-types  */}
                        {props.state === index && (
                            <div className={'grid trans-300 px-8 ms:px-4 pt-[1.125rem]'}>
                                <div className="">
                                    <p className="text-base ms:text-sm font-mona leading-[150%] ">
                                        {acc.info}
                                    </p>
                                </div>
                            </div>
                        )}
                    </li>
                ))
            }
        </ul>
    )
}

export default Accordion;