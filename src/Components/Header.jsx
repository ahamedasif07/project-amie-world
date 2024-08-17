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



const Header = () => {
  
   
    return (
       
        <header className='pt-8'>
          <div className="carousel  max-h-[600px] w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src={sliderOne}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src={sliderTwo}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src={sliderThree}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src={slaiderFour}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
           <div>
           <marquee className=' '  behavior="scroll" direction="left">
          <div className='flex gap-24 mt-2'> 
          <img className="mr-10 w-20 h-20" src={naruto} alt=""  />
          <img className="mr-10 w-20 h-20" src={onepiece} alt="" />
          <img className="mr-10 w-20 h-20 " src={dragonball} alt="" />
          <img className="mr-10 w-20 h-20" src={aot} alt="" />
          <img className="mr-10 w-20 h-20" src={bletch} alt="" />
          <img className="mr-10 w-20 h-20" src={demonSlayer} alt="" />
          </div>
</marquee>
          
           </div>
           <div>
           <h2 className='text-4xl  text-black-600 font-bold text-center px-4 pt-10'>Wellcome to anime World</h2>
            <p className='text-gray-600 text-center pb-6 px-4 pt-4'>Welcome to Anime World! Dive into a world of captivating stories and <br /> unforgettable characters, where every genre comes alive and every fan finds their place.</p>
           
           </div>
        
        </header>
    );
};

export default Header;