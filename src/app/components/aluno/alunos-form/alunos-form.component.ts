import { Component, inject } from '@angular/core';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Aluno } from '../../../models/aluno';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alunos-form',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './alunos-form.component.html',
  styleUrl: './alunos-form.component.scss'
})
export class AlunosFormComponent {
  aluno: Aluno = new Aluno();
  rotaAtivida = inject(ActivatedRoute);
  constructor(){
    let id = this.rotaAtivida.snapshot.params['id'];
    if(id){
      let aluno1 = new Aluno();
      aluno1.id = 1;
      aluno1.nome = 'Joao';
      aluno1.cpf = '999999999-99';
      aluno1.telefone = '99999-9999';
      this.aluno = aluno1;
    }
  }
  save(){
    if(this.aluno && this.aluno.id > 0){
      alert('estou fazendo atualizacao...');
    }else{
      alert('Salvando');
    }
  }
}
