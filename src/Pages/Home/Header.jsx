import homeBaner from '../../assets/images/homeBaner.jpg'



const Header = () => {
   
    return (
       
        <header className='pt-8'>
           <div className='sm:h-[450px]  transition md:h-[600px]  bg-cover mx-auto bg-no-repeat container ' style={{ backgroundImage: `url(${homeBaner})`}}>
           </div>
           <div>
           <h2 className='text-4xl  text-black-600 font-bold text-center pt-10'>Wellcome to anime World</h2>
            <p className='text-gray-600 text-center pb-6 pt-3'>Welcome to Anime World! Dive into a world of captivating stories and <br /> unforgettable characters, where every genre comes alive and every fan finds their place.</p>
           
           </div>
        
        </header>
    );
};

export default Header;