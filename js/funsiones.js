 class Celular{ 
	constructor(pedido){
		this.celular;
		this.celular = pedido.celular
		this.memoria = pedido.memoria
		this.colorCel = pedido.colorCel
		this.extMemoria = pedido.extMemoria

	}
	entregarCelular(){
		if(this.celular.toUpperCase() == "SAMSUNG"){
			
			this.celular = "Samsung"

		}else{
			
			this.celular = "Motorola"
		}

		if(this.colorCel != "" && this.extMemoria != "" ){
			
			return "Aqui tiene su " + this.celular + " con una memoria interna de " + this.memoria + " Gb, de color " + this.colorCel + " y con una memoria micro sd de " + this.extMemoria 
		
		}else if (this.colorCel != "" && this.extMemoria == "") {

			return "Aqui tiene su " + this.celular + " con una memoria interna de " + this.memoria + " Gb, de color " + " y con una memoria micro sd de " + this.colorCel
		
		}else{

			return "Aqui tiene su " + this.celular + " " + this.memoria + " memoria" 

		}
	}
}
let celular = new Celular({celular:"",memoria:"",colorCel:"",extMemoria:""})
celular["celular"] = prompt("¿Qué celular te quieres, Samsung o Motorola?")
celular.memoria = prompt("¿Lo querés con 64 Gb o 128 Gb?")
celular.colorCel = prompt("¿De que color le gustaria Negro o Azul?")
celular.extMemoria = prompt("¿Querés una memoria microSd de 128 Gb o 256 Gb?")

console.log(celular.entregarCelular()) 
