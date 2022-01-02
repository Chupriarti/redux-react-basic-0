import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRepos } from '../actions/repos';
import './main.less'

const Main = () => {
    const dispatch = useDispatch();
    const repos = useSelector(state => state.repos.items);

    React.useEffect(() => {
        dispatch(getRepos());
    }, [])

    return (
        <div className="main">
            Main
        </div>
    )
}

export default Main;
