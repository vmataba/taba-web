import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AppService } from "src/app/services/app.service";
import { GithubActionType, loadProfileFail, loadProfileSuccess, loadRepositoriesFail, loadRepositoriesSuccess } from "../actions/gitub.action";
import { catchError, map, mergeMap, of } from "rxjs";

@Injectable()
export class GithubEffect{
    constructor(private actions$: Actions,private appService: AppService){ }

    loadProfile$ = createEffect(() => this.actions$.pipe(
        ofType(GithubActionType.LOAD_PROFILE),
        mergeMap(() => this.appService.loadProfile().pipe(
            map(profile => loadProfileSuccess({profile})),
            catchError(response => {
              return of(loadProfileFail({error:response}))
            })
          )
        )
      ))

      loadRepositories$ = createEffect(() => this.actions$.pipe(
        ofType(GithubActionType.LOAD_REPOSITORIES),
        mergeMap(() => this.appService.loadRepositories().pipe(
          map(repositories => loadRepositoriesSuccess({repositories})),
          catchError(response => {
            return of(loadRepositoriesFail({error: response}))
          })
        ))
      ))
}