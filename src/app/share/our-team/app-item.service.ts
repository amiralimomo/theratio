import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
@Injectable()
export class ItemService {
    constructor(private http: HttpClient) { }
    url: string = 'http://localhost:3000/items';
    getItemsData():Observable<any> {
        return this.http.get(this.url)
    }


}