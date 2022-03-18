export class Produto {
    private _Marca : string; /* private para encapsulamento */
    private _Modelo : string;
    private _Ano : string;
    private _Versao : string;
    private _Combustivel : string;
    private _Cores : string;
    private _Cambio : string;
    private _Quilometragem : number;
    private _Blindagem : string;
    private _Preco : number;


    constructor(Marca : string, Modelo : string, Ano : string, Versao : string, Combustivel : string,
    Cores : string, Cambio : string, Quilometragem : number, Blindagem : string, Preco : number)
    {
        this._Marca=Marca;            /* Constructor - pegando nome de cima */
        this._Modelo=Modelo;
        this._Ano=Ano;
        this._Versao=Versao;
        this._Combustivel=Combustivel;
        this._Cores=Cores;
        this._Cambio=Cambio;
        this._Quilometragem=Quilometragem;
        this._Blindagem=Blindagem;
        this._Preco=Preco;
    }

    public getMarca() : string{
        return this._Marca;
    }

    public setMarca(Marca : string) : void{
        this._Marca = Marca;
    }


    public getModelo() : string{
        return this._Modelo;
    }

    public setModelo(Modelo : string) : void{
        this._Modelo = Modelo;
    }

    public getAno() : string{
        return this._Ano;
    }

    public setAno(Ano : string) : void{
        this._Ano = Ano;
    }

    public getVersao() : string{
        return this._Versao;
    }

    public setVersao(Versao : string) : void{
        this._Versao = Versao;
    }

    public getCombustivel() : string{
        return this._Combustivel;
    }

    public setCombustivel(Combustivel : string) : void{
        this._Combustivel = Combustivel;
    }

    public getCores() : string{
        return this._Cores;
    }

    public setCores(Cores : string) : void{
        this._Cores = Cores;
    }

    public getCambio() : string{
        return this._Cambio;
    }

    public setCambio(Cambio : string) : void{
        this._Cambio = Cambio;
    }

    public getQuilometragem() : number{
        return this._Quilometragem;
    }

    public setQuilometragem(Quilometragem : number) : void{
        this._Quilometragem = Quilometragem;
    }

    public getBlindagem() : string{
        return this._Blindagem;
    }

    public setBlindagem(Blindagem : string) : void{
        this._Blindagem = Blindagem;
    }

    public getPreco() : number{
        return this._Preco;
    }

    public setPreco(Preco : number) : void{
        this._Preco = Preco;
    }

}
