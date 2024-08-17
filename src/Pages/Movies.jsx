import { useLoaderData } from "react-router";
import Movie from "../Components/Movie";
import { useState } from "react";

const Movies = () => {

    const movies = useLoaderData()
    console.log(movies)
    const [allMovies,SetAllMovies]=useState(6)

    const handleShowAll =()=>{
       SetAllMovies(allMovies + 6)
    }

    return (
        <div>
            <h2>movies</h2>
            <div>
            <div className="pt-20 px-3 max-w-screen-2xl ">
            <h2 className="text-4xl font-bold mx-auto text-center mt-6 mb-3 border-b-2 border-white">
                Watch Your Favorite Anime
            </h2>
            <p className="text-center text-gray-900 pb-12">
                Experience something extraordinary and make the most of your time by watching anime.
                <br /> 
                Immerse yourself in unique storytelling and stunning visuals that promise to captivate and entertain.
            </p>

            <div className="flex justify-center gap-2">
                <input 
                    type="text" 
                    id="input"
                    placeholder="Search" 
                    className="input input-bordered w-full max-w-xs" 
                />
                <button  className="bg-gray-100 px-4 py-1 border-2 rounded-full">
                    Search
                </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center py-4 px-3 sm:grid-cols-1 mx-auto rounded-sm lg:gap-14 md:gap-8">
            {
                movies.slice(0,allMovies).map(movie => <Movie movie={movie} key={movie.id}></Movie>)
            }
            </div>

            <div className={allMovies >= movies.length ? "hidden" : 'block'}>
                <div className="flex justify-center py-4">
                    <button onClick={handleShowAll}  className="btn btn-success text-white">
                        Show More
                    </button>
                </div>
            </div>
        </div>
            </div>
           <div>
           
           </div>
        </div>
    );
};

export default Movies;