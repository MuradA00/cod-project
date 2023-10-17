import React from "react";

const Button = ({text}) => (
    <button className="trans-200 hover:translate-x-2 button-primary min-h-[3.75rem] flex justify-center items-center px-[1.625rem] ms:min-h-[3.25rem]">
        <span className="uppercase text-base text-white font-integral font-bold translate-y-[2px]">
            {text}
        </span>
    </button>
)

export default Button;