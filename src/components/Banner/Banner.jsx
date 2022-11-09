import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import './banner.css';
import 'swiper/css';

const Banner = () => {
  return (
    <div className='container'>
      <Swiper
        modules={[Navigation, EffectFade]}
        navigation
        effect
        speed={800}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className='swiperslide'>
          <div className='carousel_img_wrapper'>
            <img
              className='carousel_img'
              src='images/banner1.jpg'
              alt='First slide'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiperslide'>
          <div className='carousel_img_wrapper'>
            <img
              className='carousel_img'
              src='images/banner2.jpg'
              alt='First slide'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiperslide'>
          <div className='carousel_img_wrapper'>
            <img
              className='carousel_img'
              src='images/banner3.jpg'
              alt='First slide'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiperslide'>
          <div className='carousel_img_wrapper'>
            <img
              className='carousel_img'
              src='images/banner4.jpg'
              alt='First slide'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiperslide'>
          <div className='carousel_img_wrapper'>
            <img
              className='carousel_img'
              src='images/banner5.jpg'
              alt='First slide'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiperslide'>
          <div className='carousel_img_wrapper'>
            <img
              className='carousel_img'
              src='images/banner6.jpg'
              alt='First slide'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiperslide'>
          <div className='carousel_img_wrapper'>
            <img
              className='carousel_img'
              src='images/banner7.jpg'
              alt='First slide'
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
