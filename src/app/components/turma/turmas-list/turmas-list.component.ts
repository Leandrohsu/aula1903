import { Component } from '@angular/core';
import { Turma } from '../../../models/turma';

@Component({
  selector: 'app-turmas-list',
  standalone: true,
  imports: [],
  templateUrl: './turmas-list.component.html',
  styleUrl: './turmas-list.component.scss'
})
export class TurmasListComponent {
  lista: Turma[] = [];
  
    constructor(){
      this.findAll();
      
    }
    findAll(){
      let turma1 = new Turma();
      turma1.id = 1;
      turma1.nome = 'ADS';
      turma1.semestre = 2;
      turma1.ano = 2000;
      turma1.turno = 'noturno';
  
      let turma2 = new Turma();
      turma2.id = 2;
      turma2.nome = 'ADM';
      turma2.semestre = 1;
      turma2.ano = 2020;
      turma2.turno = 'noturno';
  
      let turma3 = new Turma();
      turma3.id = 3;
      turma3.nome = 'DIREITO';
      turma3.semestre = 5;
      turma3.ano = 2025;
      turma3.turno = 'noturno';
      
      this.lista.push(turma1,turma2,turma3);
    }
  
    delete(turma: Turma){
      let indice = this.lista.findIndex(x => {return x.id == turma.id});
      if(confirm('Deseja deletar?')){
        this.lista.splice(indice, 1);
      }
    }

}
