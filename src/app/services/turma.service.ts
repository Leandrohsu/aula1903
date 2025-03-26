import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Turma } from '../models/turma';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  http = inject(HttpClient);
    API = 'http://localhost:8080/api/turma';
  
    constructor() { }
  
    findAll(): Observable<Turma[]>{
      return this.http.get<Turma[]>(this.API+'/findAll');
    }
  
    findById(id: number): Observable<Turma>{
      return this.http.get<Turma>(this.API+'/findById/'+id)
    }
  
    deleteById(id: number): Observable<string>{
      return this.http.delete<string>(this.API+'/deleteById/'+id, {responseType: 'text' as 'json'})
    }
  
    save(turma: Turma): Observable<string> {
      return this.http.post<string>(this.API+'/save', turma, {responseType: 'text' as 'json'})
    }
  
    update(turma: Turma, id: number): Observable<string> {
      return this.http.put<string>(this.API+'/update/'+id, turma, {responseType: 'text' as 'json'})
    }
    buscarporano(anoInicio: number, anoFim: number): Observable<Turma[]>{
      let pars = new HttpParams().set('anoInicio', anoInicio).set('anoFim',anoFim);
      return this.http.get<Turma[]>(this.API+'/buscar-por-ano',{params:pars});
  
    }
    buscarPorSemestreeano(semestre: number, ano: number): Observable<Turma[]>{
      let pars = new HttpParams().set('semestre', semestre).set('ano', ano);
      return this.http.get<Turma[]>(this.API+'/buscar-por-semestre-e-ano',{params:pars});
    }
    buscarPorNomeeTurma(nome: string, turno: string): Observable<Turma[]>{
      let pars = new HttpParams().set('nome', nome).set('turno', turno);
      return this.http.get<Turma[]>(this.API+'/buscar-por-nome-e-turno',{params:pars});
      
    }
  
}
