import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCurrentRepo, getRepoContributors } from '../actions/repos';
import './card.less';

const Card = (props) => {
    const {username, reponame} = useParams();
    const [repo, setRepo] = React.useState({owner: {}});
    const [contributors, setContributors] = React.useState([]);
    const navigate = useNavigate();

    React.useEffect(() => {
        getCurrentRepo(username, reponame, setRepo);
        getRepoContributors(username, reponame, setContributors);
    }, [])

    return (
        <div>
            <button onClick={() => navigate(-1)}>BACK</button>
            <div className="card">
                <img src={repo.owner.avatar_url} alt="" />
                <div className="name">{repo.name}</div>
                <div className="stars">{repo.stargazers_count}</div>
            </div>
            {contributors.map((c, index) => 
                <div key={c.login}>{index}.{c.login}</div>
            )}
        </div>
    )
}

export default Card;
