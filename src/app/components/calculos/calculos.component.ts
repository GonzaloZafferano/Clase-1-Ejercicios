import { Component } from '@angular/core';

@Component({
  selector: 'app-calculos',
  templateUrl: './calculos.component.html',
  styleUrls: ['./calculos.component.css']
})
export class CalculosComponent {
  edadUno : number = 0;
  edadDos : number = 0;
  sumaEdades : number = 0;
  promedioEdades : number = 0;
  Calcular(){
    this.sumaEdades = Number(this.edadUno) + Number(this.edadDos);
    this.promedioEdades = this.sumaEdades / 2;
  }
  Limpiar(){
    this.edadDos = 0;
    this.edadUno = 0;
    this.sumaEdades = 0;
    this.promedioEdades = 0;
  }
}
