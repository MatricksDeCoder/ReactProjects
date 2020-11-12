import React from 'react';

const Card = (props) => {
    
    const {name, id, username, email } = props.robot;
    const src = `https://robohash.org/${id}?size=200X200`;
    return (
        <div className = 'tc bg-light-green dib br3 ma2 grow bw2 shadow-5'>
            <img src={src} alt="robot" />
            <div>
                <h2>{name}</h2>
                <h3>{username}</h3>
                <p>{email}</p>
            </div>
        </div>
    )

};

export default Card;