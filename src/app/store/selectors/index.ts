import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "../reducers";

const appState = createFeatureSelector<AppState>('app')

export const getGithubState = createSelector(appState, state => state.github)