import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Page } from '../model/page';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  getProdutosListPaginado(page: any, size: any): Observable<Page>{
    return this.http.get<Page>(`http://localhost:8080/produto?page=${page}&size=${size}`);
  }

  getProdutosList(): Observable<any>{
    return this.http.get(`http://localhost:8080/produto/listaToda`);
  }
}
