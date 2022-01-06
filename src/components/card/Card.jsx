import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCurrentRepo } from '../actions/repos';

const Card = (props) => {
    const {username, reponame} = useParams();
    const [repo, setRepo] = React.useState({owner: {}});
    const navigate = useNavigate();

    React.useEffect(() => {
        getCurrentRepo(username, reponame, setRepo);
    }, [])

    return (
        <div>
            <button onClick={() => navigate(-1)}>BACK</button>
            <div className="card">
                <img src={repo.owner.avatar_url} alt="" />
                <div className="name">{repo.name}</div>
                <div className="stars">{repo.stargazers_count}</div>
            </div>
        </div>
    )
}

export default Card;
