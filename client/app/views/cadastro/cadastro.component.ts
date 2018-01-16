import { Component } from '@angular/core';
import { FotoComponent } from '../../components/foto/foto.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FotoService } from './../../components/foto/foto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})

export class CadastroComponent {

    foto: FotoComponent = new FotoComponent();
    meuForm: FormGroup;
    service: FotoService;
    route: ActivatedRoute;
    router: Router;
    mensagem: string = '';

    constructor(service: FotoService, fb: FormBuilder, route: ActivatedRoute, router: Router) {

        this.service = service;

        this.router = router;

        this.route = route;
        this.route.params.subscribe(params => {
            let id = params['id'];
            if(id) {
                this.service
                .edita(id)
                .subscribe(
                    foto => this.foto = foto,
                    error => console.log(error)
                );
            }
        });
        
        this.meuForm = fb.group({
            titulo: ['', 
                Validators.compose([
                    Validators.required,
                    Validators.minLength(4)
                ])
            ],
            url: ['', Validators.required],
            descricao: ['']
        });
    }

    cadastrar(event) {
        event.preventDefault();

        this.service.cadastra(this.foto)
                    .subscribe(res => {
                        this.foto = new FotoComponent();
                        this.mensagem = res.mensagem;
                        if(!res.inclusao) this.router.navigate(['/']);
                    }, error => console.log(error));
    }
}
