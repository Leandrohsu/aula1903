import { Component, inject } from '@angular/core';
import { Turma } from '../../../models/turma';
import { TurmaService } from '../../../services/turma.service';

@Component({
  selector: 'app-turmas-list',
  standalone: true,
  imports: [],
  templateUrl: './turmas-list.component.html',
  styleUrl: './turmas-list.component.scss'
})
export class TurmasListComponent {
  lista: Turma[] = [];

  turmaService = inject(TurmaService);
  
    constructor(){
      this.findAll();
      
    }
    findAll(){
          this.turmaService.findAll().subscribe({
            next: (listaRetornada) => {
              this.lista = listaRetornada;
            },
            error: (erro) => {
              alert('Deu erro!');
            }
          });
        }
      
        delete(turma: Turma){
            if(confirm('Deseja deletar isso aí?')){
        
              this.turmaService.deleteById(turma.id).subscribe({
                next: (mensagem) => {
                  alert(mensagem);
                  this.findAll();
                },
                error: (erro) => {
                  alert('Deu erro!');
                }
              });
        
            }
          }
    }
  

