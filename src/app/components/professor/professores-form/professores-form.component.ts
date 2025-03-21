
import { Component, inject } from '@angular/core';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Professor } from '../../../models/professor';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-professores-form',
  standalone: true,
  imports: [ MdbFormsModule , FormsModule ],
  templateUrl: './professores-form.component.html',
  styleUrl: './professores-form.component.scss'
})
export class ProfessoresFormComponent {
professor: Professor = new Professor();
  rotaAtivida = inject(ActivatedRoute);
  constructor(){
    let id = this.rotaAtivida.snapshot.params['id'];
    if(id){
      let professor1 = new Professor();
      professor1.id = 1;
      professor1.nome = 'Joao';
      professor1.cpf = '999999999-99';
      professor1.email = 'joao@joao.com.br';
      professor1.especialidade = 'Cyberseguranca'
      this.professor = professor1;
    }
  }
  save(){
    if(this.professor && this.professor.id > 0){
      alert('estou fazendo atualizacao...');
    }else{
      alert('Salvando');
    }
  }
}
