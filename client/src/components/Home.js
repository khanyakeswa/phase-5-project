import React from "react";
import { useLocation } from "react-router-dom";


const Home = () => {
    let location = useLocation()

    return (
        <div>{location.pathname}</div>
    )
}

export default Home