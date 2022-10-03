import React from 'react';
import { addToFakeDb } from '../utility/addToFakeDb';
import { deleteFromFakeDb } from '../utility/deleteFromFakeDb';


const Country = (props) => {
   const {name,flags}=props.country;

    return (
        <div>
            <h1>Country Name:{name}</h1>
            <img src={flags.png} alt="" /><br />
            <button onClick={()=>addToFakeDb(name)} style={{backgroundColor:'gold', padding:'10px', borderRadius:'10px', fontWeight:'800'}}>ADD TO LS</button>
            <button onClick={()=>deleteFromFakeDb(name)} style={{backgroundColor:'gold', padding:'10px', borderRadius:'10px', fontWeight:'800'}}>Delete LS</button>
        </div>
    );
};

export default Country;