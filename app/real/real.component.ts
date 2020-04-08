import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-real',
  templateUrl: './real.component.html',
  styleUrls: ['./real.component.css']
})
export class RealComponent implements OnInit {
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  valorDigitado:any;
  valorReal:number = 3.74;
  numResult:number;
  realDolar:number;

  enviaReal(event){
    this.valorDigitado = event.target.value;
    let resultado = this.valorDigitado;
    this.numResult = Number(resultado);
    this.numResult = this.numResult / this.valorReal;
  }

  enviaDolar(event){
    this.valorDigitado = event.target.value;
    let resultado = this.valorDigitado;
    this.realDolar = Number(resultado);
    this.realDolar = this.realDolar * this.valorReal;
  }


}
