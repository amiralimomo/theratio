import {HttpClient}from '@angular/common/http'
import {Observable}from 'rxjs'
import{Injectable} from '@angular/core'
@Injectable()
export class TeamSkillService{
    constructor(private http:HttpClient){}
    url:string='http://localhost:3000/teamskill'

    getSkillData():Observable<any>{
       return this.http.get(this.url)
    }
}