import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './emoployee.class';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }
  login(login:string, password:string): Observable<Employee>{
    return this.http.get(`http:localhost:54408/api/employees/${login}/${password}`) as Observable<Employee>;
    
  }
}
