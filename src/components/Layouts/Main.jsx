import { Outlet } from "react-router-dom";
import Header from "../Header/Header.jsx";

const Main = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default Main;