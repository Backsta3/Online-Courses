import React from 'react';
import './SelectPlayers.css';
const SelectPlayers = (props) => {
    const selected = props.cartIn ;
    console.log(selected) ; 
   
    return (
        <div className="d-flex mt-5">
            <div className="select">
                <img src={selected.img} className="selectImg" alt=""/>
            </div>
            <div className="slp2">
            <h3> {selected.name }</h3>
            <h4>${selected.price}</h4>
        </div>
        </div>
    );
};

export default SelectPlayers;