interface  NewBolo {
  tamanho   : number;
  sabor     : string;
  formato   : string;
  recheio   : string;
  cobertura : string;
  valor     : number;

}
  
class Bolo {
    private tamanho   : number;
    private sabor     : string;
    private formato   : string;
    private recheio   : string;
    private cobertura : string;
    private valor     : number;
    private qtdFatias : number = 0;

    public get fatias (){
        return this.qtdFatias
    }
    

    constructor ({ tamanho , sabor , formato , recheio , cobertura , valor}: NewBolo) {

    this.cobertura =   cobertura ;
    this.formato   =   formato   ;
    this.recheio   =   recheio   ; 
    this.sabor     =   sabor     ;
    this.tamanho   =   tamanho   ;
    this.valor     =   valor     ;

    }

    public fatiar (qtdFatias: number ){

    this.qtdFatias = qtdFatias ;

  }

    public tirarFatia (){
        
    this.qtdFatias--;
    
 }
}
export  { Bolo } ; 