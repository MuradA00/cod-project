const AdminButton = (props) => {

    const plusIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M5 12H19M12 5V19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>;
    const buttonStyle = `min-h-[52px] px-5 rounded-[50px] flex justify-center gap-[6px] items-center text-center trans-300 ${props.active ? 'bg-y hover:brightness-[90%]' : 'hover:brightness-[120%] bg-[#47464C]'}`;
    const buttonTextStyle = `text-sm tracking-[-.28px] leading-[100%] font-mona ${props.active ? 'text-white font-bold' : 'text-zinc-200 font-medium'}`
    const iconStyle = 'w-5 h-5'

    if (props.to) {
        return (
            <a href={props.to} className={buttonStyle}>
                {props.active ? plusIcon : (<img src={props.icon} className={iconStyle} alt="button-icon" />)} 
                <span className={buttonTextStyle}>
                    {props.text}
                </span>
        </a>
        )
    } else {
        return (
            <button className={buttonStyle}>
                {props.active ? plusIcon : (<img src={props.icon} className={iconStyle} alt="button-icon" />)} 
                <span className={buttonTextStyle}>
                    {props.text}
                </span>
            </button>
        )
    }
}

export default AdminButton;