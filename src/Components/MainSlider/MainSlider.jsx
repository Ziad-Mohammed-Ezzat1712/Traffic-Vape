// eslint-disable-next-line no-unused-vars
import React from 'react'
import slider1 from "../../../images/1.jpg"
import slider2 from "../../../images/2.jpg"
import slider3 from "../../../images/3.jpg"
import slider4 from "../../../images/4.jpg"
import slider5 from "../../../images/5.jpg"
import Slider from 'react-slick'


export default function MainSlider() {

   var settings = {

    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:1000


  };
  return (
    <>

<div className=" w-full  mb-10">


  <div className="w-full  ">
  <Slider {...settings}>



  <img src='//vape.com/cdn/shop/files/vdc-loaded-pod-saltz-60ml-strawberry-jelly-donut_smores_glazed-donuts-web-banner-a6.jpg?v=1751574641&width=1200' alt="" className="w-full h-[505px] slideshow__image "  />
  <img src='//vape.com/cdn/shop/files/vdc-oxbar-astro-maze-50K-disposable-vape-web-banner-a4.jpg?v=1751574535&width=1200' alt="" className="w-full h-[505px]  slideshow__image "  />
  <img src='//vape.com/cdn/shop/files/Saltwave-Festival-NS-Homepage-Mobile-Banner-750x900.png?v=1751392274&width=750' alt="" className="w-full h-[505px] slideshow__image "   />



  </Slider>
  </div>

</div>


    
    </>
  )
}
