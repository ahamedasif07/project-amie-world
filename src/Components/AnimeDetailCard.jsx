import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import Animes from "../Pages/Animes";
import { Link } from "react-router-dom";

const AnimeDetailCard = () => {
  const { id } = useParams();

  const [animeDetails, setAnimeDetails] = useState();

  const [animes, setAnimes] = useState([]);
  const aLLanimes = useLoaderData();
  console.log(animes, "single time animes");
  useEffect(() => {
    if (aLLanimes) {
      setAnimes(aLLanimes);
    }
    const fetcing = () => {
      if (Array.isArray(animes)) {
        const details = animes.find((anime) => anime.id === parseInt(id));
        setAnimeDetails(details);
      } else {
        console.error("Expected an array, but got:");
      }
    };
    fetcing();
  }, [id, aLLanimes, animes]);

  return (
    <div className="container overflow-hidden mx-auto">
      <div className=" flex justify-center md:flex-row  flex-col  md:flex">
        <div data-aos="fade-right" className="md:w-[48%]">
          <img
            className="md:w-[600px] w-full h-[500px]"
            src={animeDetails?.image}
            alt=""
          />
        </div>

        <div
          data-aos="fade-left"
          className="md:w-[48%] pb-6 pt-3 grid items-center justify-center gap-4"
        >
          <div>
            <h2 className="text-4xl py-2 font-bold">
              Name : {animeDetails?.name}
            </h2>
            <h2 className="text-2xl font-semibold">
              Episode: {animeDetails?.episodes}
            </h2>
            <h2 className="font-semibold py-2 tect-xl">
              Catagories : {animeDetails?.categories}
            </h2>
            <Link to="/">
              <button className=" py-2 rounded-sm bg-green-500 text-white px-3">
                Go Home
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Animes></Animes>
    </div>
  );
};

export default AnimeDetailCard;
