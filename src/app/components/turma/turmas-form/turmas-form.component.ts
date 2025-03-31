import { Component , inject} from '@angular/core';
import { Turma } from '../../../models/turma';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TurmaService } from '../../../services/turma.service';

@Component({
  selector: 'app-turmas-form',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './turmas-form.component.html',
  styleUrl: './turmas-form.component.scss'
})
export class TurmasFormComponent {
  turma: Turma = new Turma();
    
  rotaAtivida = inject(ActivatedRoute);
  roteador = inject(Router);
  turmaService = inject(TurmaService);

  constructor(){
    let id = this.rotaAtivida.snapshot.params['id'];
      if(id){
        this.findById(id);
      }
  }
  findById(id: number){

    this.turmaService.findById(id).subscribe({
      next: (turmaRetorno) => {
        this.turma = turmaRetorno;
      },
      error: (erro) => {
        alert('Deu erro!');
      }
    });
  
  }
  
  save(){
    if(this.turma.id > 0){
      this.turmaService.update(this.turma, this.turma.id).subscribe({
        next: (mensagem) => {
          alert(mensagem);
          this.roteador.navigate(['admin/turma']);
        },
        error: (erro) => {
          alert('Deu erro!');
        }
      });
  
  
    }else{
      // SAVE
      this.turmaService.save(this.turma).subscribe({
        next: (mensagem) => {
          alert(mensagem);
          this.roteador.navigate(['admin/turma']);
        },
        error: (erro) => {
          alert('Deu erro!');
        }
      });
  
  
    }
  }

}
