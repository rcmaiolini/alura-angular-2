import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import 'rxjs/add/operator/map';

import { AppComponent } from './app.component';

import { CadastroComponent } from './views/cadastro/cadastro.component';
import { ListagemComponent } from './views/listagem/listagem.component';

import { FotoModule } from './components/foto/foto.module';
import { PainelModule } from './components/painel/painel.module';

import { Routing } from './app.routes';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [ BrowserModule, FotoModule, HttpModule, PainelModule, Routing, FormsModule ],
    declarations: [ AppComponent, CadastroComponent, ListagemComponent ],
    bootstrap: [ AppComponent ]
})

export class AppModule {}