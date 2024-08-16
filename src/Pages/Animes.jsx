import { useLoaderData } from "react-router";
import Anime from "../Components/Anime";


const Animes = () => {
    const animes = useLoaderData()
    console.log(animes)
    return (
        <div className="pt-20">
            <h2 className="text-4xl font-bold text-center">Watch Your Favorite Anime</h2>
           <div>
           {
               animes.map(anime => <Anime anime={anime} key={anime.id}></Anime>) 
            }
           </div>
        </div>
    );
};

export default Animes;