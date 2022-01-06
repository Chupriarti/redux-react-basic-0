import axios from 'axios';
import {setIsFetching, setRepos} from "../../reducers/reposReducer"

export const getRepos = (searchQuesry = "stars:%3E1", currentPage, perPage) => {
    if (searchQuesry === ""){
        searchQuesry = "stars:%3E1";
    }
    return async (dispatch) => {
        dispatch(setIsFetching(true));
        const response = await axios.get(`https://api.github.com/search/repositories?q=${searchQuesry}&sort=stars&per_page=${perPage}&page=${currentPage}`);
        dispatch(setRepos(response.data));
    }
}

export const getCurrentRepo = async (userName, repoName, setRepo) => {
    const response = await axios.get(`https://api.github.com/repos/${userName}/${repoName}`);
    setRepo(response.data);
}

export const getRepoContributors = async (userName, repoName, setContributors) => {
    const response = await axios.get(`https://api.github.com/repos/${userName}/${repoName}/contributors?page=1&per_page=10`);
    setContributors(response.data);
}
