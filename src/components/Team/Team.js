import React, { useState } from 'react';
import fakeData from '../../fakeData'
import Player from '../Player/Player';
import Cart from '../Cart/Cart';
import SelectPlayers from '../Cart/SelectPlayers/SelectPlayers';

const Team = () => {
    const first11 = fakeData.slice(0,11);
    const [player, setPlayer] = useState(first11);
    const [cart, setCart]= useState([]);

    const handleAddPlayer = (player) =>{
        const newCart= [...cart, player]
        setCart(newCart);
    }
    return (
        <div className=" d-flex bd-highlight justify-content-between " >

            <div className="p-2 w-100  col-md-8 " >
                           
               
                    {
                        player.map(pr => <Player 
                            handleAddPlayer= {handleAddPlayer}
                            player={pr}>
                             </Player>)
                    }
                
            </div>   
            <div className=" col-md-4 cardTotal"  >
                <Cart cart={cart}></Cart>
              {  cart.map(slPlayer => <SelectPlayers cartIn= { slPlayer}  >

                </SelectPlayers>)
            }
            </div>
        </div>
    );
};
export default Team;