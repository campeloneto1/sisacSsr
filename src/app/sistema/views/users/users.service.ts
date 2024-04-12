import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environments";
import { Users } from "./user";
import { Observable } from "rxjs";

const URL = environment.url;

@Injectable({
    providedIn: 'root'
})
export class UsersService{

    constructor(
        private http: HttpClient,
    ){}

    index(): Observable<Users>{
        return this.http.get<Users>(`${URL}/users`);
    }
   
}