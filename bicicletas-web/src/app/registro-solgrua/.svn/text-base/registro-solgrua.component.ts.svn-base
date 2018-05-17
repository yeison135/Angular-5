import { Component, OnInit } from '@angular/core';

import { ParametricasService } from '../services/parametricas.service'


@Component({
  selector: 'app-registro-solgrua',
  templateUrl: './registro-solgrua.component.html',
  styleUrls: ['./registro-solgrua.component.css']
})

export class RegistroSolgruaComponent implements OnInit {

  tiposTraslado;
  constructor(private parametricasService: ParametricasService) { }

  getTiposTraslado(): void {
    this.parametricasService.getTiposTraslado()
      .subscribe(traslados => this.tiposTraslado = traslados.respuesta != undefined ? 
         traslados.respuesta : []);
  }

  ngOnInit() {
    this.getTiposTraslado();
  }

}
