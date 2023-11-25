const CheckBox = (props) => {

  const gap = props.gap;
  const className = props.className;

    if (props.variant === 'default') {

      return (
        <div className={`bg-[#18181D] flex flex-col py-8 px-6 ms:px-4 rounded-2xl mt-6 lg-small:mt-0 border-gradient ${className && className}`} style={{"--bg": "#18181D", "--cl-border": "rgba(255,255,255,.2)", gap: gap && gap}}>
          {props.children}
        </div>
      );
    }
  
    if (props.variant === 'larger') {
      return (
        <div className={`bg-[#18181D] flex flex-col py-10 px-9 ms:py-8 ms:px-4 rounded-2xl border-gradient mt-6 lg-small:mt-0 ${className && className}`} style={{"--bg": "#18181D", "--cl-border": "rgba(255,255,255,.2)", gap: gap && gap}}>
          {props.children}
        </div>
      );
    }
  }
  
  export default CheckBox;
  