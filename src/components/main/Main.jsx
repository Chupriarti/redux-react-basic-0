import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCurrentPage } from '../../reducers/reposReducer';
import { createPages } from '../../utils/pagesCreator';
import { getRepos } from '../actions/repos';
import './main.less'
import Repo from './repo/Repo';

const Main = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const repos = useSelector(state => state.repos.items);
    const isFetching = useSelector(state => state.repos.isFetching);
    const currentPage = useSelector(state => state.repos.currentPage);
    const totalCount = useSelector(state => state.repos.totalCount);
    const perPage = useSelector(state => state.repos.perPage);
    const isFetchError = useSelector(state => state.repos.isFetchError);
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

    // if (isFetchError){
    //     navigate("/error");
    // }

    return (
        <div className="main">
            {
                isFetchError && 
                <div class="alert alert-danger" role="alert">
                    An error has occurred!
                </div>
            }
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
