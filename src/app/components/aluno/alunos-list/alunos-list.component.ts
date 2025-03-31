import { Component, inject } from '@angular/core';
import { Aluno } from '../../../models/aluno';
import { AlunoService } from '../../../services/aluno.service';
import Swal from 'sweetalert2';
import { MdbModalModule, MdbModalRef, MdbModalService } from '../alunos-form/alunos-form.component';

@Component({
  selector: 'app-alunos-list',
  standalone: true,
  imports: [],
  templateUrl: './alunos-list.component.html',
  styleUrl: './alunos-list.component.scss'
})
export class AlunosListComponent {

  lista: Aluno[] = [];
  pesquisa: string = "";
  alunoEdit!: Aluno;

  @ViewChild("modalAlunoForm") modalAlunoForm!: TemplateRef<any>; //referência ao template da modal
  modalService = inject(MdbModalService); //para abrir a modal
  modalRef!: MdbModalRef<any>; //vc conseguir fechar a modal depois


  alunoService = inject(AlunoService);
  constructor(){
    this.findAll();
  }


  findAll(){

    this.alunoService.findAll().subscribe({
      next: (listaRetornada) => {
        this.lista = listaRetornada;
      },
      error: (erro) => {
        Swal.fire(erro.error, '', 'error');
      }
    });
  
  }

  delete(aluno: Aluno){

    Swal.fire({
      title: 'Deseja mesmo deletar?',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {

        this.alunoService.deleteById(aluno.id).subscribe({
          next: (mensagem) => {
            Swal.fire(mensagem, '', 'success');
            this.findAll();
          },
          error: (erro) => {
            Swal.fire(erro.error, '', 'error');
          }
        });
        
      }
    });
      

  }

  new(){ //ABRIR
    this.alunoEdit = new Aluno(); 
    this.modalRef = this.modalService.open(this.modalAlunoForm, { modalClass: 'modal-xl'});
  }

  edit(aluno: Aluno){
    this.alunoEdit = aluno;
    this.modalRef = this.modalService.open(this.modalAlunoForm, { modalClass: 'modal-xl'});
  }

  meuEventoTratamento(mensagem:any){
    this.findAll();
    this.modalRef.close();
  }
}
