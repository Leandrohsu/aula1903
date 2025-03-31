import { Component, inject } from '@angular/core';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Aluno } from '../../../models/aluno';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunoService } from '../../../services/aluno.service';
import { Turma } from '../../../models/turma';
import { MdbModalModule , MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit';
import { TurmaService } from '../../../services/turma.service';
import Swal from 'sweetalert2';
import { TurmasListComponent } from '../../turma/turmas-list/turmas-list.component';


@Component({
  selector: 'app-alunos-form',
  standalone: true,
  imports: [MdbFormsModule, FormsModule, MdbModalModule, TurmasListComponent],
  templateUrl: './alunos-form.component.html',
  styleUrl: './alunos-form.component.scss'
})
export class AlunosFormComponent {

  @Input("aluno") aluno: Aluno = new Aluno();
  @Output("meuEvento") meuEvento = new EventEmitter(); //ELE VAI PEGAR QUALQUER COISA E EMITIR

  listaTurmas!: Turma[];

  rotaAtivida = inject(ActivatedRoute);
  roteador = inject(Router);
  alunoService = inject(AlunoService);
  turmaService = inject(TurmaService);

  @ViewChild("modalTurmasList") modalTurmasList!: TemplateRef<any>; //referência ao template da modal
  modalService = inject(MdbModalService); //para abrir a modal
  modalRef!: MdbModalRef<any>; //vc conseguir fechar a modal depois

  constructor(){
    let id = this.rotaAtivida.snapshot.params['id'];
    if(id){
      this.findById(id);
    }
  }
  findById(id: number){

    this.alunoService.findById(id).subscribe({
      next: (alunoRetorno) => {
        this.aluno = alunoRetorno;
      },
      error: (erro) => {
        alert('Deu erro!');
      }
    });

  }

  save(){
    if(this.aluno.id > 0){
      // UPDATE
      this.alunoService.update(this.aluno, this.aluno.id).subscribe({
        next: (mensagem) => {
          alert(mensagem);
          this.roteador.navigate(['admin/aluno']);
        },
        error: (erro) => {
          alert('Deu erro!');
        }
      });


    }else{
      // SAVE
      this.alunoService.save(this.aluno).subscribe({
        next: (mensagem) => {
          alert(mensagem);
          this.roteador.navigate(['admin/aluno']);
        },
        error: (erro) => {
          alert('Deu erro!');
        }
      });


    }
  }

  findAllTurmas(){

    this.turmaService.findAll().subscribe({
      next: (lista) => {
        this.listaTurmas = lista;
      },
      error: (erro) => {
        Swal.fire(erro.error, '', 'error');
      }
    });

  }

  compareId(a: Turma, b: Turma) {
    return a && b ? a.id === b.id : a === b;
  }



  meuEventoTratamento(turma: Turma){
    this.aluno.turma = turma;
    this.modalRef.close();
  }

  buscarTurma(){
    this.modalRef = this.modalService.open(this.modalTurmasList, {modalClass: 'modal-xl'});
  }

}