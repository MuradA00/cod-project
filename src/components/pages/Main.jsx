import Home from "../Website/Home/Home.jsx";
import Features from "../Website/Features/Features.jsx";
import Services from "../Website/Services/Services.jsx";
import Video from "../../components/Video/Video.jsx";
import Slider from "../Website/Slider/Slider.jsx";

const Main = () => {

    return (
        <main>
            <Home/>
            <Features />
            <Services/>
            <Video/>
            <Slider />
        </main>
    )
}

export default Main;