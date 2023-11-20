import React from 'react';
import Slider from 'react-slick';
import './style.css'
import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// slick-theme.css for doted carousel

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    // slidesToShow count should be less than no of images
    slidesToScroll: 1,
    // count of slides that moves
    centerMode: true,
    centerPadding: '0',
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div className="carousel-item">
          <img src="https://assets.hongkiat.com/uploads/nature-photography/autumn-poolside.jpg" alt="Image 1" />
        </div>
        <div className="carousel-item">
          <img src="https://img.fixthephoto.com/blog/images/gallery/news_preview_mob_image__preview_579.jpg" alt="Image 2" />
        </div>
        <div className="carousel-item">
          <img src="https://shotkit.com/wp-content/uploads/2021/01/nature-photography.jpg" alt="Image 3" />
        </div>
        <div className="carousel-item">
          <img src="/image/b4.jpg" alt="nnn" />
        </div>
        {/* <img src="/logo192.png" alt="ll" /> */}
        <div className="carousel-item">
          <img src="/image/a5.jpg" alt="" />
        </div>
      </Slider>

    </div>
  );
};

export default Carousel;