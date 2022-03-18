import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/models/produto';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.scss']
})
export class EditarProdutoComponent implements OnInit {
  public formEditar : FormGroup;    /* ? significa que algo é facultativo */
  private indice : number =-1;


  constructor(private _router : Router,
    private _actRoute : ActivatedRoute,
    private _formBuilder : FormBuilder,
    private _produtosService : ProdutosService) { 
      this.formEditar = this._formBuilder.group({
        //nome : ["", [Validators.required, Validators.minLength(5)]],                  /* o segundo parametro sao os validadores, validators do angular forms, nome deve ter 5 caracteres */
        //preco : ["", [Validators.required]]               /* colocando o preco do produto que vai ser editado */
        marca : ["", [Validators.required]],
        Modelo : ["", [Validators.required]],
        Ano : ["", [Validators.required]],
        Versao : ["", [Validators.required]],
        Combustivel : ["", [Validators.required]],
        Cores : ["", [Validators.required]],
        Cambio : ["", [Validators.required]],
        Quilometragem : ["", [Validators.required]],
        Blindagem : ["", [Validators.required]],
        Preco : ["", [Validators.required]]
      });
    }

  ngOnInit(): void {
    this._actRoute.params.subscribe((parametros)=>{
      if(parametros["indice"]){
        this.indice= parametros["indice"];
        let produto = this._produtosService /* cria o produto */
        .getProduto(this.indice);
        this.formEditar = this._formBuilder.group({
          //nome : [produto.getNome(), [Validators.required, Validators.minLength(5)]],                  /* o segundo parametro sao os validadores, validators do angular forms, nome deve ter 5 caracteres */
          //preco : [produto.getPreco(), [Validators.required]]               /* colocando o preco do produto que vai ser editado */
          Marca : [produto.getMarca(), [Validators.required]],
          Modelo : [produto.getModelo(), [Validators.required]],
          Ano : [produto.getAno(), [Validators.required]],
          Versao : [produto.getVersao(), [Validators.required]],
          Combustivel : [produto.getCombustivel(), [Validators.required]],
          Cores : [produto.getCores(), [Validators.required]],
          Cambio : [produto.getCambio(), [Validators.required]],
          Quilometragem : [produto.getQuilometragem(), [Validators.required]],
          Blindagem : [produto.getBlindagem(), [Validators.required]],
          Preco : [produto.getPreco(), [Validators.required]]
        
        });
       }
    });
  }


  private validarFormulario(){
    for (let campos in this.formEditar.controls)
    {
      this.formEditar.controls[campos].markAllAsTouched();   /* todos os campos foram tocados */
    }
  }

  public submitForm()
  {
    this.validarFormulario();
    if(!this.formEditar.valid)  /* se tentar cadastrar produto vazio n faz nada */
    {
      return;
    }
    this.salvar();
  }


    public salvar() : void{

      let produto = new Produto(
        this.formEditar.controls["Marca"].value,
        this.formEditar.controls["Modelo"].value,
        this.formEditar.controls["Ano"].value,
        this.formEditar.controls["Versao"].value,
        this.formEditar.controls["Combustivel"].value,
        this.formEditar.controls["Cores"].value,
        this.formEditar.controls["Cambio"].value,
        this.formEditar.controls["Quilometragem"].value,
        this.formEditar.controls["Blindagem"].value,
        this.formEditar.controls["Preco"].value);
      if(this._produtosService.editarProduto(this.indice, produto)){
        alert("Produto Editado com Sucesso!");
        this._router.navigate(["/listaDeProdutos"]);
      }else{
        alert("Erro ao Salvar Produto!");
      }
    }
  }
