import{HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core'
import {from, Observable} from 'rxjs'

@Injectable()
export class ImonialsService{
constructor(private http:HttpClient){}
url:string='http://localhost:3000/imonials'
getImonialsData():Observable<any>{

   return this.http.get(this.url)
}
}