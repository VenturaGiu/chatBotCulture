import { Component, ViewChild, ElementRef } from '@angular/core';
import { Http } from '@angular/http';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonContent, null) content: IonContent;
  url = "http://localhost/chatBot/";
  events = [];
  
  msg;

  hist = [];

  constructor(private http:Http) {}

  //conexão webService
  ngOnInit(){
    this.http.get(this.url+"getEventos.php").subscribe(
      resolve => {
        var json = resolve['_body'];
        var vet = JSON.parse(json);
        this.events = vet;
      }
    );
  }

  enviar(){
    //add mensagem
    var obj = {msg: this.msg, who: 1};
    this.hist.push(obj);
    
    var perg = obj.msg.toLowerCase();

    //Cria Resposta
  
    var resp = {msg: '',who: 'bot', card:0, title:''};

    if(perg.includes("eventos") && perg.includes ("evento") && perg.includes("mais eventos")){
      resp.msg = "Nossos eventos estão disponiveis na area de eventos";
      resp.who = '2';
    }

    if(perg.includes("proximo evento")){
      resp.card = 1;
      resp.who = '2';
      resp.title = this.events[0]['nomeEventoBot'];
      resp.msg = this.events[0]['descricaoEventoBot'];
    }

    if(perg.includes("tudo bem?")){
      var b = Math.floor(Math.random() * 6)
      switch(b){
        case 1: 
          resp.msg = "Tudo ótimo e com você?";
          break;
        case 2: 
          resp.msg = "Tudo bem e você?";
          break;
        case 3: 
          resp.msg = "Melhor agora e você?";
          break;
        case 4: 
          resp.msg = "Tudo sim e com você?";
          break;
        case 5: 
          resp.msg = "To bem, e você?";
          break;
      }
      resp.who = '2';
    }

    if(perg.includes("obg") || perg.includes("obrigado") || perg.includes("obrigada") || perg.includes("brigado") || perg.includes("brigada") || perg.includes("valeu") || perg.includes("é nois")){
      var b = Math.floor(Math.random() * 6)
      switch(b){
        case 1: 
          resp.msg = "Que isso!";
          break;
        case 2: 
          resp.msg = "Imagina!";
          break;
        case 3: 
          resp.msg = "De nada!";
          break;
        case 4: 
          resp.msg = "É nois parcero!";
          break;
        case 5: 
          resp.msg = "Nada po.";
          break;
      }
      resp.who = '2';
    }

    if(perg.includes("tudo bem tambem")){
      var b = Math.floor(Math.random() * 3)
      switch(b){
        case 1: 
          resp.msg = "Que ótimo!";
          break;
        case 2: 
          resp.msg = "Quem bom!";
          break;
      }
      resp.who = '2';
    }

    if(perg.includes("eae")){
      resp.msg = "Fala otaria";
      resp.who = '2';
    }

    if(perg.includes("erico")){
      resp.msg = "Sdds demais mano";
      resp.who = '2';
    }
    

    if(perg.includes("chegar")){
      resp.msg = "Todos os eventos possuem rotas usando o tranporte publico em sua pagina ;)";
      resp.who = '2';
    }

    if(perg == "oi"){
        var a = Math.floor(Math.random() * 9);
        switch(a){
          case 1:
            resp.msg = "Oi";
            break;
          case 2:
            resp.msg = "Oiiiiii";
            break;
          case 3:
            resp.msg = "Tudo bem?";
            break;
          case 4:
            resp.msg = "Oi, eu sou a Shirley";
            break;
          case 5:
            resp.msg = "Ola";
            break;
          case 6:
            resp.msg = "Oi, tudo bem?";
            break;
          case 7:
            resp.msg = "Eae quebrada";
            break;
          case 8:
            resp.msg = "Tranquilidade familia";
            break;
        }

        resp.who = '2';
    }

    this.hist.push(resp);

    //esvaziar input 
    var input = document.getElementById("inputPergunta");
    input['value'] = "";    
  }
  
  scroll(){
      this.content.scrollToBottom(200);
      console.log("A");
  }
  
}
