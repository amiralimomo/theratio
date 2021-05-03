import{HttpClient}from '@angular/common/http'
import{Observable, observable}from 'rxjs'
import{ Injectable}from '@angular/core'
@Injectable()
export class DecoreService {
    constructor(private http:HttpClient ) {  }
    utl:string="http://localhost:3000/decore"
    getDecoreData():Observable<any>{
        return this.http.get(this.utl)
    }
}
