import { Component } from '@angular/core';
import { Aluno } from '../../../models/aluno';

@Component({
  selector: 'app-alunos-list',
  standalone: true,
  imports: [],
  templateUrl: './alunos-list.component.html',
  styleUrl: './alunos-list.component.scss'
})
export class AlunosListComponent {

  lista: Aluno[] = [];

  constructor(){
    this.findAll();
    
  }
  findAll(){
    let aluno1 = new Aluno();
    aluno1.id = 1;
    aluno1.nome = 'Joao';
    aluno1.cpf = '999.999.999-99';
    aluno1.telefone = '99999-9999';

    let aluno2 = new Aluno();
    aluno2.id = 2;
    aluno2.nome = 'Pedro';
    aluno2.cpf = '900.000.000.09';
    aluno2.telefone = '99999-0000';

    let aluno3 = new Aluno();
    aluno3.id = 3;
    aluno3.nome = 'Luiz';
    aluno3.cpf = '899.888.888-88';
    aluno3.telefone = '99999-1111';
    
    this.lista.push(aluno1,aluno2,aluno3);
  }

  delete(aluno: Aluno){
    let indice = this.lista.findIndex(x => {return x.id == aluno.id});
    if(confirm('Deseja deletar?')){
      this.lista.splice(indice, 1);
    }
  }
}
