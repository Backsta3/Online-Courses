import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserAlt } from '@fortawesome/free-solid-svg-icons'

import './Player.css'
const Player = (props) => {
    const {img, name, gender, price}= props.player ;
    return (
        <div className="player  d-flex  row align-items-center ">
            <div className="col-md-5">
                <img src={img} />
            </div>
            
            <div className="col-md-7 card">
                <br/><br/>
                <h2 className="player-name">{name}</h2>
                <p> {gender} </p>
                <h5>${price}</h5>
                <button className="player-button" onClick={()=> props.handleAddPlayer(props.player)}><FontAwesomeIcon icon={faUserAlt} /> Buy Player </button>
            </div>
            
         
        </div>
    );
};

export default Player;