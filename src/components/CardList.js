import React from 'react';
import Card from './Card';


const CardList = ({robots}) => {
    //1st way of doing it 
    // const cardArray = robots.map((robot, i) => {
    //     return ( <Card 
    //         key={i} 
    //         id={robots[i].id} 
    //         name={robots[i].name} 
    //         email={robots[i].email} 
    //         />
    //     )
    // })
    // if(true) {
    //     throw new Error('dsdf')
    // }
    return (
        <div>
            {/* {cardArray}  1st way of doing it*/}
            {
                robots.map((robot, i) => {
                    return ( <Card 
                        key={i} 
                        id={robots[i].id} 
                        name={robots[i].name} 
                        email={robots[i].email} 
                        />
                    )
                })
            }
        </div>
    )
}

export default CardList