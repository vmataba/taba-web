import { combineReducers } from "@ngrx/store";
import { GithubState, githubReducer } from "./github.reducer";

export interface AppState{
    github: GithubState
}

export const reducers = combineReducers({
    github: githubReducer
})