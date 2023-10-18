import React from "react";
import Home from "../Home/Home";
import Services from "../Services/Services";
import Video from "../Video/Video";
import Slider from "../Slider/Slider";
import Section from "../Section/Section";

const Main = () => {

    return (
        <main>
            <Home/>
            <Section/>
            <Services/>
            <Video/>
            <Slider />
        </main>
    )
}

export default Main;