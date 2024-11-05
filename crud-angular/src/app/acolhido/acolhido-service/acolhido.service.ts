import { HttpClient } from '@angular/common/http';
import { Acolhido } from './../model/acolhido';
import { Injectable } from '@angular/core';
import { first, Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AcolhidosService {

//  private readonly  API = '/src/app/acolhido/model/acolhidos.json';
  private readonly  API = 'http://localhost:8080/acolhido';

  acolhidos: Acolhido[] = [];

  constructor(private http: HttpClient) { };


  listarTudo(){
    return this.http.get<Acolhido[]>(this.API)
    .pipe(
      first(),
      tap(acolhidos => console.log(this.acolhidos))
    );
  }
  enviarCadastro(acolhido: Acolhido){
    return this.http.post('http://192.168.1.10:8080/acolhido',acolhido);
  }

/*
 listarTudo(): Acolhido[] {
     this.acolhidos = [
        {"email": "nome1@servidor.com", "name": "Hydrogen", "dataNascimento": "20-11-2017"},
        {"email": "nome10@servidor.com", "name": "Hydrogen", "dataNascimento": "20-11-2017"}
      ]

      return this.acolhidos;
    }
*/
}

