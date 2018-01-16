import { Component } from '@angular/core';
import { FotoService } from './../../components/foto/foto.service';
import { FotoComponent } from '../../components/foto/foto.component';
import { PainelComponent } from './../../components/painel/painel.component';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})

export class ListagemComponent {

    fotos: FotoComponent[] = [];
    service: FotoService;
    mensagem: string = '';

    constructor(service: FotoService) {

        this.service = service;

        this.service.lista().subscribe(fotos => {
            this.fotos = fotos;
            console.log(this.fotos);
        }, error => console.log(error));

    }

    remover(foto: FotoComponent, painel: PainelComponent) {
        this.service
            .remove(foto)
            .subscribe(
                () => {
                    painel.fadeOut(() => {
                        let novasFotos = this.fotos.slice(0);
                        let indice = novasFotos.indexOf(foto);
                        novasFotos.splice(indice, 1);
                        this.fotos = novasFotos;
                        this.mensagem = 'Foto removida com sucesso.';
                    });
                },
                error => { 
                    console.log(error);
                    this.mensagem = 'Não foi possivel remover a foto.';
                }
            );
    }
}
