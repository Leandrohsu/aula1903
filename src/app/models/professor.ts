import { Turma } from "./turma";
export class Professor {
    id!: number;
    nome!: string;
    cpf!: string;
    email!: string;
    especialidade!: string;

    turma!: Turma[];
    
}
