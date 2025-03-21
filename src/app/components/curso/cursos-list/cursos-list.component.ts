import { Component } from '@angular/core';
import { Curso } from '../../../models/curso';

@Component({
  selector: 'app-cursos-list',
  standalone: true,
  imports: [],
  templateUrl: './cursos-list.component.html',
  styleUrl: './cursos-list.component.scss'
})
export class CursosListComponent {
  lista: Curso[] = [];
  
    constructor(){
      this.findAll();
      
    }
    findAll(){
      let curso1 = new Curso();
      curso1.id = 1;
      curso1.nome = 'ADM';

      let curso2 = new Curso();
      curso2.id = 2;
      curso2.nome = 'DIREITO';

      let curso3 = new Curso();
      curso3.id = 1;
      curso3.nome = 'AGRONOMIA';
      
  
      
      
      this.lista.push(curso1,curso2,curso3);
    }
  
    delete(curso: Curso){
      let indice = this.lista.findIndex(x => {return x.id == curso.id});
      if(confirm('Deseja deletar?')){
        this.lista.splice(indice, 1);
      }
    }

}
