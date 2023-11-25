import React from "react";

const CardState = ({state, stateIcon, stateText}) => {

    const stateBg = `${state === 'red' ? 'bg-[#D34B4E]' : 'bg-y'}`;
    const stateUrl = `${state === 'red' ? stateIcon : ''}`

    return (
        <div className={`absolute right-4 top-4 min-h-[26px] px-2 z-[1] rounded bg-[#D34B4E] flex justify-center items-center gap-1`} >
            <img src={stateIcon} className="w-[0.625rem] h-[0.875rem]" alt="" />
            <span className="text-[10px] font-semibold text-white">
                {stateText}
            </span>
        </div>
    )
}

export default CardState;