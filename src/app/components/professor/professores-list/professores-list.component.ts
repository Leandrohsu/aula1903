import { Component } from '@angular/core';
import { Professor } from '../../../models/professor';

@Component({
  selector: 'app-professores-list',
  standalone: true,
  imports: [],
  templateUrl: './professores-list.component.html',
  styleUrl: './professores-list.component.scss'
})
export class ProfessoresListComponent {
  lista: Professor[] = [];
  
    constructor(){
      this.findAll();
      
    }
    findAll(){
      let professor1 = new Professor();
      professor1.id = 1;
      professor1.nome = 'Joao';
      professor1.cpf = '999.999.999-99';
      professor1.email = 'joao@goat.com.br';
      professor1.especialidade = 'Cyberseguranca';
  
      let professor2 = new Professor();
      professor2.id = 2;
      professor2.nome = 'Pedro';
      professor2.cpf = '900.000.000.09';
      professor2.email = 'pedro@goal.com.br';
      professor2.especialidade = 'Leis Trabalhistas';
  
      let professor3 = new Professor();
      professor3.id = 3;
      professor3.nome = 'Luiz';
      professor3.cpf = '899.888.888-88';
      professor3.email = 'luiz@google.com.br';
      professor3.especialidade = 'Matematica';
      
      this.lista.push(professor1,professor2,professor3);
    }
  
    delete(professor: Professor){
      let indice = this.lista.findIndex(x => {return x.id == professor.id});
      if(confirm('Deseja deletar?')){
        this.lista.splice(indice, 1);
      }
    }

}
