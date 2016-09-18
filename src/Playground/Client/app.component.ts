import { Component } from '@angular/core';
import {UserService} from'./services/user.service';

@Component({
    selector: 'my-app',
    template: require('./app.component.html'),
    styleUrls: [require('./app.component.scss')]
})
export class AppComponent { 
    constructor(public userService : UserService){

    }
}