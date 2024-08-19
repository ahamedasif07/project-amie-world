import naruto from '../../src/assets/icons/image.png'
import onepiece from '../../src/assets/icons/image (2).png'
import demonSlayer from '../../src/assets/icons/image (3).png'
import aot from '../../src/assets/icons/image (4).png'
import dragonball from '../../src/assets/icons/image (1).png'
import bletch from '../../src/assets/icons/image (5).png'
import slaiderFour from '../../src/assets/images/slider4.jpg'
import sliderOne from '../../src/assets/images/slider1 (2).jpg'
import sliderTwo from '../../src/assets/images/baner4.jpg'
import sliderThree from '../../src/assets/images/slider3.jpg'


import { Carousel } from "@material-tailwind/react";

export function CarouselDefault() {
  return (
    <div>
      <Carousel className="rounded-xl">

        <div className='relative'>
          <div className='bg-[#00000019] flex justify-center items-center absolute w-[100%] h-[100%]'>
            <h1 className='font-extrabold text-[30px] text-white md:text-[50px] shadow-lg'>WELLCOME OUR <br className='md:hidden' /> ANIME WORLLD</h1>


          </div>
          <img
            src={sliderOne}
            alt="image 1"
            className="h-[500px] md:container object-cover"
          />
        </div>
        <img
          src={sliderTwo}
          alt="image 2"
          className="h-[500px] md:container object-cover"
        />
        <img
          src={sliderThree}
          alt="image 3"
          className="h-[500px] md:container object-cover"
        />
        <img
          src={slaiderFour}
          alt="image 3"
          className="h-[500px] md:container object-cover"
        />
      </Carousel>

      <div>
        <marquee className=' ' behavior="scroll" direction="left">
          <div className='flex gap-24 mt-2'>
            <img className="mr-10 w-20 h-20" src={naruto} alt="" />
            <img className="mr-10 w-20 h-20" src={onepiece} alt="" />
            <img className="mr-10 w-20 h-20 " src={dragonball} alt="" />
            <img className="mr-10 w-20 h-20" src={aot} alt="" />
            <img className="mr-10 w-20 h-20" src={bletch} alt="" />
            <img className="mr-10 w-20 h-20" src={demonSlayer} alt="" />
          </div>
        </marquee>

      </div>
    </div>
  );
}