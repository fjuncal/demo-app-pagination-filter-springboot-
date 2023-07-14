import { Component, OnInit } from '@angular/core';
import { ProdutoService } from './service/produto.service';
import { Produto } from './model/produto';
import { Page } from './model/page';
import { log } from 'console';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

   produtos: Array<Produto> = [];
   page ?: Page;

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
  }

  teste(page: any, size: any){
    this.produtoService.getProdutosListPaginado(page, size).subscribe(res => {
        this.page = res;
        this.produtos = this.page.content;
    })
  //   this.produtoService.getProdutosList().subscribe(res => {
  //     this.produtos = res;
  // })
    console.log("oi")
  }
  changePage(event: any){
    this.teste(event.page, event.size);
  }

}
