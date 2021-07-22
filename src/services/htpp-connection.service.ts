import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpConnection{
    constructor(private htpp: HttpClient){}

    getBarbeiros(): Observable<any>{
        return this.htpp.get('/api/usuario/');
    }

    getHorarioDisponivel(){
        return this.htpp.get('/api/horariodisponivel/');
    }
}