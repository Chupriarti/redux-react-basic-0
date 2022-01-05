import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = (props) => {
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={() => navigate(-1)}>BACK</button>
            Card repo
        </div>
    )
}

export default Card;
