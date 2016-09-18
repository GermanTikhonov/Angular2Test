import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

    name = 'notSetted'
    constructor() { }

    setName(name : string){
        this.name = name;
    }
}