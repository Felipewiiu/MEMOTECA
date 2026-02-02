import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pensamento } from './Pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
  // providedIn: 'root' registra o service no injetor raiz,
// deixando uma única instância disponível em toda a aplicação (singleton)
})
export class PensamentoService {

  private readonly API = '  http://localhost:3000/pensamentos'
  constructor(private http: HttpClient) { }
  // Aqui ocorre injeção de dependência.
// O Angular fornece o HttpClient automaticamente,
// evitando criar a instância manualmente e reduzindo acoplamento.


listar(): Observable<Pensamento[]> {
  return this.http.get<Pensamento[]>(this.API)
}

criar(pensamento : Pensamento): Observable<Pensamento> {
  return this.http.post<Pensamento>(this.API, pensamento);
}

editar(pensamento: Pensamento) : Observable<Pensamento> {
  const url = `${this.API}/${pensamento.id}`

  return this.http.put<Pensamento>(url, pensamento)
}


excluir(id: number) : Observable<Pensamento>{
  const url = `${this.API}/${id}`

  return this.http.delete<Pensamento>(url);
}

buscarPorId(id: number) : Observable<Pensamento> {
  const url = `${this.API}/${id}`

  return this.http.get<Pensamento>(url)
}



}
