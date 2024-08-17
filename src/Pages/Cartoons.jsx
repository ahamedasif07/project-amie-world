import { useLoaderData } from "react-router";
import Cartoon from "../Components/Cartoon";
import { useEffect, useState } from "react";


const Cartoons = () => {

    const cartoons = useLoaderData()

    const [allCartoons, setAllCartoons]=useState(6)
    const [filtaredCartoons,setFiltaredCartoons]=useState([])

    useEffect(()=>{
        setFiltaredCartoons(cartoons)
    },[cartoons])
     console.log(filtaredCartoons)
   

    const handleShowAll = ()=>{
        setAllCartoons(allCartoons + 6)
    }

    // handle scarch button

    const handleSearch =()=> {
        const input = document.getElementById("input")
        const inputValue = input.value;
        const value = inputValue.toLowerCase()
        // console.log(value)

        const scarchCartoon = cartoons.filter(cartoon => cartoon.categories.toLowerCase()===value || cartoon.name.toLowerCase()==value)
        setFiltaredCartoons(scarchCartoon)
        input.value=''
        
    }


    return (
        <div className="">
            <div>
            <div className="pt-20 px-3 max-w-screen-2xl ">
            <h2 className="text-4xl font-bold mx-auto text-center mt-6 mb-3 ">
                <span className="text-red-600">W</span>ellcome to <br /> <span className="text-red-600">Cartoon</span> Network
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
                <button onClick={handleSearch}  className="bg-gray-100 text-gray-500 transform active:border-gray-400 px-4 py-1 border-2 rounded-full">
                    Search
                </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center py-4 px-3 sm:grid-cols-1 mx-auto rounded-sm lg:gap-14 md:gap-8">
            {
               filtaredCartoons.slice(0,allCartoons).map(cartoon => <Cartoon cartoon={cartoon} key={cartoon.id}></Cartoon>)
            }
            </div>

            <div className={allCartoons >= cartoons.length ? 'hidden':'block'}>
                <div className="flex justify-center py-4">
                    <button  onClick={handleShowAll} className="btn btn-success  text-white">
                        Show More
                    </button>
                </div>
            </div>
        </div>
            </div>
            
        </div>
    );
};

export default Cartoons;