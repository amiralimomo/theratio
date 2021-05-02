import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Router } from '@angular/router'

@Injectable()
export class PageHeaderService {
    homeUrl: string = 'http://localhost:3000'
    
    constructor(private http: HttpClient, private router: Router) {

    }
    getPageHeaderData():Observable<any> {

        return this.http.get(this.homeUrl + this.router.url)
    }


}
