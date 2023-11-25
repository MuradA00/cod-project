const Box = (props) => {

    const border = '--bg: red; --cl-border: #fff;'

    return (
        <div className="rounded-[28px] border-solid bg-dark relative ms:rounded-2xl border-gradient border-gradient" style={{"--bg": "#1F1E25", "--cl-border": "rgba(255,255,255,.5)"}}>
            <div className=" py-11 px-9 ms:py-7 ms:px-4">
                {props.children}
            </div>
        </div>
    )
}

export default Box;