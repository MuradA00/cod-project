import Button from "../../UI/Button";
import { emoijiImage, scrollDown } from "../../../assets/images";
import style from './Home.module.css';

const Home = () => {

    return (
        <section className="home relative before:absolute before:w-full before:h-full before:bg-home-gradient before:pointer-events-none">
            <div className="h-[100vh] container relative min-h-[500px] flex items-center">
                <div className="w-full">
                    <div className="max-w-[870px] lg-small:max-w-[600px] pt-[280px] lg:pt-48 ms:pb-10 w-full flex-1">
                        <h1 className="font-black font-hubot text-[52px] ms:!text-2xl lg:text-4xl drop-shadow-[0px_4px_34px_rgba(0,0,0,0.25)] uppercase leading-[110%] mb-6 lg:mb-3">
                            The Fastest and Easiest Way to Rank Up
                        </h1>
                        <div className={`py-5 px-[1.125rem] backdrop-blur-lg mb-10 ms:mb-5 max-w-[524px] ms:py-3 ms:px-2 ${style.homeText}`}>
                            <p className="font-mona text-base ss:text-[13px] leading-[130%] font-normal">
                            Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis mi ut eros tincidunt ultricies. Aliquam porttitor massa ac tincidunt laoreet. Mauris sed velit sed ipsum rhoncus lacinia orem ipsum dolor sit amet, consectetur adipiscing elit. In convallis mi ut eros tincidunt ultricies. Aliquam porttitor massa ac tincidunt laoreet. Mauris sed velit sed ipsum rhoncus lacinia..
                            </p>
                        </div>
                        <Button text={'Get in touch'}/>
                    </div>
                </div>
                <div className="absolute right-4 bottom-[60px] flex gap-2 items-center ms:right-3 ms:bottom-6">
                    <div className="lg:hidden flex">
                        <img className="w-[100px]" src={emoijiImage} alt="emoiji-image" />
                    </div>
                    <span className="font-hubot text-xs font-black text-white uppercase">
                        100+ Players
                    </span>
                    <div className="bg-home-players-bar-gradient absolute -bottom-3 ms:-bottom-1 w-full mt-2 h-[1px]"></div>
                </div>
                <a href="#" className="absolute left-1/2 -translate-x-1/2 bottom-6 flex flex-col items-center gap-2 group ms:hidden">
                    <img src={scrollDown} className="trans-400 group-hover:translate-y-1 ms:h-8" alt="scroll-down-icon" />
                    <span className="ms:hidden group-hover:underline font-integral text-[10px] uppercase text-center">Scroll Down</span>
                </a>
            </div>
        </section>
    )

}

export default Home;