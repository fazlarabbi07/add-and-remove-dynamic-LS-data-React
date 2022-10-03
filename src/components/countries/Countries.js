import React, { useEffect, useState } from 'react';
import Country from '../country/Country';

const Countries = () => {
    const[countries,setCountries]=useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v2/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])
    return (
        <div>
            {countries.map(country=><Country country={country} key={country.alpha3Code}></Country>)}
        </div>
    );
};

export default Countries;