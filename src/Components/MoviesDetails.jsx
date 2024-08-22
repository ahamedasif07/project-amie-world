import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { Link } from "react-router-dom";

const MoviesDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [movies, setMovies] = useState([]);
  const [movieDetails, setMovieDetails] = useState([]);
  useEffect(() => {
    const feching = async () => {
      try {
        const res = await fetch("../../public/movie.json");
        const data = await res.json();
        setMovies(data);
        //   finding clicked data
        const detailsMovie = movies.find((movie) => movie.id === Number(id));
        setMovieDetails(detailsMovie);
      } catch {
        console.error("Error fetching movies:");
      }
    };
    feching();
  }, [id, movies]);
  console.log(movies);
  console.log(movieDetails);
  return (
    <div>
      <div className="container overflow-hidden mx-auto">
        <div className=" flex justify-center md:flex-row  flex-col  md:flex">
          <div data-aos="fade-right" className="md:w-[48%]">
            <img
              className="md:w-[600px] w-full h-[500px]"
              src={movieDetails?.image}
              alt=""
            />
          </div>

          <div
            data-aos="fade-left"
            className="md:w-[48%] pb-6 pt-3 grid items-center justify-center gap-4"
          >
            <div>
              <h2 className="text-4xl py-2 font-bold">
                Name : {movieDetails?.name}
              </h2>
              {/* <h2 className="text-2xl font-semibold">
              Episode: {movieDetails?.episodes}
            </h2> */}
              <h2 className="font-semibold py-2 tect-xl">
                Catagories : {movieDetails?.categories}
              </h2>
              <Link to="/">
                <button className=" py-2 rounded-sm bg-green-500 text-white px-3">
                  Go Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default MoviesDetails;
