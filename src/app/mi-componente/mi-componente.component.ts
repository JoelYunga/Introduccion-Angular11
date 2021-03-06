import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})
export class MiComponenteComponent implements OnInit {

  edad:number;
  nombres:Array<string>;

  constructor() {
    this.edad = 19;
    this.nombres = ['Victor','Paco','Pepe','Manolo'];
  }

  ngOnInit(): void {
    console.log('Componente mi-componente cargado')
  }

  aumentarEdad(){
    this.edad = this.edad + 1;
    console.log("Aumentar")
  }

  disminuirEdad(){
    this.edad = this.edad - 1;
    console.log("Disminuir")
  }

}
