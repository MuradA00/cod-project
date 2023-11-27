import varStyle from "../../../style";
import { Navigation } from 'swiper/modules';
import { nextArrow, prevArrow, starIcon } from "../../../assets/images";
import { reviewsData } from "../../../constants/variables";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from "react";
import styles from './Reviews.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Reviews = (props) => {

    const prevButton = useRef(null);
    const nextButton = useRef(null);
    console.log(nextButton)

    return (
        <section className={`overflow-hidden ${props.mb}`}>
            <div className="container">
                <div className="flex items-center justify-between mb-10">
                    <h3 className={`!text-left ${varStyle.heading}`}>
                        REVIEWS OF OUR CLIENTS
                    </h3>
                    <ul className="flex gap-[0.625rem] items-center">
                        {[0,1].map((_, index) => (
                            <button key={index} ref={index !== 0 ? nextButton : prevButton} className={`w-[66px] min-h-[1.625rem] rounded-xl flex justify-center items-center bg-y ${styles.swiperArrow}`}>
                                <img src={index !== 0 ? nextArrow : prevArrow} className="w-5 h-5" alt="buttonArrow" />
                            </button>
                        ))}
                    </ul>               
                </div>
                <div>
                    <Swiper modules={[Navigation]}
                     slidesPerView={'auto'}
                     spaceBetween={20}
                     navigation={{
                        nextEl: nextButton.current,
                        prevEl: prevButton.current
                     }}
                     onSwiper={(swiper) => {
                        swiper.params.navigation.nextEl = nextButton.current
                        swiper.params.navigation.prevEl = prevButton.current
                        swiper.navigation.init();
                     }}                     
                     direction="horizontal" 
                     speed={600} 
                     className="!flex reviews-slider">
                        {
                            reviewsData.map((review) =>  (
                                <SwiperSlide 
                                className="!w-[400px] py-[1.125rem] px-5 bg-dark rounded-[10px] ms:px-4 ms:!w-[350px]" key={review.id}>
                                    <div className="flex flex-col">
                                        <div className="flex-1 mb-5 flex">
                                            <p className=" text-zinc-100 opacity-[.99] flex-1 text-sm leading-[135%] ms:text-xs">
                                                {review.info}
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className="text-white font-hubot uppercase font-black text-base opacity-[.99] ms:text-sm">
                                                    {review.name}
                                                </div>
                                                <div className="text-[13px] font-hubot uppercase font-medium opacity-60">
                                                    {review.role}
                                                </div>
                                            </div>
                                            <div>
                                                <ul className="flex flex-wrap opacity-[.99]">
                                                    {
                                                        review.rate > 0 ? 
                                                        [...Array(review.rate)].map((_, index) => (
                                                            <li key={index}>
                                                                <img className="ms:w-5" src={starIcon} alt="" />
                                                            </li>
                                                        )) :
                                                        'No rating'
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Reviews;
