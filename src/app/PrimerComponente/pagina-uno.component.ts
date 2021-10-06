import { Component, OnInit } from "@angular/core";
import {RouterExtensions} from "@nativescript/angular";

@Component({
  moduleId: module.id,
  selector: "pagina-uno",
  templateUrl: 'pagina-uno.component.html'
})

export class paginaUnoComponent implements OnInit{
  constructor(
      private router: RouterExtensions
  ) { }

  ngOnInit() { }

  public onNavigate(){
    this.router.navigate(['/pagina-dos'])
  }
}
