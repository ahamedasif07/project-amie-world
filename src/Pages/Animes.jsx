import { useLoaderData } from "react-router";
import Anime from "../Components/Anime";
import { useEffect, useState } from "react";

const Animes = () => {
    const animes = useLoaderData();
    console.log(animes)
    // const [filteredAnime, setFilteredAnime] = useState();
    // console.log(filteredAnime)
    const [allAnime, setAllAnime] = useState(6);
    const [filtaredAnimes,setFiltaredAnimes]=useState([])

    const handleShowAll = () => {
        // setFilteredAnime(animes.slice(0, allAnime + 6));
        setAllAnime(allAnime + 6);
    };

    useEffect(()=>{
        setFiltaredAnimes(animes)
    },[animes])

    const handleScarch = () => {
        const input = document.getElementById("input")
        const inputValue = input.value;
        const value = inputValue.toLowerCase()
        console.log(value)
        const filtered = animes.filter(anime => anime.categories.toLowerCase() === value || anime.name.toLowerCase() === value)
        // const filteredByName = movies.filter(movie => movie.name === value)
        // console.log(filteredByName)
        setFiltaredAnimes(filtered)
        input.value = '';

       
    }

    return (
        <div className="pt-20 px-3 max-w-screen-2xl ">
            <h2 className="text-4xl font-bold mx-auto text-center mt-6 mb-3 border-b-2 border-white">
                Watch <span className="text-red-600">Your <br /> Favorite</span> Anime
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
                <button onClick={handleScarch} className="bg-gray-100 px-4 py-1 border-2 rounded-full">
                    Search
                </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center py-4 px-3 sm:grid-cols-1 mx-auto rounded-sm lg:gap-14 md:gap-8">
                {
                filtaredAnimes.map(anime => (
                    <Anime anime={anime} key={anime.id} />
                ))}
            </div>

            <div className={allAnime >= animes.length ? 'hidden' : ''}>
                <div className="flex justify-center py-4">
                    <button onClick={handleShowAll} className="btn btn-success text-white">
                        Show More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Animes;
