import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { SessionService } from "../../session.service";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
    standalone: true,
    imports: [CommonModule]
})

export class NavbarComponent{

    user!: any;

    protected form!: FormGroup;

    constructor(private sessionService: SessionService,
        ){

    }

    ngOnInit(): void {
        //this.user = this.sessionService.retornaUser();
    }

    logout(){
        this.sessionService.logout();
    }

    alterarSenha(){
      
    }
}