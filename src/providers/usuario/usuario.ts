import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UsuarioProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UsuarioProvider Provider');
  }

  getUsuarios() {
    // TODO: fazer uma requisicao http get ao json e retornar pra tela
    // this.http.get()
  }

  simulaDados() {
    let _items = [];

    for (let index = 0; index < 10; index++) {
      let element = {
        usuario: 'Usuário ' + index,
        texto: 'Bem-vindo ' + index,
        foto_banner: 'https://picsum.photos/400/300?random='+index,
        foto_usuario: 'https://ionicframework.com/docs/v3/dist/preview-app/www/assets/img/marty-avatar.png',
        qtd_curtidas: index + 2,
        qtd_comentarios: index + 20,
      };

      _items.push(element);
    }

    return _items;
  }

}
