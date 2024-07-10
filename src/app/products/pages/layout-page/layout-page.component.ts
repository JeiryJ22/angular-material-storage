import { Component } from '@angular/core';
import { url } from 'inspector';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {

  public menuItems = [
    {label: "Listado de productos", icon: "label", url: "./list"},
    {label: "Agregar producto", icon: "add", url: "./new-product"},
    {label: "Buscar producto", icon: "search", url: "./search"},
  ]

}
