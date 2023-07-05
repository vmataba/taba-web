import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadProfile } from 'src/app/store/actions/gitub.action';
import { getLoadedProfile, getLoadingProfile, getProfile } from 'src/app/store/selectors/github.selector';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  profile$: Observable<any>

  loading$: Observable<boolean>

  loaded$: Observable<boolean>

  constructor(private store: Store){
    this.profile$ = store.select(getProfile)
    this.loading$ = store.select(getLoadingProfile)
    this.loaded$ = store.select(getLoadedProfile)
  }

  ngOnInit(): void {
      this.store.dispatch(loadProfile())
  }
}
