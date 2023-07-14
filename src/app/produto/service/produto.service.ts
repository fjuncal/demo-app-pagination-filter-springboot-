import { ProdutoFiltro } from './../model/produto-filtro';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Page } from '../model/page';
import { Produto } from '../model/produto';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  getProdutosListPaginado(page: any, size: any, produtoFiltro : ProdutoFiltro): Observable<Page>{
    return this.http.post<Page>(`http://localhost:8080/produto?page=${page}&size=${size}`, produtoFiltro);
  }

  getProdutosList(): Observable<any>{
    return this.http.get(`http://localhost:8080/produto/listaToda`);
  }

  // getClientesFiltrados(filtroCliente: FiltroCliente): Observable<Cliente[]>{
  //   return this.http.post<Cliente[]>(`${this.apiURL}/search`, filtroCliente);
  // }
}
