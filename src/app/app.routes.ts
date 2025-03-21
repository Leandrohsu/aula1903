import { Routes } from '@angular/router';
import { LoginComponent } from './components/layout/login/login.component';
import { PrincipalComponent } from './components/layout/principal/principal.component';
import { AlunosListComponent } from './components/aluno/alunos-list/alunos-list.component';
import { AlunosFormComponent } from './components/aluno/alunos-form/alunos-form.component';
import { CursosListComponent } from './components/curso/cursos-list/cursos-list.component';
import { TurmasFormComponent } from './components/turma/turmas-form/turmas-form.component';
import { TurmasListComponent } from './components/turma/turmas-list/turmas-list.component';
import { ProfessoresFormComponent } from './components/professor/professores-form/professores-form.component';
import { ProfessoresListComponent } from './components/professor/professores-list/professores-list.component';
import { CursosFormComponent } from './components/curso/cursos-form/cursos-form.component';

export const routes: Routes = [
    {path:"", redirectTo: "login", pathMatch: 'full'},
    {path: "login", component: LoginComponent},
    {path: "admin", component: PrincipalComponent,children:[
        {path: "aluno", component: AlunosListComponent},
        {path: "aluno/new", component: AlunosFormComponent},
        {path: "aluno/edit/:id", component: AlunosFormComponent},
        {path: "professor", component: ProfessoresListComponent},
        {path: "professor/new", component: ProfessoresFormComponent},
        {path: "professor/edit/:id", component: ProfessoresFormComponent},
        {path: "turma", component: TurmasListComponent},
        {path: "turma/new", component: TurmasFormComponent},
        {path: "turma/edit/:id", component: TurmasFormComponent},
        {path: "curso", component: CursosListComponent},
        {path: "curso/new", component: CursosFormComponent},
        {path: "curso/edit/:id", component: CursosFormComponent}
    ]}

];
