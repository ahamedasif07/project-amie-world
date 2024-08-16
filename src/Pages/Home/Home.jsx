
import imageOne from '../../assets/images/home-page-img1.jpg'
import imageTwo from '../../assets/images/home-page-img2.jpg'
import imageThree from '../../assets/images/home-img3.jpg'
import imageFour from '../../assets/images/home-img4.jpg'
import imageFive from '../../assets/images/home-img5.jpg'
import imageSix from '../../assets/images/home-img6.jpg'
import imageSaven from '../../assets/images/home-img7.jpg'
import imageEight from '../../assets/images/home-img8.jpg'
import imageNine from '../../assets/images/home-img9.jpg'
import Header from '../../Components/Header'

const Home = () => {
    return (
        <div>
               <Header></Header>
            <div className= "grid justify-center">
                   <div className="grid gap-5  mx-auto lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center  justify-center">
                   <img className="w-72  transform p-4 hover:scale-105 transition h-[300px] rounded-sm hover:bg-gray-200" src={imageOne} alt=""  />
                 <img className="w-72   transform p-4 hover:scale-105 transition h-[300px] rounded-sm hover:bg-gray-200" src={imageTwo} alt=""  />
                 <img className="w-72   transform p-4 hover:scale-105 transition h-[300px] rounded-sm hover:bg-gray-200" src={imageThree} alt=""  />
                 <img className="w-72   transform p-4 hover:scale-105 transition h-[300px] rounded-sm hover:bg-gray-200" src={imageFour} alt=""  />
                 <img className="w-72   transform p-4 hover:scale-105 transition h-[300px] rounded-sm hover:bg-gray-200" src={imageFive} alt=""  />
                 <img className="w-72   transform p-4 hover:scale-105 transition h-[300px] rounded-sm hover:bg-gray-200" src={imageSix} alt=""  />
                 <img className="w-72   transform p-4 hover:scale-105 transition h-[300px] rounded-sm hover:bg-gray-200" src={imageSaven} alt=""  />
                 <img className="w-72   transform p-4 hover:scale-105 transition h-[300px] rounded-sm hover:bg-gray-200" src={imageEight} alt=""  />
                 <img className="w-72   transform p-4 hover:scale-105 transition h-[300px] rounded-sm hover:bg-gray-200" src={imageNine} alt=""  />
                 
                   </div>
            </div>

        </div>
    );
};

export default Home;