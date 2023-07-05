import { createAction, props } from "@ngrx/store";

export enum GithubActionType{
    LOAD_PROFILE = '[ Github ] Load Profile',
    LOAD_PROFILE_SUCCESS = '[ Github ] Load Profile Success',
    LOAD_PROFILE_FAIL = '[ Github ] Load Profile Fail',
    LOAD_REPOSITORIES = '[ Github ] Load Repositories',
    LOAD_REPOSITORIES_SUCCESS = '[ Github ] Load Repositories Success',
    LOAD_REPOSITORIES_FAIL = '[ Github ] Load Repositories Fail',
}

export const loadProfile = createAction(GithubActionType.LOAD_PROFILE)

export const loadProfileSuccess = createAction(GithubActionType.LOAD_PROFILE_SUCCESS,props<{profile:any}>())

export const loadProfileFail = createAction(GithubActionType.LOAD_PROFILE_FAIL,props<{error:any}>())

export const loadRepositories = createAction(GithubActionType.LOAD_REPOSITORIES)

export const loadRepositoriesSuccess = createAction(GithubActionType.LOAD_REPOSITORIES_SUCCESS,props<{repositories:any[]}>())

export const loadRepositoriesFail = createAction(GithubActionType.LOAD_REPOSITORIES_FAIL,props<{error:any}>())