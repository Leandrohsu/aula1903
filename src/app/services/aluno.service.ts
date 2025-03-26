import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from '../models/aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  http = inject(HttpClient);
  API = 'http://localhost:8080/api/aluno';

  constructor() { }

  findAll(): Observable<Aluno[]>{
    return this.http.get<Aluno[]>(this.API+'/findAll');
  }

  findById(id: number): Observable<Aluno>{
    return this.http.get<Aluno>(this.API+'/findById/'+id)
  }

  deleteById(id: number): Observable<string>{
    return this.http.delete<string>(this.API+'/deleteById/'+id, {responseType: 'text' as 'json'})
  }

  save(aluno: Aluno): Observable<string> {
    return this.http.post<string>(this.API+'/save', aluno, {responseType: 'text' as 'json'})
  }

  update(aluno: Aluno, id: number): Observable<string> {
    return this.http.put<string>(this.API+'/update/'+id, aluno, {responseType: 'text' as 'json'})
  }
  buscarPorNome(nome: string): Observable<Aluno[]>{
    let pars = new HttpParams().set('nome', nome);
    return this.http.get<Aluno[]>(this.API+'/buscar-por-nome',{params:pars});

  }
  buscarPorTelefone(telefone: string): Observable<Aluno[]>{
    let pars = new HttpParams().set('telefone', telefone);
    return this.http.get<Aluno[]>(this.API+'/buscar-por-telefone',{params:pars});
  }
  buscarPorturma(nomeTurma: string): Observable<Aluno[]>{
    let pars = new HttpParams().set('nomeTurma', nomeTurma);
    return this.http.get<Aluno[]>(this.API+'/buscar-por-turma',{params:pars});
    
  }

}
