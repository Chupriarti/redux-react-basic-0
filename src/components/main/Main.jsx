import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../reducers/reposReducer';
import { createPages } from '../../utils/pagesCreator';
import { getRepos } from '../actions/repos';
import './main.less'
import Repo from './repo/Repo';

const Main = () => {
    const dispatch = useDispatch();
    const repos = useSelector(state => state.repos.items);
    const isFetching = useSelector(state => state.repos.isFetching);
    const currentPage = useSelector(state => state.repos.currentPage);
    const totalCount = useSelector(state => state.repos.totalCount);
    const perPage = useSelector(state => state.repos.perPage);
    const [seacrhValue, setSearchValue] = React.useState("");
    const pagesCount = Math.ceil(totalCount / perPage);
    const pages = createPages(pagesCount, currentPage);

    React.useEffect(() => {
        dispatch(getRepos(seacrhValue, currentPage, perPage));
    }, [currentPage])

    const searchHandler = () => {
        dispatch(setCurrentPage(1));
        dispatch(getRepos(seacrhValue, currentPage, perPage));
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
            <div className="pages">
                {pages.map((p, index) => 
                    <span 
                        onClick={() => dispatch(setCurrentPage(p))}
                        key={index} 
                        className={currentPage === p ? "page current-page" : "page"}
                    >
                        {p}
                    </span>
                )}
            </div>
        </div>
    )
}

export default Main;
