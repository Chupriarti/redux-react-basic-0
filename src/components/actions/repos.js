import axios from 'axios';

export const getRepos = (searchQuesry = "stars:%3E1") => {
    return async (dispatch) => {
        const response = axios.get(`https://api.github.com/search/repositories?q=${searchQuesry}&sort=stars`)
    }
}