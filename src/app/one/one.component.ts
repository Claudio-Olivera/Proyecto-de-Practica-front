
import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';
@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css'],

})

export class ONEComponent implements OnInit {

  misDatos:any=[]
  ed:any=[]
  
  Educaciones:Educaciones[] = [];

  constructor(private datos:AuthService) {
  }
  
  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe((datos: any[])=>{
      this.misDatos.push(datos)}) 
    }
    
    generarTarjeta(){
      this.Educaciones.push(new Educaciones(this.ed[0],this.ed[1],this.ed[2]))
    }
    
    enviar(){
      const misDatos2 ={titulo:this.ed[0],nivelEducativo:this.ed[1],institucion:this.ed[2]}
      this.datos.sumarDatos(misDatos2).subscribe(data=>{console.log(data);});

      console.log("La tarjeta a sido guardada")
    }
    
    borrarTarjeta(identificador:any){  //le paso por parametro directamente el valor de identificador que saqué por ngModel del front
      this.datos.borrarDatos(identificador).subscribe((data:any[])=>{return data})

      console.log("La tarjeta con id: "+identificador+" a sido eliminada")
    }
    
  }
  
  export class Educaciones {
    titulo:string
    nivelEducativo: string
    institucion: string
    constructor(titulo:string = " " , nivelEducativo:string = " " , institucion:string= " "  ){
      this.titulo = titulo
      this.nivelEducativo = nivelEducativo
      this.institucion = institucion
    }
    
  }