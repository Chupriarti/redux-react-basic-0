import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRepos } from '../actions/repos';
import './main.less'
import Repo from './repo/Repo';

const Main = () => {
    const dispatch = useDispatch();
    const repos = useSelector(state => state.repos.items);
    const isFetching = useSelector(state => state.repos.isFetching);
    const [seacrhValue, setSearchValue] = React.useState("");

    React.useEffect(() => {
        dispatch(getRepos());
    }, [])

    const searchHandler = () => {
        dispatch(getRepos(seacrhValue));
    }

    console.log(repos);

    return (
        <div className="main">
            <div className="search">
                <input
                    value={seacrhValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    type="text" 
                    placeholder="Input repo name" 
                    className="search-input" 
                />
                <button onClick={searchHandler} className="search-btn">Search</button>
            </div>
            {
                isFetching === false
                    ?
                repos.map(repo => <Repo key={repo.id} repo={repo} />)
                    :
                <div className="fetching"></div>
            }
        </div>
    )
}

export default Main;
