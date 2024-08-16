import { Outlet } from "react-router";
import Home from "./Pages/Home/Home";
import NavBar from "./NavBar";


const LayOut = () => {
    return (
        <div>
            
            <NavBar></NavBar>

            <div className="container mx-auto">
            <Outlet></Outlet>
            </div>
            
            
        </div>
    );
};

export default LayOut;