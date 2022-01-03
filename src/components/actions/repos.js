import axios from 'axios';
import {setIsFetching, setRepos} from "../../reducers/reposReducer"

export const getRepos = (searchQuesry = "stars:%3E1") => {
    if (searchQuesry === ""){
        searchQuesry = "stars:%3E1";
    }
    return async (dispatch) => {
        dispatch(setIsFetching(true));
        const response = await axios.get(`https://api.github.com/search/repositories?q=${searchQuesry}&sort=stars`)
        dispatch(setRepos(response.data));
    }
}