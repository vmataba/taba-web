import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'

@Injectable({providedIn: 'root'})
export class AppService{

    basePath = 'https://api.github.com/users/vmataba'

    constructor(private httpClient: HttpClient){

    }

    loadProfile(){
        return this.httpClient.get(this.basePath)
    }

    loadRepositories(){
        return this.httpClient.get<any[]>(this.basePath+'/repos')
    }
}