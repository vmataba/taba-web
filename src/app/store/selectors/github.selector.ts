import { createSelector } from "@ngrx/store";
import { getGithubState } from ".";

export const getProfile = createSelector(getGithubState,state => state.profile)

export const getLoadingProfile = createSelector(getGithubState,state => state.loadingProfile)

export const getLoadedProfile = createSelector(getGithubState,state => state.loadedProfile)

export const getProfileError = createSelector(getGithubState,state => state.profileError)

export const getRepositoriesLoading= createSelector(getGithubState,state => state.loadingRepositories)

export const getRepositoriesLoaded = createSelector(getGithubState,state => state.loadedRepositories)

export const getRepositories = createSelector(getGithubState,state => state.repositories)

export const getRepositoriesError = createSelector(getGithubState,state => state.repositoriesError)