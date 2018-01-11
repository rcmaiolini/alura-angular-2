import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { ListagemComponent } from './views/listagem/listagem.component';
import { Route } from '@angular/router/src/config';

const appRoutes: Routes = [

    { path: '', component: ListagemComponent },
    { path: 'listagem', component: ListagemComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: '**', component: ListagemComponent }

];

export const Routing = RouterModule.forRoot(appRoutes);