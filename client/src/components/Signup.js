import React from "react";
import { useLocation } from "react-router-dom";

const Signup = () => {
    let location = useLocation()

    return (
        <div>{location.pathname}</div>
    )
}

export default Signup