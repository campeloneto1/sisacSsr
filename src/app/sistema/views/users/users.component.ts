import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Users } from "./user";
import { Observable } from "rxjs";
import { UsersService } from "./users.service";
import { TitleComponent } from "../../components/title/title.component";

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrl: './users.component.css',
    standalone: true,
    imports: [CommonModule, TitleComponent],
    providers:[UsersService]
})
export class UsersComponent implements OnInit{

    protected users!: Observable<Users>

    constructor(private usersService:UsersService){}

    ngOnInit(): void {
        this.users = this.usersService.index();
    }

}