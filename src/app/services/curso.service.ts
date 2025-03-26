import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Curso } from '../models/curso';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  http = inject(HttpClient);
  API = 'http://localhost:8080/api/curso';

  constructor() { }

  findAll(): Observable<Curso[]>{
    return this.http.get<Curso[]>(this.API+'/findAll');
  }

  findById(id: number): Observable<Curso>{
    return this.http.get<Curso>(this.API+'/findById/'+id)
  }

  deleteById(id: number): Observable<string>{
    return this.http.delete<string>(this.API+'/deleteById/'+id, {responseType: 'text' as 'json'})
  }

  save(curso: Curso): Observable<string> {
    return this.http.post<string>(this.API+'/save', curso, {responseType: 'text' as 'json'})
  }

  update(curso: Curso, id: number): Observable<string> {
    return this.http.put<string>(this.API+'/update/'+id, curso, {responseType: 'text' as 'json'})
  }
  buscarPorNome(nome: string): Observable<Curso[]>{
    let pars = new HttpParams().set('nome', nome);
    return this.http.get<Curso[]>(this.API+'/buscarPorNome',{params:pars});

  }
  

}
