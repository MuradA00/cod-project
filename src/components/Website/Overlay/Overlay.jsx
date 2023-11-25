import { bgMainOverlay, cpPriceLarge } from "../../../assets/images";
import style from './Overlay.module.css';

const Overlay = (props) => {
    return (
        <div className={`min-h-[670px] after:absolute after:w-full after:h-[100px] after:bg-black after:blur-lg pointer-events-none after:-bottom-[50px] after:left-0 ms:min-h-[400px] before:w-[500px] before:h-[500px] before:rounded-full before:bg-y before:opacity-[.14] before:blur-[1rem] overflow-hidden before:-left-[145px] before:-top-[95px] ${props.position ? 'relative' : 'absolute top-0 left-0 w-full'}`}>
            <div className={`absolute w-full h-full top-0 left-0 ${style.bgOverlay}`}>
                {/* <img src={bgMainOverlay} className="w-full h-full" alt="grid-image" /> */}
            </div>
            <div className="max-w-[120rem] w-full absolute left-1/2 top-0 -translate-x-1/2 h-full">
                <div className="absolute bottom-0 max-w-[630px] right-0 ms:-right-[100px] ms:opacity-70 ms:max-w-[300px]">
                    <img src={cpPriceLarge} className="w-full" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Overlay;