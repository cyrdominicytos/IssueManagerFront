import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Tag } from '../api/Ticket';
import { Observable, of } from 'rxjs';

@Injectable()
export class TagService {
    tags: Tag[] = [];
   
    constructor(private http: HttpClient) { }

       //Load 
       getTags(refresh = false) {
        if (!refresh && this.tags.length>0)
          return of(this.tags);
        else{
           return this.http.get(environment.apiBaseUrl+'tags');
        }
      }    
}
