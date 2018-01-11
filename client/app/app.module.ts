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

@NgModule({
    imports: [ BrowserModule, FotoModule, HttpModule, PainelModule, Routing ],
    declarations: [ AppComponent, CadastroComponent, ListagemComponent ],
    bootstrap: [ AppComponent ]
})

export class AppModule {}