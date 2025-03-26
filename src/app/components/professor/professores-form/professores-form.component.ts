
import { Component, inject } from '@angular/core';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Professor } from '../../../models/professor';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfessorService } from '../../../services/professor.service';


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
  roteador = inject(Router);
  professorService = inject(ProfessorService);

  constructor(){
    let id = this.rotaAtivida.snapshot.params['id'];
    if(id){
      this.findById (id);
    }
  }
  findById(id: number){
    this.professorService.findById(id).subscribe({
      next: (professorRetornando) => {
        this.professor = professorRetornando;
      },
      error:  (erro) => {
        alert('Deu Ruim!!!');
      }
    })
  }
  save(){
    if(this.professor.id > 0){
      this.professorService.update(this.professor,this.professor.id).subscribe({
      next: (mensagem) => {
        alert(mensagem);
        this.roteador.navigate(['admin/professor']);
      },
      error: (erro) =>{
        alert('Deu Ruim!!');
      }
    });

    }else{
      this.professorService.save(this.professor).subscribe({
        next: (mensagem) => {
          alert(mensagem);
          this.roteador.navigate(['admin/professor']);
        },
        error: (erro) => {
          alert('Deu Ruim!');
        }
      })
    }
  }
 
}
