import { Component, inject } from '@angular/core';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Aluno } from '../../../models/aluno';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunoService } from '../../../services/aluno.service';

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
  alunoService = inject(AlunoService);
  roteador = inject(Router);

  constructor(){
    let id = this.rotaAtivida.snapshot.params['id'];
    if(id){
      this.findById(id);
    }
  }
  findById(id: number){
    this.alunoService.findById(id).subscribe({
      next: (alunoRetornando) => {
        this.aluno = alunoRetornando;
      },
      error:  (erro) => {
        alert('Deu Ruim!!!');
      }
    })
  }
  save(){
    if(this.aluno.id > 0){
      this.alunoService.update(this.aluno,this.aluno.id).subscribe({
      next: (mensagem) => {
        alert(mensagem);
        this.roteador.navigate(['admin/aluno']);
      },
      error: (erro) =>{
        alert('Deu Ruim!!');
      }
    });

    }else{
      this.alunoService.save(this.aluno).subscribe({
        next: (mensagem) => {
          alert(mensagem);
          this.roteador.navigate(['admin/aluno']);
        },
        error: (erro) => {
          alert('Deu Ruim!');
        }
      })
    }
  }
}
