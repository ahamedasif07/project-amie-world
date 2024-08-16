import { useLoaderData } from "react-router";
import Anime from "../Components/Anime";


const Animes = () => {
    const animes = useLoaderData()
    console.log(animes)
    return (
        <div className="pt-20 max-w-screen-2xl">
            <h2 className="text-4xl font-bold mx-auto text-center">Watch Your Favorite Anime</h2>
           <div className="flex grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-7">
           {
               animes.map(anime => <Anime anime={anime} key={anime.id}></Anime>) 
            }
           </div>
        </div>
    );
};

export default Animes;