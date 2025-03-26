import { Component, inject } from '@angular/core';
import { Aluno } from '../../../models/aluno';
import { AlunoService } from '../../../services/aluno.service';

@Component({
  selector: 'app-alunos-list',
  standalone: true,
  imports: [],
  templateUrl: './alunos-list.component.html',
  styleUrl: './alunos-list.component.scss'
})
export class AlunosListComponent {

  lista: Aluno[] = [];
  
  alunoService = inject(AlunoService);

  constructor() {
    this.findAll();
  }


  findAll(){
   
    this.alunoService.findAll().subscribe({
      next: (listaRetornada) => {
        this.lista = listaRetornada;
      },
      error: (erro) => {
        alert('Deu erro!');
      }
    });
  
  }

  delete(aluno: Aluno){
    if(confirm('Deseja deletar isso aí?')){

      this.alunoService.deleteById(aluno.id).subscribe({
        next: (mensagem) => {
          alert(mensagem);
          this.findAll();
        },
        error: (erro) => {
          alert('Deu erro!');
        }
      });

    }
  }
}
