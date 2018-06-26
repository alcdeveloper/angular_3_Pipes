import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = "Fernando";
  nombre2 = "fernando alberto heRRera jimenez";
  arreglo = [1,2,3,4,5,6,7,8,9,10];
  PI = Math.PI;

  a = 0.234;

  salario = 1234.5;

  heroe = {
  	nombre:"logan",
  	clave:"wolverine",
  	edad:500,
  	direccion:{
  		calle:"primera",
  		numero:"19"
  	}
  };

varlorDePromesa = new Promise ( ( resolve, reject) =>{
		setTimeout( ()=>resolve("llego la data!"),3500);
});

fecha = new Date();


video = "mOeSfOJrUIk";

activar:boolean = true;

}
