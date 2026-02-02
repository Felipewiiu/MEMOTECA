# Memoteca — Projeto Angular

Memoteca é uma aplicação web desenvolvida com **Angular** para cadastro, visualização e gerenciamento de pensamentos/frases.  
O projeto foi gerado utilizando Angular CLI e segue a estrutura padrão de aplicações Angular com separação de componentes e serviços.

---

## 🚀 Tecnologias Utilizadas

- Angular CLI 14
- TypeScript
- HTML / CSS
- RxJS
- Karma (testes unitários)

---

## ▶️ Como Executar o Projeto (Ambiente de Desenvolvimento)

Execute o comando abaixo para iniciar o servidor de desenvolvimento:

```bash
ng serve
```

Após iniciar, acesse no navegador:

```
http://localhost:4200/
```

A aplicação será recarregada automaticamente sempre que houver alteração nos arquivos-fonte.

---

## 🏗️ Geração de Código (Scaffolding)

Para criar novos elementos no projeto usando o Angular CLI:

### Criar um componente

```bash
ng generate component nome-do-componente
```

### Criar outros recursos

```bash
ng generate directive|pipe|service|class|guard|interface|enum|module
```

### Exemplo — gerar um serviço

```bash
ng g s componentes/pensamentos/pensamento
```

---

## 📦 Build da Aplicação

Para gerar a versão de produção:

```bash
ng build
```

Os arquivos gerados ficarão no diretório:

```
dist/
```

---

## 🧪 Testes

### Testes unitários

Executa os testes com Karma:

```bash
ng test
```

### Testes end-to-end (E2E)

```bash
ng e2e
```

> ⚠️ É necessário instalar previamente um pacote de testes E2E.

---

## 🧠 Conceitos Angular Utilizados

### Property Binding

Permite associar valores do componente (TypeScript) diretamente aos elementos do template (HTML).

**Exemplo:**

```html
[value]="pensamento.conteudo"
```

---

### Event Binding

Permite associar eventos do HTML a métodos do componente.

**Exemplo:**

```html
<button (click)="criarPensamento()" class="botao">
  Salvar
</button>
```

---

### Two-Way Data Binding

Permite troca bidirecional de dados entre o template e o componente.  
O valor é atualizado no componente e refletido na tela automaticamente.

---

## 🧩 Diretivas Angular Utilizadas

Diretivas são responsáveis por alterar comportamento ou estrutura dos elementos HTML.

Principais diretivas usadas:

- `ngIf` — renderização condicional
- `ngFor` — repetição de elementos
- `ngClass` — aplicação dinâmica de classes CSS

---

## 🔧 Serviços (Services)

Serviços em Angular são usados para:

- Centralizar regras de negócio
- Realizar chamadas HTTP
- Compartilhar dados entre componentes
- Reduzir acoplamento

Eles são injetados nos componentes por **injeção de dependência**.

---

## 📚 Ajuda da Angular CLI

Para ver todos os comandos disponíveis:

```bash
ng help
```

Documentação oficial:

https://angular.io/cli
