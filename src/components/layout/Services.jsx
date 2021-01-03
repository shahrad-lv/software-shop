import React from 'react'
import { useLocation } from 'react-router-dom'
const Services = () => {
    const location = useLocation();
    console.log(location.pathname);
    return (
        <div>
            Services
        </div>
    )
}

export default Services
