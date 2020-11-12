import React from 'react';
import Card from './Card';

const Cards = ({robots}) => {
    
    const CardComponent = robots.map((robot, i) => <Card robot = {robot} key = {i} />);
    return (
        <div>
            {CardComponent}
        </div>
    )
};

export default Cards;