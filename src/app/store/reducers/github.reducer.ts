import { createReducer, on } from '@ngrx/store';
import { loadProfile, loadProfileFail, loadProfileSuccess, loadRepositories, loadRepositoriesFail, loadRepositoriesSuccess } from '../actions/gitub.action';

export interface GithubState {
  loadingProfile: boolean;
  loadedProfile: boolean;
  profile: any;
  profileError: any;
  loadingRepositories: boolean;
  loadedRepositories: boolean;
  repositories: any[];
  repositoriesError: any;
}

const inititalState: GithubState = {
  loadedProfile: false,
  loadingProfile: false,
  loadedRepositories: false,
  loadingRepositories: false,
  profile: undefined,
  profileError: undefined,
  repositories: [],
  repositoriesError: undefined,
};

export const githubReducer = createReducer(
    inititalState,
    on(loadProfile, (state) => ({ ...state, loadingProfile: true })),
    on(loadProfileSuccess, (state, { profile }) => ({
      ...state,
      loadingProfile: false,
      loadedProfile: true,
      profile
    })),
    on(loadProfileFail, (state, { error }) => ({
      ...state,
      loadingProfile: false,
      loadedProfile: false,
      profileError: error
    })),
    on(loadRepositories,state => ({...state,loadingRepositories: true})),
    on(loadRepositoriesSuccess,(state,{repositories}) => ({...state,loadingRepositories: false,loadedRepositories:true,repositories})),
    on(loadRepositoriesFail,(state,{error}) => ({...state,loadingRepositories: false,loadedRepositories:true,repositoriesError: error})),
  );
