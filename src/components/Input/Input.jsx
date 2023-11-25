const Input = (props) => {
    return (
        <div className="relative">
            {props.label && (
                <div className="text-sm font-medium text-white mb-3">
                    {props.label}
                </div>
            )}
            <input className={`trans-300 bg-[#2C2B31] min-h-[58px] w-full px-5 rounded-[10px] placeholder:tracking-[-0.02rem] placeholder:text-[#B0B0B0] text-white border-none outline-none ${props.icon ? 'pr-[4rem]' : 'pr-5'}`} type="text" placeholder={props.placeholder} />
            {
                props.icon && (
                    <div className=" absolute right-8 ss:right-5 top-1/2 -translate-y-1/2">
                        <img className="w-[1.625rem] h-[1.625rem]" src={props.icon} alt="input-icon" />
                    </div>
                )
            }
        </div>
    )
}

export default Input;