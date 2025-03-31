import { Curso } from "./curso";
import { Professor } from "./professor";
export class Turma {
    id!: number;
    nome!: string;
    semestre!: number;
    ano!: number;
    turno!: string;

    curso!: Curso;
    professor!: Professor;
    
}
