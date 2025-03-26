import { Component, inject} from '@angular/core';
import { Curso } from '../../../models/curso';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoService } from '../../../services/curso.service';

@Component({
  selector: 'app-cursos-form',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './cursos-form.component.html',
  styleUrl: './cursos-form.component.scss'
})
export class CursosFormComponent {
  curso: Curso = new Curso();
    rotaAtivida = inject(ActivatedRoute);
    roteador = inject(Router);
    cursoService = inject(CursoService);
    constructor(){
      let id = this.rotaAtivida.snapshot.params['id'];
      if(id){
        this.findById(id);
      }
    }
    findById(id: number){
      this.cursoService.findById(id).subscribe({
        next: (cursoRetornando) => {
          this.curso = cursoRetornando;
        },
        error:  (erro) => {
          alert('Deu Ruim!!!');
        }
      })
    }
    save(){
      if(this.curso.id > 0){
        this.cursoService.update(this.curso,this.curso.id).subscribe({
        next: (mensagem) => {
          alert(mensagem);
          this.roteador.navigate(['admin/curso']);
        },
        error: (erro) =>{
          alert('Deu Ruim!!');
        }
      });
  
      }else{
        this.cursoService.save(this.curso).subscribe({
          next: (mensagem) => {
            alert(mensagem);
            this.roteador.navigate(['admin/curso']);
          },
          error: (erro) => {
            alert('Deu Ruim!');
          }
        })
      }
    }
   

}
