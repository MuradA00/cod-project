import { bgVideo, playButton } from "../../assets/images";
import {useState} from "react";

const Video = () => {
   
    const [displayVideo, setDisplayVideo] = useState(false);

    const handleDisplayVideo = () => {
        setDisplayVideo(prev => !prev);
        console.log(displayVideo);
    }
    
    return (
        <section className="py-24 ms:py-16">
            <div className="container">
                <div className="min-h-[700px] lg:min-h-[500px] relative rounded-2xl overflow-hidden">
                    <button className={`w-[62px] h-[62px] rounded-full bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 trans-300 hover:scale-110 flex justify-center items-center z-[1] ${displayVideo ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}  onClick={handleDisplayVideo}>
                        <img src={playButton} className="w-[26px] h-[26px] translate-x-[3px]" alt="play-button" />
                    </button>
                    <div className="absolute w-full h-full trans-300 top-0 left-0 before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-video-overlay-gradient before:pointer-events-none bg-center bg-cover" style={{backgroundImage: `url(${bgVideo})`}}>
                    </div>
                    <div className={`absolute w-full h-full top-0 left-0 pointer-events-none trans-300 ${displayVideo ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/TPACABQTHvM" title="TypeScript in React - COMPLETE Tutorial (Crash Course)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Video;