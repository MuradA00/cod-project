import { useState } from "react";

const AdminPagination = (props) => {

    const [active, setActive] = useState(0);
    const dynamicCl = props.bg;

    const arrow = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M10.06 12L11 11.06L7.94667 8L11 4.94L10.06 4L6.06 8L10.06 12Z"
          fill="white"
        />
      </svg>
    );
    const itemStyle = `bg-[${dynamicCl !== undefined ? dynamicCl : '#47464C'}] w-10 h-10 rounded-[0.5rem] flex justify-center items-center text-center ms:w-8 ms:h-8`;
    const itemTextStyle = 'leading-[100%] font-sans text-[13px] font-semibold text-white ms:text-xs';
  
    return (
      <div className={`flex gap-[6px] mt-auto ml-auto ${props.spaced ? 'pr-5' : 'pr-0' } ms:mr-auto ms:pr-0 ${props.className}`}>
        <button className={itemStyle}>
            <div>
                {arrow}
            </div>
        </button>
        <ul className="flex gap-[6px]">
          {[1, 2, '...', 10].map((item, i) => (
            <li key={i}>
              {item === '...' ? (
                <button className={itemStyle}>
                  <span className={itemTextStyle}>...</span>
                </button>
              ) : (
                <button className={`${itemStyle} ${ active === i ? '!bg-y' : '' }`}>
                  <span className={itemTextStyle}>{item}</span>
                </button>
              )}
            </li>
          ))}
        </ul>
        <button className={itemStyle}>
            <div className="rotate-180">
                {arrow}
            </div>
        </button>
      </div>
    );
  };
  
  export default AdminPagination;
  