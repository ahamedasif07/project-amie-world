import { Outlet } from "react-router";
import NavBar from "./NavBar";
import Footer from "./Footer";


const LayOut = () => {
    return (
        <div>
            
            <NavBar></NavBar>

            <div className="container mx-auto">
            <Outlet></Outlet>
            </div>

            <Footer></Footer>
            
            
        </div>
    );
};

export default LayOut;