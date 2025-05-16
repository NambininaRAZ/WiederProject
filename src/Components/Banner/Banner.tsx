import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MoveRight } from 'lucide-react';


const Banner = () => {
    const products = [
        {
            id: 1,
            title:"Best Furniture collection for your interior",
            subTitle:"Welcome",
            image:"/src/assets/Banner/banner_image4.jpg" 

        },
        {
            id: 2,
            title:"Best Furniture collection for your interior",
            subTitle:"Welcome",
            image:"/src/assets/Banner/banner_image1.jpg" 

        },
        {
            id: 3,
            title:"Best Furniture collection for your interior",
            subTitle:"Welcome",
            image:"/src/assets/Banner/banner_image2.jpg" 

        },
        {
            id: 4,
            title:"Best Furniture collection for your interior",
            subTitle:"Welcome",
            image:"/src/assets/Banner/banner_image3.jpg" 

        }
    ]
     const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
  };
  return (
    <div className='lg:container'>
         <div className="slider-container w-full h-full">
            <Slider {...settings}>
                {
                    products?.map((product) => (
                       <div key={product?.id} className="banner_slide_item">

                        {/* Banner Text */}
                            <div className='banner_text'>
                                <p className="text-sm font-inter text-[#272343] uppercase font-normal">{product?.subTitle}</p>
                                <h3 className="text-6xl text-[#272343] font-inter capitalize leading-16 max-w-[631px] w-full font-bold mb-5">{product?.title}</h3>
                                <button className="max-w-[171px] w-full flex items-center justify-center gap-2 h-[52px] bg-[#10b981] rounded-lg capitalize text-white cursor-pointer">Shop now <MoveRight /></button>

                            </div>

                        {/* Banner Image     */}
                            <div className="banner_iamge w-full h-full flex items-center justify-end">
                                <img src={product?.image} alt={product?.title}></img>
                            </div>

                       
                       </div> 
                    ))
                }
                 
            </Slider>
        </div>
    </div>
  )
}

export default Banner
