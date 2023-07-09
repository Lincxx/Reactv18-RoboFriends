import React from "react";

//const Card = (props) => { 1st way 
//3rd way
const Card = ({ name , email, id }) => {
    //const { name , email, id } = props 2nd way 
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
            <img alt='photo' src={`https://robohash.org/${id}?00x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;