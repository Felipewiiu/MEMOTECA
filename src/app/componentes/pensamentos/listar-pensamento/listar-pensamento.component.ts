import { PensamentoService } from './../pensamento.service';
import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos: Pensamento[] = [];
  paginaAtual: number = 1;
  haMaisPensamentos: boolean = true;
  filtro : string = '';
  favorito : boolean = false;
  listaFavorito : Pensamento[] = []
  titulo : string = 'Meu Mural';

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
    this.service.listar(this.paginaAtual, this.filtro, this.favorito).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
    })
  }

  carregarMaisPensamentos() {
    this.service.listar(++this.paginaAtual, this.filtro, this.favorito)
      .subscribe(listaPensamentos => {
        this.listaPensamentos.push(...listaPensamentos);
        console.log(listaPensamentos)
        if(!listaPensamentos.length) {
          this.haMaisPensamentos = false
        }
      })
  }

  pesquisarPensamentos(){
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;

    this.service.listar(this.paginaAtual, this.filtro, this.favorito).subscribe(listaDePensamentos =>{
        this.listaPensamentos = listaDePensamentos;
    })
  }

  listarFavorito(){
    this.titulo = 'Meus Favoritos'
    this.favorito = true
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;

    this.service.listar(this.paginaAtual, this.filtro, this.favorito).subscribe(listaPensamentos => {
      this.listaPensamentos = listaPensamentos;
      this.listaFavorito = listaPensamentos;
    })
  }

  listarPensamento(){
    this.titulo = 'Meus Mural'
    this.paginaAtual = 1;
    this.favorito = false;

    this.service.listar(this.paginaAtual, this.filtro, this.favorito).subscribe(listaPensamentos => {
      this.listaPensamentos = listaPensamentos;
    })
  }
}

