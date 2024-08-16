import naruto from '../../src/assets/icons/image.png'
import onepiece from '../../src/assets/icons/image (2).png'
import demonSlayer from '../../src/assets/icons/image (3).png'
import aot from '../../src/assets/icons/image (4).png'
import dragonball from '../../src/assets/icons/image (1).png'
import bletch from '../../src/assets/icons/image (5).png'
import homeBaner from '../../src/assets/images/homeBaner.jpg'



const Header = () => {
  
   
    return (
       
        <header className='pt-8'>
           <div>

        

            <img className='sm:h-96  transition md:h-[600px]  bg-cover mx-auto bg-no-repeat container ' src={homeBaner} alt="" />
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
           <h2 className='text-4xl  text-black-600 font-bold text-center pt-10'>Wellcome to anime World</h2>
            <p className='text-gray-600 text-center pb-6 pt-3'>Welcome to Anime World! Dive into a world of captivating stories and <br /> unforgettable characters, where every genre comes alive and every fan finds their place.</p>
           
           </div>
        
        </header>
    );
};

export default Header;