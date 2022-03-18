import { Injectable } from '@angular/core';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  private produtos : Produto[] = [];  /* vai cuidar de toda a regra de negocio de produto 4 operacoes basicas, CRUD*/

  constructor() {
    this.inserirProduto(new Produto("Chevrolet", "celta", "2006", "Life", "Gasolina", "Branco", "Manual", 85630, "Blindado", 25000));
    this.inserirProduto(new Produto("Volkswagen", "gol", "2010", "Rally", "Gasolina", "Cinza", "Automatico", 135600, "Blindado", 31000));
    this.inserirProduto(new Produto("Volkswagen", "Amarok", "2015", "Highline", "Diesel", "Branco", "Automatico", 256800, "Blindado", 289000));
    this.inserirProduto(new Produto("Chevrolet", "Onix", "2014", "LT", "Flex", "Azul", "Manual", 79000, "Nao", 52300));
    this.inserirProduto(new Produto("Renault", "Fluence", "2013", "Gt Line", "Gasolina", "Verde", "Automatico", 96000, "Blindado", 55100));
    this.inserirProduto(new Produto("Volkswagen", "Jetta", "2012", "TSI", "Gasolina", "Branco", "Automatico", 64030, "Nao", 76200));
   }

  public inserirProduto(produto : Produto) : boolean
  {
    this.produtos.push(produto);
    return true;

  }

  public getProdutos() : Produto[]
  {
    return this.produtos;
  }

  public getProduto(indice : number) : Produto   /*  para retornar apenas um produto especifico */
  {
    return this.produtos[indice];
  }

  public editarProduto(indice : number, produto : Produto) : boolean
  {
     this.produtos[indice] = produto;
    /* this.produtos[indice].setNome(produto.getNome());
    this.produtos[indice].setPreco(produto.getPreco()); */
    return true;

  } 

  public excluirProduto(indice : number) : boolean
  {
    this.produtos.splice(indice, 1);   /* apagando UMA posicao que esta no indice */
    return true;
  }
}
