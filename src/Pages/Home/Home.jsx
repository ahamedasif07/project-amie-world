
import { CarouselDefault } from '../../Components/CarouselDefault'
import PopolorChar from '../../Components/PopolorChar'
import kakashi from '../../assets/images/kakasi.jpg'
import obito from '../../assets/images/obito.jpg'
import shanks from '../../assets/images/shanks.jpg'
import levi from '../../assets/images/levi.jpg'
import light from '../../assets/images/light.jpg'
import tanjiro from '../../assets/images/tanjiro.jpg'
import eran from '../../assets/images/eran.jpg'




const Home = () => {
  return (
    <div>
      <CarouselDefault />
      <PopolorChar></PopolorChar>

      <div className='grid py-4 justify-center'>

        <div className="carousel max-h-[300px] w-[100%] md:w-[72%] mx-auto carousel-center  rounded-box  bg-gray-200 space-x-4 p-4">
          <div className="carousel-item border-2 w-[33%]">
            <img
              src={kakashi}
              className="rounded-box" />
          </div>
          <div className="carousel-item w-[33%]">
            <img
              src={shanks}
              className="rounded-box" />
          </div>
          <div className="carousel-item w-[33%]">
            <img
              src={obito}
              className="rounded-box" />
          </div>
          <div className="carousel-item w-[33%]">
            <img
              src={levi}
              className="rounded-box" />
          </div>
          <div className="carousel-item w-[33%]">
            <img
              src={light}
              className="rounded-box" />
          </div>
          <div className="carousel-item w-[33%]">
            <img
              src={tanjiro}
              className="rounded-box object-fill" />
          </div>
          <div className="carousel-item w-[33%]">
            <img
              src={eran}
              className="rounded-box max-w-[300px]" />
          </div>
        </div>

      </div>

    </div>
  );
};

export default Home;