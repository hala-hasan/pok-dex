import React from 'react'
import './popUppokemons.css'

const PopUp = (props) => {

    function popUpClose() {
        document.querySelector('.popUp-wrapper').classList.add('close');
    }

    return (
        <div onClick={() => popUpClose()}  className='popUp-wrapper'>
            <div className='content'>
                <div className='modal-header'>
                    <h1>{props.name}</h1>
                <div className='data'>
                <img src = {props.imgUrl} alt={props.name} style={{width:'250px', height:'250px'}}/>
                <div className='info'>
                        <h2>{`HP : ${props.hp}`}</h2>
                        <h2>{`Weight : ${props.weight}`}</h2>
                        <h2>{`Height : ${props.hight}`}</h2>
                        <h2>{`Attack : ${props.attack}`}</h2>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default PopUp;