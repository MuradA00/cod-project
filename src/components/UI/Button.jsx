const commonButtonClasses = `trans-200 hover:translate-x-2 min-h-[3.75rem] flex justify-center items-center px-[1.625rem] ms:min-h-[3.25rem] ms:px-3`;
const primaryButtonClasses = `${commonButtonClasses} button-primary`;
const grayButtonClasses = `${commonButtonClasses} button-primary--gray`;
const textClasses = "uppercase text-base text-white font-integral font-bold translate-y-[2px] ms:text-sm min-w-[120px]";

const Button = (props) => {

  const className = props.className;

  if (props.to) {
    return (
      <a href={props.to} className={props.gray ? grayButtonClasses : primaryButtonClasses}>
        <span className={textClasses}>
          {props.text}
        </span>
      </a>
    );
  } else {
    return (
      <button className={props.gray ? grayButtonClasses : primaryButtonClasses }>
        <span className={textClasses}>
          {props.text}
        </span>
      </button>
    );
  }
};

export default Button;
