import { sliderData } from '../../constants/variables';
import { Swiper, SwiperSlide } from 'swiper/react';
import varStyle from '../../style';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { starIcon } from '../../assets/images';

const Slider = () => {

    // const swiperParams = {
    //     slidesPerView: 'auto',
    //     spaceBetween: 16,
    //     direction: 'horizontal',
    //     centeredSlides: true,
    //     initialSlide: Math.floor(sliderData.length  / 2),
    //     speed: 600
    // }

    return (
        <section className=' pt-[72px] pb-28 bg-dark ms:pb-20 ms:pt-12 slider'>
            <div className="container">
                <h5 className={`text-center ${varStyle.headingLarge}`}>
                    Testimonials
                </h5>
            </div>
            <Swiper className='!flex !pt-28 !pb-28' slidesPerView={'auto'} spaceBetween={16} direction='horizontal' centeredSlides={true} speed={600} initialSlide={Math.floor(sliderData.length / 2)}> 
                {
                    sliderData.map((slide, index) => (
                        <SwiperSlide  key={slide.id} className='trans-300 !w-[340px] min-h-[550px] ss:!w-[260px] ss:min-h-[440px] bg-black bg-cover bg-no-repeat bg-center flex items-end py-[1.75rem] px-6 ms:px-4' style={{backgroundImage:`url(${slide.bg})`}}>
                            <div className='trans-300 relative flex flex-col gap-4 z-[1] slider-info'>
                                <div className='trans-300 font-hubot text-base uppercase font-black text-white leading-[100%]'>
                                    {slide.name}
                                </div>
                                <div>
                                    <p className='line-clamp-5 leading-[126%] text-[15px] font-normal font-mona'>
                                        {slide.info}
                                    </p>
                                </div>
                                <div>
                                    <ul className='flex items-center'>
                                        {
                                            slide.rate > 0 ?
                                            [...Array(slide.rate)].map((_, index) => (                                            
                                                <li key={index}>
                                                    <img src={starIcon} alt="" />
                                                </li>
                                            )) : 
                                            'No rating'
                                        }
                                    </ul>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>   
        </section>
    )
}

export default Slider;