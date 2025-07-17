import React, { useState } from "react";

const WeatherInfo=()=>{
    const [city,setCity]=useState('');
    const API_KEY = import.meta.env.VITE_API_KEY;
    console.log(API_KEY);
    const callapi = async () => {
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
        const res=await fetch(url);
        const data=await res.json();
        console.log(data);
    };
    return(
        <>
            <input 
            type="text"
            placeholder="Enter City Name" 
            value={city}
            onChange={(e)=>setCity(e.target.value)}
            />
            <button onClick={callapi}>Get Weather</button>
        </>
    )
}

export default WeatherInfo