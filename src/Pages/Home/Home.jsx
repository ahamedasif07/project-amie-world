
import Header from '../../Components/Header'
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
               <Header></Header>
            <PopolorChar></PopolorChar>

            <div className='grid py-4 justify-center'>

            <div className="carousel max-h-[300px] carousel-center  bg-gray-200 rounded-box max-w-md space-x-4 p-4">
  <div className="carousel-item">
    <img
      src={kakashi}
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src={shanks}
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src={obito}
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src={levi}
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src={light}
      className="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src={tanjiro}
      className="rounded-box" />
  </div>
  <div className="carousel-item">
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