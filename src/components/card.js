import React from 'react'
import {useState} from 'react';
import PopUp from './popUpPokemones';
import './card.css'

const PokemonCard = (props) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    return (
        <div onClick={() => setIsPopupOpen(true)}>
        <div className='PokemonCard'>
        <h1>{props.name}</h1>
        <img src = {props.imgUrl} alt={props.name}/>
        </div>
        <div>
        {
          isPopupOpen &&
          <PopUp
          {...props}
          />
        }
        </div>
                </div>

    )
}
export default PokemonCard;
