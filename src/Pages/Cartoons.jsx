import { useLoaderData } from "react-router";


const Cartoons = () => {
    const cartoons = useLoaderData()
    return (
        <div className="">
            <h2>hello Cartoons :{cartoons.length}</h2>
            
        </div>
    );
};

export default Cartoons;