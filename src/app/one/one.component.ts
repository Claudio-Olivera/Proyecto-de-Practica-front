
import { Component, OnInit } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

import { AuthService } from '../auth.service';
@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css'],

})

export class ONEComponent implements OnInit {

  misDatos:any=[]
  ed:any=[]
  varsa:edu={id:0, titulo:'', nivelEducativo: ' ', institucion: ' '}
 
  Educaciones:Educaciones[] = [];
  

  constructor(private datos:AuthService) {
  }
  
  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe((datos: any[])=>{
      this.misDatos.push(datos)}) 
    /*   console.log(this.misDatos) */
    }
    
    generarTarjeta(){
      this.Educaciones.push(new Educaciones(this.ed[0],this.ed[1],this.ed[2]))
    }
    
    enviar(){
      const misDatos2 ={titulo:this.ed[0],nivelEducativo:this.ed[1],institucion:this.ed[2]}
      this.datos.sumarDatos(misDatos2).subscribe(data=>{console.log(data);});
      console.log("La tarjeta a sido guardada")
    }
    
    borrarTarjeta(){  //le paso por parametro directamente el valor de identificador que saqué por ngModel del front
      this.datos.borrarDatos(this.varsa.id).subscribe((data:any[])=>{return data})
      console.log("La tarjeta con id: "+this.varsa.id+" a sido eliminada")
    }
    editar(id:any,x:any,l:any,r:any){
      this.varsa.id=id
    /*   console.log(x,l,r) */
      this.varsa.titulo=x
      this.varsa.nivelEducativo=l
      this.varsa.institucion=r
    }
    
    editarTarjeta(){
  /*   console.log("acaaaa"+" "+this.varsa.titulo+" "+this.varsa.institucion+" "+this.varsa.nivelEducativo) */
    this.datos.editarDatos(this.varsa,this.varsa.id).subscribe(data=>{console.log (data);});
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
export interface edu {
  id:number;
  titulo:string;
  nivelEducativo: String;
  institucion:String;
}