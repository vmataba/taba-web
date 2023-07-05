import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppService } from 'src/app/services/app.service';
import { loadRepositories } from 'src/app/store/actions/gitub.action';
import {getRepositories, getRepositoriesLoaded, getRepositoriesLoading } from 'src/app/store/selectors/github.selector';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit  {

  loading$: Observable<boolean>

  loaded$: Observable<boolean>

  reposistories$: Observable<any[]>

  keyword: string = ''

  constructor(private store: Store){
    this.reposistories$ = store.select(getRepositories)
    this.loading$ = this.store.select(getRepositoriesLoading)
    this.loaded$ = this.store.select(getRepositoriesLoaded)
  }

  ngOnInit(){
    this.store.dispatch(loadRepositories())
  }

  readKeyword(keyword:string){
    this.keyword = keyword
  }
}
