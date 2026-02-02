# Memoteca

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Fluxo de dados entre componentes

### PROPERTY BINDING
A classe de TS é a responsável por adicionar comportameno aos elementos da página.
uma forma de associar dados seria usando o PROPERTY BINDING

````
  [value]="pensamento.conteudo"
````

### EVENT BINDING

È a forma de associar eventos ao HTML

````
 <button (click)="criarPensamento()" class="botao">Salvar</button>
````

### Two-way Data Binding

Seria como se fosse uma troca de dados entre o componente e template.

## Diretiva

Diretivas são classes que conseguem modificar os elementos em uma aplicação Angular. Podemos destacar algumas como:

* ngFor
* ngClass
* ngIf
* ngFor

## Criação do componente de serviço

Um componente de serviço serve para armazenar a lógica de negócio da aplicação:

````
 ng g s componentes/pensamentos/pensamento
````
