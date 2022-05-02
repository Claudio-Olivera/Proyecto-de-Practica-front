import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Educaciones, ONEComponent } from './one/one.component';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url:string = "https://pruebitass.herokuapp.com/";
  currentUserSubject:BehaviorSubject<any>;
  constructor(private http:HttpClient) { 
    console.log("El servicio de autenticacion esta corriendo");
    this.currentUserSubject=new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('current user') || '{}'))
  }

  obtenerDatos():Observable<any>{
    return this.http.get(this.url+"ver/educacion"); //aca va la url request de datos
  }

   sumarDatos(arr : Educaciones):Observable<any>{
    return this.http.post<Educaciones>(this.url+"new/educacion", arr);
    }
  
    borrarDatos(id:any):Observable<any>{
      return this.http.delete(this.url+"borrarEducacion/"+id)
    }

    editarDatos(arr:edu, id:any):Observable<any>{
      return this.http.put(this.url+ "modEducacion/"+id, arr)
    }

}
export interface edu {
  id : number;
  titulo:string;
  nivelEducativo: String;
  institucion:String;
}