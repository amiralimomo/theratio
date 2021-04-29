import {Injectable} from '@angular/core'
import{IUser} from './app-user-interface'
import{HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
@Injectable()
export class UserService{
    constructor(private http:HttpClient){}
  public  currentUser:IUser | null=null
  url:string='http://localhost:3000/users';
//    async usefetch(url:string,method:string,data:string | null=null){
    
//       const results=await fetch(url,
//             {
//                 method:method,
//                 body:data,
//                 headers: data ?{'Content-Type': 'application/json'}:{}
//             })
//         const result=await results.json()
       
//         return result
       
       
//     }
    getData():Observable<any>{
        return this.http.get(this.url)
    }
    postData(data:any):Observable<any>{
        return this.http.post(this.url,data)
    }
}