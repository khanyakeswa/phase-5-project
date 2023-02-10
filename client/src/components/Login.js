import React from "react";
import { useLocation } from "react-router-dom";

const Login = () => {
    let location = useLocation()

    return (
        <div>{location.pathname}</div>
    )
}

export default Login