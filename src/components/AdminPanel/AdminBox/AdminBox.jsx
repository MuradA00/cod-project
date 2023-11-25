const AdminBox = (props) => {
    return (
        <div className={`border-gradient rounded-[10px] py-6 flex flex-col gap-6 flex-grow ${props.px ? 'px-6 ms:px-4' : 'px-0'}`} style={{'--bg': '#1F1E25', '--cl-border': 'rgba(255,255,255,.5)'}}>
            {
                props.children
            }
        </div>
    )
}

export default AdminBox;