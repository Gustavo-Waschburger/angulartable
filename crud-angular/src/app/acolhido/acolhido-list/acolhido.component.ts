import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
''
import { AcolhidosService } from './../acolhido-service/acolhido.service';
import { Acolhido } from '../model/acolhido';



@Component({
  selector: 'app-acolhido',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './acolhido.component.html',
  styleUrl: './acolhido.component.css'
})


export class AcolhidoComponent implements OnInit{
 // acolhidos: Acolhido[] = [];
  acolhidos: Observable<Acolhido[]> ;
  displayedColums = ['name','email','dataNascimento'];

    //this.acolhidos = this.acolhidosService.listarTudo();
    //this.acolhidosService.listarTudo()

  constructor(private acolhidosService: AcolhidosService){
    this.acolhidos = acolhidosService.listarTudo();
  }
  ngOnInit(): void {
     // this.acolhidosService.listarTudo()
     // .subscribe(acolhidos => {this.acolhidos = acolhidos})
  }
}
