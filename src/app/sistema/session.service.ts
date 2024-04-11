import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class SessionService{
    private token!: string;
    private user!: any;

    setSession(user:any, token: string){
        this.user = user;
        this.token = token;
    }

    logout(){
        this.token = '';
        this.user = {};
    }
}